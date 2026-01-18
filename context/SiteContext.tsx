"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { siteDetails as staticDetails } from "@/lib/siteDetails";

type SiteConfig = {
    businessName: string;
    phone: string;
    whatsapp: string;
    email: string;
    serviceArea: string;
};

type SiteContextType = {
    details: SiteConfig;
    loading: boolean;
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
    const [details, setDetails] = useState<SiteConfig>({
        businessName: staticDetails.businessName,
        phone: staticDetails.phone,
        whatsapp: staticDetails.whatsapp,
        email: staticDetails.email,
        serviceArea: staticDetails.serviceArea,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch initial data
        fetchConfig();

        // Subscribe to real-time changes
        const channel = supabase
            .channel('site_config_changes')
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'site_config',
                    filter: 'id=eq.1'
                },
                (payload) => {
                    const newData = payload.new;
                    setDetails({
                        businessName: newData.business_name,
                        phone: newData.phone,
                        whatsapp: newData.whatsapp,
                        email: newData.email,
                        serviceArea: newData.service_area,
                    });
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    async function fetchConfig() {
        try {
            const { data, error } = await supabase
                .from("site_config")
                .select("*")
                .eq("id", 1)
                .single();

            if (error) throw error;
            if (data) {
                // Explicitly mapping because database names are snake_case
                setDetails({
                    businessName: data.business_name,
                    phone: data.phone,
                    whatsapp: data.whatsapp,
                    email: data.email,
                    serviceArea: data.service_area,
                });
            }
        } catch (error) {
            console.error("Error fetching site config:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <SiteContext.Provider value={{ details, loading }}>
            {children}
        </SiteContext.Provider>
    );
}

export function useSite() {
    const context = useContext(SiteContext);
    if (context === undefined) {
        throw new Error("useSite must be used within a SiteProvider");
    }
    return context;
}
