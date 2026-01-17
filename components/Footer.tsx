"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { useSite } from "@/context/SiteContext";

export default function Footer() {
    const { details } = useSite();
    return (
        <footer className="bg-[#0A0F16] text-white relative overflow-hidden border-t border-white/5 mt-20">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

            <div className="container-custom relative z-10 pt-24 pb-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-4">

                    {/* Brand & Mission Haus */}
                    <div className="lg:col-span-4 space-y-8 mt-4">
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
                    <div className="lg:col-span-8 grid sm:grid-cols-3 gap-12 sm:gap-8 ml-0 lg:ml-12 mt-16 lg:mt-6">

                        {/* Our Expertise */}
                        <div className="space-y-8 text-center sm:text-left">
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">What We Do</h4>
                                <p className="text-[16px] font-black text-white italic">Our Expertise</p>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    { name: "Emergency Recovery", href: "/services/breakdown-recovery" },
                                    { name: "Jump Start Pro", href: "/services/jump-starts" },
                                    { name: "Mobile Tyre Fitting", href: "/services/flat-tyre-repair" },
                                    { name: "Vehicle Transport", href: "/services/vehicle-towing" },
                                    { name: "Accident Recovery", href: "/services/accident-recovery" }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-white/40 hover:text-brand-primary transition-all font-bold text-xs tracking-wide flex items-center justify-center sm:justify-start gap-3 group">
                                            <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/20 group-hover:text-brand-primary transition-colors">
                                                <CheckCircle2 className="w-3 h-3" />
                                            </div>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service Areas */}
                        <div className="space-y-8 text-center sm:text-left">
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Coverage</h4>
                                <p className="text-[16px] font-black text-white italic">Local Units</p>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    { name: "Batley Recovery", href: "/recovery/batley-car-recovery" },
                                    { name: "Bradford Recovery", href: "/recovery/bradford-car-recovery" },
                                    { name: "Dewsbury Recovery", href: "/recovery/dewsbury-car-recovery" },
                                    { name: "Castleford Recovery", href: "/recovery/castleford-car-recovery" },
                                    { name: "Elland Recovery", href: "/recovery/elland-car-recovery" },
                                    { name: "Scotland Central", href: "/availability" }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-white/40 hover:text-white transition-all font-bold text-xs tracking-wide flex items-center justify-center sm:justify-start gap-3 group">
                                            <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                                <MapPin className="w-3 h-3 text-brand-primary" />
                                            </div>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal & Trust */}
                        <div className="space-y-8 text-center sm:text-left">
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Trust</h4>
                                <p className="text-[16px] font-black text-white italic">Compliance</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {["Privacy Policy", "Terms of Use", "Cookie Settings", "Consumer Rights", "Cancellation Policy"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-white/30 hover:text-brand-primary transition-all font-bold text-xs tracking-wide block">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Footer Map - Moved under Compliance */}
                            <div className="w-full h-28 rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group/footmap">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002644!2d-0.24168144923117625!3d51.5285582417616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1710672000000!5m2!1sen!2suk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.5)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="transition-all duration-700 group-hover/footmap:grayscale-0 group-hover/footmap:invert-0 group-hover/footmap:contrast-100"
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none bg-brand-primary/5 group-hover/footmap:opacity-0 transition-opacity"></div>
                            </div>
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
                                <a href={`tel:${details.phone}`} className="text-xl font-black text-white hover:text-brand-primary transition-colors">{details.phone}</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-1 rounded-3xl group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform group-hover:bg-white/10">
                                <Mail className="w-5 h-5 text-brand-primary" />
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-0.5">Support Email</p>
                                <a href={`mailto:${details.email}`} className="text-lg font-bold text-white hover:text-brand-primary transition-colors">{details.email}</a>
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
                        © {new Date().getFullYear()} {details.businessName} Network. All rights reserved.
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

