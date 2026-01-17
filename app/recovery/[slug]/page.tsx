import { notFound } from 'next/navigation';
import { locations } from '@/lib/locations';
import Navbar from '@/components/Navbar';
import UrgencyMarquee from '@/components/UrgencyMarquee';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import { Phone, Clock, ShieldCheck, MapPin, ArrowRight, Star } from 'lucide-react';
import { DynamicPhone, DynamicBusinessName } from '@/components/DynamicContactParts';

export async function generateStaticParams() {
    return locations.map((loc) => ({
        slug: loc.slug,
    }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = locations.find((loc) => loc.slug === slug);

    if (!location) {
        notFound();
    }

    return (
        <main className="min-h-screen overflow-x-hidden bg-brand-bg-light">
            <Navbar />

            {/* Location Hero */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-xs">
                                <MapPin className="w-4 h-4" />
                                <span className="uppercase tracking-widest">{location.title}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-brand-bg-dark leading-tight">
                                Reliable <span className="gold-text-gradient italic inline-block pr-4">Vehicle Recovery</span> in {location.title.replace(' Car Recovery', '')}
                            </h1>

                            <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                                {location.description} We are the #1 choice for emergency roadside assistance in the {location.title.replace(' Car Recovery', '')} area.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <DynamicPhone
                                    className="inline-flex items-center gap-4 px-8 py-4 bg-brand-bg-dark text-white rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-black/20"
                                    iconClass="w-5 h-5 text-brand-primary"
                                />
                                <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-200 text-slate-900 rounded-2xl font-black text-lg hover:border-brand-primary hover:bg-white transition-all">
                                    <span>Instant Quote</span>
                                    <ArrowRight className="w-5 h-5 text-brand-primary" />
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            <div className="glass-effect p-4 rounded-[48px] shadow-2xl overflow-hidden group">
                                <img
                                    src={location.image}
                                    alt={location.title}
                                    className="rounded-[36px] w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-10 right-8 glass-effect-dark text-white p-4 rounded-2xl shadow-xl z-20">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-brand-primary" />
                                        <p className="font-black text-sm">30 MIN ARRIVAL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <UrgencyMarquee />

            <div id="emergency-form">
                <ContactForm />
            </div>

            {/* Service Highlights / Card Effects Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] italic">Why Choose Us in {location.title.replace(' Car Recovery', '')}</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-brand-bg-dark tracking-tight">Expert Roadside Assistance When You Need It Most</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "24/7 Availability",
                                desc: "Day or night, rain or shine, our recovery teams are always on standby across " + location.title.replace(' Car Recovery', '') + ".",
                                icon: Clock,
                                color: "bg-blue-500"
                            },
                            {
                                title: "Verified Experts",
                                desc: "All our technicians are fully trained and insured, ensuring your vehicle is handled with the utmost care.",
                                icon: ShieldCheck,
                                color: "bg-emerald-500"
                            },
                            {
                                title: "Fastest Response",
                                desc: "Using local dispatch in " + location.title.replace(' Car Recovery', '') + ", we guarantee some of the fastest arrival times in the UK.",
                                icon: Star,
                                color: "bg-orange-500"
                            }
                        ].map((card, i) => (
                            <div key={i} className="group p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className={`w-14 h-14 rounded-2xl ${card.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-opacity-20`}>
                                    <card.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-2xl font-black text-brand-bg-dark mb-4">{card.title}</h4>
                                <p className="text-slate-600 font-medium leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Content Section */}
            <section className="py-24 bg-brand-bg-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary rounded-full blur-[160px]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                                Local Expertise for <br />
                                <span className="text-brand-primary italic">Every Situation.</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg text-white/70 leading-relaxed font-medium">
                                    At <DynamicBusinessName />, we understand that vehicle breakdowns are stressful. That's why we've positioned our fleet strategically in {location.title.replace(' Car Recovery', '')} to ensure minimal wait times.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Flat battery jump starts",
                                        "Emergency tyre changes",
                                        "Accident recovery & storage",
                                        "Long distance vehicle towing",
                                        "Wrong fuel drainage service"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white/90 font-bold">
                                            <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-brand-primary" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[48px] space-y-8">
                            <h3 className="text-2xl font-black italic tracking-tight">"The fastest recovery I've ever experienced in {location.title.replace(' Car Recovery', '')}. Highly recommend!"</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-brand-primary overflow-hidden">
                                    <img src="https://i.pravatar.cc/150?u=recovery" alt="Reviewer" />
                                </div>
                                <div>
                                    <p className="font-black text-lg">Jonathan Wright</p>
                                    <div className="flex text-brand-primary">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-brand-primary" />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
            <CallToAction />
            <Footer />
        </main>
    );
}
