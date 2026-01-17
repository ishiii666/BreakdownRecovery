import { services } from "@/lib/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import UrgencyMarquee from "@/components/UrgencyMarquee";
import { DynamicPhone } from "@/components/DynamicContactParts";
import { Phone, Clock, ShieldCheck, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen overflow-x-hidden bg-brand-bg-light">
            <Navbar />

            {/* Service Hero */}
            <section className="relative pt-44 pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full pointer-events-none opacity-20">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 rounded-full blur-[120px]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-black text-[10px] uppercase tracking-[0.3em]">
                                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                                Expert {service.name}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-brand-bg-dark leading-[1.1] tracking-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <DynamicPhone
                                    className="px-10 py-5 bg-brand-bg-dark text-white rounded-[24px] font-black text-lg shadow-2xl hover:bg-brand-primary transition-all active:scale-95 flex items-center gap-4"
                                    iconClass="w-6 h-6 text-brand-primary"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-effect p-4 rounded-[56px] border border-white shadow-3xl overflow-hidden group">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-auto aspect-[4/3] object-cover rounded-[40px] transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-10 right-10 glass-effect-dark p-6 rounded-3xl border border-white/10 shadow-2xl">
                                    <div className="flex items-center gap-1 text-brand-primary mb-1">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                    </div>
                                    <p className="text-white font-black text-xl italic tracking-tight">5/5 Service</p>
                                    <p className="text-[9px] uppercase font-black tracking-widest text-brand-primary">Verified Expert</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <UrgencyMarquee />

            {/* Booking Form Integration */}
            <div id="emergency-form">
                <ContactForm initialTab={
                    service.slug.includes('tyre') ? 'tyres' :
                        service.slug.includes('jump') ? 'jumpstart' :
                            'breakdown'
                } />
            </div>

            {/* Service Details & Benefits */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-brand-bg-dark tracking-tight">
                                    Why Choose Our <br />
                                    <span className="text-brand-primary italic">{service.name} Service?</span>
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    {service.content}
                                </p>
                            </div>

                            <div className="grid gap-6">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-primary/20 transition-all group">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-lg font-bold text-brand-bg-dark">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8 sticky top-40">
                            <div className="p-10 rounded-[48px] bg-brand-bg-dark text-white relative overflow-hidden shadow-3xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-[60px]" />
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8 border border-white/10">
                                        <Clock className="w-8 h-8 text-brand-primary" />
                                    </div>
                                    <h3 className="text-3xl font-black italic tracking-tight">30-Minute Dispatch</h3>
                                    <p className="text-white/60 text-lg leading-relaxed">
                                        Our nearest available unit will be dispatched immediately once your booking is confirmed.
                                    </p>
                                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center">
                                            <ShieldCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase font-black text-white/40 tracking-widest">Safety Status</p>
                                            <p className="text-sm font-black">All Techs Fully Insured</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 rounded-[48px] border-2 border-slate-100 bg-white shadow-xl flex flex-col items-center text-center space-y-4">
                                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">Need assistance now?</p>
                                <DynamicPhone
                                    className="text-3xl md:text-4xl font-black text-brand-bg-dark hover:text-brand-primary transition-colors tracking-tight"
                                />
                                <p className="text-slate-400 font-medium">Available 24/7 for emergency help.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="text-brand-primary font-black uppercase tracking-widest text-sm block mb-4">Explore More</span>
                            <h2 className="text-4xl md:text-5xl font-black text-brand-bg-dark">
                                Other Specialist <br />
                                <span className="text-slate-400 italic">Recovery Services</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.filter(s => s.slug !== slug).slice(0, 3).map((s, i) => (
                            <Link
                                key={i}
                                href={`/services/${s.slug}`}
                                className="group bg-white p-8 rounded-[40px] border border-slate-100 hover:border-brand-primary/30 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-video rounded-3xl overflow-hidden mb-6">
                                    <img
                                        src={s.image}
                                        alt={s.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <h4 className="text-2xl font-black text-brand-bg-dark mb-4">{s.name}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed mb-6 line-clamp-2">
                                    {s.description}
                                </p>
                                <div className="flex items-center gap-2 text-brand-primary font-black text-sm uppercase tracking-widest">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}
