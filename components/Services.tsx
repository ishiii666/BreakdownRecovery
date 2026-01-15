import { MapPin, Clock, ShieldCheck, Truck, ArrowRight } from 'lucide-react';

const steps = [
    {
        image: "/images/step_location.png",
        title: "Send Your Location",
        desc: "Share your exact spot via phone or postcode search."
    },
    {
        image: "/images/step_time.png",
        title: "Arrival From 30 Minutes",
        desc: "Our closest technician is dispatched immediately."
    },
    {
        image: "/images/step_check.png",
        title: "Vehicle Health Check",
        desc: "Professional assessment of your vehicle's issue."
    },
    {
        image: "/images/step_truck.png",
        title: "Vehicle Recovery / Service",
        desc: "On-site repair or safe recovery to your destination."
    }
];

const services = [
    {
        title: "Breakdown Recovery",
        description: "24/7 emergency assistance for all vehicle types. We'll get you and your car home safely.",
        image: "/images/breakdown.png",
    },
    {
        title: "Mobile Tyre Fitting",
        description: "Flat tyre? We come to you and replace it on-site, whether at home or on the roadside.",
        image: "/images/tyres.png",
    },
    {
        title: "Accident Recovery",
        description: "Safe transportation for damaged vehicles after an incident. We handle insurance logistics too.",
        image: "/images/accident.png",
    },
    {
        title: "Jump Starts",
        description: "Dead battery? Our team carries professional equipment to get your car started in minutes.",
        image: "/images/jumpstart.png",
    }
];

export default function Services() {
    return (
        <section id="services" className="overflow-hidden">
            {/* 4-Step Process - Dark Theme Refined */}
            <div className="py-24 bg-gradient-to-b from-[#0F172A] to-[#0A192F] text-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Emergency Recovery in <span className="text-[#0088CC]">4 Easy Steps</span>
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-[#0088CC]"></div>
                            <p className="text-slate-400 text-sm font-black uppercase tracking-[0.4em]">Streamlined Service Dispatch</p>
                            <div className="h-px w-12 bg-[#0088CC]"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 relative">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center group relative text-center">
                                {/* Connector Line (Desktop) */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-[70px] left-[65%] w-[70%] h-0.5 bg-gradient-to-r from-[#0088CC]/60 to-transparent z-0"></div>
                                )}

                                {/* Vector Container Refined */}
                                <div className="relative w-36 h-36 mb-10 z-10">
                                    <div className="absolute inset-0 bg-[#0088CC]/20 rounded-full blur-2xl group-hover:bg-[#0088CC]/40 transition-all duration-500 animate-pulse"></div>
                                    <div className="relative w-full h-full bg-white rounded-full p-6 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-[0_0_40px_rgba(0,136,204,0.3)] border-4 border-white/10 overflow-hidden">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-12 h-12 bg-[#0088CC] rounded-full flex items-center justify-center font-black text-xl shadow-xl border-4 border-[#0F172A] z-20">
                                        {idx + 1}
                                    </div>
                                </div>

                                <div className="space-y-4 px-4">
                                    <h3 className="text-2xl font-black group-hover:text-[#0088CC] transition-colors leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 font-bold text-sm leading-relaxed max-w-[240px] mx-auto group-hover:text-slate-200 transition-colors">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Local Recovery Services - Light Theme */}
            <div className="py-24 bg-white relative">
                <div className="container-custom">
                    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-12">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                                Local <span className="text-[#0088CC]">Recovery Services</span>
                            </h2>
                            <p className="text-slate-500 font-bold text-lg">Reliable help, wherever you are in the UK.</p>
                        </div>
                        <div className="h-2 w-24 bg-[#0088CC] rounded-full hidden md:block"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="h-56 relative overflow-hidden">
                                    <img
                                        src={s.image}
                                        alt={s.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="px-3 py-1 bg-[#0088CC] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                            24/7 Available
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-black text-[#0088CC] mb-4 group-hover:translate-x-1 transition-transform">
                                        {s.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed font-bold">
                                        {s.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
