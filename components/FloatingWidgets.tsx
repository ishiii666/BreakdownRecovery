"use client";

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { siteDetails } from '@/lib/siteDetails';

export default function FloatingWidgets() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[200]">
            {/* Bottom-Left: Live Support */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute bottom-6 left-4 md:left-6 pointer-events-auto"
            >
                <a
                    href={`tel:${siteDetails.phone}`}
                    className="group relative flex items-center gap-2 bg-[#FF0000] text-white px-3 md:px-4 py-2 rounded-xl shadow-[0_8px_32px_rgba(255,0,0,0.3)] hover:scale-105 active:scale-95 transition-all font-black text-[10px] md:text-xs uppercase tracking-wider overflow-hidden"
                >
                    {/* Pulsing Background Effect */}
                    <div className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="bg-white rounded-full p-1 shrink-0 animate-bounce">
                        <Phone className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#FF0000] fill-[#FF0000]" />
                    </div>
                    <span className="relative">Live Support 24/7</span>

                    {/* External Glow */}
                    <div className="absolute -inset-1 bg-[#FF0000]/20 blur-md rounded-xl animate-pulse -z-10" />
                </a>
            </motion.div>

            {/* Bottom-Right: WhatsApp Business */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute bottom-6 right-4 md:right-6 pointer-events-auto"
            >
                <a
                    href={`https://wa.me/${siteDetails.whatsapp.replace(/ /g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-90 transition-all group border-4 border-white/20 overflow-visible"
                    title="WhatsApp Support"
                >
                    {/* Floating Pulse Rings */}
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
                    <div className="absolute -inset-2 rounded-full border border-[#25D366]/30 animate-pulse" />

                    <div className="relative flex items-center justify-center z-10 transition-transform group-hover:rotate-12">
                        <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
                    </div>
                </a>
            </motion.div>
        </div>
    );
}
