import { Clock, BarChart3, RefreshCw, Award, Wrench, Car, Phone } from 'lucide-react';
import Link from 'next/link';
import { siteDetails } from '@/lib/siteDetails';

const items = [
    {
        icon: <Clock className="w-10 h-10" />,
        title: "24/7 Breakdown Assistance",
        desc: "We are available 24 hours a day, 7 days a week to provide emergency vehicle assistance.",
    },
    {
        icon: <BarChart3 className="w-10 h-10" />,
        title: "Competitive Pricing",
        desc: "We provide a competitively priced professional recovery service in times of crisis.",
    },
    {
        icon: <RefreshCw className="w-10 h-10" />,
        title: "Vehicle Recovery From 30 Minutes",
        desc: "From the time you contact us, you can expect a recovery technician to arrive as soon as 30 minutes later.",
    },
    {
        icon: <Award className="w-10 h-10" />,
        title: "Professional & Experienced",
        desc: "Our friendly, professional, and highly experienced staff will meet your expectations.",
    },
    {
        icon: <Wrench className="w-10 h-10" />,
        title: "Leading Local Recovery Service",
        desc: "We are a leading recovery option and can assist with your requirements no matter the distance or demand.",
    },
    {
        icon: <Car className="w-10 h-10" />,
        title: "Always On The Road",
        desc: "Our fleet of recovery vehicles ensure we always have responsive and active patrols on the road waiting for your call.",
    }
];

export default function TrustSection() {
    return (
        <section className="py-24 bg-[#EBF5FB] relative overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">
                        Why Trust Breakdown Recovery?
                    </h2>
                    <p className="text-slate-600 font-medium leading-relaxed text-lg">
                        Breakdown Recovery brings years of expertise in delivering fast, reliable car recovery services across the North & the South of England. Whether you're dealing with a breakdown or need emergency roadside assistance, our professional team is ready to respond in as little as 30 minutes. Count on us to get you back on the road quickly and safely.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-center">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center group">
                            <div className="text-[#14A4B8] mb-6 transition-transform duration-300 group-hover:scale-110">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                                {item.title}
                            </h4>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        href={`tel:${siteDetails.phone}`}
                        className="inline-flex items-center gap-3 bg-[#0088CC] text-white px-8 py-3.5 rounded-lg font-black text-lg hover:bg-[#0077BB] transition-all shadow-lg active:scale-95"
                    >
                        Contact Us Now <Phone className="w-5 h-5 fill-white" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
