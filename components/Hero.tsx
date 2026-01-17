"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Clock, Award, Star } from "lucide-react";
import { siteDetails } from "@/lib/siteDetails";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-52 md:pt-40 pb-20 overflow-hidden bg-brand-bg-light">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-sm shadow-sm"
                        >
                            <Star className="w-4 h-4 fill-brand-primary" />
                            <span className="uppercase tracking-widest text-[10px] font-black italic">UK's Leading Recovery Firm</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-brand-bg-dark leading-[1.05]">
                                Fast & Professional <br />
                                <span className="gold-text-gradient italic">Vehicle Recovery</span>
                            </h1>
                            <p className="mt-6 md:mt-8 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                                Don't stay stranded. <span className="text-brand-primary font-black underline decoration-brand-primary/30 underline-offset-8">Rapid Rescue</span> arrives in an average of 30 minutes. Available 24/7.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 pt-4"
                        >
                            <a
                                href={`tel:${siteDetails.phone}`}
                                className="group relative inline-flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-brand-bg-dark text-white rounded-[24px] font-black text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20 overflow-hidden"
                            >
                                <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />
                                <span>Call Now: {siteDetails.phone}</span>
                            </a>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 border-2 border-slate-200 text-slate-900 rounded-[24px] font-black text-lg md:text-xl hover:border-brand-primary hover:bg-white hover:shadow-xl transition-all"
                            >
                                <span>Learn More</span>
                                <ArrowRight className="w-5 h-5 text-brand-primary" />
                            </Link>
                        </motion.div>

                        {/* Social Proof / Stats */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center gap-10 pt-8 border-t border-slate-100"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-primary flex items-center justify-center text-xs text-white font-black shadow-lg">
                                    5K+
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="font-black text-brand-bg-dark text-lg leading-none">Trusted by 5,000+ Customers</p>
                                <p className="text-slate-500 font-bold text-sm">4.9/5 Average Rating (Verified Google Reviews)</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative z-10 glass-effect p-5 rounded-[56px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern Tow Truck"
                                className="rounded-[40px] w-full aspect-[4/5] object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000 ease-out scale-105 group-hover:scale-110"
                            />

                            {/* Floating Overlay Cards */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-12 right-6 glass-effect-dark text-white p-5 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-xl z-30"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-white/50 uppercase tracking-widest leading-none mb-1">Live Arrival</p>
                                        <p className="text-xl font-black leading-tight">30 Mins</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-12 left-6 glass-effect p-6 rounded-3xl shadow-2xl border border-white backdrop-blur-xl z-30"
                            >
                                <div className="flex items-center gap-4 text-brand-bg-dark">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md border border-slate-100">
                                        <ShieldCheck className="w-6 h-6 text-brand-secondary" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Service Status</p>
                                        <p className="text-xl font-black leading-tight">Nationwide</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border-4 border-slate-100/50 rounded-[56px] translate-x-4 translate-y-4" />
                        <div className="absolute -z-20 -top-20 -left-20 w-80 h-80 bg-brand-primary/20 rounded-full blur-[120px]" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

