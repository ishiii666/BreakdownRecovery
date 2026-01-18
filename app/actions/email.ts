"use server";

import { Resend } from 'resend';
import { EmergencyEmail } from '@/components/email/EmergencyEmail';
import React from 'react';
import { render } from '@react-email/render';

import { siteDetails } from '@/lib/siteDetails';
import { supabase } from '@/lib/supabase';

export async function sendEmergencyEmail(type: 'breakdown' | 'tyres' | 'jumpstart', data: any) {
    const apiKey = process.env.RESEND_API_KEY;
    const resend = new Resend(apiKey);

    if (!apiKey || apiKey === "re_your_api_key_here") {
        return {
            success: false,
            error: "RESEND_API_KEY is missing or not configured in .env.local"
        };
    }

    try {
        console.log(`[Email Action] Preparing to send ${type} request...`);
        console.log(`[Email Action] API Key status: ${apiKey ? 'Present' : 'Missing'}`);

        // Fetch the latest email from DB
        const { data: config } = await supabase
            .from('site_config')
            .select('email')
            .eq('id', 1)
            .single();

        const recipientEmail = (config?.email || siteDetails.email).trim();
        console.log(`[Email Action] Fetching recipient from DB: ${config?.email ? 'Success' : 'Fallback used'}`);
        console.log(`[Email Action] Sending to: ${recipientEmail}`);

        // Use the official @react-email renderer which is compatible with Resend
        const html = await render(React.createElement(EmergencyEmail, { type, data }));

        const { data: resData, error } = await resend.emails.send({
            from: 'Rapid Rescue <onboarding@resend.dev>',
            to: [recipientEmail],
            subject: `🚨 EMERGENCY: ${type.toUpperCase()} Request - ${data.registration || 'No Reg'}`,
            html: html,
        });

        if (error) {
            console.error(`[Email Action] RESEND ERROR:`, JSON.stringify(error, null, 2));
            return { success: false, error: error.message || "Failed to send email" };
        }

        // Log to database for the admin panel notifications
        try {
            await supabase
                .from('dispatch_logs')
                .insert([{
                    type: type,
                    customer_name: data.registration || 'Unknown',
                    customer_phone: data.phone || 'N/A',
                    data: data
                }]);
        } catch (dbError) {
            console.warn("[Email Action] DB Logging failed (non-critical):", dbError);
        }

        console.log(`[Email Action] EMAIL SENT SUCCESSFULLY! ID:`, resData?.id);
        return { success: true, data: resData };
    } catch (error: any) {
        console.error(`[Email Action] CRITICAL ERROR:`, error);
        return { success: false, error: error.message || "An unexpected error occurred" };
    }
}
