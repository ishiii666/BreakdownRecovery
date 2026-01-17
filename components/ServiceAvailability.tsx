"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, CreditCard, Shield, MapPin, Loader2, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import { ALL_UK_OUTCODES, VALID_TOWNS } from "@/lib/postcodeData";

export default function ServiceAvailability() {
    const [postcode, setPostcode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleCheckCoverage = () => {
        setError("");
        const input = postcode.trim().toUpperCase();

        if (!input) {
            setError("Please enter a postcode or town");
            return;
        }

        // UK Postcode regex for outcodes (e.g., BD1, W1A, SW11)
        const outcodeRegex = /^[A-Z]{1,2}[0-9][A-Z0-9]?/;
        const match = input.match(outcodeRegex);
        const outcode = match ? match[0] : "";

        // Check for purely numeric inputs (like the user's Lucknow example)
        if (/^\d+$/.test(input) && !ALL_UK_OUTCODES.includes(input)) {
            setError("Invalid postcode format. Please use a UK postcode.");
            return;
        }

        setIsLoading(true);

        // Simulate network/search delay
        setTimeout(() => {
            const isValidOutcode = ALL_UK_OUTCODES.includes(outcode);
            // Check against specific whitelist of towns
            const isValidTown = VALID_TOWNS.includes(input);

            if (isValidOutcode || isValidTown) {
                router.push("/availability");
            } else {
                setIsLoading(false);
                setError("Area not recognized. Please check or try a nearby city.");
            }
        }, 3000);
    };

    return (
        <section className="py-12 bg-brand-bg-light relative overflow-hidden">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-bg-dark/95 backdrop-blur-xl"
                    >
                        <div className="text-center space-y-10">
                            <div className="relative flex items-center justify-center">
                                {/* Outer Glow Ring */}
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.6, 0.3]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute w-40 h-40 rounded-full bg-brand-primary/20 blur-xl"
                                />
                                {/* Main Scanning Ring */}
                                <div className="relative w-32 h-32">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border-4 border-white/5 border-t-brand-primary shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                                    />
                                    <div className="absolute inset-4 rounded-full border border-white/10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-white text-3xl font-black italic tracking-tight"
                                >
                                    Scanning Network...
                                </motion.h3>
                                <p className="text-white/40 font-bold text-xs uppercase tracking-[0.5em] animate-pulse">Triangulating Fleet Position</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                            Find Your Closest <span className="gold-text-gradient italic pr-4 inline-block">Recovery Unit</span>
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
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within/input:text-brand-primary transition-colors">
                                    <MapPin className="w-full h-full" />
                                </div>
                                <input
                                    type="text"
                                    value={postcode}
                                    onChange={(e) => setPostcode(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleCheckCoverage()}
                                    placeholder="Enter postcode or closest town..."
                                    className="w-full bg-slate-50 border-2 border-transparent rounded-[28px] py-5 md:py-6 pl-16 pr-8 text-lg font-bold text-brand-bg-dark placeholder:text-slate-300 focus:outline-none focus:bg-white focus:border-brand-primary/10 transition-all duration-300"
                                />
                            </div>
                            <button
                                onClick={handleCheckCoverage}
                                className="bg-brand-bg-dark text-white px-10 py-5 md:py-0 rounded-[28px] font-black text-lg flex items-center justify-center gap-3 hover:bg-brand-primary transition-all duration-500 shadow-xl hover:shadow-brand-primary/30 group/btn"
                            >
                                <span>Check Coverage</span>
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Error Message - Moved into flow to prevent overlap */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-6 flex items-center justify-center gap-2 text-red-500 font-bold text-sm bg-red-50/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-red-100 shadow-sm mx-auto w-fit z-10 relative"
                                >
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <span>{error}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Highlights - Increased spacing */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 mt-12">
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


