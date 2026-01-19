"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import DetailedContact from '@/components/DetailedContact';
import UrgencyMarquee from '@/components/UrgencyMarquee';
import { useSite } from '@/context/SiteContext';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const { details } = useSite();

    return (
        <main className="min-h-screen overflow-x-hidden bg-brand-bg-light">
            <Navbar />

            {/* Contact Hero Section - Simple and clean */}
            <section className="relative pt-44 pb-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-bg-dark text-white font-black text-[10px] uppercase tracking-[0.3em]"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                            Get In Touch
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-black text-brand-bg-dark leading-tight tracking-tight"
                        >
                            Emergency <span className="text-brand-primary italic">Contact Support.</span>
                        </motion.h1>
                    </div>
                </div>
            </section>

            <UrgencyMarquee />

            {/* This is the section shown in the image (DetailedContact) */}
            <DetailedContact />

            {/* Form Section - Placed BELOW the DetailedContact as requested */}
            <ContactForm />

            <Footer />
        </main>
    );
}
