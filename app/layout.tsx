import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { siteDetails } from '@/lib/siteDetails';

import FloatingWidgets from '@/components/FloatingWidgets';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
});

export const metadata: Metadata = {
    title: siteDetails.meta.title,
    description: siteDetails.meta.description,
};

export const dynamic = 'force-dynamic';

import { SiteProvider } from '@/context/SiteContext';
import { supabase } from '@/lib/supabase';

async function getSiteConfig() {
    try {
        console.log('Fetching site config on server...');
        const { data, error } = await supabase
            .from('site_config')
            .select('*')
            .eq('id', 1)
            .single();

        if (error) {
            console.error('Supabase server-side error:', error.message);
            return null;
        }

        if (data) {
            console.log('Successfully fetched site config on server:', data.business_name);
            return {
                businessName: data.business_name,
                phone: data.phone,
                whatsapp: data.whatsapp,
                email: data.email,
                serviceArea: data.service_area
            };
        }
    } catch (e) {
        console.error('Fatal error fetching site config on server:', e);
    }
    return null;
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const initialData = await getSiteConfig();

    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <body className={`${inter.className} antialiased`}>
                <SiteProvider initialData={initialData as any}>
                    {children}
                    <FloatingWidgets />
                </SiteProvider>
            </body>
        </html>
    );
}

