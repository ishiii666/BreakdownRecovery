"use client";

import { motion } from "framer-motion";
import { Truck, Search, ShieldCheck, MapPin, ArrowRight, Gauge, Wrench, Zap } from "lucide-react";
import Link from 'next/link';

// Generated images
const JUMPSTART_IMG = "/images/jump_start_service.png";
const ROADSIDE_IMG = "/images/roadside_repair_service.png";
const PERFORMANCE_IMG = "/images/performance_towing_service.png";
const BREAKDOWN_IMG = "/images/breakdown_recovery_service.png";

const steps = [
    {
        image: "/images/step-1.png",
        title: "Send Your Location",
        desc: "Share your exact spot via phone or postcode search."
    },
    {
        image: "/images/step-2.png",
        title: "Arrival From 30 Minutes",
        desc: "Our closest technician is dispatched immediately."
    },
    {
        image: "/images/step-3.png",
        title: "Vehicle Health Check",
        desc: "Professional assessment of your vehicle's issue."
    },
    {
        image: "/images/step-4.png",
        title: "Vehicle Recovery / Service",
        desc: "On-site repair or safe recovery to your destination."
    }
];

const services = [
    {
        title: "Breakdown Recovery",
        slug: "breakdown-recovery",
        description: "24/7 emergency assistance for all vehicle types. We'll get you and your car home safely.",
        icon: <Truck className="w-8 h-8" />,
        image: BREAKDOWN_IMG
    },
    {
        title: "Jumpstart",
        slug: "jump-starts",
        description: "Dead battery? Our team carries professional equipment to get your car started in minutes.",
        icon: <Zap className="w-8 h-8" />,
        image: JUMPSTART_IMG
    },
    {
        title: "Roadside Repair",
        slug: "roadside-repair",
        description: "Minor issues handled on the spot by our skilled technicians to keep you moving.",
        icon: <Wrench className="w-8 h-8" />,
        image: ROADSIDE_IMG
    },
    {
        title: "Performance Towing",
        slug: "vehicle-towing",
        description: "Specialized towing for low-clearance or luxury vehicles with ultimate care.",
        icon: <Gauge className="w-8 h-8" />,
        image: PERFORMANCE_IMG
    }
];

export default function Services() {
    return (
        <section id="services" className="bg-brand-bg-light">
            {/* 4-Step Process - High-End Dark Interactive Section */}
            <div className="py-24 bg-brand-bg-dark text-white relative overflow-hidden">
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full -mr-80 -mt-80" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full -ml-60 -mb-60" />

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6"
                        >
                            Streamlined Service Dispatch
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Emergency Recovery in <span className="text-brand-primary">4 Easy Steps</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8, ease: "circOut" }}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Circle Icon Container */}
                                <div className="relative mb-10 group">
                                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center p-8 shadow-[0_20px_50px_rgba(255,255,255,0.1)] group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)] transition-all duration-700 relative z-10">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Line Connector (Desktop) */}
                                    {idx < 3 && (
                                        <div className="hidden lg:block absolute top-1/2 left-[100%] w-[calc(100%-48px)] h-[1px] bg-gradient-to-r from-brand-primary/40 to-transparent -translate-y-1/2 -z-10" />
                                    )}

                                    {/* Step Number Tag */}
                                    <div className="absolute top-2 right-2 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-xl z-20 border-4 border-brand-bg-dark">
                                        {idx + 1}
                                    </div>

                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full bg-brand-primary/20 animate-ping -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="space-y-4 max-w-[240px]">
                                    <h3 className="text-xl md:text-2xl font-black">{step.title}</h3>
                                    <p className="text-white/50 text-sm md:text-base font-medium leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Local Recovery Services - Refined Light Section */}
            <div className="py-12 relative overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-brand-primary font-black uppercase tracking-widest text-sm block mb-4">Our Expertise</span>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-bg-dark font-premium">
                                Comprehensive <br />
                                <span className="text-slate-400">Recovery Solutions</span>
                            </h2>
                        </div>
                        <p className="text-slate-600 font-medium text-lg lg:max-w-md lg:text-right">
                            Tailored services for every roadside emergency. Nationwide coverage with local expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ translateY: -12 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative h-[450px] rounded-[48px] overflow-hidden premium-shadow cursor-pointer border border-slate-100/50 hover:border-brand-primary/30 transition-all duration-500"
                            >
                                <div className="absolute inset-0 z-[1] border-[8px] border-white/0 group-hover:border-white/5 rounded-[48px] transition-all duration-700 pointer-events-none" />
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-dark via-brand-bg-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center mb-6 shadow-2xl shadow-brand-primary/20">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-2xl font-black mb-3 font-premium">{s.title}</h3>
                                    <p className="text-white/80 text-sm font-medium leading-relaxed mb-6">
                                        {s.description}
                                    </p>
                                    <Link
                                        href={`/services/${s.slug}`}
                                        className="flex items-center gap-2 text-brand-primary font-black text-xs uppercase tracking-[0.2em] w-fit hover:opacity-70 transition-opacity"
                                    >
                                        <span>Secure Booking</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
