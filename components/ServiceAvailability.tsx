"use client";

import { motion } from "framer-motion";
import { Search, ChevronRight, CreditCard, Shield } from "lucide-react";
import Link from "next/link";

export default function ServiceAvailability() {
    return (
        <section className="py-12 bg-brand-bg-light relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-10 left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center justify-center gap-2 text-brand-primary font-black uppercase tracking-[0.3em] text-[10px] mb-3 bg-brand-primary/5 px-4 py-1.5 rounded-full border border-brand-primary/10"
                        >
                            <Search className="w-3.5 h-3.5" />
                            <span>Real-Time Deployment</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black text-brand-bg-dark font-premium mb-3 leading-tight">
                            Find Your Closest <span className="gold-text-gradient italic">Recovery Unit</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                            Enter your location for our fleet's live status. Instant dispatch guaranteed.
                        </p>
                    </div>

                    {/* Search Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group mb-8"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-[40px] blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative glass-effect p-2 md:p-3 rounded-[36px] shadow-2xl flex flex-col md:flex-row gap-3">
                            <div className="flex-1 relative group/input">
                                <MapPinIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within/input:text-brand-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Enter postcode or closest town..."
                                    className="w-full bg-slate-50 border-2 border-transparent rounded-[28px] py-5 md:py-6 pl-16 pr-8 text-lg font-bold text-brand-bg-dark placeholder:text-slate-300 focus:outline-none focus:bg-white focus:border-brand-primary/10 transition-all duration-300"
                                />
                            </div>
                            <Link
                                href="/availability"
                                className="bg-brand-bg-dark text-white px-10 py-5 md:py-0 rounded-[28px] font-black text-lg flex items-center justify-center gap-3 hover:bg-brand-primary transition-all duration-500 shadow-xl hover:shadow-brand-primary/30 group/btn"
                            >
                                <span>Check Coverage</span>
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {[
                            { icon: <CreditCard className="w-6 h-6" />, label: "Instant Payment", sub: "Secure card processing" },
                            { icon: <Shield className="w-6 h-6" />, label: "Fully Insured", sub: "Nationwide piece of mind" },
                            { icon: <Search className="w-6 h-6" />, label: "No Signup", sub: "Immediate help required" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    rotateX: 5,
                                    rotateY: -2,
                                }}
                                className="flex items-center gap-5 p-6 rounded-[32px] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-pointer group"
                                style={{ perspective: "1000px" }}
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="font-black text-brand-bg-dark leading-none mb-1.5 text-base">{item.label}</p>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{item.sub}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trusted Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-effect-dark border-white/5 p-8 rounded-[40px] text-center"
                    >
                        <p className="text-[9px] font-black text-white/40 uppercase tracking-[0.5em] mb-8">
                            We Work Directly with Major Recovery Networks
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                            {/* AA Logo */}
                            <div className="flex flex-col items-center group cursor-default">
                                <span className="text-3xl font-black italic tracking-tighter text-white group-hover:text-amber-400 transition-colors">AA</span>
                                <span className="text-[7px] font-black uppercase tracking-widest text-amber-500/80">Approved</span>
                            </div>

                            {/* GreenFlag Logo */}
                            <div className="text-2xl font-black italic tracking-tighter text-emerald-500 group cursor-default hover:scale-110 transition-transform duration-500">
                                Green<span className="text-white group-hover:text-emerald-400">Flag</span>
                            </div>

                            {/* REACT Logo */}
                            <div className="text-3xl font-black italic tracking-tighter text-blue-500 group cursor-default hover:scale-110 transition-transform duration-500">
                                REACT<span className="text-red-500 font-black">.</span>
                            </div>

                            {/* RAC Logo */}
                            <div className="text-2xl font-black italic tracking-tighter text-orange-500 hover:scale-110 transition-transform duration-500 cursor-default">
                                RAC
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}
