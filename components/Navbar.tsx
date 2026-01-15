import Link from 'next/link';
import { Phone, ChevronDown, Truck } from 'lucide-react';
import { siteDetails } from '@/lib/siteDetails';

export default function Navbar() {
    return (
        <header className="w-full fixed top-0 z-[100]">
            {/* 1. Top Utility Bar */}
            <div className="bg-[#0088CC] text-white py-2 px-4 md:px-8 flex justify-between items-center text-sm font-medium">
                <div className="flex items-center gap-2">
                    <span>24/7 Emergency Vehicle Recovery</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 fill-white" />
                    <span>Contact: {siteDetails.phone}</span>
                </div>
            </div>

            {/* 2. Main Navigation Header */}
            <nav className="bg-white py-4 shadow-md">
                <div className="container-custom flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex flex-col items-start group">
                        <div className="flex items-center text-[#0088CC]">
                            <Truck className="w-8 h-8 mr-2 fill-[#0088CC]" />
                            <div className="h-4 w-6 bg-[#0088CC] rounded-sm transform -skew-x-12 ml--2"></div>
                        </div>
                        <span className="text-2xl font-black text-[#0088CC] leading-none mt-1">BREAKDOWN</span>
                        <span className="text-xs font-bold text-[#0088CC] tracking-tight">Recovery Near Me</span>
                    </Link>

                    {/* Navigation Menu */}
                    <div className="hidden lg:flex items-center gap-5">
                        {/* Breakdown Recovery Dropdown */}
                        <div className="relative group py-2">
                            <button className="text-[#0088CC] font-bold hover:text-blue-700 transition-colors text-[15px] flex items-center gap-1">
                                Breakdown Recovery <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Dropdown Content */}
                            <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[110] border border-slate-100">
                                <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
                                    {[
                                        "Batley car recovery",
                                        "Bingley car recovery",
                                        "Birstall car recovery",
                                        "Bradford car recovery",
                                        "Brighouse car recovery",
                                        "Castleford car recovery",
                                        "Cleckheaton car recovery",
                                        "Denholme car recovery",
                                        "Dewsbury car recovery",
                                        "Elland car recovery",
                                        "Farsley car recovery",
                                        "Featherstone car recovery"
                                    ].map((location) => (
                                        <Link
                                            key={location}
                                            href="#"
                                            className="block px-6 py-2.5 text-[#0088CC] font-bold hover:bg-slate-50 transition-colors text-[15px]"
                                        >
                                            {location}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="#tyres" className="text-[#0088CC] font-bold hover:text-blue-700 transition-colors text-[15px]">
                            Flat Tyre Repair
                        </Link>
                        <Link href="#tyre-changes" className="text-[#0088CC] font-bold hover:text-blue-700 transition-colors text-[15px]">
                            Tyre Changes
                        </Link>
                        <Link href="#jump-starts" className="text-[#0088CC] font-bold hover:text-blue-700 transition-colors text-[15px]">
                            Jump Starts
                        </Link>
                        <Link href="#accident" className="text-[#0088CC] font-bold hover:text-blue-700 transition-colors text-[15px]">
                            Accident Recovery
                        </Link>
                        <Link href="#towing" className="text-[#0088CC] font-bold hover:text-blue-700 transition-colors text-[15px]">
                            Vehicle Towing
                        </Link>
                        <Link href="#contact" className="text-[#0088CC] font-bold hover:text-blue-700 transition-colors text-[15px]">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Icon (Placeholder) */}
                    <div className="lg:hidden text-[#0088CC]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
    );
}
