"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UrgencyMarquee from "@/components/UrgencyMarquee";
import ContactForm from "@/components/ContactForm";
import { siteDetails } from "@/lib/siteDetails";
import { Phone, MapPin, Search, Clock, ShieldCheck, Zap, ArrowRight, Car } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AvailabilityPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-brand-bg-light">
            <Navbar />

            {/* Availability Hero */}
            <section className="relative pt-48 pb-12 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 rounded-full blur-[120px]" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-black text-[10px] uppercase tracking-[0.3em]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Live Deployment Status
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-brand-bg-dark leading-tight tracking-tight">
                            Great news! We have <br />
                            <span className="text-brand-primary italic underline decoration-brand-primary/20 underline-offset-8">4 recovery technicians</span> available!
                        </h1>

                        <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                            Our fleet is currently deployed in your area. Average arrival time for new requests: <span className="text-brand-bg-dark font-black">22 Minutes.</span>
                        </p>
                    </motion.div>

                    {/* Simulation Map Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 relative max-w-4xl mx-auto"
                    >
                        <div className="glass-effect p-3 md:p-4 rounded-[40px] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] border border-white relative group overflow-hidden">
                            <img
                                src="/images/availability-map-v2.png"
                                alt="Real-time Deployment Map"
                                className="w-full h-auto max-h-[500px] object-cover rounded-[28px] shadow-2xl"
                            />

                            {/* Overlay Info Card */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-auto md:min-w-[400px] glass-effect-dark p-6 rounded-[32px] border border-white/10 shadow-3xl text-white">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="text-center md:text-left">
                                        <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">Status Report</p>
                                        <p className="text-sm font-bold">Last updated: <span className="text-brand-primary">a few minutes ago</span></p>
                                    </div>
                                    <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-1 text-emerald-400">
                                                <Car className="w-4 h-4 fill-current" />
                                                <Car className="w-4 h-4 fill-current" />
                                                <Car className="w-4 h-4 fill-current" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Available</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex gap-1 text-red-500">
                                                <Car className="w-4 h-4 fill-current" />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Busy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-8 space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-4xl font-black text-brand-bg-dark tracking-tight">
                                Call us to request a recovery technician <br className="hidden md:block" />
                                to your <span className="text-brand-primary italic">exact location.</span>
                            </h2>
                        </div>

                        <div className="flex justify-center">
                            <a
                                href={`tel:${siteDetails.phone}`}
                                className="inline-flex items-center gap-6 px-12 py-7 bg-brand-bg-dark text-white rounded-[32px] font-black text-2xl shadow-2xl hover:bg-brand-primary transition-all active:scale-95 group shadow-brand-primary/10"
                            >
                                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <Phone className="w-6 h-6 text-brand-primary" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 leading-none mb-1">Immediate Dispatch</p>
                                    <p className="leading-none">{siteDetails.phone}</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <UrgencyMarquee />

            <div id="emergency-form">
                <ContactForm />
            </div>

            {/* Why Deployment Matters */}
            <section className="py-24 relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "GPS Dispatch",
                                desc: "Our system automatically routes the closest unit to your coordinates, cutting wait times by 50%.",
                                icon: MapPin,
                                color: "bg-blue-500"
                            },
                            {
                                title: "Secure Tracking",
                                desc: "Once dispatched, you'll receive a live link to track your technician's exact position.",
                                icon: Zap,
                                color: "bg-orange-500"
                            },
                            {
                                title: "Safety Priority",
                                desc: "Our technicians are trained to identify the safest recovery route based on live traffic data.",
                                icon: ShieldCheck,
                                color: "bg-emerald-500"
                            }
                        ].map((card, i) => (
                            <div key={i} className="p-10 rounded-[48px] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                                <div className={`w-16 h-16 rounded-2xl ${card.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <card.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-black text-brand-bg-dark mb-4">{card.title}</h4>
                                <p className="text-slate-600 font-medium leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
