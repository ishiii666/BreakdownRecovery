"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Save, RefreshCw, LogOut, ShieldCheck, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });
    const [config, setConfig] = useState({
        business_name: "",
        phone: "",
        whatsapp: "",
        email: "",
        service_area: ""
    });

    useEffect(() => {
        fetchConfig();
    }, []);

    async function fetchConfig() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("site_config")
                .select("*")
                .eq("id", 1)
                .single();

            if (error) throw error;
            if (data) {
                setConfig({
                    business_name: data.business_name,
                    phone: data.phone,
                    whatsapp: data.whatsapp,
                    email: data.email,
                    service_area: data.service_area
                });
            }
        } catch (error: any) {
            setMessage({ type: "error", text: "Failed to load configuration: " + error.message });
        } finally {
            setLoading(false);
        }
    }

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        try {
            setSaving(true);
            const { error } = await supabase
                .from("site_config")
                .update({
                    business_name: config.business_name,
                    phone: config.phone,
                    whatsapp: config.whatsapp,
                    email: config.email,
                    service_area: config.service_area,
                    updated_at: new Date().toISOString()
                })
                .eq("id", 1);

            if (error) throw error;
            setMessage({ type: "success", text: "Settings updated successfully! Changes are now live." });
            setTimeout(() => setMessage({ type: "", text: "" }), 5000);
        } catch (error: any) {
            setMessage({ type: "error", text: "Failed to save: " + error.message });
        } finally {
            setSaving(false);
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <RefreshCw className="w-10 h-10 text-brand-primary animate-spin" />
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Initializing Admin Console...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20">
                            <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-black tracking-tight">Rapid Rescue <span className="text-slate-400 font-medium">/ Admin</span></h1>
                            <p className="text-[10px] uppercase font-black tracking-widest text-emerald-500 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Live System Active
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="/" className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                            View Website
                        </Link>
                        <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid gap-8">
                    {/* Welcome Card */}
                    <div className="bg-brand-bg-dark rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black mb-4 italic tracking-tight">Main Dashboard</h2>
                            <p className="text-white/60 font-medium max-w-xl">
                                Welcome back. Here you can manage your company's core contact details.
                                Any changes made here will reflect globally across the entire website in real-time.
                            </p>
                        </div>
                    </div>

                    {/* Status Message */}
                    {message.text && (
                        <div className={`p-4 rounded-2xl flex items-center gap-3 font-bold text-sm ${message.type === "success" ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-red-500/10 text-red-600 border border-red-500/20"
                            }`}>
                            <div className={`w-2 h-2 rounded-full ${message.type === "success" ? "bg-emerald-500" : "bg-red-500"}`} />
                            {message.text}
                        </div>
                    )}

                    {/* Settings Form */}
                    <form onSubmit={handleSave} className="bg-white rounded-[40px] border border-slate-200 shadow-xl overflow-hidden">
                        <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
                            <h3 className="text-lg font-black uppercase tracking-widest text-slate-400 mb-6">Contact Configuration</h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                                        <ShieldCheck className="w-3.5 h-3.5" /> Company Name
                                    </label>
                                    <input
                                        type="text"
                                        value={config.business_name}
                                        onChange={(e) => setConfig({ ...config, business_name: e.target.value })}
                                        className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all outline-none font-bold"
                                        placeholder="e.g. Rapid Rescue"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                                        <Mail className="w-3.5 h-3.5" /> Support Email
                                    </label>
                                    <input
                                        type="email"
                                        value={config.email}
                                        onChange={(e) => setConfig({ ...config, email: e.target.value })}
                                        className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all outline-none font-bold"
                                        placeholder="e.g. help@rapidrescue.com"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                                        <Phone className="w-3.5 h-3.5" /> Emergency Phone
                                    </label>
                                    <input
                                        type="text"
                                        value={config.phone}
                                        onChange={(e) => setConfig({ ...config, phone: e.target.value })}
                                        className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all outline-none font-bold text-xl tracking-tight"
                                        placeholder="e.g. 0123 456 7890"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                                        <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Number
                                    </label>
                                    <input
                                        type="text"
                                        value={config.whatsapp}
                                        onChange={(e) => setConfig({ ...config, whatsapp: e.target.value })}
                                        className="w-full h-14 px-6 rounded-2xl bg-white border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all outline-none font-bold"
                                        placeholder="e.g. 0123 456 7890"
                                    />
                                </div>

                                <div className="md:col-span-2 space-y-4">
                                    <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                                        <MapPin className="w-3.5 h-3.5" /> Service Area Description
                                    </label>
                                    <textarea
                                        value={config.service_area}
                                        onChange={(e) => setConfig({ ...config, service_area: e.target.value })}
                                        className="w-full h-32 p-6 rounded-2xl bg-white border border-slate-200 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/5 transition-all outline-none font-bold resize-none"
                                        placeholder="Describe your coverage area..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-10 flex items-center justify-between bg-white">
                            <p className="text-xs font-bold text-slate-400">
                                Last saved: <span className="text-slate-600">{new Date().toLocaleTimeString()}</span>
                            </p>
                            <button
                                type="submit"
                                disabled={saving}
                                className="px-10 py-5 bg-brand-bg-dark text-white rounded-2xl font-black text-lg shadow-xl hover:bg-brand-primary hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex items-center gap-3"
                            >
                                {saving ? (
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                ) : (
                                    <Save className="w-5 h-5 text-brand-primary" />
                                )}
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
