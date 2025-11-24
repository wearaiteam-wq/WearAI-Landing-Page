"use client";

import { motion } from "framer-motion";
import { ScanFace, Shirt, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Body Mapping Technology",
        description: "Our engine doesn't just overlay. It analyzes specific body geometry, identifying joints and posture.",
        icon: ScanFace,
        image: "/assets/features/Body Mapping Technology.png",
        delay: 0.2,
    },
    {
        title: "Fabric Physics",
        description: "The AI understands how cloth folds. If the user lifts their arm, the sleeve reacts naturally.",
        icon: Shirt,
        image: "/assets/features/Fabric Physics.png",
        delay: 0.4,
    },
    {
        title: "Perfect Scale",
        description: "We achieve a 90% size-to-scale accuracy. The fit you see on screen is the fit you get in the mail.",
        icon: Ruler,
        image: "/assets/features/Perfect Scale.png",
        delay: 0.6,
    },
];

export default function Features() {
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
                        Unmatched Realism. <br />
                        <span className="text-gradient">90% Visual Accuracy.</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay, duration: 0.5 }}
                            className={cn(
                                "glass-card p-8 hover:bg-white/10 transition-colors duration-300",
                                "flex flex-col items-start gap-4 group"
                            )}
                        >
                            {/* Feature Image */}
                            <div className="w-full h-48 rounded-xl overflow-hidden bg-white/5 mb-2">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>

                            <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
