"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UrgencyMarquee from '@/components/UrgencyMarquee';
import ContactForm from '@/components/ContactForm';
import { siteDetails } from '@/lib/siteDetails';
import { Phone, Clock, ShieldCheck, Award, Star, ArrowRight, Zap, Users, MapPin, Gauge, Shield, History, Truck, Wrench } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-brand-bg-light">
            <Navbar />

            {/* About Hero Section */}
            <section className="relative pt-44 pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent rounded-full blur-[120px]" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-secondary/5 rounded-full blur-[100px]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-10">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-bg-dark text-white font-black text-xs uppercase tracking-[0.3em] shadow-2xl">
                            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                            The Story of Rapid Rescue
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-brand-bg-dark leading-tight tracking-tight">
                            More Than Just a <br />
                            <span className="gold-text-gradient italic underline decoration-brand-primary/20 underline-offset-8">Roadside Service.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
                            Rapid Rescue was founded on a simple principle: nobody should be left waiting for hours in an emergency. We've built our reputation on <span className="text-brand-bg-dark font-black">lightning-fast response times</span> and professional, human-centric care.
                        </p>
                    </div>
                </div>
            </section>

            <UrgencyMarquee />

            <div id="emergency-form">
                <ContactForm />
            </div>

            {/* Company History / Timeline */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] italic flex items-center gap-2">
                                    <History className="w-4 h-4" /> Our Journey
                                </h2>
                                <h3 className="text-4xl md:text-6xl font-black text-brand-bg-dark leading-tight tracking-tight">
                                    From One Truck to a <br />
                                    <span className="text-brand-primary">Nationwide Network.</span>
                                </h3>
                            </div>

                            <div className="space-y-8 pl-8 border-l-2 border-slate-100 ml-4">
                                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                    We started with a vision to make vehicle recovery stress-free and transparent. Today, that vision drives every dispatch we make.
                                </p>
                                <div className="grid gap-6">
                                    {[
                                        { title: "Rapid Response", text: "Strategic positioning for 30-min arrival." },
                                        { title: "Expert Care", text: "Hand-picked, certified technicians." },
                                        { title: "Total Transparency", text: "No hidden fees, just honest service." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-sm">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black text-brand-bg-dark mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-500 font-bold">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-effect p-4 rounded-[64px] border border-slate-200 overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-700">
                                <img
                                    src="/images/about-hero-vision.png"
                                    alt="Our Mission"
                                    className="rounded-[48px] aspect-[4/5] object-cover transition-all duration-1000 shadow-2xl"
                                />
                                <div className="absolute bottom-12 right-12 glass-effect-dark text-white p-6 rounded-3xl shadow-xl">
                                    <p className="text-3xl font-black italic">50k+</p>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-brand-primary">Assists Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Choose Your Service Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] italic leading-relaxed">Tailored Solutions</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-brand-bg-dark tracking-tight">Choose Your Service</h3>
                        <p className="text-slate-600 font-medium font-premium tracking-tight">Professional support for every roadside situation, available 24/7 across the UK.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "24/7 Emergency Recovery",
                                desc: "Stuck on the road? We're on call day and night to recover your vehicle quickly and safely.",
                                icon: <Truck className="w-5 h-5" />
                            },
                            {
                                title: "Accident-Damaged Recovery",
                                desc: "Involved in an accident? We recover and transport damaged vehicles with the utmost care and compliance.",
                                icon: <ShieldCheck className="w-5 h-5" />
                            },
                            {
                                title: "Nationwide Transport",
                                desc: "Whether it's dealership transfers, auction pickups, or relocations—we've got you covered.",
                                icon: <MapPin className="w-5 h-5" />
                            },
                            {
                                title: "Roadside Assistance",
                                desc: "Flat battery? Puncture? Minor breakdown? Let us fix the issue on-site or tow you to safety.",
                                icon: <Wrench className="w-5 h-5" />
                            },
                            {
                                title: "Vehicle Storage",
                                desc: "Secure vehicle storage available for short or long-term needs in our monitored facilities.",
                                icon: <Shield className="w-5 h-5" />
                            },
                            {
                                title: "Scrap Vehicle Collection",
                                desc: "We remove and dispose of scrap vehicles efficiently and responsibly, providing top value.",
                                icon: <History className="w-5 h-5" />
                            }
                        ].map((service, i) => (
                            <div key={i} className="group p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col">
                                <div className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-brand-bg-dark text-white flex items-center justify-center mb-8 shadow-lg group-hover:bg-brand-primary transition-colors">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-black text-brand-bg-dark mb-4 leading-tight">{service.title}</h4>
                                <p className="text-slate-600 font-medium leading-relaxed mb-10 flex-grow">{service.desc}</p>

                                <a
                                    href={`https://wa.me/${siteDetails.whatsapp.replace(/\s+/g, '')}?text=Hi Rapid Rescue, I am interested in ${service.title}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-brand-primary text-white rounded-2xl font-black text-sm uppercase tracking-widest text-center hover:bg-brand-bg-dark transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-primary/10"
                                >
                                    Learn More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & Innovation Section */}
            <section className="py-24 bg-brand-bg-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-primary rounded-full blur-[200px]" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                        <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.5em] italic">Innovation First</h2>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-none">The Tech Behind the <span className="text-brand-primary italic">30-Min Guarantee.</span></h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Live Fleet Tracking",
                                desc: "Every truck is GPS-monitored in real-time, allowing our dispatch center to send the closest unit.",
                                icon: MapPin
                            },
                            {
                                title: "Smart-Dispatch",
                                desc: "Our AI-driven routing ensures drivers avoid traffic bottlenecks, reaching you in record time.",
                                icon: Gauge
                            },
                            {
                                title: "Secure Payments",
                                desc: "No need for cash under a bridge. Pay securely via card or mobile walllet on-site.",
                                icon: Shield
                            },
                            {
                                title: "Instant Comms",
                                desc: "Receive a live link to track your recovery truck as it heads to your exact location.",
                                icon: Zap
                            }
                        ].map((tech, i) => (
                            <div key={i} className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 flex items-center justify-center mb-8 border border-brand-primary/30">
                                    <tech.icon className="w-7 h-7 text-brand-primary" />
                                </div>
                                <h4 className="text-2xl font-black mb-4">{tech.title}</h4>
                                <p className="text-white/60 font-medium leading-relaxed">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team / Leadership Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 relative">
                            <div className="glass-effect p-4 rounded-[64px] border border-white overflow-hidden shadow-2xl">
                                <img
                                    src="/images/recovery_team_portrait.png"
                                    alt="The Rapid Rescue Team"
                                    className="rounded-[48px] w-full aspect-[4/5] object-cover"
                                />
                            </div>
                            {/* Decorative badge */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-brand-bg-dark border-4 border-white flex items-center justify-center text-center p-4 shadow-2xl rotate-12">
                                <p className="text-white text-[10px] font-black uppercase tracking-tighter">
                                    Award Winning <br /> <span className="text-brand-primary text-sm italic">Service Team</span>
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] italic">Meet the Experts</h2>
                                <h3 className="text-4xl md:text-6xl font-black text-brand-bg-dark leading-tight tracking-tight">The People Powering <span className="text-brand-primary italic">Every Rescue.</span></h3>
                                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                                    Our recovery technicians are the heartbeat of Rapid Rescue. Hand-picked for their technical expertise and empathy, our team undergoes continuous training to handle any situation with professional calm.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8 pt-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center">
                                            <Award className="w-6 h-6 text-brand-primary" />
                                        </div>
                                        <p className="text-lg font-black text-brand-bg-dark italic tracking-tight uppercase">IVR Certified</p>
                                    </div>
                                    <p className="text-slate-500 font-medium">All technicians are fully certified by the Institute of Vehicle Recovery.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center">
                                            <ShieldCheck className="w-6 h-6 text-brand-secondary" />
                                        </div>
                                        <p className="text-lg font-black text-brand-bg-dark italic tracking-tight uppercase">Fully Insured</p>
                                    </div>
                                    <p className="text-slate-500 font-medium">Your vehicle is covered for its full value during every mile of the journey.</p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <a
                                    href={`tel:${siteDetails.phone}`}
                                    className="inline-flex items-center gap-4 px-10 py-5 bg-brand-bg-dark text-white rounded-[24px] font-black text-xl hover:bg-brand-primary transition-all shadow-xl shadow-black/20 group"
                                >
                                    <span>Call Our Team</span>
                                    <ArrowRight className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-black text-brand-primary uppercase tracking-[0.4em] italic"
                        >
                            Common Questions
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-brand-bg-dark tracking-tight"
                        >
                            Rapid Rescue Background FAQ
                        </motion.h3>
                    </div>

                    <div className="max-w-4xl mx-auto grid gap-6">
                        {[
                            {
                                q: "How does the 30-minute arrival guarantee work?",
                                a: "We use a smart dispatching system that identifies the closest available technician to your GPS location. Our fleet is strategically distributed across priority areas to minimize travel time."
                            },
                            {
                                q: "Are your recovery technicians fully qualified?",
                                a: "Yes, every member of our team is IVR (Institute of Vehicle Recovery) certified and undergoes regular safety and equipment training."
                            },
                            {
                                q: "Can you recover specialized or high-end vehicles?",
                                a: "Absolutely. We have specialized performance car loaders and low-profile trucks designed to safely transport lowered or luxury vehicles without any damage."
                            },
                            {
                                q: "Where is Rapid Rescue based?",
                                a: "Our main headquarters is in West Yorkshire, but our network of recovery units covers the entire London and South East region 24/7."
                            }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02, translateY: -5 }}
                                className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:border-brand-primary/30 hover:bg-white hover:shadow-2xl transition-all duration-300 group cursor-default"
                            >
                                <h4 className="text-xl font-black text-brand-bg-dark mb-3 group-hover:text-brand-primary transition-colors flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xs font-black italic shadow-inner">Q</span>
                                    {faq.q}
                                </h4>
                                <div className="pl-14">
                                    <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
