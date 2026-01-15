const galleryImages = [
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563823251941-b9989d1e8d97?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620935515231-9799f928a6f2?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
    return (
        <section className="py-32 bg-slate-50 relative">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-brand-blue rounded-full text-xs font-black uppercase tracking-widest mb-4">
                        In Action
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Recent <span className="text-brand-blue">Deliveries</span></h2>
                    <p className="max-w-2xl mx-auto text-slate-500 text-lg font-medium leading-relaxed">
                        We handle everything from classic car transport to heavy-duty emergency motorway recoveries.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryImages.map((src, i) => (
                        <div key={i} className="break-inside-avoid glass-card rounded-[32px] overflow-hidden hover-3d group transition-all duration-500 shadow-xl hover:shadow-2xl">
                            <div className="relative">
                                <img
                                    src={src}
                                    alt={`Rescue Operation ${i + 1}`}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 h-2 w-2 rounded-full bg-green-500 ring-4 ring-green-500/20 shadow-lg"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <span className="text-white font-black text-xs uppercase tracking-[0.2em]">Verified Operation</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
