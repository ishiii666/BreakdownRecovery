import { Truck, Zap, Wallet, ShieldCheck, CheckCircle2 } from 'lucide-react';

const reasons = [
    {
        icon: <Truck className="w-6 h-6" />,
        color: "bg-blue-600",
        title: "24/7 Availability",
        text: "Rain or shine, day or night, our team is always ready to assist you."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        color: "bg-orange-600",
        title: "Fast Arrival",
        text: "We pride ourselves on our rapid response times, typically under 30 minutes."
    },
    {
        icon: <Wallet className="w-6 h-6" />,
        color: "bg-green-600",
        title: "Fair Pricing",
        text: "Transparent, upfront quotes with no hidden fees or emergency surcharges."
    }
];

export default function WhyUs() {
    return (
        <section className="py-32 bg-brand-gray relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="animate-fade-in-up">
                        <div className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-blue/20">
                            The Difference
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
                            Why Thousands Trust <br />
                            <span className="text-brand-blue">Our Rescue Team</span>
                        </h2>

                        <div className="space-y-8">
                            {reasons.map((r, i) => (
                                <div key={i} className="flex gap-6 items-start group">
                                    <div className={`bg-brand-blue p-4 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {r.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-slate-900 mb-2">{r.title}</h4>
                                        <p className="text-slate-500 font-medium leading-relaxed max-w-sm">{r.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white/80 backdrop-blur-md p-10 md:p-12 rounded-[50px] hover-3d relative z-10 border-[10px] border-brand-blue/5 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <div className="bg-brand-gray/50 border border-brand-blue/10 p-8 rounded-[32px] mb-8 shadow-sm">
                                <ShieldCheck className="w-12 h-12 text-brand-blue mb-4" />
                                <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">100% Insured & Safe</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">Your vehicle is handled with extreme care by certified professionals using state-of-the-art equipment.</p>
                            </div>

                            <div className="flex items-center justify-between gap-4 px-2">
                                <div>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-3">Happy Customers</p>
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                                                <img src={`https://i.pravatar.cc/150?u=${i + 30}`} alt="User Avatar" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-blue border-4 border-white flex items-center justify-center text-[10px] md:text-xs font-black text-white shadow-lg relative z-10">
                                            1k+
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-3xl md:text-4xl font-black text-brand-blue leading-none tracking-tighter">4.9/5</p>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Trustpilot Rating</p>
                                </div>
                            </div>
                        </div>

                        {/* Decoration Element */}
                        <div className="absolute -top-10 -right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] z-0"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-[60px] z-0"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
