import { CreditCard, ChevronRight, Search } from 'lucide-react';

export default function ServiceAvailability() {
    return (
        <section className="bg-[#EBF5FB] py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                {/* 1. Payment CTA */}
                <button className="bg-[#27AE60] text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(39,174,96,0.3)] hover:scale-105 transition-transform mb-12">
                    <CreditCard className="w-5 h-5 fill-white" />
                    Click To Pay
                </button>

                {/* 2. Multi-Step Progress Indicator */}
                <div className="w-full max-w-md relative flex justify-between items-center mb-16">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300 -translate-y-1/2 z-0"></div>
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[#0088CC] text-white flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[#0088CC] text-white flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                </div>

                {/* 3. Search Functionality */}
                <div className="w-full text-center mb-16">
                    <h2 className="text-[#0088CC] text-2xl md:text-3xl font-bold mb-8">
                        Find our closest recovery technician near you...
                    </h2>

                    <div className="w-full max-w-2xl mx-auto space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter your postcode or closest town"
                                className="w-full py-4 px-6 rounded-md bg-white border border-[#0088CC] text-gray-700 placeholder:italic focus:outline-none focus:ring-2 focus:ring-[#0088CC]/20 transition-all text-center md:text-left"
                            />
                        </div>

                        <button className="bg-[#0088CC] text-white px-10 py-4 rounded-md font-bold flex items-center gap-2 hover:bg-[#0077BB] transition-colors mx-auto uppercase tracking-wide">
                            Check Availability Near You
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* 4. Trust/Partner Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-70">
                    {/* AA */}
                    <div className="flex items-center gap-2 bg-[#FFD700] px-4 py-2 rounded font-black text-black text-sm">
                        <span className="text-xl">AA</span>
                        <span className="text-[10px] leading-tight">APPROVED<br />REPAIRER</span>
                    </div>
                    {/* Green Flag */}
                    <div className="flex items-center gap-2 text-[#27AE60] font-black italic">
                        <div className="w-6 h-8 bg-[#27AE60] skew-x-[-15deg]"></div>
                        <span className="text-lg">GREEN FLAG</span>
                    </div>
                    {/* REACT */}
                    <div className="flex flex-col items-center">
                        <span className="text-[#0088CC] font-black text-xl italic tracking-tighter">REACT</span>
                        <div className="h-1 w-full flex">
                            <div className="w-1/2 bg-[#0088CC]"></div>
                            <div className="w-1/2 bg-red-600"></div>
                        </div>
                    </div>
                    {/* RAC */}
                    <div className="flex items-center gap-2">
                        <div className="bg-[#F26522] text-white font-black px-2 py-1 rounded italic text-xl">RAC</div>
                        <span className="text-gray-500 font-bold text-[10px] uppercase leading-tight">Accredited<br />Repairer</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
