import { siteDetails } from '@/lib/siteDetails';

export default function ServiceArea() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-blue mb-4">Service Area</h2>
                    <p className="text-gray-500 font-medium text-lg">
                        Covering {siteDetails.serviceArea}
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] w-full bg-gray-100 relative border-4 border-white">
                    <iframe
                        src={siteDetails.googleMapsUrl.includes("http") ? siteDetails.googleMapsUrl : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339870628!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1645634567890!5m2!1sen!2suk"}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Service Area Map"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {['London', 'M25', 'M1', 'M4', 'M40', 'North London', 'Hertfordshire', 'Essex'].map((area) => (
                        <span key={area} className="bg-gray-50 border border-gray-200 text-gray-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-brand-blue hover:text-white transition-colors cursor-default">
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
