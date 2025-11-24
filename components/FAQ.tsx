"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How is WearAI different from other plugins?",
        answer: "Most plugins just paste a 2D 'sticker' of the cloth over the user. WearAI uses advanced Body Mapping and Physics to analyze the user's pose, ensuring the fabric folds, lighting, and fit look 100% realistic."
    },
    {
        question: "Do I need to handle technical API keys?",
        answer: "No. We believe in simplicity. Your WearAI license is all-inclusive. We handle the complex AI infrastructure, API connections, and server balancing on our end. You simply install the plugin, and it works instantly without any technical setup."
    },
    {
        question: "Does it work with my Theme / Page Builder?",
        answer: "Absolutely. WearAI is designed to hook automatically into WooCommerce standard hooks. It works seamlessly with Elementor, Divi, Flatsome, and default WordPress themes. No coding required."
    },
    {
        question: "Will it slow down my website?",
        answer: "Zero impact. We use client-side compression before the image ever leaves the user's device, and all the heavy AI processing happens in the cloud. Your server load remains untouched."
    },
    {
        question: "Is it GDPR Compliant? Do you store photos?",
        answer: "We take privacy seriously. User photos are processed in-memory for the try-on session and then immediately discarded. We do not store, save, or use customer photos for training models."
    },
    {
        question: "How can I purchase the plugin?",
        answer: "To ensure the highest quality of service, we do not sell public licenses. Access is granted exclusively by contacting our team via WhatsApp or Email. We will verify your store's compatibility and set you up personally."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
    return (
        <div
            onClick={onClick}
            className={`border border-white/10 rounded-2xl bg-white/5 overflow-hidden cursor-pointer transition-all duration-300 ${isOpen ? 'bg-white/10 border-wearai-primary/50' : 'hover:bg-white/10'}`}
        >
            <div className="flex justify-between items-center p-6">
                <h3 className="text-lg font-semibold text-white">{question}</h3>
                <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-wearai-primary' : ''}`}>
                    {isOpen ? <Minus size={16} className="text-white" /> : <Plus size={16} className="text-gray-400" />}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[#030712] relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Questions</span>
                    </h2>
                    <p className="text-gray-400">Everything you need to know about the integration.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        {faqs.slice(0, 3).map((faq, i) => (
                            <FAQItem
                                key={i}
                                {...faq}
                                isOpen={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                        {faqs.slice(3, 6).map((faq, i) => (
                            <FAQItem
                                key={i + 3}
                                {...faq}
                                isOpen={openIndex === (i + 3)}
                                onClick={() => setOpenIndex(openIndex === (i + 3) ? null : (i + 3))}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
