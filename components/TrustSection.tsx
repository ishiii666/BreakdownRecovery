"use client";

import { motion } from "framer-motion";
import { Clock, MousePointer2, ShieldCheck, Heart, Award, Star, Phone } from "lucide-react";
import { siteDetails } from "@/lib/siteDetails";
import { useSite } from "@/context/SiteContext";

const trustItems = [
    {
        icon: <Clock className="w-8 h-8" />,
        title: "Always Active",
        desc: "Available 24 hours a day, 365 days a year for emergency assistance.",
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Certified Experts",
        desc: "Highly experienced technicians with industry-standard certifications.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Fully Insured",
        desc: "Safe transportation for you and your vehicle with full coverage insurance.",
    }
];

export default function TrustSection() {
    const { details } = useSite();
    return (
        <section className="py-24 bg-brand-bg-dark text-white relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] -mr-96 -mt-96" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary font-black text-xs uppercase tracking-widest">
                            <Star className="w-4 h-4 fill-brand-primary" />
                            <span>Premium Reliability</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black font-premium leading-tight">
                            Why We Are UK's <br />
                            <span className="gold-text-gradient">First Choice</span>
                        </h2>

                        <p className="text-white/60 text-lg font-medium leading-relaxed max-w-xl">
                            With a legacy of excellence and a nationwide fleet of over 2,000 professional drivers, <span className="text-brand-primary">{details.businessName}</span> offers a service that prioritizes your safety and peace of mind above all else.
                        </p>

                        <div className="flex flex-wrap gap-8 pt-6">
                            <div className="flex flex-col">
                                <span className="text-5xl font-black text-white">30m</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Avg. Arrival</span>
                            </div>
                            <div className="w-px h-16 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-5xl font-black text-white">5k+</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Happy Clients</span>
                            </div>
                            <div className="w-px h-16 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-5xl font-black text-white">100%</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Reliability</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid gap-6">
                        {trustItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-effect-dark p-8 rounded-[32px] border-white/5 hover:bg-white/[0.08] transition-all group"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black mb-1 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                        <p className="text-white/50 text-sm font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Quick Call Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-brand-primary p-1 rounded-[32px] overflow-hidden group cursor-pointer"
                        >
                            <a href={`tel:${details.phone}`} className="flex items-center justify-between p-8 bg-brand-bg-dark rounded-[31px] group-hover:bg-transparent group-hover:text-brand-bg-dark transition-all duration-500">
                                <div className="flex items-center gap-4">
                                    <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest opacity-60">Need help now?</p>
                                        <p className="text-2xl font-black">{details.phone}</p>
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-bg-dark group-hover:text-white transition-all">
                                    <MousePointer2 className="w-6 h-6 rotate-45" />
                                </div>
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
