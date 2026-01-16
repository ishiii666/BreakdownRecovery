"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, MapPin, Users, ClipboardCheck, Phone, AlertCircle, ArrowRight, Navigation, ChevronDown, Zap, HelpCircle } from "lucide-react";
import { siteDetails } from "@/lib/siteDetails";

type TabType = 'breakdown' | 'tyres' | 'jumpstart';

export default function ContactForm() {
    const [activeTab, setActiveTab] = useState<TabType>('breakdown');
    const [location, setLocation] = useState("");
    const [isLocating, setIsLocating] = useState(false);

    const handleLocateMe = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)} (Current Location)`);
                setIsLocating(false);
            },
            () => {
                alert("Unable to retrieve your location");
                setIsLocating(false);
            }
        );
    };

    const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
        { id: 'breakdown', label: 'Breakdown Recovery', icon: <Car className="w-4 h-4" /> },
        { id: 'tyres', label: 'Mobile Tyres', icon: <AlertCircle className="w-4 h-4 rotate-180" /> },
        { id: 'jumpstart', label: 'Jump Start', icon: <Zap className="w-4 h-4" /> },
    ];

    return (
        <section id="emergency-form" className="py-24 bg-brand-bg-light relative">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    {/* Tab Toggles */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-lg ${activeTab === tab.id
                                    ? "bg-brand-bg-dark text-brand-primary border-b-4 border-brand-primary -translate-y-1"
                                    : "bg-white text-slate-400 hover:bg-slate-50 border-b-4 border-transparent"
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Left side info */}
                        <div className="lg:col-span-4 space-y-10">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-black text-xs uppercase tracking-widest mb-6">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>{activeTab === 'breakdown' ? 'Recovery Specialist' : activeTab === 'tyres' ? 'Tyre Expert' : 'Instant Jumpstart'}</span>
                                </div>
                                <h2 className="text-4xl font-black text-brand-bg-dark font-premium leading-[1.1] mb-8">
                                    {activeTab === 'breakdown' && <>More than <span className="text-brand-primary">2,000</span> Recovery Drivers Online.</>}
                                    {activeTab === 'tyres' && <>Rapid <span className="text-brand-primary">Tyre Fitting</span> & Replacement Service.</>}
                                    {activeTab === 'jumpstart' && <>Instant <span className="text-brand-primary">Jump Start</span> & Battery Recovery.</>}
                                </h2>
                                <p className="text-slate-600 font-medium text-lg leading-relaxed">
                                    {activeTab === 'breakdown' && "Fill out our emergency dispatch form. Your request is immediately sent to the nearest 5 available recovery units."}
                                    {activeTab === 'tyres' && "Professional mobile tyre fitters ready to arrive within 30 minutes. Share your tyre size for instant stock check."}
                                    {activeTab === 'jumpstart' && "Stranded with a flat battery? Our nationwide team carries professional jump kits and replacements available 24/7."}
                                </p>
                            </motion.div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                    <div className="w-14 h-14 rounded-2xl bg-brand-bg-dark flex items-center justify-center text-white">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-widest text-slate-400">Direct Line</p>
                                        <p className="text-xl font-black text-brand-bg-dark">{siteDetails.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Area */}
                        <motion.div
                            key={activeTab + "-form"}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-8 px-2"
                        >
                            <div className="glass-effect p-8 md:p-12 rounded-[48px] premium-shadow border-white transition-all overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />

                                <form className="space-y-10">
                                    <AnimatePresence mode="wait">
                                        {activeTab === 'breakdown' && (
                                            <motion.div
                                                key="breakdown-fields"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.98 }}
                                                className="space-y-8"
                                            >
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Vehicle Make and Model</label>
                                                        <div className="relative group">
                                                            <Car className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="text" placeholder="E.g., Toyota Corolla" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Registration Number</label>
                                                        <div className="relative group">
                                                            <ClipboardCheck className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="text" placeholder="E.g., AB12 CDE" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all uppercase" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Number of Passengers</label>
                                                        <div className="relative group">
                                                            <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="number" placeholder="Enter number of passengers" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Service Type</label>
                                                        <div className="relative group">
                                                            <select className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all appearance-none cursor-pointer pr-12">
                                                                <option>Emergency Recovery</option>
                                                                <option>Scheduled Transport</option>
                                                                <option>Insurance Work</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none group-focus-within:text-brand-primary transition-colors" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Pickup Location</label>
                                                    <div className="relative group">
                                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary z-10" />
                                                        <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter pickup location or postcode" className="w-full bg-slate-50 py-5 pl-14 pr-32 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        <button type="button" onClick={handleLocateMe} className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-brand-primary font-black text-[10px] uppercase tracking-wider rounded-xl shadow-sm border border-slate-100 hover:bg-brand-primary hover:text-white transition-all flex items-center gap-2 group/btn">
                                                            <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : 'group-hover/btn:animate-pulse'}`} />
                                                            <span>{isLocating ? 'Wait...' : 'Locate Me'}</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Drop-Off Location</label>
                                                    <div className="relative group">
                                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                        <input type="text" placeholder="Enter drop-off destination" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Vehicle Drivability</label>
                                                        <div className="relative group">
                                                            <select className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all appearance-none cursor-pointer pr-12">
                                                                <option>Yes, it can be driven</option>
                                                                <option>No, it's a non-runner</option>
                                                                <option>Damaged / Accident</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none group-focus-within:text-brand-primary transition-colors" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Telephone Number</label>
                                                        <div className="relative group">
                                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="tel" placeholder="E.g., 07123 456789" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Describe the issue (Optional)</label>
                                                    <div className="relative group">
                                                        <HelpCircle className="absolute left-6 top-6 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                        <textarea placeholder="E.g., stuck in park, bent wheel, won't start..." rows={3} className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all"></textarea>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'tyres' && (
                                            <motion.div
                                                key="tyre-fields"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.98 }}
                                                className="space-y-8"
                                            >
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Registration Number</label>
                                                        <div className="relative group">
                                                            <ClipboardCheck className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="text" placeholder="E.g., AB12 CDE" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all uppercase" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Tyre Size</label>
                                                        <div className="relative group">
                                                            <HelpCircle className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="text" placeholder="E.g., 205/55 R16" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Quantity</label>
                                                        <div className="relative group">
                                                            <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="number" placeholder="Number of tyres required" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Tyre Preference</label>
                                                        <div className="relative group">
                                                            <select className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all appearance-none cursor-pointer pr-12">
                                                                <option>Part-Worn (Budge Friendly)</option>
                                                                <option>New - Budget</option>
                                                                <option>New - Mid-Range</option>
                                                                <option>New - Premium</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none group-focus-within:text-brand-primary transition-colors" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Locking Wheel Nut</label>
                                                        <div className="relative group">
                                                            <select className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all appearance-none cursor-pointer pr-12">
                                                                <option>Yes, locking key available</option>
                                                                <option>No key / Lost</option>
                                                                <option>No Locking Nut Present</option>
                                                                <option>Don't Know</option>
                                                            </select>
                                                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none group-focus-within:text-brand-primary transition-colors" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Telephone Number</label>
                                                        <div className="relative group">
                                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="tel" placeholder="E.g., 07123 456789" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Current Location</label>
                                                    <div className="relative group">
                                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary z-10" />
                                                        <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Where should we send the fitter?" className="w-full bg-slate-50 py-5 pl-14 pr-32 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        <button type="button" onClick={handleLocateMe} className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-brand-primary font-black text-[10px] uppercase tracking-wider rounded-xl shadow-sm border border-slate-100 hover:bg-brand-primary hover:text-white transition-all flex items-center gap-2 group/btn">
                                                            <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : 'group-hover/btn:animate-pulse'}`} />
                                                            <span>{isLocating ? 'Wait' : 'GPS'}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'jumpstart' && (
                                            <motion.div
                                                key="jump-fields"
                                                initial={{ opacity: 0, scale: 0.98 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.98 }}
                                                className="space-y-8"
                                            >
                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Vehicle Registration Number</label>
                                                        <div className="relative group">
                                                            <ClipboardCheck className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="text" placeholder="E.g., AB12 CDE" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all uppercase" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Telephone Number</label>
                                                        <div className="relative group">
                                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input type="tel" placeholder="For instant reach" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Your Exact Location</label>
                                                    <div className="relative group">
                                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary z-10" />
                                                        <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Pinpoint your location for the technician" className="w-full bg-slate-50 py-5 pl-14 pr-32 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all" />
                                                        <button type="button" onClick={handleLocateMe} className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-brand-primary font-black text-[10px] uppercase tracking-wider rounded-xl shadow-sm border border-slate-100 hover:bg-brand-primary hover:text-white transition-all flex items-center gap-2 group/btn">
                                                            <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : 'group-hover/btn:animate-pulse'}`} />
                                                            <span>{isLocating ? '...' : 'GPS'}</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Describe the situation (Optional)</label>
                                                    <div className="relative group">
                                                        <Zap className="absolute left-6 top-6 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                        <textarea placeholder="E.g., battery is completely dead, lights flickering, parked in tight garage..." rows={3} className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-none font-bold text-brand-bg-dark focus:ring-2 focus:ring-brand-primary/20 transition-all"></textarea>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button className="w-full py-4 md:py-6 bg-brand-bg-dark text-white rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest flex items-center justify-center gap-2 md:gap-3 hover:bg-brand-primary transition-all active:scale-95 shadow-xl shadow-brand-bg-dark/10 group">
                                        <span className="truncate">Submit {activeTab === 'breakdown' ? 'Recovery' : activeTab === 'tyres' ? 'Tyre' : 'Inquiry'} Request</span>
                                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:translate-x-1 transition-transform animate-pulse" />
                                    </button>

                                    <p className="text-center text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed px-4">
                                        By clicking submit, your location data will be shared with our nearest response unit for dispatch.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}
