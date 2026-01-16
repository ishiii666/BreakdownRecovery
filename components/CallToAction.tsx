"use client";

import { motion } from "framer-motion";
import { siteDetails } from "@/lib/siteDetails";

export default function CallToAction() {
    return (
        <section className="pb-24 pt-4 bg-brand-bg-light relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-effect-dark p-8 md:p-12 rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-8 text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px]" />

                    <div className="relative z-10 lg:text-left text-center">
                        <h3 className="text-3xl font-black mb-2 font-premium">Need Help Immediately?</h3>
                        <p className="text-white/70 font-medium font-premium tracking-wide">Our dispatchers are waiting for your call.</p>
                    </div>

                    <div className="relative z-10 flex flex-wrap justify-center gap-10">
                        <div className="text-center group">
                            <p className="text-4xl font-black text-brand-primary font-premium group-hover:scale-110 transition-transform">30m</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mt-1">Avg Response</p>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden sm:block" />
                        <div className="text-center group">
                            <p className="text-4xl font-black text-white font-premium group-hover:scale-110 transition-transform">2k+</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mt-1">Experts</p>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden sm:block" />
                        <div className="text-center group">
                            <p className="text-4xl font-black text-white font-premium group-hover:scale-110 transition-transform">24/7</p>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mt-1">Availability</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
