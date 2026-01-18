
"use server";

import { Resend } from 'resend';
import { EmergencyEmail } from '@/components/email/EmergencyEmail';
import React from 'react';

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
        // Fetch the latest email from DB
        const { data: config } = await supabase
            .from('site_config')
            .select('email')
            .eq('id', 1)
            .single();

        const recipientEmail = config?.email || siteDetails.email;

        const { data: resData, error } = await resend.emails.send({
            from: 'Rapid Rescue <onboarding@resend.dev>',
            to: [recipientEmail],
            subject: `🚨 EMERGENCY: ${type.toUpperCase()} Request - ${data.registration || 'No Reg'}`,
            react: React.createElement(EmergencyEmail, { type, data }),
        });

        if (error) {
            return { success: false, error: error.message || "Failed to send email" };
        }

        return { success: true, data: resData };
    } catch (error: any) {
        return { success: false, error: error.message || "An unexpected error occurred" };
    }
}
