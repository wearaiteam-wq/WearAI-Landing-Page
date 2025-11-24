"use client";

import { motion } from "framer-motion";
import { MessageCircle, Linkedin, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const contactOptions = [
    {
        id: 1,
        title: "WhatsApp",
        subtitle: "+91 7017 791 820",
        icon: MessageCircle,
        color: "from-green-500 to-emerald-600",
        link: "https://wa.me/917017791820",
        btnText: "Chat Now",
        delay: 0.2,
    },
    {
        id: 2,
        title: "LinkedIn",
        subtitle: "WearAI Tech",
        icon: Linkedin,
        color: "from-blue-600 to-indigo-700",
        link: "https://www.linkedin.com/company/wearai-tech/",
        btnText: "Connect",
        delay: 0.3,
    },
    {
        id: 3,
        title: "Instagram",
        subtitle: "@wearai.plugin",
        icon: Instagram,
        color: "from-pink-500 to-rose-500",
        link: "https://www.instagram.com/wearai.plugin/",
        btnText: "Follow Us",
        delay: 0.4,
    }
];

export default function ContactHub() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Stop Guessing. <span className="text-gradient">Start Fitting.</span>
                    </motion.h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        We don't sell licenses publicly. We build partnerships. Contact us to get your exclusive API key.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {contactOptions.map((contact) => (
                        <motion.div
                            key={contact.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: contact.delay }}
                        >
                            <Link
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block relative overflow-hidden rounded-2xl glass-card p-8 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className={cn(
                                    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br",
                                    contact.color
                                )} />

                                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                                    <div className={cn(
                                        "p-4 rounded-full bg-gradient-to-br text-white shadow-lg",
                                        contact.color
                                    )}>
                                        <contact.icon className="w-6 h-6" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{contact.title}</h3>
                                        <p className="text-white/60 text-sm">{contact.subtitle}</p>
                                    </div>

                                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                                        {contact.btnText} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Direct Contact Footer */}
                <div className="mt-16 text-center border-t border-white/5 pt-8 space-y-2">
                    <p className="text-lg text-gray-400">
                        Prefer Email? <a href="mailto:wearaiteam@gmail.com" className="text-white font-bold hover:text-wearai-accent transition-colors">wearaiteam@gmail.com</a>
                    </p>
                    <p className="text-sm text-gray-600">
                        Support available 9AM - 9PM IST
                    </p>
                </div>
            </div>
        </section>
    );
}
