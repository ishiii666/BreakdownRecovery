import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UrgencyMarquee from '@/components/UrgencyMarquee';
import ServiceAvailability from '@/components/ServiceAvailability';
import ContactForm from '@/components/ContactForm';
import Services from '@/components/Services';
import DetailedContact from '@/components/DetailedContact';
import TrustSection from '@/components/TrustSection';
import RecoveryExpertise from '@/components/RecoveryExpertise';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />
            <div className="relative">
                <Hero />
                <UrgencyMarquee />
                <ServiceAvailability />
                <div id="emergency-form">
                    <ContactForm />
                </div>
                <Services />
                <DetailedContact />
                <TrustSection />
                <RecoveryExpertise />
                <Testimonials />
                <CallToAction />
                <Footer />
            </div>
        </main>
    );
}
