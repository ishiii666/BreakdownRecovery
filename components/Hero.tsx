import { Crown, Headphones, CreditCard, PoundSterling, ClipboardList, Users2, Truck, Wrench, Zap, Gauge, Car, Phone, Info } from 'lucide-react';
import { siteDetails } from '@/lib/siteDetails';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 lg:pt-32 overflow-hidden">
            {/* High-Impact Roadside Assistance Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2070&auto=format&fit=crop"
                    alt="Roadside Assistance & Car Repair"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/40 to-transparent"></div>
            </div>

            <div className="container-custom relative z-10 pt-18 pb-50">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Side Content - Reduced Size */}
                    <div className="text-white space-y-6 animate-fade-in-up">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                                Why Choose Us?
                            </h1>
                            <p className="text-lg md:text-xl font-bold opacity-90">
                                Professional Vehicle Recovery Services
                            </p>
                        </div>

                        <ul className="space-y-1">
                            {[
                                { icon: <Crown className="w-5 h-5" />, text: "UK's leading vehicle recovery firm" },
                                { icon: <Headphones className="w-5 h-5" />, text: "24/7 control room support" },
                                { icon: <CreditCard className="w-5 h-5" />, text: "We accept all major card payments" },
                                { icon: <PoundSterling className="w-5 h-5" />, text: "Competitive and transparent pricing" },
                                { icon: <ClipboardList className="w-5 h-5" />, text: "Receipts and invoices provided for all services" },
                                { icon: <Users2 className="w-5 h-5" />, text: "Nationwide network of over 2,000 professional drivers" },
                                { icon: <Gauge className="w-5 h-5" />, text: "Average response time: 30 minutes", highlight: true }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 group cursor-default p-1 -ml-2 rounded-xl hover:bg-white/5 transition-all duration-300">
                                    <div className="text-[#FFD700] flex items-center justify-center shrink-0 group-hover:scale-125 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
                                        {item.icon}
                                    </div>
                                    <span className={`text-sm md:text-base font-bold tracking-tight transition-all duration-500 group-hover:translate-x-2 ${item.highlight ? 'text-[#FFD700]' : 'text-gray-200 group-hover:text-white'}`}>
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Special Buttons - Orange and Ghost */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href={`tel:${siteDetails.phone}`}
                                className="inline-flex items-center gap-3 bg-[#FF7E33] text-white px-8 py-4 rounded-full font-black text-lg shadow-xl hover:bg-[#e66c29] transition-all transform hover:scale-105"
                            >
                                <Phone className="w-5 h-5 fill-white" />
                                Call Now: {siteDetails.phone}
                            </a>
                            <button className="inline-flex items-center gap-3 bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded-full font-black text-lg hover:bg-white/10 transition-all">
                                <Info className="w-5 h-5" />
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Side 2x2 Feature Grid - Smaller Cards */}
                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
                        {[
                            { icon: <Truck className="w-8 h-8" />, label: "Recovery" },
                            { icon: <Wrench className="w-8 h-8" />, label: "Repair" },
                            { icon: <Truck className="w-8 h-8" />, label: "Towing" },
                            { icon: <Zap className="w-8 h-8" />, label: "Jump Start" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:bg-white/20 transition-all cursor-pointer group"
                            >
                                <div className="text-[#FFD700] group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-white font-black text-xs uppercase tracking-widest text-center">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
