import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UrgencyMarquee from '@/components/UrgencyMarquee';
import ServiceAvailability from '@/components/ServiceAvailability';
import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';
import TrustSection from '@/components/TrustSection';
import RecoveryExpertise from '@/components/RecoveryExpertise';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <UrgencyMarquee />
            <ServiceAvailability />
            <ContactForm />
            <Services />
            <RecoveryExpertise />
            <TrustSection />
            <Footer />
        </main>
    );
}
