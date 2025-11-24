"use client";

import { motion } from "framer-motion";

export default function Showcase() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto max-w-5xl"
                >
                    {/* MacBook Frame Placeholder */}
                    <div className="relative bg-[#1a1a1a] rounded-t-[2rem] p-4 border-2 border-gray-700 shadow-2xl ring-1 ring-white/10">
                        {/* Camera Dot */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full z-20 ring-1 ring-white/10" />

                        {/* Screen */}
                        <div className="aspect-video bg-black rounded-xl overflow-hidden relative group border border-white/5">
                            {/* Video Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-90"
                                >
                                    <source src="/assets/showcase/laptop-screen.mp4" type="video/mp4" />
                                </video>

                                {/* Fallback Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* MacBook Base */}
                    <div className="relative mx-auto w-[110%] h-5 bg-[#2a2a2a] rounded-b-xl shadow-xl -mt-1 z-10 border-t border-gray-800">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-[#1a1a1a] rounded-b-lg border border-white/5" />
                    </div>

                    {/* Glass Pedestal / Reflection */}
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-gradient-to-b from-primary/10 to-transparent blur-2xl rounded-full pointer-events-none" />

                    <div className="mt-12 text-center">
                        <p className="text-white/60 text-lg font-medium">
                            Seamlessly integrated into WooCommerce. <span className="text-white">It feels native.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
