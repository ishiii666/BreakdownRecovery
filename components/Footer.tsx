"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { siteDetails } from "@/lib/siteDetails";

export default function Footer() {
    return (
        <footer className="bg-[#0A0F16] text-white relative overflow-hidden border-t border-white/5 mt-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

            <div className="container-custom relative z-10 pt-24 pb-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-4">

                    {/* Brand & Mission */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center shadow-2xl shadow-brand-primary/20 shrink-0 p-2 transition-transform group-hover:scale-105">
                                <img
                                    src="/images/logo-icon-clean.png"
                                    alt="Rapid Rescue"
                                    className="w-full h-full object-contain"
                                    style={{ mixBlendMode: 'screen' }}
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    <span className="text-2xl font-black tracking-tighter text-white">RAPID</span>
                                    <span className="text-2xl font-black tracking-tighter text-brand-primary">RESCUE</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Instant Emergency Assist</span>
                            </div>
                        </Link>

                        <p className="text-white/40 text-sm font-medium leading-relaxed max-w-sm">
                            The UK's highest-rated emergency vehicle recovery network. We deploy 2,000+ local specialists for rapid 45-minute response.
                        </p>

                        <div className="flex flex-row gap-6">
                            <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest">
                                <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                                <span>Fully Insured</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest">
                                <Clock className="w-3.5 h-3.5 text-brand-primary" />
                                <span>24/7 Response</span>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300">
                                    <Icon className="w-4 h-4 shadow-sm" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8 sm:gap-4 ml-0 lg:ml-12">

                        {/* Services */}
                        <div className="space-y-6 text-center sm:text-left">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Services</h4>
                            <ul className="space-y-3">
                                {["Emergency Recovery", "Jump Start Pro", "Mobile Tyre Fitting", "Vehicle Transport", "Accident Recovery"].map((item) => (
                                    <li key={item}>
                                        <Link href="#services" className="text-white/30 hover:text-brand-primary transition-all font-bold text-xs tracking-wide flex items-center justify-center sm:justify-start gap-2 group">
                                            <CheckCircle2 className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-brand-primary" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Top Locations */}
                        <div className="space-y-6 text-center sm:text-left">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Service Areas</h4>
                            <ul className="space-y-3">
                                {["London Central", "Greater Manchester", "Birmingham West", "Leeds & Yorkshire", "Liverpool Bay", "Scotland Central"].map((item) => (
                                    <li key={item}>
                                        <Link href="#locations" className="text-white/30 hover:text-white transition-all font-bold text-xs tracking-wide flex items-center justify-center sm:justify-start gap-2 group">
                                            <MapPin className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-brand-primary" />
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal & Trust */}
                        <div className="space-y-6 text-center sm:text-left">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Compliance</h4>
                            <ul className="space-y-3">
                                {["Privacy Policy", "Terms of Use", "Cookie Settings", "Consumer Rights", "Cancellation Policy"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white/30 hover:text-brand-primary transition-all font-bold text-xs tracking-wide block">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Contact Strip */}
                <div className="pt-6 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="grid md:grid-cols-2 gap-6 w-full lg:w-auto">
                        <div className="flex items-center gap-4 p-1 rounded-3xl group">
                            <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center shrink-0 shadow-lg shadow-brand-primary/20 transition-transform group-hover:scale-110">
                                <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-0.5">Emergency Dispatch</p>
                                <a href={`tel:${siteDetails.phone}`} className="text-xl font-black text-white hover:text-brand-primary transition-colors">{siteDetails.phone}</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-1 rounded-3xl group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform group-hover:bg-white/10">
                                <Mail className="w-5 h-5 text-brand-primary" />
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-0.5">Support Email</p>
                                <a href={`mailto:${siteDetails.email}`} className="text-lg font-bold text-white hover:text-brand-primary transition-colors">{siteDetails.email}</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-[20px] flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">
                        <div className="flex -space-x-2 overflow-hidden">
                            {[1, 2, 3, 4].map((i) => (
                                <img key={i} className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0A0F16]" src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="" />
                            ))}
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-[9px] font-black uppercase tracking-widest text-white/30">Verified Support</p>
                            <p className="text-xs font-bold text-white">Active Dispatch Team: <span className="text-brand-primary font-black">42 Online</span></p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/20 text-[9px] md:text-xs font-bold uppercase tracking-widest">
                        © {new Date().getFullYear()} {siteDetails.businessName} Network. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-white/20 text-[9px] font-bold uppercase tracking-widest">
                        <span>FCA Regulated</span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span>ISO 9001 Certified</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

