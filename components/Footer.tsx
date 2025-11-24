"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white/40 text-sm">
                    © {new Date().getFullYear()} WearAI. All rights reserved.
                </div>

                <div className="flex items-center gap-8">
                    <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="/contact" className="text-white/40 hover:text-white text-sm transition-colors">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
