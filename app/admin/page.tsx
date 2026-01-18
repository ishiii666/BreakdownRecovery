"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import {
    Save,
    RefreshCw,
    LogOut,
    ShieldCheck,
    Mail,
    Phone,
    MapPin,
    MessageCircle,
    LayoutDashboard,
    Bell,
    User,
    ChevronRight,
    Lock,
    Eye,
    EyeOff,
    Trash2,
    CheckCircle2,
    Calendar,
    ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type ViewType = 'profile' | 'notifications';

export default function AdminPage() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [activeView, setActiveView] = useState<ViewType>('profile');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });
    const [logs, setLogs] = useState<any[]>([]);

    // Core Config state
    const [config, setConfig] = useState({
        business_name: "",
        phone: "",
        whatsapp: "",
        email: "",
        service_area: "",
        admin_password: "rapidadmin2024" // Fallback
    });

    // Check session on mount
    useEffect(() => {
        const session = typeof window !== 'undefined' ? localStorage.getItem("rapid_admin_auth") : null;
        if (session === "true") {
            setIsAuthorized(true);
        }
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        await Promise.all([fetchConfig(), fetchLogs()]);
        setLoading(false);
    };

    const fetchConfig = async () => {
        try {
            const { data, error } = await supabase
                .from("site_config")
                .select("*")
                .eq("id", 1)
                .single();

            if (error) throw error;
            if (data) {
                setConfig({
                    business_name: data.business_name || "",
                    phone: data.phone || "",
                    whatsapp: data.whatsapp || "",
                    email: data.email || "",
                    service_area: data.service_area || "",
                    admin_password: data.admin_password || "rapidadmin2024"
                });
            }
        } catch (error) {
            console.error("Config load error:", error);
        }
    };

    const fetchLogs = async () => {
        try {
            const { data, error } = await supabase
                .from("dispatch_logs")
                .select("*")
                .order('created_at', { ascending: false });

            if (error && error.code !== 'PGRST116') throw error;
            setLogs(data || []);
        } catch (error) {
            console.error("Logs load error:", error);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Since we fetch config and it contains the password, we check against that
        if (passwordInput === config.admin_password) {
            setIsAuthorized(true);
            localStorage.setItem("rapid_admin_auth", "true");
            setMessage({ type: "success", text: "Welcome Administrator" });
            setTimeout(() => setMessage({ type: "", text: "" }), 3000);
        } else {
            setMessage({ type: "error", text: "Incorrect Management Password" });
        }
    };

    const handleLogout = () => {
        setIsAuthorized(false);
        localStorage.removeItem("rapid_admin_auth");
    };

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            const { error } = await supabase
                .from("site_config")
                .update({
                    business_name: config.business_name,
                    phone: config.phone,
                    whatsapp: config.whatsapp,
                    email: config.email,
                    service_area: config.service_area,
                    admin_password: config.admin_password,
                    updated_at: new Date().toISOString()
                })
                .eq("id", 1);

            if (error) throw error;
            setMessage({ type: "success", text: "Profile updated successfully" });
            setTimeout(() => setMessage({ type: "", text: "" }), 3000);
        } catch (error: any) {
            setMessage({ type: "error", text: "Save error: " + error.message });
        } finally {
            setSaving(false);
        }
    };

    const deleteLog = async (id: number) => {
        try {
            const { error } = await supabase.from("dispatch_logs").delete().eq("id", id);
            if (error) throw error;
            setLogs(logs.filter(log => log.id !== id));
        } catch (error) {
            console.error("Delete log error:", error);
        }
    };

    // --- RENDER LOGIN ---
    if (!isAuthorized) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md bg-white border border-slate-200 shadow-2xl rounded-[40px] p-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />

                    <div className="text-center mb-10 relative z-10">
                        <div className="w-20 h-20 rounded-3xl bg-brand-bg-dark flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-bg-dark/20 text-brand-primary">
                            <ShieldCheck className="w-10 h-10" />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Admin Login</h1>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Rapid Rescue Management Panel</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-[0.2em]">Secret Key</label>
                            <div className="relative group">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-brand-primary transition-colors" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={passwordInput}
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                    placeholder="Enter Admin Password"
                                    className="w-full bg-slate-50 py-5 pl-14 pr-14 rounded-2xl border-2 border-slate-50 font-black text-slate-900 focus:bg-white focus:border-brand-primary/20 transition-all outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-brand-primary transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand-bg-dark text-white rounded-2xl py-5 font-black uppercase tracking-[0.2em] shadow-xl hover:bg-brand-primary active:scale-95 transition-all text-sm mb-4"
                        >
                            Access Dashboard
                        </button>
                    </form>

                    <Link href="/" className="mt-8 block text-center text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand-primary transition-colors">
                        ← Back to Live Site
                    </Link>

                    {message.text && (
                        <div className={`mt-6 p-4 rounded-xl text-center text-[10px] font-black uppercase tracking-widest ${message.type === 'error' ? 'bg-red-50 text-red-500 border border-red-100' : 'bg-emerald-50 text-emerald-500 border border-emerald-100'
                            }`}>
                            {message.text}
                        </div>
                    )}
                </motion.div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <RefreshCw className="w-10 h-10 text-brand-primary animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col lg:flex-row font-sans">
            {/* --- SIDEBAR --- */}
            <aside className="w-full lg:w-80 bg-brand-bg-dark flex flex-col h-auto lg:h-screen lg:fixed lg:left-0 lg:top-0 z-[100] border-r border-white/5">
                <div className="p-8 pb-10">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center shadow-lg shadow-brand-primary/20">
                            <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-white font-black text-xl italic tracking-tight">RAPID ADMIN</h1>
                    </div>

                    <nav className="space-y-3">
                        <button
                            onClick={() => setActiveView('profile')}
                            className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all font-black text-[11px] uppercase tracking-widest group ${activeView === 'profile' ? "bg-brand-primary text-white shadow-xl shadow-brand-primary/20" : "text-white/40 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <User className={`w-5 h-5 ${activeView === 'profile' ? "text-white" : "group-hover:text-brand-primary"}`} />
                            <span>Profile Settings</span>
                        </button>
                        <button
                            onClick={() => setActiveView('notifications')}
                            className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all font-black text-[11px] uppercase tracking-widest group relative overflow-hidden ${activeView === 'notifications' ? "bg-brand-primary text-white shadow-xl shadow-brand-primary/20" : "text-white/40 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <Bell className={`w-5 h-5 ${activeView === 'notifications' ? "text-white" : "group-hover:text-brand-primary"}`} />
                            <span>Notifications</span>
                            {logs.length > 0 && (
                                <span className="ml-auto bg-white/20 px-2 py-0.5 rounded-full text-[9px] font-black text-white">
                                    {logs.length}
                                </span>
                            )}
                        </button>
                    </nav>
                </div>

                <div className="mt-auto p-8 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-6 py-4 rounded-xl text-red-500 hover:bg-red-500/10 transition-all font-black text-[10px] uppercase tracking-widest"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* --- MAIN AREA --- */}
            <main className="flex-1 lg:ml-80 min-h-screen p-6 lg:p-12 lg:pt-20">
                <div className="max-w-5xl mx-auto">
                    {/* View Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase text-brand-primary tracking-[0.3em] mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                                Professional Command Center
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight italic">
                                {activeView === 'profile' ? 'Profile Setting' : 'Notifications'}
                            </h2>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="/" className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-50 transition-all flex items-center gap-2">
                                <ArrowLeft className="w-3.5 h-3.5" /> Site Preview
                            </Link>
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {activeView === 'profile' && (
                            <motion.div
                                key="profile"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <form onSubmit={handleSaveProfile} className="bg-white rounded-[48px] border border-slate-100 shadow-2xl shadow-brand-bg-dark/5 p-8 lg:p-12">
                                    <div className="grid md:grid-cols-2 gap-10 mb-12">
                                        <div className="space-y-6">
                                            <h3 className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 border-l-4 border-brand-primary pl-4">Company Identity</h3>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1 tracking-widest">Business Name</label>
                                                <input
                                                    type="text"
                                                    value={config.business_name}
                                                    onChange={(e) => setConfig({ ...config, business_name: e.target.value })}
                                                    className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-2 border-slate-50 font-black text-slate-900 focus:bg-white focus:border-brand-primary/20 transition-all outline-none shadow-inner"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1 tracking-widest">Emergency Line</label>
                                                <input
                                                    type="text"
                                                    value={config.phone}
                                                    onChange={(e) => setConfig({ ...config, phone: e.target.value })}
                                                    className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-2 border-slate-50 font-black text-slate-900 focus:bg-white focus:border-brand-primary/20 transition-all outline-none shadow-inner"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1 tracking-widest">WhatsApp Number</label>
                                                <input
                                                    type="text"
                                                    value={config.whatsapp}
                                                    onChange={(e) => setConfig({ ...config, whatsapp: e.target.value })}
                                                    className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-2 border-slate-50 font-black text-slate-900 focus:bg-white focus:border-brand-primary/20 transition-all outline-none shadow-inner"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <h3 className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 border-l-4 border-brand-primary pl-4">Digital Presence</h3>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1 tracking-widest">Support Email</label>
                                                <input
                                                    type="email"
                                                    value={config.email}
                                                    onChange={(e) => setConfig({ ...config, email: e.target.value })}
                                                    className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-2 border-slate-50 font-black text-slate-900 focus:bg-white focus:border-brand-primary/20 transition-all outline-none shadow-inner"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1 tracking-widest">Service Coverage</label>
                                                <textarea
                                                    value={config.service_area}
                                                    onChange={(e) => setConfig({ ...config, service_area: e.target.value })}
                                                    className="w-full bg-slate-50 py-5 px-6 rounded-2xl border-2 border-slate-50 font-black text-slate-900 focus:bg-white focus:border-brand-primary/20 transition-all outline-none h-[124px] resize-none shadow-inner leading-relaxed"
                                                />
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 pt-10 border-t border-slate-50">
                                            <h3 className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 border-l-4 border-red-500 pl-4">Security Credentials</h3>
                                            <div className="max-w-md space-y-2">
                                                <label className="text-[10px] font-black uppercase text-slate-500 ml-1 tracking-widest">Change Admin Password</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                                                    <input
                                                        type="text"
                                                        value={config.admin_password}
                                                        onChange={(e) => setConfig({ ...config, admin_password: e.target.value })}
                                                        placeholder="Create a new secret key"
                                                        className="w-full bg-red-50 py-5 pl-14 pr-6 rounded-2xl border-2 border-red-50 font-black text-red-900 focus:bg-white focus:border-red-200 transition-all outline-none"
                                                    />
                                                </div>
                                                <p className="text-[9px] text-red-400 font-bold uppercase tracking-wider ml-2 mt-2">
                                                    Warning: This key grants full access to site configuration.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                                        <div className="flex items-center gap-4">
                                            {message.text && (
                                                <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${message.type === 'success' ? 'bg-emerald-50 text-emerald-500' : 'bg-red-50 text-red-500'
                                                    }`}>
                                                    {message.text}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={saving}
                                            className="px-12 py-5 bg-brand-bg-dark text-white rounded-3xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-brand-primary hover:scale-105 active:scale-95 transition-all flex items-center gap-3 disabled:opacity-50 disabled:scale-100"
                                        >
                                            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4 text-brand-primary" />}
                                            <span>Commit Profile Changes</span>
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {activeView === 'notifications' && (
                            <motion.div
                                key="notifications"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-6"
                            >
                                <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl p-8 lg:p-10 mb-8 flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300">
                                            <Bell className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-slate-900 tracking-tight">Active Inquiries</h3>
                                            <p className="text-sm font-medium text-slate-400">Showing all submissions received via website forms</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-4xl font-black text-brand-primary tracking-tighter leading-none">{logs.length}</p>
                                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Total Logs</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {logs.length === 0 ? (
                                        <div className="bg-white p-20 rounded-[48px] border border-slate-100 text-center">
                                            <CheckCircle2 className="w-16 h-16 text-slate-100 mx-auto mb-6" />
                                            <h4 className="text-xl font-black text-slate-300 italic tracking-tight">No notifications found</h4>
                                        </div>
                                    ) : (
                                        logs.map((log) => (
                                            <motion.div
                                                key={log.id}
                                                layout
                                                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-primary/10 transition-all group"
                                            >
                                                <div className="flex flex-col md:flex-row gap-8">
                                                    <div className="w-full md:w-64 flex flex-col justify-between border-r border-slate-50 pr-8">
                                                        <div className="space-y-4">
                                                            <div className="flex items-center gap-3">
                                                                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${log.type === 'breakdown' ? 'bg-red-50 text-red-600' :
                                                                        log.type === 'tyres' ? 'bg-brand-primary/10 text-brand-primary' :
                                                                            'bg-slate-900 text-white'
                                                                    }`}>
                                                                    {log.type}
                                                                </span>
                                                                <div className="flex items-center gap-1.5 text-emerald-500">
                                                                    <CheckCircle2 className="w-3 h-3" />
                                                                    <span className="text-[9px] font-black uppercase tracking-wider">Dispatched</span>
                                                                </div>
                                                            </div>
                                                            <h4 className="text-2xl font-black text-slate-900 tracking-tight lowercase first-letter:uppercase truncate">
                                                                {log.customer_name}
                                                            </h4>
                                                            <div className="flex items-center gap-2 text-slate-400">
                                                                <Phone className="w-3.5 h-3.5" />
                                                                <span className="text-xs font-bold">{log.customer_phone}</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                                            <Calendar className="w-3.5 h-3.5 text-slate-200" />
                                                            {new Date(log.created_at).toLocaleDateString()} @ {new Date(log.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                        </div>
                                                    </div>

                                                    <div className="flex-1">
                                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                            {Object.entries(log.data || {}).map(([key, val]: [string, any]) => {
                                                                if (!val || typeof val === 'object' || key === 'loading') return null;
                                                                return (
                                                                    <div key={key}>
                                                                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 block mb-1">{key.replace(/([A-Z])/g, ' $1')}</span>
                                                                        <span className="text-sm font-bold text-slate-600 truncate block">{val}</span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center">
                                                        <button
                                                            onClick={() => deleteLog(log.id)}
                                                            className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-300 hover:bg-red-50 hover:text-red-500 transition-all flex items-center justify-center group/del"
                                                        >
                                                            <Trash2 className="w-5 h-5 group-hover/del:scale-110 transition-transform" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
