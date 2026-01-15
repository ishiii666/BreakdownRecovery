'use client';

import { siteDetails } from '@/lib/siteDetails';
import { Phone, Clock } from 'lucide-react';

export default function UrgencyMarquee() {
    return (
        <div className="bg-[#0088CC] overflow-hidden py-4 border-y border-white/10">
            <div className="whitespace-nowrap animate-marquee flex items-center gap-12">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center gap-10">
                        <div className="flex items-center gap-3">
                            <Clock className="w-6 h-6 fill-white text-white animate-pulse" />
                            <span className="text-xl font-black uppercase tracking-tight text-white">Arrival From 30 Minutes</span>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                        <div className="flex items-center gap-3">
                            <Phone className="w-6 h-6 fill-white text-white animate-pulse" />
                            <span className="text-xl font-black uppercase tracking-tight text-white">Call: {siteDetails.phone}</span>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: inline-flex;
                    animation: marquee 60s linear infinite;
                    min-width: 200%;
                }
            `}</style>
        </div>
    );
}
