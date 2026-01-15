import { Phone, Mail, MessageCircle, Info } from 'lucide-react';
import { siteDetails } from '@/lib/siteDetails';

export default function RecoveryExpertise() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#0F172A] to-[#0A192F] relative overflow-hidden text-white">
            {/* Background Glows for Depth */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0088CC]/10 blur-[130px] rounded-full -mr-64 -mt-64 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>

            <div className="container-custom relative z-10">
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                        <div className="w-6 h-6 border-2 border-slate-900 rounded-md"></div>
                    </div>
                    <div>
                        <h2 className="text-xl font-black uppercase tracking-wider leading-none">Your Recovery Services</h2>
                        <p className="text-slate-400 text-xs font-bold mt-1 uppercase tracking-widest">
                            Vehicle Recovery • Roadside Assistance • Local & Reliable
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Card: Info & Tags */}
                    <div className="lg:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-12 rounded-[32px] flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-8">
                                <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
                                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Fast response. Clear communication.</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                                Recovery support when <br /> you need it.
                            </h3>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10 max-w-xl">
                                We provide dependable vehicle recovery and roadside assistance with a focus on safety, quick turnaround, and straightforward pricing. If you're broken down or need a tow, contact us and we'll get you moving again.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {[
                                "Breakdown recovery",
                                "Roadside assistance",
                                "Accident recovery",
                                "Battery jump / flat tyre",
                                "Short & long distance"
                            ].map((tag) => (
                                <span key={tag} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-300 hover:bg-white/10 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Card: Contact Form/Buttons */}
                    <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-12 rounded-[32px] flex flex-col">
                        <h3 className="text-2xl font-black mb-3">Contact</h3>
                        <p className="text-slate-400 font-medium text-sm mb-10">
                            Call for the fastest response or email for quotes and bookings.
                        </p>

                        <div className="space-y-4 mb-10">
                            <a
                                href={`tel:${siteDetails.phone}`}
                                className="w-full flex items-center justify-center gap-3 py-4 bg-[#334155]/50 hover:bg-[#334155] border border-white/10 rounded-2xl transition-all group"
                            >
                                <Phone className="w-5 h-5 text-slate-400 group-hover:text-[#FFD700] transition-colors" />
                                <span className="font-bold text-slate-200 uppercase tracking-wider text-sm">Call: {siteDetails.phone}</span>
                            </a>

                            <a
                                href={`mailto:${siteDetails.email}`}
                                className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group"
                            >
                                <Mail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                <span className="font-bold text-slate-200 uppercase tracking-wider text-sm">Email: {siteDetails.email}</span>
                            </a>

                            <a
                                href={`https://wa.me/${siteDetails.whatsapp}`}
                                className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group"
                            >
                                <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-[#25D366] transition-colors" />
                                <span className="font-bold text-slate-200 uppercase tracking-wider text-sm">Message on WhatsApp</span>
                            </a>
                        </div>

                        <div className="mt-auto pt-8 border-t border-white/10">
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Info className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase text-slate-300 tracking-wider mb-1">Service area:</p>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                                        London, Manchester, Birmingham, Leeds, Glasgow, and surrounding areas nationwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
