"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Shirt } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-wearai-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">v2.0 Model Live</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                                The Changing Room <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-wearai-accent to-purple-400">
                                    is Now Everywhere.
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Reduce returns and skyrocket conversions with the world's most accurate Virtual Try-On plugin for WooCommerce. Powered by military-grade AI.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="https://dev.ufhglobal.org/product-category/uncategorized/"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-wearai-primary to-wearai-accent text-white font-semibold shadow-lg hover:shadow-wearai-primary/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                Try Live Demo
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium backdrop-blur-sm transition-all flex items-center justify-center"
                            >
                                Talk to Sales
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Visual - Animated 3D Phone Concept */}
                    <div className="relative flex justify-center items-center h-[500px]">
                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                            className="relative z-20"
                        >
                            {/* Phone Frame */}
                            <div className="w-[300px] h-[580px] bg-[#0f172a] rounded-[40px] border-[8px] border-[#334155] shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                                {/* Screen Content */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black p-4 flex flex-col">
                                    {/* Fake UI Header */}
                                    <div className="flex justify-between items-center mb-6 px-2 pt-4">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                            <Smartphone size={16} className="text-gray-400" />
                                        </div>
                                        <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                                    </div>

                                    {/* Product Image Placeholder */}
                                    <div className="relative flex-1 rounded-2xl overflow-hidden bg-gray-800 mb-4 group">
                                        <img
                                            src="/assets/hero/phone-screen.png"
                                            alt="Virtual Try-On Demo"
                                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                                        />

                                        {/* Scanning Line Animation */}
                                        <motion.div
                                            className="absolute left-0 right-0 h-1 bg-wearai-accent shadow-[0_0_20px_rgba(59,130,246,0.8)] z-30"
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                                        />

                                        {/* Grid Overlay for Tech feel */}
                                        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>

                                        {/* Floating Tag */}
                                        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span className="text-xs text-white">Size: M (98% Match)</span>
                                        </div>
                                    </div>

                                    {/* Bottom UI */}
                                    <div className="h-16 bg-white/5 rounded-xl flex items-center justify-between px-4 border border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-gray-400">Cart Total</span>
                                            <span className="text-sm font-bold text-white">₹1,299.00</span>
                                        </div>
                                        <button className="bg-wearai-primary p-2 rounded-lg text-white">
                                            <Shirt size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements Behind */}
                            <motion.div
                                animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
                                transition={{ duration: 7, repeat: Infinity }}
                                className="absolute -right-12 top-20 bg-wearai-bg/80 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-xl max-w-[150px]"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs font-bold">✓</div>
                                    <span className="text-xs font-bold text-white">Fit Verified</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full w-[92%] bg-green-500"></div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
