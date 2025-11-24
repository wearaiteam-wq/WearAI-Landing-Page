"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/50 backdrop-blur-xl"
        >
            <Link href="/" className="flex items-center gap-2">
                {/* Logo */}
                <div className="text-xl font-bold tracking-tight text-white">
                    Wear<span className="text-wearai-accent">AI</span>
                </div>
            </Link>

            <div className="flex items-center gap-4">
                <Link
                    href="https://dev.ufhglobal.org/product-category/uncategorized/"
                    className={cn(
                        "relative px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full",
                        "bg-primary hover:bg-primary/80",
                        "shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_25px_-5px_var(--color-primary)]"
                    )}
                >
                    Try Live Demo
                </Link>
            </div>
        </motion.nav>
    );
}
