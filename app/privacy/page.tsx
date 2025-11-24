"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Database, Mail } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                            <Shield className="w-4 h-4 text-wearai-accent" />
                            <span className="text-sm text-gray-400">Last Updated: November 2024</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Policy</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Your privacy is our priority. Learn how we handle your data with complete transparency.
                        </p>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="space-y-8">
                        {/* Image Handling */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-green-500/20 rounded-xl">
                                    <Lock className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Image Handling & Privacy</h2>
                                    <p className="text-gray-400 leading-relaxed">
                                        <strong className="text-white">User images are processed in-memory and immediately deleted.</strong> We do not store, save, or train AI models on user photos. Your customers' privacy is absolute. Once the virtual try-on is generated, the original photo is permanently discarded from our servers.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Third Party Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <Database className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Third-Party Processing</h2>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        WearAI uses the <strong className="text-white">Google Gemini API</strong> for AI-powered virtual try-on processing. Images are transmitted securely via encrypted connections and are processed according to Google's enterprise-grade privacy standards.
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        Google does not retain user images beyond the processing session. For more details, refer to <a href="https://cloud.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-wearai-accent hover:underline">Google Cloud's Privacy Policy</a>.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Data Collection */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold mb-4">Data We Collect</h2>
                            <div className="space-y-3 text-gray-400">
                                <p className="leading-relaxed">
                                    We only track <strong className="text-white">basic usage metrics</strong> necessary for billing and service optimization:
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Number of try-on generations per store</li>
                                    <li>API request timestamps (for rate limiting)</li>
                                    <li>Store domain and license key (for authentication)</li>
                                </ul>
                                <p className="leading-relaxed mt-4">
                                    We <strong className="text-white">do not collect</strong>: customer names, email addresses, payment information, or any personally identifiable information (PII) from end-users.
                                </p>
                            </div>
                        </motion.div>

                        {/* GDPR Compliance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold mb-4">GDPR & Data Rights</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                WearAI is fully compliant with GDPR regulations. Since we do not store user images or personal data, there is no data to request, export, or delete. However, store owners may request deletion of their usage logs at any time.
                            </p>
                        </motion.div>

                        {/* Contact DPO */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="glass-card p-8 rounded-2xl bg-gradient-to-br from-wearai-primary/10 to-transparent border-wearai-primary/30"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-wearai-primary/20 rounded-xl">
                                    <Mail className="w-6 h-6 text-wearai-accent" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Data Protection Officer</h2>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        For any privacy-related inquiries, data requests, or concerns, please contact our Data Protection Officer:
                                    </p>
                                    <a
                                        href="mailto:wearaiteam@gmail.com"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-wearai-primary hover:bg-wearai-primary/80 rounded-lg font-semibold transition-colors"
                                    >
                                        <Mail className="w-4 h-4" />
                                        wearaiteam@gmail.com
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
