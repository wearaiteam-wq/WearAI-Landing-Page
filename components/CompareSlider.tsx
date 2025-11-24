"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

const CompareSlider: React.FC = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const { left, width } = containerRef.current.getBoundingClientRect();
        let clientX;

        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = (event as React.MouseEvent).clientX;
        }

        const position = ((clientX - left) / width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Global event listeners for smooth dragging outside component
    useEffect(() => {
        const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
            if (isDragging) {
                handleMove(e);
            }
        };
        const handleGlobalUp = () => setIsDragging(false);

        window.addEventListener('mousemove', handleGlobalMove);
        window.addEventListener('mouseup', handleGlobalUp);
        window.addEventListener('touchmove', handleGlobalMove);
        window.addEventListener('touchend', handleGlobalUp);

        return () => {
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('touchmove', handleGlobalMove);
            window.removeEventListener('touchend', handleGlobalUp);
        };
    }, [isDragging]);

    return (
        <section className="py-24 relative bg-[#030712] overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
                        See the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Difference</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Compare flat product images with our AI-powered virtual try-on technology. Drag the slider to see the transformation.
                    </p>
                </div>

                {/* Comparison Slider */}
                <div className="w-full max-w-4xl mx-auto p-1 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
                    <div
                        ref={containerRef}
                        className="relative w-full aspect-[9/16] md:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                    >
                        {/* Right Image (After/Virtual Try-On) */}
                        <div className="absolute inset-0 w-full h-full bg-gray-900">
                            <img
                                src="/assets/Before & After/After.png"
                                alt="Virtual Try-On Result"
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-white font-semibold border border-white/10">
                                Virtual Try-On
                            </div>
                        </div>

                        {/* Left Image (Before/Flat Image) - Clipped Overlay */}
                        <div
                            className="absolute inset-0 w-full h-full bg-white"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <img
                                src="/assets/Before & After/Before.png"
                                alt="Flat Lay Product"
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                            <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-md rounded-lg text-black font-semibold shadow-lg">
                                Flat Image
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-wearai-primary transition-transform duration-100 transform hover:scale-110 active:scale-95">
                                <ChevronsLeftRight size={24} />
                            </div>
                        </div>

                        {/* Drag Instruction - Fades out on interaction */}
                        {!isDragging && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="px-3 py-1 bg-black/50 rounded-full text-xs text-white backdrop-blur-sm">Drag to compare</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompareSlider;
