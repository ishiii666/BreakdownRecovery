
"use client";


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, MapPin, Users, ClipboardCheck, Phone, AlertCircle, ArrowRight, Navigation, ChevronDown, Zap, HelpCircle, Clock, ShieldCheck } from "lucide-react";
import { siteDetails } from "@/lib/siteDetails";
import { useSite } from "@/context/SiteContext";
import { sendEmergencyEmail } from "@/app/actions/email";

type TabType = 'breakdown' | 'tyres' | 'jumpstart';

export default function ContactForm({ initialTab = 'breakdown' }: { initialTab?: TabType }) {
    const { details } = useSite();
    const [activeTab, setActiveTab] = useState<TabType>(initialTab);
    const [isLocating, setIsLocating] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successTabs, setSuccessTabs] = useState<Record<TabType, boolean>>({
        breakdown: false,
        tyres: false,
        jumpstart: false
    });

    const [formData, setFormData] = useState({
        vehicleModel: "",
        registration: "",
        passengers: "1",
        serviceType: "Emergency Recovery",
        pickupLocation: "",
        dropoffLocation: "",
        drivability: "Yes, it can be driven",
        phone: "",
        issue: "",
        // Tyre specific
        tyreSize: "",
        quantity: "1",
        tyrePreference: "Part-Worn (Budge Friendly)",
        lockingWheelNut: "Yes, locking key available",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Reset success state for the active tab when modified
        setSuccessTabs(prev => ({ ...prev, [activeTab]: false }));
    };

    const handleLocateMe = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const loc = `${latitude.toFixed(4)}, ${longitude.toFixed(4)} (Current Location)`;
                setFormData(prev => ({ ...prev, pickupLocation: loc }));
                setIsLocating(false);
                // Also reset success if location changes
                setSuccessTabs(prev => ({ ...prev, [activeTab]: false }));
            },
            () => {
                alert("Unable to retrieve your location");
                setIsLocating(false);
            }
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Filter data to only send relevant fields for the active tab
            // Using a plain object to satisfy typical data structures
            const baseData: Record<string, any> = {
                registration: formData.registration,
                phone: formData.phone,
                pickupLocation: formData.pickupLocation,
            };

            if (activeTab === 'breakdown') {
                baseData.vehicleModel = formData.vehicleModel;
                baseData.passengers = formData.passengers;
                baseData.serviceType = formData.serviceType;
                baseData.dropoffLocation = formData.dropoffLocation;
                baseData.drivability = formData.drivability;
                baseData.issue = formData.issue;
            } else if (activeTab === 'tyres') {
                baseData.tyreSize = formData.tyreSize;
                baseData.quantity = formData.quantity;
                baseData.tyrePreference = formData.tyrePreference;
                baseData.lockingWheelNut = formData.lockingWheelNut;
            } else if (activeTab === 'jumpstart') {
                baseData.issue = formData.issue;
            }

            // 1. Send Email (fails gracefully if API key missing)
            const emailResult = await sendEmergencyEmail(activeTab, baseData);
            if (!emailResult.success) {
                console.warn("Email dispatch failed, proceeding to WhatsApp: ", emailResult.error);
            }

            // 2. Prepare WhatsApp Message
            let message = `🚨 *EMERGENCY ${activeTab.toUpperCase()} REQUEST*\n\n`;
            if (activeTab === 'breakdown') message += `*Vehicle:* ${formData.vehicleModel}\n`;
            message += `*Reg:* ${formData.registration}\n`;
            if (activeTab === 'tyres') {
                message += `*Tyre Size:* ${formData.tyreSize}\n`;
                message += `*Quantity:* ${formData.quantity}\n`;
                message += `*Preference:* ${formData.tyrePreference}\n`;
            }
            message += `*Location:* ${formData.pickupLocation}\n`;
            message += `*Phone:* ${formData.phone}\n`;
            if (activeTab === 'breakdown' && formData.dropoffLocation) message += `*Drop-off:* ${formData.dropoffLocation}\n`;
            if (formData.issue) message += `*Issue:* ${formData.issue}`;

            const phone = details.whatsapp.replace(/\s+/g, '');
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            // 3. Show Success and Redirect
            setSuccessTabs(prev => ({ ...prev, [activeTab]: true }));
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
                setIsSubmitting(false);
            }, 1000);

        } catch (error) {
            console.error("Critical submission error:", error);
            alert("Something went wrong. Please call us directly on " + details.phone);
            setIsSubmitting(false);
        }
    };

    const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
        { id: 'breakdown', label: 'Breakdown Recovery', icon: <Car className="w-4 h-4" /> },
        { id: 'tyres', label: 'Mobile Tyres', icon: <AlertCircle className="w-4 h-4 rotate-180" /> },
        { id: 'jumpstart', label: 'Jumpstart', icon: <Zap className="w-4 h-4" /> },
    ];

    return (
        <section id="emergency-form" className="py-24 bg-brand-bg-light relative">
            <div className="container-custom px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Tab Toggles */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
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
                                <div className="space-y-4">
                                    <div className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-bg-dark flex items-center justify-center text-white">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-slate-400">Direct Line</p>
                                            <p className="text-xl font-black text-brand-bg-dark">{details.phone}</p>
                                        </div>
                                    </div>

                                    {/* Live Status Badge */}
                                    <div className="p-5 rounded-3xl bg-brand-primary/10 border border-brand-primary/20 mb-4 overflow-hidden relative group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-brand-primary/10 transition-colors" />
                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className="flex -space-x-3">
                                                {[
                                                    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=100&h=100&auto=format&fit=crop",
                                                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&auto=format&fit=crop",
                                                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&auto=format&fit=crop"
                                                ].map((src, i) => (
                                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                                                        <img src={src} alt="tech" className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-bg-dark">Live Units</p>
                                                </div>
                                                <p className="text-sm font-black text-brand-primary italic">12 Technicians Active</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trust Badges to fill space */}
                                    <div className="grid grid-cols-1 gap-4 pt-4">
                                        {[
                                            {
                                                id: 'breakdown',
                                                items: [
                                                    { label: "30-Min Response", icon: <Clock className="w-4 h-4" />, text: "Average arrival time" },
                                                    { label: "GPS Dispatch", icon: <Navigation className="w-4 h-4" />, text: "Real-time tracking" },
                                                    { label: "Elite Fleet", icon: <Car className="w-4 h-4" />, text: "2000+ Online drivers" }
                                                ]
                                            },
                                            {
                                                id: 'tyres',
                                                items: [
                                                    { label: "Rapid Fitting", icon: <Zap className="w-4 h-4" />, text: "Instant on-site replacement" },
                                                    { label: "All Sizes", icon: <ClipboardCheck className="w-4 h-4" />, text: "Premium & budget brands" },
                                                    { label: "UK Coverage", icon: <MapPin className="w-4 h-4" />, text: "Mobile fitting experts" }
                                                ]
                                            },
                                            {
                                                id: 'jumpstart',
                                                items: [
                                                    { label: "Instant Boost", icon: <Zap className="w-4 h-4" />, text: "High-power jump kits" },
                                                    { label: "Battery Test", icon: <ShieldCheck className="w-4 h-4" />, text: "Comprehensive health check" },
                                                    { label: "All Vehicles", icon: <Car className="w-4 h-4" />, text: "Commercial & domestic" }
                                                ]
                                            }
                                        ].find(b => b.id === activeTab)?.items.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * i }}
                                                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black text-brand-bg-dark uppercase tracking-wider">{item.label}</p>
                                                    <p className="text-[10px] text-slate-500 font-bold">{item.text}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Area */}
                        <motion.div
                            key={activeTab + "-form"}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-8 w-full"
                        >
                            <div className="bg-white p-5 md:p-12 rounded-[32px] md:rounded-[48px] shadow-2xl shadow-brand-bg-dark/5 border-2 border-slate-100 transition-all hover:border-brand-primary/20 relative">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-secondary/5 rounded-full blur-[80px] -ml-24 -mb-24 opacity-50 pointer-events-none" />

                                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
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
                                                            <input name="vehicleModel" value={formData.vehicleModel} onChange={handleInputChange} type="text" placeholder="E.g., Toyota Corolla" required className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Registration Number</label>
                                                        <div className="relative group">
                                                            <ClipboardCheck className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input name="registration" value={formData.registration} onChange={handleInputChange} type="text" placeholder="E.g., AB12 CDE" required className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all uppercase" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Number of Passengers</label>
                                                        <div className="relative group">
                                                            <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input name="passengers" value={formData.passengers} onChange={handleInputChange} type="number" placeholder="Enter number of passengers" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Service Type</label>
                                                        <div className="relative group">
                                                            <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all appearance-none cursor-pointer pr-12">
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
                                                        <input name="pickupLocation" value={formData.pickupLocation} onChange={handleInputChange} type="text" placeholder="Enter pickup location or postcode" required className="w-full bg-slate-50 py-5 pl-14 pr-32 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
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
                                                        <input name="dropoffLocation" value={formData.dropoffLocation} onChange={handleInputChange} type="text" placeholder="Enter drop-off destination" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Vehicle Drivability</label>
                                                        <div className="relative group">
                                                            <select name="drivability" value={formData.drivability} onChange={handleInputChange} className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all appearance-none cursor-pointer pr-12">
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
                                                            <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="E.g., 07123 456789" required className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Describe the issue (Optional)</label>
                                                    <div className="relative group">
                                                        <HelpCircle className="absolute left-6 top-6 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                        <textarea name="issue" value={formData.issue} onChange={handleInputChange} placeholder="E.g., stuck in park, bent wheel, won't start..." rows={3} className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all"></textarea>
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
                                                            <input name="registration" value={formData.registration} onChange={handleInputChange} type="text" placeholder="E.g., AB12 CDE" required className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all uppercase" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Tyre Size</label>
                                                        <div className="relative group">
                                                            <HelpCircle className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input name="tyreSize" value={formData.tyreSize} onChange={handleInputChange} type="text" placeholder="E.g., 205/55 R16" required className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8">
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Quantity</label>
                                                        <div className="relative group">
                                                            <Users className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input name="quantity" value={formData.quantity} onChange={handleInputChange} type="number" placeholder="Number of tyres required" className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Tyre Preference</label>
                                                        <div className="relative group">
                                                            <select name="tyrePreference" value={formData.tyrePreference} onChange={handleInputChange} className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all appearance-none cursor-pointer pr-12">
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
                                                            <select name="lockingWheelNut" value={formData.lockingWheelNut} onChange={handleInputChange} className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all appearance-none cursor-pointer pr-12">
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
                                                            <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="E.g., 07123 456789" required className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Current Location</label>
                                                    <div className="relative group">
                                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary z-10" />
                                                        <input name="pickupLocation" value={formData.pickupLocation} onChange={handleInputChange} type="text" placeholder="Where should we send the fitter?" required className="w-full bg-slate-50 py-5 pl-14 pr-32 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
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
                                                            <input name="registration" value={formData.registration} onChange={handleInputChange} type="text" placeholder="E.g., AB12 CDE" required className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all uppercase" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Telephone Number</label>
                                                        <div className="relative group">
                                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                                            <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="For instant reach" required className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-2">Your Exact Location</label>
                                                    <div className="relative group">
                                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-primary z-10" />
                                                        <input name="pickupLocation" value={formData.pickupLocation} onChange={handleInputChange} type="text" placeholder="Pinpoint your location for the technician" required className="w-full bg-slate-50 py-5 pl-14 pr-32 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all" />
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
                                                        <textarea name="issue" value={formData.issue} onChange={handleInputChange} placeholder="E.g., battery is completely dead, lights flickering, parked in tight garage..." rows={3} className="w-full bg-slate-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-slate-50 font-bold text-brand-bg-dark placeholder:text-slate-400 focus:bg-white focus:border-brand-primary/20 focus:ring-0 transition-all"></textarea>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        disabled={isSubmitting}
                                        className={`w-full py-4 md:py-6 rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest flex items-center justify-center gap-2 md:gap-3 transition-all active:scale-95 shadow-xl shadow-brand-bg-dark/10 group ${successTabs[activeTab] ? "bg-emerald-500 text-white" : "bg-brand-bg-dark text-white hover:bg-brand-primary"}`}
                                    >
                                        <span className="truncate">
                                            {successTabs[activeTab] ? "✓ Request Sent!" : isSubmitting ? "Processing..." : `Submit ${activeTab === 'breakdown' ? 'Recovery' : activeTab === 'tyres' ? 'Tyre' : 'Inquiry'} Request`}
                                        </span>
                                        {!successTabs[activeTab] && <ArrowRight className="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:translate-x-1 transition-transform animate-pulse" />}
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

