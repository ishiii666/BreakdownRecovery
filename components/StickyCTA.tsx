"use client";

import { Phone, MessageCircle } from 'lucide-react';
import { siteDetails } from '@/lib/siteDetails';
import { useSite } from '@/context/SiteContext';

export default function StickyCTA() {
    const { details } = useSite();
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 p-3 pb-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="flex gap-3">
                <a
                    href={`tel:${details.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                    <Phone className="w-5 h-5 fill-current" />
                    Call Now
                </a>
                <a
                    href={`https://wa.me/${details.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    WhatsApp
                </a>
            </div>
        </div>
    );
}
