"use client";
"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        name: "Visual Tech",
        generic: "Sticker / Paper Doll Effect",
        wearai: "AI Body Mapping & Inpainting",
    },
    {
        name: "Lighting",
        generic: "Flat & Unnatural",
        wearai: "Environmental Light Adaptation",
    },
    {
        name: "Skin Tone",
        generic: "Often distorted",
        wearai: "Preserved & Untouched",
    },
    {
        name: "Cost Model",
        generic: "Expensive Monthly Credits",
        wearai: "Bring Your Own Key (Cost Effective)",
    },
];

export default function ComparisonTable() {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Why WearAI is <span className="text-gradient">Different.</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <div className="grid grid-cols-3 border-b border-white/10 bg-white/5 font-semibold text-lg">
                        <div className="p-6 text-white/60">Feature</div>
                        <div className="p-6 text-red-400 flex items-center gap-2">
                            <X className="w-5 h-5" /> Generic Plugins
                        </div>
                        <div className="p-6 text-emerald-400 flex items-center gap-2 bg-blue-900/10 border-t-4 border-blue-500">
                            <Check className="w-5 h-5 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" /> WearAI
                        </div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 hover:bg-white/5 transition-colors group"
                            >
                                <div className="p-6 font-medium text-white flex items-center">{feature.name}</div>
                                <div className="p-6 text-white/60 flex items-center">{feature.generic}</div>
                                <div className="p-6 text-white font-semibold text-emerald-400 bg-blue-900/5 group-hover:bg-blue-900/10 transition-colors flex items-center">
                                    {feature.wearai}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
