"use client";

import { motion } from "framer-motion";
import { siteDetails } from "@/lib/siteDetails";
import { useSite } from "@/context/SiteContext";
import { Phone, Clock, AlertTriangle, Zap } from "lucide-react";

export default function UrgencyMarquee() {
    const { details } = useSite();
    const items = [
        { icon: <Clock className="w-5 h-5" />, text: "30-MINUTE ARRIVAL TIME" },
        { icon: <Zap className="w-5 h-5" />, text: "24/7 EMERGENCY DISPATCH" },
        { icon: <Phone className="w-5 h-5" />, text: `CALL NOW: ${details.phone}` },
        { icon: <AlertTriangle className="w-5 h-5" />, text: "NATIONWIDE RECOVERY" }
    ];

    return (
        <div className="bg-brand-bg-dark border-y border-white/5 py-6 overflow-hidden relative">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    className="flex items-center gap-12"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            {items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6">
                                    <div className="flex items-center gap-3 text-brand-primary">
                                        {item.icon}
                                        <span className="text-lg font-black uppercase tracking-[0.2em]">{item.text}</span>
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Side gradients to soften transition */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-bg-dark to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-bg-dark to-transparent z-10" />
        </div>
    );
}
