"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Shield, Sliders, Palette, BarChart3, ChevronDown, Eye, Check, Search } from 'lucide-react';

const AdminBento = () => {
    return (
        <section className="py-24 bg-[#030712] relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Mission Control for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Store Owners</span>.
                    </h2>
                    <p className="text-lg text-gray-400">
                        Advanced admin tools for effortless control. Manage everything securely in real-time.
                    </p>
                </div>

                {/* The Coded Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

                    {/* --- CARD 1: DASHBOARD (Large spanning 2 cols) --- */}
                    <div className="md:col-span-2 row-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden relative group">
                        <div className="relative z-20 mb-8">
                            <div className="p-3 bg-wearai-primary/20 rounded-xl w-fit mb-4">
                                <Settings className="text-wearai-accent h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Manage Everything with Ease</h3>
                            <p className="text-gray-400">Full overview of your try-on metrics and settings.</p>
                        </div>

                        {/* CODED UI MOCKUP: Dashboard */}
                        <div className="relative z-10 bg-[#0B1121] border border-white/10 rounded-xl p-6 shadow-2xl ml-4 mt-4 group-hover:-translate-y-2 transition-transform duration-500">
                            {/* Fake Nav */}
                            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                <div className="flex gap-4 text-sm font-medium text-gray-400">
                                    <span className="text-wearai-accent border-b-2 border-wearai-accent pb-4 -mb-4">Dashboard</span>
                                    <span>General</span>
                                    <span>Button</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="px-3 py-1 bg-wearai-primary text-white text-xs rounded-md">Agency</div>
                                </div>
                            </div>
                            {/* Fake Stats Row */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="text-xs text-gray-500 mb-1">Images Generated</div>
                                    <div className="text-2xl font-bold text-white">326</div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="text-xs text-gray-500 mb-1">Add to Cart Events</div>
                                    <div className="text-2xl font-bold text-white">237</div>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5 bg-gradient-to-br from-wearai-primary/10 to-transparent">
                                    <div className="text-xs text-gray-300 mb-1">Revenue Generated</div>
                                    <div className="text-2xl font-bold text-wearai-accent">₹1,54,778</div>
                                </div>
                            </div>
                            {/* Fake Chart placeholders */}
                            <div className="grid grid-cols-2 gap-4 h-32">
                                <div className="bg-white/5 rounded-xl border border-white/5 flex items-end p-4 gap-2">
                                    <div className="h-1/3 w-full bg-purple-500/50 rounded-t-sm animate-pulse"></div>
                                    <div className="h-2/3 w-full bg-purple-500/80 rounded-t-sm"></div>
                                    <div className="h-1/2 w-full bg-purple-500/60 rounded-t-sm animate-pulse"></div>
                                </div>
                                <div className="bg-white/5 rounded-xl border border-white/5 flex items-end p-4">
                                    <div className="h-full w-1/4 bg-green-500 rounded-t-sm ml-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- CARD 2: API & SECURITY (Tall) --- */}
                    <div className="row-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative group overflow-hidden">
                        <div className="relative z-20 mb-8">
                            <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-4">
                                <Shield className="text-green-400 h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">API & Key Management</h3>
                            <p className="text-gray-400">Securely handle AI provider keys.</p>
                        </div>
                        {/* CODED UI MOCKUP: API Select */}
                        <div className="relative z-10 bg-[#0B1121] border border-white/10 rounded-xl p-4 shadow-xl group-hover:-translate-y-2 transition-transform duration-500 mt-auto">
                            <label className="text-xs text-gray-400 mb-2 block">Select AI Provider</label>
                            <div className="w-full p-3 bg-white/5 border border-wearai-primary/50 rounded-lg flex justify-between items-center text-white mb-4">
                                <span>Google Gemini (Recommended)</span>
                                <ChevronDown size={16} />
                            </div>
                            {/* Pricing Info Boxes */}
                            <div className="grid grid-cols-2 gap-2 mb-4">
                                <div className="p-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                                    <div className="text-xs text-green-400 font-bold">GEMINI</div>
                                    <div className="text-[10px] text-gray-400">$0.078 / image</div>
                                </div>
                                <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg opacity-50">
                                    <div className="text-xs text-blue-400 font-bold">NANO BANANA</div>
                                    <div className="text-[10px] text-gray-400">Legacy</div>
                                </div>
                            </div>
                            <label className="text-xs text-gray-400 mb-2 block">API Key</label>
                            <div className="w-full p-3 bg-white/5 border border-white/10 rounded-lg flex justify-between items-center text-gray-500">
                                <span className="tracking-widest">••••••••••••••••</span>
                                <Eye size={16} />
                            </div>
                        </div>
                    </div>

                    {/* --- CARD 3: USAGE LIMITS (Wide) --- */}
                    <div className="md:col-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative group overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                        <div className="relative z-20 flex-1">
                            <div className="p-3 bg-orange-500/20 rounded-xl w-fit mb-4">
                                <Sliders className="text-orange-400 h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Usage Limits <span className="text-xs bg-wearai-primary px-2 py-1 rounded-md ml-2">PRO</span></h3>
                            <p className="text-gray-400">Prevent abuse with custom cooldowns.</p>
                        </div>
                        {/* CODED UI MOCKUP: Toggles/Inputs */}
                        <div className="relative z-10 bg-[#0B1121] border border-white/10 rounded-xl p-6 shadow-xl w-full md:w-[400px] group-hover:-translate-x-2 transition-transform duration-500">
                            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                <span className="text-white font-medium">Rate Limiting</span>
                                {/* Fake Toggle */}
                                <div className="w-12 h-6 bg-wearai-primary rounded-full relative px-1 flex items-center justify-end">
                                    <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-400 mb-1 block">Cooldown (hours)</label>
                                    <input type="text" value="24" readOnly className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white text-center focus:outline-none" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 mb-1 block">Max Generations</label>
                                    <input type="text" value="3" readOnly className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white text-center focus:outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- CARD 4: CUSTOMIZATION (Small) --- */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative group overflow-hidden">
                        <div className="relative z-20 mb-4">
                            <div className="p-3 bg-pink-500/20 rounded-xl w-fit mb-4">
                                <Palette className="text-pink-400 h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Customization</h3>
                            <p className="text-gray-400 text-sm">One-click color sync.</p>
                        </div>
                        {/* CODED UI MOCKUP: Color Picker */}
                        <div className="relative z-10 bg-[#0B1121] border border-white/10 rounded-xl p-4 shadow-xl group-hover:-translate-y-2 transition-transform duration-500 flex items-center gap-4">
                            <div className="h-10 w-10 rounded-lg bg-[#a41bee] border-2 border-white shadow-[0_0_10px_#a41bee]"></div>
                            <div className="flex-1">
                                <div className="text-xs text-gray-400">Brand Color</div>
                                <div className="text-sm text-white font-mono">#a41bee</div>
                            </div>
                            <Check size={16} className="text-green-400" />
                        </div>
                    </div>

                    {/* --- CARD 5: INSIGHTS (Small) --- */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative group overflow-hidden">
                        <div className="relative z-20 mb-4">
                            <div className="p-3 bg-blue-500/20 rounded-xl w-fit mb-4">
                                <BarChart3 className="text-blue-400 h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Powerful Insights</h3>
                            <p className="text-gray-400 text-sm">Track conversions.</p>
                        </div>
                        {/* CODED UI MOCKUP: Mini Charts */}
                        <div className="relative z-10 bg-[#0B1121] border border-white/10 rounded-xl p-4 shadow-xl group-hover:-translate-y-2 transition-transform duration-500 flex gap-2 h-20 items-end">
                            {/* Fake mini bars */}
                            <div className="flex-1 h-full flex items-end gap-1">
                                <div className="w-full bg-blue-500/30 h-[40%] rounded-t-sm"></div>
                                <div className="w-full bg-blue-500 h-[80%] rounded-t-sm"></div>
                                <div className="w-full bg-blue-500/50 h-[60%] rounded-t-sm"></div>
                            </div>
                            <div className="flex-1 h-full flex items-end ml-2 border-l border-white/5 pl-2">
                                <div className="w-full bg-green-500 h-[90%] rounded-t-sm"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdminBento;

