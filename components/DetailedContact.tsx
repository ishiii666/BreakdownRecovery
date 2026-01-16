"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import { siteDetails } from "@/lib/siteDetails";

export default function DetailedContact() {
    const tags = [
        "Breakdown recovery",
        "Roadside assistance",
        "Accident recovery",
        "Battery jump / flat tyre",
        "Short & long distance"
    ];

    return (
        <section id="contact" className="py-12 md:py-24 bg-brand-bg-light relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="mb-12 md:mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-xs">Direct Support</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-bg-dark font-premium leading-tight">
                                Your Recovery <br className="hidden md:block" />
                                <span className="text-slate-400">Services</span>
                            </h2>
                        </div>
                        <div className="flex flex-col md:items-end">
                            <p className="text-slate-500 font-bold text-sm md:text-right uppercase tracking-[0.1em] mb-1">24/7 Professional Assistance</p>
                            <p className="text-slate-400 font-medium text-xs md:text-right uppercase tracking-[0.2em]">Vehicle recovery • Roadside assistance • Local & reliable</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
                    {/* Left Support Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group p-8 md:p-14 rounded-[40px] md:rounded-[56px] bg-brand-bg-dark text-white overflow-hidden shadow-[0_32px_64px_-16px_rgba(10,10,11,0.4)]"
                    >
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-primary font-black text-[9px] uppercase tracking-widest mb-6 md:mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                                Fast response. Clear communication.
                            </div>

                            <h3 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-[1.1] font-premium">
                                Recovery support <br />
                                when you <span className="text-brand-primary italic">need it.</span>
                            </h3>

                            <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium mb-8 md:mb-10 max-w-lg">
                                <span className="text-brand-primary">Rapid Rescue</span> provides dependable vehicle recovery and roadside assistance with a focus on safety, quick turnaround, and straightforward pricing.
                            </p>

                            <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-white/50 hover:bg-white/10 hover:text-white transition-all"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 md:p-14 rounded-[40px] md:rounded-[56px] bg-white border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="relative z-10 w-full">
                            <h3 className="text-2xl md:text-3xl font-black text-brand-bg-dark mb-4">Contact</h3>
                            <p className="text-slate-500 font-medium text-base md:text-lg mb-8 md:mb-10">
                                Call for the fastest response or email for <br className="hidden md:block" /> quotes and bookings.
                            </p>

                            <div className="space-y-4 w-full">
                                {/* Phone Button */}
                                <a
                                    href={`tel:${siteDetails.phone}`}
                                    className="flex items-center justify-between p-4 md:p-6 rounded-[24px] md:rounded-[28px] bg-brand-primary/5 border border-brand-primary/20 text-brand-bg-dark hover:bg-brand-primary hover:text-white transition-all duration-500 group/btn shadow-sm"
                                >
                                    <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-lg group-hover/btn:bg-white group-hover/btn:text-brand-primary transition-colors shrink-0">
                                            <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div className="flex flex-col overflow-hidden">
                                            <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Call Us Now</span>
                                            <span className="text-lg md:text-xl font-black tracking-tight truncate">{siteDetails.phone}</span>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0 transform group-hover/btn:translate-x-2 transition-transform" />
                                </a>

                                {/* Email Button */}
                                <a
                                    href={`mailto:${siteDetails.email}`}
                                    className="flex items-center justify-between p-4 md:p-6 rounded-[24px] md:rounded-[28px] bg-slate-50 border border-slate-100 text-brand-bg-dark hover:bg-slate-900 hover:text-white transition-all duration-500 group/btn shadow-sm"
                                >
                                    <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white text-brand-bg-dark flex items-center justify-center shadow-md group-hover/btn:bg-white/10 group-hover/btn:text-white transition-colors shrink-0">
                                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                        </div>
                                        <div className="flex flex-col overflow-hidden">
                                            <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Email Address</span>
                                            <span className="text-base md:text-xl font-black tracking-tight uppercase truncate">{siteDetails.email}</span>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-5 h-5 opacity-40 group-hover/btn:opacity-100 shrink-0" />
                                </a>

                                {/* WhatsApp Button */}
                                <a
                                    href={`https://wa.me/${siteDetails.whatsapp.replace(/ /g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center p-5 md:p-6 rounded-[24px] md:rounded-[28px] bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-500 shadow-lg shadow-emerald-500/20 active:scale-95 group/wa"
                                >
                                    <MessageCircle className="w-6 h-6 mr-3 group-hover/wa:rotate-[15deg] transition-transform shrink-0" />
                                    <span className="text-lg md:text-xl font-black tracking-tight">WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-slate-50 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5 text-slate-400" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1.5">Service Area</span>
                                <p className="text-slate-600 font-bold leading-relaxed text-xs md:text-base">
                                    {siteDetails.serviceArea}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
