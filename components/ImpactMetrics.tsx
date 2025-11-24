"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowDown } from 'lucide-react';

const ImpactMetrics = () => {
    return (
        <section className="relative py-24 bg-[#030712] overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

            {/* Ambient Green Glow */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[128px] -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text: The Pitch */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                Don't just show products. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                                    Sell confidence.
                                </span>
                            </h2>
                            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                                When customers can visualize the fit, hesitation disappears.
                                WearAI doesn't just look cool—it pays for itself in reduced returns and higher cart values.
                            </p>
                        </motion.div>

                        {/* Stat Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <StatCard
                                icon={<TrendingUp className="text-green-400" />}
                                label="Conversion Rate"
                                value="+40%"
                                desc="More add-to-carts"
                            />
                            <StatCard
                                icon={<ArrowDown className="text-blue-400" />}
                                label="Return Rate"
                                value="-30%"
                                desc="Fewer refunds"
                            />
                        </div>
                    </div>

                    {/* Right Visual: The Animated Graph */}
                    <div className="relative h-[400px] bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-end overflow-hidden group">

                        {/* The Header of the Graph */}
                        <div className="absolute top-8 left-8">
                            <span className="text-sm text-gray-400 uppercase tracking-widest">Projected Revenue</span>
                            <div className="text-3xl font-bold text-white mt-1">$124,500 <span className="text-sm font-normal text-green-400 ml-2">(+22%)</span></div>
                        </div>

                        {/* The SVG Graph Line */}
                        <div className="relative w-full h-[200px]">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                                {/* Gradient Fill Area */}
                                <motion.path
                                    d="M0 200 L0 150 C50 150, 100 100, 150 120 C200 140, 250 50, 300 40 C350 30, 400 0, 400 0 V200 Z"
                                    fill="url(#gradient)"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.5 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />

                                {/* The Stroke Line */}
                                <motion.path
                                    d="M0 150 C50 150, 100 100, 150 120 C200 140, 250 50, 300 40 C350 30, 400 0, 400 0"
                                    fill="none"
                                    stroke="#4ade80" // Green-400
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    viewport={{ once: true }}
                                />

                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Floating Label */}
                            <motion.div
                                className="absolute top-0 right-0 bg-green-500 text-black font-bold text-xs px-2 py-1 rounded-full shadow-[0_0_20px_rgba(74,222,128,0.5)]"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: -10 }}
                                transition={{ delay: 1.8 }}
                            >
                                WearAI Effect
                            </motion.div>
                        </div>

                        {/* X-Axis Labels */}
                        <div className="flex justify-between mt-4 text-xs text-gray-600 border-t border-white/5 pt-4">
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span className="text-white font-bold">Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Sub-component for small stats
const StatCard = ({ icon, label, value, desc }: any) => (
    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
            <span className="text-sm text-gray-400">{label}</span>
        </div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-xs text-gray-500 mt-1">{desc}</div>
    </div>
);

export default ImpactMetrics;
