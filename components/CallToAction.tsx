import { Phone } from 'lucide-react';
import { siteDetails } from '@/lib/siteDetails';

export default function CallToAction() {
    return (
        <section className="bg-white py-20 relative overflow-hidden">
            <div className="container-custom">
                <div className="bg-[#0088CC] rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center relative shadow-2xl shadow-blue-900/20 px-8 lg:px-0">

                    {/* Image Side (Left) */}
                    <div className="lg:w-1/2 h-full min-h-[400px] relative">
                        <img
                            src="https://images.unsplash.com/photo-1591543622403-f0e21f00609c?q=80&w=2070&auto=format&fit=crop"
                            alt="Professional Recovery Mechanic"
                            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0088CC]/10 to-[#0088CC]"></div>
                    </div>

                    {/* Content Side (Right) */}
                    <div className="lg:w-1/2 p-12 lg:p-20 text-white relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="bg-white/10 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/20">
                            Available Now
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                            Ready to get you <br />
                            <span className="text-[#FFD700]">back on the road?</span>
                        </h2>
                        <p className="text-white/80 text-lg font-medium mb-10 max-w-lg leading-relaxed">
                            Our network of over 500 professional drivers is standing by across the UK. Fast response guaranteed.
                        </p>

                        <a
                            href={`tel:${siteDetails.phone}`}
                            className="inline-flex items-center gap-4 bg-white text-[#0088CC] px-10 py-5 rounded-2xl font-black text-2xl shadow-2xl shadow-blue-900/40 hover:scale-105 active:scale-95 transition-all"
                        >
                            <Phone className="w-8 h-8 fill-[#0088CC]" />
                            Call Us Now
                        </a>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
