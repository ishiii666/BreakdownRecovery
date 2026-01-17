"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Truck, Menu, X, ChevronDown, Clock } from "lucide-react";
import { useSite } from "@/context/SiteContext";

export default function Navbar() {
    const { details } = useSite();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const locations = [
        "Batley car recovery",
        "Bingley car recovery",
        "Birstall car recovery",
        "Bradford car recovery",
        "Brighouse car recovery",
        "Castleford car recovery",
        "Cleckheaton car recovery",
        "Denholme car recovery",
        "Dewsbury car recovery",
        "Elland car recovery",
        "Farsley car recovery",
        "Featherstone car recovery"
    ];

    const navLinks = [
        {
            name: "Recovery Services", dropdown: [
                { name: "Breakdown Recovery", href: "/services/breakdown-recovery" },
                { name: "Flat Tyre Repair", href: "/services/flat-tyre-repair" },
                { name: "Jumpstart", href: "/services/jump-starts" },
                { name: "Accident Recovery", href: "/services/accident-recovery" },
                { name: "Roadside Repair", href: "/services/roadside-repair" }
            ]
        },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "#contact" },
    ];

    const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 w-full z-[100]">
                {/* Top Utility Bar */}
                <div className="bg-brand-bg-dark text-white py-2 px-4 md:px-8 border-b border-white/5">
                    <div className="container-custom flex justify-between items-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-4">
                            <Clock className="w-3.5 h-3.5 text-brand-primary animate-pulse" />
                            <span className="opacity-80">24/7 Urgency Service Available</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center gap-2 opacity-60">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span>Technicians Online</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                                <span>Direct: {details.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`transition-all duration-500 ${isScrolled ? "py-2" : "py-4 md:py-6"}`}>
                    <div className="w-full px-4 md:px-6 2xl:px-8 mx-auto max-w-[1700px]">
                        <motion.nav
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className={`relative flex items-center justify-between px-6 md:px-10 py-3 rounded-[28px] md:rounded-[40px] transition-all duration-500 ${isScrolled
                                ? "glass-effect-dark text-white premium-shadow"
                                : "glass-effect text-brand-bg-dark border-white/40 shadow-xl shadow-black/5"
                                }`}
                        >
                            {/* Logo - Far Left */}
                            <Link href="/" className="flex items-center gap-3 group shrink-0">
                                <div className={`w-9 h-9 md:w-11 md:h-11 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg p-1.5 ${isScrolled ? "bg-brand-primary shadow-brand-primary/20" : "bg-brand-bg-dark shadow-black/20"
                                    }`}>
                                    <img
                                        src="/images/logo-icon-clean.png"
                                        alt="Rapid Rescue"
                                        className="w-full h-full object-contain"
                                        style={{ mixBlendMode: 'screen' }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <span className={`text-lg md:text-2xl font-black leading-none tracking-tighter ${isScrolled ? "text-white" : "text-brand-bg-dark"
                                            }`}>RAPID</span>
                                        <span className={`text-lg md:text-2xl font-black leading-none tracking-tighter ${isScrolled ? "text-brand-primary" : "text-brand-primary"
                                            }`}>RESCUE</span>
                                    </div>
                                    <span className={`text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] ${isScrolled ? "text-white/60" : "text-slate-400"
                                        }`}>Instant Emergency Assist</span>
                                </div>
                            </Link>

                            {/* Nav Content - Pushed to the Right */}
                            <div className="hidden xl:flex items-center justify-end flex-1 gap-4 2xl:gap-8 ml-6">
                                <div className="flex items-center gap-6 2xl:gap-10">
                                    {/* Service Areas Dropdown */}
                                    <div
                                        className="relative py-2 group cursor-pointer"
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <button className={`text-[10px] 2xl:text-[11px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-2 group-hover:text-brand-primary ${isScrolled ? "text-white" : "text-slate-800"
                                            }`}>
                                            Service Areas <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 glass-effect-dark rounded-[32px] py-6 mt-4 overflow-hidden premium-shadow border-white/10"
                                                >
                                                    <div className="max-h-80 overflow-y-auto custom-scrollbar px-6 space-y-1">
                                                        <p className="text-[9px] font-black text-brand-primary uppercase tracking-[0.25em] mb-4 px-2 italic">Priority Coverage</p>
                                                        <div className="grid grid-cols-1 gap-1">
                                                            {locations.map((loc) => (
                                                                <Link
                                                                    key={loc}
                                                                    href={`/recovery/${loc.toLowerCase().replace(/ /g, '-')}`}
                                                                    className="block px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                                                                >
                                                                    {loc}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Expertise Dropdown */}
                                    <div
                                        className="relative py-2 group cursor-pointer"
                                        onMouseEnter={() => setIsExpertiseOpen(true)}
                                        onMouseLeave={() => setIsExpertiseOpen(false)}
                                    >
                                        <button className={`text-[10px] 2xl:text-[11px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-2 group-hover:text-brand-primary ${isScrolled ? "text-white" : "text-slate-800"
                                            }`}>
                                            Expertise <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpertiseOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isExpertiseOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 w-72 glass-effect-dark rounded-[32px] py-6 mt-4 overflow-hidden premium-shadow border-white/10"
                                                >
                                                    <div className="px-6 space-y-1">
                                                        <p className="text-[9px] font-black text-brand-primary uppercase tracking-[0.25em] mb-4 px-2 italic">Available Services</p>
                                                        {navLinks[0].dropdown?.map((link) => (
                                                            <Link
                                                                key={link.name}
                                                                href={link.href}
                                                                className="block px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-white/50 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                                                            >
                                                                {link.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <Link
                                        href="/about"
                                        className={`text-[10px] 2xl:text-[11px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap hover:text-brand-primary ${isScrolled ? "text-white" : "text-slate-800"
                                            }`}
                                    >
                                        About Us
                                    </Link>

                                    <Link
                                        href="#contact"
                                        className={`text-[10px] 2xl:text-[11px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap hover:text-brand-primary ${isScrolled ? "text-white" : "text-slate-800"
                                            }`}
                                    >
                                        Contact Us
                                    </Link>
                                </div>

                                {/* Call Button */}
                                <a
                                    href={`tel:${details.phone}`}
                                    className={`px-8 py-3.5 rounded-2xl font-black text-[10px] 2xl:text-[11px] uppercase tracking-[0.1em] transition-all hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap ml-4 ${isScrolled
                                        ? "bg-brand-primary text-white shadow-brand-primary/30 hover:bg-white hover:text-brand-primary"
                                        : "bg-brand-bg-dark text-white shadow-black/20 hover:bg-brand-primary"
                                        }`}
                                >
                                    Instant Quote
                                </a>
                            </div>

                            {/* Mobile Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`xl:hidden p-3 rounded-2xl transition-colors ${isScrolled ? "bg-white/5 text-white" : "bg-brand-bg-dark/5 text-brand-bg-dark"
                                    }`}
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </motion.nav>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 z-[110] bg-brand-bg-dark flex flex-col overflow-hidden text-white lg:hidden"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center p-1.5">
                                    <img
                                        src="/images/logo-icon-clean.png"
                                        alt="Rapid Rescue"
                                        className="w-full h-full object-contain"
                                        style={{ mixBlendMode: 'screen' }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <span className="text-xl font-black leading-none tracking-tighter text-white">RAPID</span>
                                        <span className="text-xl font-black leading-none tracking-tighter text-brand-primary">RESCUE</span>
                                    </div>
                                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40">Instant Emergency Assist</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-10 custom-scrollbar">
                            {/* Service Towns */}
                            <section className="space-y-4">
                                <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] px-2 italic">Service Locations</h4>
                                <div className="grid grid-cols-1 gap-2 p-6 rounded-[32px] bg-white/5 border border-white/5">
                                    <div className="max-h-48 overflow-y-auto pr-4 custom-scrollbar space-y-3">
                                        {locations.map((loc) => (
                                            <Link
                                                key={loc}
                                                href={`/recovery/${loc.toLowerCase().replace(/ /g, '-')}`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block text-sm font-bold opacity-60 hover:opacity-100 hover:text-brand-primary transition-all"
                                            >
                                                {loc}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Expertise */}
                            <section className="space-y-4">
                                <h4 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] px-2 italic">Our Expertise</h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {navLinks[0].dropdown?.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block p-5 rounded-[24px] bg-white/5 border border-white/5 text-lg font-black hover:bg-brand-primary/10 hover:text-brand-primary transition-all active:scale-[0.98]"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* About Us */}
                            <section>
                                <Link
                                    href="/about"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-5 rounded-[24px] bg-white/5 border border-white/5 text-lg font-black hover:bg-brand-primary/10 hover:text-brand-primary transition-all text-center"
                                >
                                    About Us
                                </Link>
                            </section>

                            {/* Contact Us */}
                            <section>
                                <Link
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-5 rounded-[24px] bg-white/5 border border-white/5 text-lg font-black hover:bg-brand-primary/10 hover:text-brand-primary transition-all text-center"
                                >
                                    Contact Us
                                </Link>
                            </section>
                        </div>

                        {/* Footer Action */}
                        <div className="p-6 border-t border-white/5 bg-brand-bg-dark/50">
                            <a
                                href={`tel:${details.phone}`}
                                className="w-full flex items-center justify-center gap-4 px-10 py-6 bg-brand-primary rounded-[28px] text-xl font-black shadow-2xl shadow-brand-primary/20 active:scale-95 transition-transform"
                            >
                                <Phone className="w-6 h-6" />
                                <span>{details.phone}</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
