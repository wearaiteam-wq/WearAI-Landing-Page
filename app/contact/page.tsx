"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, Send, User, AtSign, FileText, MessageSquare } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct mailto link
        const mailtoLink = `mailto:wearaiteam@gmail.com?subject=WearAI Inquiry: ${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="min-h-screen bg-[#030712] text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Touch</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Have questions? We're here to help. Choose your preferred way to connect with us.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Form - Left Side (2/3 width) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2"
                        >
                            <div className="glass-card p-8 rounded-2xl">
                                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                            Your Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-wearai-primary transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-wearai-primary transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                                            Subject
                                        </label>
                                        <div className="relative">
                                            <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-wearai-primary transition-colors"
                                                placeholder="Plugin Integration Question"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                            Message
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={6}
                                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-wearai-primary transition-colors resize-none"
                                                placeholder="Tell us about your store and how we can help..."
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-gradient-to-r from-wearai-primary to-wearai-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-wearai-primary/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                                    >
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        This will open your default email client with the message pre-filled.
                                    </p>
                                </form>
                            </div>
                        </motion.div>

                        {/* Direct Connect Sidebar - Right Side (1/3 width) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-1 space-y-6"
                        >
                            {/* WhatsApp Button */}
                            <div className="glass-card p-6 rounded-2xl">
                                <h3 className="text-xl font-bold mb-4">Direct Connect</h3>

                                <a
                                    href="https://wa.me/917017791820"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all transform hover:-translate-y-1 group mb-4"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-3 bg-white/20 rounded-lg">
                                            <MessageCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Chat on WhatsApp</h4>
                                            <p className="text-sm text-white/80">Instant Response</p>
                                        </div>
                                    </div>
                                    <p className="text-white/90 text-sm font-mono">+91 7017 791 820</p>
                                </a>

                                {/* Email Button */}
                                <a
                                    href="mailto:wearaiteam@gmail.com"
                                    className="block w-full p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1 group"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-3 bg-white/20 rounded-lg">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Email Support</h4>
                                            <p className="text-sm text-white/80">24-48 Hour Response</p>
                                        </div>
                                    </div>
                                    <p className="text-white/90 text-sm break-all">wearaiteam@gmail.com</p>
                                </a>
                            </div>

                            {/* Support Hours */}
                            <div className="glass-card p-6 rounded-2xl">
                                <h3 className="text-lg font-bold mb-3">Support Hours</h3>
                                <div className="space-y-2 text-sm text-gray-400">
                                    <div className="flex justify-between">
                                        <span>Monday - Saturday</span>
                                        <span className="text-white">9AM - 9PM IST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-white">10AM - 6PM IST</span>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-wearai-primary/10 to-transparent border-wearai-primary/30">
                                <h3 className="text-lg font-bold mb-2">Average Response Time</h3>
                                <p className="text-3xl font-bold text-wearai-accent mb-2">{"< 2 hours"}</p>
                                <p className="text-sm text-gray-400">
                                    We pride ourselves on quick, helpful responses to all inquiries.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
