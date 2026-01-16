"use client";

import { motion } from "framer-motion";
import { Headphones, CreditCard, PoundSterling, ClipboardList, Users2, Gauge, CheckCircle2 } from "lucide-react";

const expertiseData = [
    {
        icon: <Headphones className="w-8 h-8" />,
        title: "24/7 Control Room",
        description: "Expert support staff available around the clock to coordinate your recovery immediately.",
        color: "bg-blue-500"
    },
    {
        icon: <CreditCard className="w-8 h-8" />,
        title: "Flexible Payments",
        description: "We accept all major card payments on-site for a seamless and hassle-free experience.",
        color: "bg-brand-primary"
    },
    {
        icon: <PoundSterling className="w-8 h-8" />,
        title: "Transparent Pricing",
        description: "Competitive rates with no hidden fees. Get a clear quote before we dispatch help.",
        color: "bg-emerald-500"
    },
    {
        icon: <ClipboardList className="w-8 h-8" />,
        title: "Full Documentation",
        description: "Invoices and receipts provided for every service, perfect for insurance or business claims.",
        color: "bg-purple-500"
    },
    {
        icon: <Users2 className="w-8 h-8" />,
        title: "Nationwide Network",
        description: "Access to over 2,000 professional drivers strategically located across the UK.",
        color: "bg-indigo-500"
    },
    {
        icon: <Gauge className="w-8 h-8" />,
        title: "Rapid Response",
        description: "Strategic positioning allows us to maintain an industry-leading 30-minute average response.",
        color: "bg-red-500"
    }
];

export default function RecoveryExpertise() {
    return (
        <section className="py-12 bg-brand-bg-light relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-secondary/5 rounded-full blur-[100px] -ml-36 -mb-36" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-sm mb-6"
                    >
                        <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                        <span>Premium Recovery Standards</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-brand-bg-dark mb-6"
                    >
                        Unrivaled <span className="gold-text-gradient">Expertise</span> in Every Recovery
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        We've set the benchmark for roadside assistance in the UK. Discover why thousands trust us every month.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                y: -10,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="relative group p-8 rounded-[40px] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] transition-all duration-500 overflow-hidden"
                        >
                            {/* Hover Background Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Decorative Corner Line */}
                            <div className="absolute top-0 left-0 w-2 h-0 bg-brand-primary group-hover:h-12 transition-all duration-500 rounded-br-lg" />
                            <div className="absolute top-0 left-0 h-2 w-0 bg-brand-primary group-hover:w-12 transition-all duration-500 rounded-br-lg" />

                            <div className={`relative z-10 w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center mb-8 shadow-xl transform group-hover:scale-110 group-hover:rotate-[8deg] transition-all duration-500`}>
                                {item.icon}
                            </div>

                            <h3 className="relative z-10 text-2xl font-black text-brand-bg-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
                                {item.title}
                            </h3>

                            <p className="relative z-10 text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                                {item.description}
                            </p>

                            <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-brand-primary/10 flex items-center justify-center text-brand-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
