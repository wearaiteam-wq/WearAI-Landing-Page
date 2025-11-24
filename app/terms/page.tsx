"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, AlertCircle, Scale, DollarSign } from "lucide-react";

export default function TermsPage() {
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
                            <FileText className="w-4 h-4 text-wearai-accent" />
                            <span className="text-sm text-gray-400">Effective: November 2024</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Service</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Please read these terms carefully before using WearAI's virtual try-on plugin.
                        </p>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="space-y-8">
                        {/* License Grant */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <Scale className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">License Grant</h2>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        WearAI grants you a <strong className="text-white">non-exclusive, non-transferable license</strong> to use the WearAI plugin on your authorized WooCommerce store(s) as specified in your license agreement.
                                    </p>
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                                        <p className="text-sm text-gray-400"><strong className="text-white">You may:</strong></p>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                                            <li>Install the plugin on the licensed domain(s)</li>
                                            <li>Customize the plugin's appearance to match your brand</li>
                                            <li>Use the plugin for commercial purposes on your store</li>
                                        </ul>
                                        <p className="text-sm text-gray-400 mt-4"><strong className="text-white">You may not:</strong></p>
                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                                            <li>Redistribute, resell, or sublicense the plugin</li>
                                            <li>Reverse engineer or decompile the source code</li>
                                            <li>Share your API key with unauthorized parties</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Refund Policy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-orange-500/20 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-orange-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Refund Policy</h2>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        <strong className="text-white">Due to the digital nature of the product, all sales are final once the API key is issued.</strong>
                                    </p>
                                    <p className="text-gray-400 leading-relaxed">
                                        We offer a <strong className="text-white">7-day trial period</strong> for new customers to test the plugin's compatibility with their store. Refund requests must be submitted within this period and are subject to review. Once the trial period expires or if significant usage has occurred, no refunds will be provided.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Availability */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold mb-4">Service Availability</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                WearAI strives to maintain 99.9% uptime. However, we do not guarantee uninterrupted service and reserve the right to perform scheduled maintenance. We will notify users of planned downtime whenever possible.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Third-party dependencies (such as Google Gemini API) may occasionally experience outages beyond our control.
                            </p>
                        </motion.div>

                        {/* Usage Limits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold mb-4">Usage Limits & Fair Use</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Your license includes a specific number of try-on generations per month as outlined in your plan. Exceeding this limit may result in:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                <li>Automatic upgrade to the next tier (if auto-billing is enabled)</li>
                                <li>Temporary suspension of service until the next billing cycle</li>
                                <li>Additional overage charges as specified in your agreement</li>
                            </ul>
                        </motion.div>

                        {/* Liability Limitations */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="glass-card p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border-red-500/30"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-red-500/20 rounded-xl">
                                    <AlertCircle className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        <strong className="text-white">WearAI is provided "AS-IS" without warranties of any kind, express or implied.</strong>
                                    </p>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        To the maximum extent permitted by law, WearAI shall not be liable for:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                        <li>Indirect, incidental, or consequential damages</li>
                                        <li>Loss of profits, revenue, or data</li>
                                        <li>Damages arising from third-party services (e.g., Google Gemini API)</li>
                                        <li>Incompatibility with specific themes or plugins</li>
                                    </ul>
                                    <p className="text-gray-400 leading-relaxed mt-4">
                                        Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Termination */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="glass-card p-8 rounded-2xl"
                        >
                            <h2 className="text-2xl font-bold mb-4">Termination</h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Either party may terminate this agreement with 30 days' written notice. WearAI reserves the right to immediately suspend or terminate service for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                                <li>Violation of these Terms of Service</li>
                                <li>Non-payment or fraudulent payment activity</li>
                                <li>Abuse of the service (e.g., excessive API calls, scraping)</li>
                            </ul>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="glass-card p-6 rounded-2xl text-center"
                        >
                            <p className="text-gray-400 mb-4">
                                Questions about these terms? Contact us at:
                            </p>
                            <a
                                href="mailto:wearaiteam@gmail.com"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-wearai-primary hover:bg-wearai-primary/80 rounded-lg font-semibold transition-colors"
                            >
                                wearaiteam@gmail.com
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
