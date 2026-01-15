import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteDetails } from '@/lib/siteDetails';

import FloatingWidgets from '@/components/FloatingWidgets';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: siteDetails.meta.title,
    description: siteDetails.meta.description,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <FloatingWidgets />
            </body>
        </html>
    );
}
