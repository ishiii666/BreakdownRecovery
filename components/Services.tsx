"use client";

import { motion } from "framer-motion";
import { Truck, Search, ShieldCheck, MapPin, ArrowRight, Gauge, Wrench, Zap } from "lucide-react";

// Generated images
const JUMPSTART_IMG = "/images/jump_start_service.png";
const ROADSIDE_IMG = "/images/roadside_repair_service.png";
const PERFORMANCE_IMG = "/images/performance_towing_service.png";
const BREAKDOWN_IMG = "/images/breakdown_recovery_service.png";

const steps = [
    {
        icon: <MapPin className="w-10 h-10" />,
        title: "Share Location",
        desc: "Send your exact spot via phone or postcode search for instant dispatch.",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: <Search className="w-10 h-10" />,
        title: "Technician Match",
        desc: "Our closest technician is selected to ensure the fastest arrival time.",
        color: "from-orange-500 to-orange-600"
    },
    {
        icon: <ShieldCheck className="w-10 h-10" />,
        title: "Health Check",
        desc: "On-site assessment to determine the best course of action for your vehicle.",
        color: "from-emerald-500 to-emerald-600"
    },
    {
        icon: <Truck className="w-10 h-10" />,
        title: "Safe Recovery",
        desc: "Professional on-site repair or secure towing to your preferred destination.",
        color: "from-indigo-500 to-indigo-600"
    }
];

const services = [
    {
        title: "Breakdown Recovery",
        description: "24/7 emergency assistance for all vehicle types. We'll get you and your car home safely.",
        icon: <Truck className="w-8 h-8" />,
        image: BREAKDOWN_IMG
    },
    {
        title: "Jump Starts",
        description: "Dead battery? Our team carries professional equipment to get your car started in minutes.",
        icon: <Zap className="w-8 h-8" />,
        image: JUMPSTART_IMG
    },
    {
        title: "Roadside Repair",
        description: "Minor issues handled on the spot by our skilled technicians to keep you moving.",
        icon: <Wrench className="w-8 h-8" />,
        image: ROADSIDE_IMG
    },
    {
        title: "Performance Towing",
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
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-xs font-black uppercase tracking-widest mb-6"
                        >
                            Streamlined Service
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 font-premium">
                            Recovery in <span className="gold-text-gradient">4 Steps</span>
                        </h2>
                        <p className="text-white/60 text-lg font-medium leading-relaxed">
                            We've optimized every second of our process to get you back on the road faster than anyone else.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-stretch">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group h-full"
                            >


                                <div className="relative z-10 p-8 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 h-full flex flex-col">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-5 mb-8 shadow-xl shadow-black/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shrink-0`}>
                                        {step.icon}
                                    </div>
                                    <div className="absolute top-8 right-8 text-4xl font-black text-white/10 group-hover:text-brand-primary/20 transition-colors">
                                        0{idx + 1}
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 font-premium">{step.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed font-medium flex-grow">
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
                                    <div className="flex items-center gap-2 text-brand-primary font-black text-xs uppercase tracking-[0.2em]">
                                        <span>Secure Booking</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
