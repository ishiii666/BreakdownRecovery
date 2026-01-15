'use client';

import { useState } from 'react';
import { Truck, Mail, Phone, MapPin, Car, Users, ClipboardCheck, AlertCircle } from 'lucide-react';
import { siteDetails } from '@/lib/siteDetails';

export default function ContactForm() {
    const [activeTab, setActiveTab] = useState('Breakdown Recovery');

    return (
        <section id="contact" className="py-20 bg-[#EBF5FB]">
            <div className="container-custom">

                {/* Section 3: The Card & Form */}
                <div className="max-w-5xl mx-auto">

                    {/* Tabs (Toggle Buttons) */}
                    <div className="flex flex-wrap justify-center gap-4 w-full mb-8">
                        {["Breakdown Recovery", "Mobile Tyres", "Jump Start"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`${activeTab === tab ? 'bg-[#005B64]' : 'bg-[#0088CC]'} text-white px-8 py-4 font-bold border-b-4 border-black/20 hover:brightness-110 hover:translate-y-0.5 transition-all text-sm uppercase tracking-wide md:flex-1 max-w-[250px]`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Multi-Step Card */}
                    <div className="bg-white rounded-3xl border-2 border-[#0088CC] shadow-2xl overflow-hidden">

                        {/* Heading */}
                        <div className="bg-white py-8 px-6 text-center border-b border-gray-100">
                            <h2 className="text-[#005B64] text-3xl md:text-4xl font-black tracking-tight">
                                More than 500 Recovery Drivers in 30mins Response
                            </h2>
                        </div>

                        <div className="p-8 md:p-12">
                            <form className="space-y-8" action={`https://formsubmit.co/${siteDetails.email}`} method="POST">
                                <div className="grid md:grid-cols-2 gap-8">

                                    {/* Column 1 */}
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-black text-[#005B64] uppercase tracking-wider mb-2">Vehicle Make and Model</label>
                                            <div className="relative">
                                                <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0088CC]" />
                                                <input type="text" name="vehicle" placeholder="e.g. BMW 3 Series" required className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0088CC] focus:ring-2 focus:ring-[#0088CC]/20 outline-none transition-all font-medium" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-black text-[#005B64] uppercase tracking-wider mb-2">Registration Number</label>
                                            <div className="relative">
                                                <ClipboardCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0088CC]" />
                                                <input type="text" name="registration" placeholder="LK68 XXX" required className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0088CC] focus:ring-2 focus:ring-[#0088CC]/20 outline-none transition-all font-medium uppercase" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-black text-[#005B64] uppercase tracking-wider mb-2">Number of Passengers</label>
                                            <div className="relative">
                                                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0088CC]" />
                                                <input type="number" name="passengers" placeholder="Amount of people" className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0088CC] focus:ring-2 focus:ring-[#0088CC]/20 outline-none transition-all font-medium" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Column 2 */}
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-black text-[#005B64] uppercase tracking-wider mb-2">Pickup Location (Postcode/Address)</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                                                <input type="text" name="pickup" placeholder="From where?" required className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0088CC] focus:ring-2 focus:ring-[#0088CC]/20 outline-none transition-all font-medium" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-black text-[#005B64] uppercase tracking-wider mb-2">Drop-Off Location (If known)</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#27AE60]" />
                                                <input type="text" name="dropoff" placeholder="To where?" className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#0088CC] focus:ring-2 focus:ring-[#0088CC]/20 outline-none transition-all font-medium" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-black text-[#005B64] uppercase tracking-wider mb-2">Service Type</label>
                                                <select name="service" className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#0088CC] outline-none font-medium appearance-none bg-white">
                                                    <option>Breakdown Recovery</option>
                                                    <option>Jump Start</option>
                                                    <option>Tyre Change</option>
                                                    <option>Accident Recovery</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-black text-[#005B64] uppercase tracking-wider mb-2">Drivability</label>
                                                <select name="drivability" className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-[#0088CC] outline-none font-medium appearance-none bg-white">
                                                    <option>Drivable</option>
                                                    <option>Non-Drivable</option>
                                                    <option>Partial / Limp Mode</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="pt-6 border-t border-gray-100">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label className="block text-sm font-black text-[#005B64] uppercase tracking-wider mb-2">Your Phone Number</label>
                                            <input type="tel" name="phone" required placeholder="For driver to contact you" className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#0088CC] outline-none font-medium" />
                                        </div>
                                        <div className="flex flex-col justify-end">
                                            <button type="submit" className="w-full bg-[#005B64] text-white py-5 rounded-xl font-black text-xl uppercase tracking-widest hover:bg-[#004b52] transition-all shadow-xl shadow-teal-900/10 active:scale-95">
                                                Submit Recovery Request
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Urgency Footer */}
                        <div className="bg-[#005B64]/5 p-6 flex items-center justify-center gap-4 text-[#005B64]">
                            <AlertCircle className="w-6 h-6 animate-pulse" />
                            <p className="font-bold text-sm">EMERGENCY ASSISTANCE: Your request will be prioritized by our dispatch center.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
