"use client";

import { useSite } from "@/context/SiteContext";
import { Phone, Mail } from "lucide-react";

export function DynamicPhone({ className, iconClass }: { className?: string, iconClass?: string }) {
    const { details } = useSite();
    return (
        <a href={`tel:${details.phone}`} className={className}>
            {iconClass && <Phone className={iconClass} />}
            <span>{details.phone}</span>
        </a>
    );
}

export function DynamicEmail({ className, iconClass }: { className?: string, iconClass?: string }) {
    const { details } = useSite();
    return (
        <a href={`mailto:${details.email}`} className={className}>
            {iconClass && <Mail className={iconClass} />}
            <span>{details.email}</span>
        </a>
    );
}

export function DynamicBusinessName() {
    const { details } = useSite();
    return <>{details.businessName}</>;
}
