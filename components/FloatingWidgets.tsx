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
                    className="relative w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group border border-white/20"
                    title="WhatsApp Support"
                >
                    {/* Floating Pulse Rings */}
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
                    <div className="absolute -inset-2 rounded-full border border-[#25D366]/30 animate-pulse" />

                    <div className="relative flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110">
                        <svg
                            viewBox="0 0 448 512"
                            className="w-7 h-7 md:w-8 md:h-8 fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-117zm-157 338.7c-33.2 0-65.7-8.9-93.9-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.4-.3-8.3 2.4-11.1 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                    </div>
                </a>
            </motion.div>
        </div>
    );
}
