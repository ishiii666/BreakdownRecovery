import Link from 'next/link';
import { Truck, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { siteDetails } from '@/lib/siteDetails';

export default function Footer() {
    return (
        <footer className="relative bg-[#0A192F] pt-20 text-white overflow-hidden border-t border-white/5">
            <div className="container-custom relative z-10 pb-20">
                <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-8">
                        <Link href="/" className="flex flex-col items-start group">
                            <div className="flex items-center text-white">
                                <Truck className="w-8 h-8 mr-2 fill-white" />
                                <div className="h-4 w-6 bg-white rounded-sm transform -skew-x-12 ml--2"></div>
                            </div>
                            <span className="text-2xl font-black text-white leading-none mt-1">BREAKDOWN</span>
                            <span className="text-xs font-bold text-white tracking-widest uppercase opacity-60">Recovery Near Me</span>
                        </Link>
                        <p className="text-blue-50 text-sm leading-relaxed max-w-xs font-medium opacity-80">
                            Providing UK-wide emergency vehicle recovery, mobile tyre fitting, and jump start services. Our fleet of over 2,000 professional drivers is available 24/7 to get you back on the road safely.
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div className="lg:pl-8">
                        <h4 className="text-lg font-black uppercase tracking-wider mb-8 text-[#FFD700]">Services</h4>
                        <ul className="space-y-4">
                            {["Breakdown Recovery", "Mobile Tyre Fitting", "Accident Recovery", "Vehicle Towing", "Jump Starts"].map(item => (
                                <li key={item}>
                                    <Link href="#" className="text-white hover:text-[#FFD700] transition-colors text-sm font-bold flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-wider mb-8 text-[#FFD700]">Contact Information</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <Phone className="w-5 h-5 text-white shrink-0" />
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-blue-100 mb-1">Emergency 24/7</p>
                                    <a href={`tel:${siteDetails.phone}`} className="text-lg font-black hover:text-[#FFD700] transition-colors">{siteDetails.phone}</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="w-5 h-5 text-white shrink-0" />
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-blue-100 mb-1">Email Support</p>
                                    <a href={`mailto:${siteDetails.email}`} className="text-sm font-bold opacity-90 hover:opacity-100">{siteDetails.email}</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-white shrink-0" />
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-blue-100 mb-1">Coverage</p>
                                    <p className="text-sm font-bold opacity-90">Nationwide across United Kingdom</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Map */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-black uppercase tracking-wider mb-8 text-[#FFD700]">Service Coverage</h4>
                        <div className="rounded-2xl overflow-hidden border border-white/10 h-48 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.941604!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf183abb%3A0x2e0c2d3783a45c3!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000"
                                className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar: Designed by WEBTRIX */}
            <div className="bg-[#0F172A] py-8 border-t border-white/5">
                <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                        &copy; {new Date().getFullYear()} {siteDetails.businessName}. All Rights Reserved.
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        Designed by <span className="text-[#0088CC] font-black">THE WEBTRIX LIMITED</span>
                    </p>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        </footer>
    );
}
