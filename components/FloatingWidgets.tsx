import { Phone, MessageCircle } from 'lucide-react';
import { siteDetails } from '@/lib/siteDetails';

export default function FloatingWidgets() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[200]">
            {/* Bottom-Left: Live Support */}
            <div className="absolute bottom-6 left-6 pointer-events-auto">
                <a
                    href={`tel:${siteDetails.phone}`}
                    className="flex items-center gap-2 bg-[#FF0000] text-white px-4 py-2 rounded-lg shadow-xl hover:scale-105 transition-all font-bold text-xs"
                >
                    <div className="bg-white rounded-full p-1">
                        <Phone className="w-3 h-3 text-[#FF0000] fill-[#FF0000]" />
                    </div>
                    <span>Live Support 24/7</span>
                </a>
            </div>

            {/* Bottom-Right: WhatsApp Business */}
            <div className="absolute bottom-6 right-6 pointer-events-auto">
                <a
                    href={`https://wa.me/${siteDetails.whatsapp}`}
                    className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all group border-4 border-white/20"
                    title="WhatsApp Support"
                >
                    <div className="relative flex items-center justify-center">
                        <MessageCircle className="w-8 h-8 text-white fill-white" />
                        <span className="absolute text-[#25D366] font-black text-[10px] pb-0.5">B</span>
                    </div>
                </a>
            </div>
        </div>
    );
}
