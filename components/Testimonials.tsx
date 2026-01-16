"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const testimonials = [
    {
        name: "David Richardson",
        role: "Business Consultant",
        image: "/images/testimonials/user1.png",
        content: "Stranded on the M25 at 2 AM with a flat. I used the 'Locate Me' feature and help arrived in exactly 28 minutes. Absolutely lifesaver!",
        rating: 5,
        location: "London",
        service: "Flat Tyre Repair"
    },
    {
        name: "Sarah Jenkins",
        role: "Creative Director",
        image: "/images/testimonials/user2.png",
        content: "The most professional recovery service I've ever used. Transparent pricing and the technician was incredibly polite and helpful.",
        rating: 5,
        location: "Manchester",
        service: "Vehicle Towing"
    },
    {
        name: "Michael Chen",
        role: "Tech Entrepreneur",
        image: "/images/testimonials/user3.png",
        content: "Jump start service was quick and efficient. The website worked perfectly on my phone while I was stuck. Highly recommended!",
        rating: 5,
        location: "Birmingham",
        service: "Jump Start"
    },
    {
        name: "Emma Thompson",
        role: "Event Planner",
        image: "/images/testimonials/user4.png",
        content: "Had a minor accident and was very stressed. This team arrived quickly and handled everything with so much care. Thank you!",
        rating: 5,
        location: "Leeds",
        service: "Accident Recovery"
    },
    {
        name: "George Wilson",
        role: "Retired Engineer",
        image: "/images/testimonials/user5.png",
        content: "Ran out of fuel on a country road. They were with me in no time. Simple, honest service that does exactly what it says on the tin.",
        rating: 5,
        location: "Bristol",
        service: "Emergency Fuel"
    },
    {
        name: "James Miller",
        role: "Freelance Designer",
        image: "/images/testimonials/user6.png",
        content: "Five star service from start to finish. The real-time tracking of the recovery truck gave me huge peace of mind while waiting.",
        rating: 5,
        location: "Liverpool",
        service: "Breakdown Recovery"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const variants: Variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            rotateY: direction > 0 ? 45 : -45
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.6,
                ease: "circOut"
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
            rotateY: direction < 0 ? 45 : -45,
            transition: {
                duration: 0.6,
                ease: "circOut"
            }
        })
    } as const;

    return (
        <section id="testimonials" className="pt-24 pb-4 bg-brand-bg-light relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-sm mb-6"
                    >
                        <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                        <span>Verified Customer Experiences</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-brand-bg-dark mb-6"
                    >
                        Success <span className="text-slate-400">Stories</span> from the Road
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 font-medium leading-relaxed"
                    >
                        Our commitment to excellence is reflected in the words of those we've rescued. Real people, real stories, real recovery.
                    </motion.p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="relative h-[600px] md:h-[450px] flex items-center justify-center perspective-[1500px]">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 flex items-center justify-center p-4"
                            >
                                <div className="w-full max-w-4xl glass-effect p-8 md:p-12 rounded-[48px] premium-shadow border-white flex flex-col md:flex-row gap-10 items-center">
                                    <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 relative">
                                        <div className="absolute -inset-4 bg-brand-primary/10 rounded-full blur-2xl animate-pulse" />
                                        <img
                                            src={testimonials[activeIndex].image}
                                            alt={testimonials[activeIndex].name}
                                            className="w-full h-full object-cover rounded-[32px] md:rounded-[40px] shadow-2xl relative z-10"
                                        />
                                        <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12 z-20">
                                            <Quote className="w-6 h-6 md:w-8 md:h-8" />
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-6">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-brand-primary fill-brand-primary' : 'text-slate-200'}`} />
                                            ))}
                                        </div>

                                        <p className="text-xl md:text-2xl font-bold text-brand-bg-dark italic leading-relaxed">
                                            "{testimonials[activeIndex].content}"
                                        </p>

                                        <div>
                                            <h4 className="text-xl font-black text-brand-bg-dark">{testimonials[activeIndex].name}</h4>
                                            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">{testimonials[activeIndex].role} • {testimonials[activeIndex].location}</p>
                                        </div>

                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                                            Service: {testimonials[activeIndex].service}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute -bottom-10 md:bottom-auto md:-left-12 md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-6 justify-center w-full md:w-auto z-30">
                        <button
                            onClick={handlePrev}
                            className="w-14 h-14 rounded-full glass-effect flex items-center justify-center text-brand-bg-dark hover:bg-brand-primary hover:text-white transition-all shadow-lg active:scale-95"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="absolute -bottom-10 md:bottom-auto md:-right-12 md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-6 justify-center w-full md:w-auto z-30">
                        <button
                            onClick={handleNext}
                            className="w-14 h-14 rounded-full glass-effect flex items-center justify-center text-brand-bg-dark hover:bg-brand-primary hover:text-white transition-all shadow-lg active:scale-95"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-16 md:mt-10">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > activeIndex ? 1 : -1);
                                    setActiveIndex(i);
                                }}
                                className={`h-2.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-10 bg-brand-primary' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
