"use server";

import { Resend } from 'resend';
import { EmergencyEmail } from '@/components/email/EmergencyEmail';
import React from 'react';
import { render } from '@react-email/render';

import { siteDetails } from '@/lib/siteDetails';
import { supabase } from '@/lib/supabase';

export async function sendEmergencyEmail(type: 'breakdown' | 'tyres' | 'jumpstart', data: any) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey || apiKey === "re_your_api_key_here") {
        console.error("[Email Action] RESEND_API_KEY is missing or invalid");
        return {
            success: false,
            error: "Email service not configured (RESEND_API_KEY missing)"
        };
    }

    const resend = new Resend(apiKey);

    try {
        console.log(`[Email Action] Preparing to send ${type} request...`);

        // Safely fetch email from DB with fallback
        let recipientEmail = siteDetails.email;
        try {
            if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
                const { data: config, error: configError } = await supabase
                    .from('site_config')
                    .select('email')
                    .eq('id', 1)
                    .single();

                if (config?.email) {
                    recipientEmail = config.email.trim();
                    console.log(`[Email Action] Using recipient from DB: ${recipientEmail}`);
                }
            } else {
                console.warn("[Email Action] Supabase environment variables missing, using fallback email");
            }
        } catch (dbError) {
            console.warn("[Email Action] Database fetch failed, using fallback:", dbError);
        }

        console.log(`[Email Action] Sending to: ${recipientEmail}`);

        // Render HTML
        let html;
        try {
            html = await render(React.createElement(EmergencyEmail, { type, data }));
        } catch (renderError: any) {
            console.error("[Email Action] Template render error:", renderError);
            throw new Error(`Email rendering failed: ${renderError.message}`);
        }

        const { data: resData, error: resendError } = await resend.emails.send({
            from: 'Rapid Rescue <onboarding@resend.dev>',
            to: [recipientEmail],
            subject: `🚨 EMERGENCY: ${type.toUpperCase()} Request - ${data.registration || 'No Reg'}`,
            html: html,
        });

        if (resendError) {
            console.error(`[Email Action] RESEND ERROR:`, JSON.stringify(resendError, null, 2));
            return { success: false, error: resendError.message || "Failed to send email" };
        }

        // Log to database (optional notification logging)
        try {
            if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
                await supabase
                    .from('dispatch_logs')
                    .insert([{
                        type: type,
                        customer_name: data.registration || 'Unknown',
                        customer_phone: data.phone || 'N/A',
                        data: data
                    }]);
                console.log("[Email Action] Logged to DB");
            }
        } catch (dbError) {
            console.warn("[Email Action] DB Logging failed (non-critical):", dbError);
        }

        console.log(`[Email Action] EMAIL SENT SUCCESSFULLY! ID:`, resData?.id);
        return { success: true, data: resData };
    } catch (error: any) {
        console.error(`[Email Action] CRITICAL ERROR:`, error);
        return { success: false, error: error.message || "An unexpected error occurred during email dispatch" };
    }
}
