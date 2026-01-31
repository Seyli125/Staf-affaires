"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    speed?: number; // -1 to 1, negative = slower, positive = faster
    direction?: "vertical" | "horizontal";
}

export function ParallaxSection({
    children,
    className = "",
    speed = 0.5,
    direction = "vertical",
}: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const range = 100 * speed;
    const transform = useTransform(scrollYProgress, [0, 1], [-range, range]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div
                style={{
                    [direction === "vertical" ? "y" : "x"]: transform,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

// Parallax image with scale effect
interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number;
    scaleRange?: [number, number];
}

export function ParallaxImage({
    src,
    alt,
    className = "",
    speed = 0.3,
    scaleRange = [1, 1.2],
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y, scale }}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

// Floating element with scroll-based rotation
interface FloatingElementProps {
    children: ReactNode;
    className?: string;
    rotateRange?: [number, number];
    floatIntensity?: number;
}

export function FloatingElement({
    children,
    className = "",
    rotateRange = [-5, 5],
    floatIntensity = 20,
}: FloatingElementProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], rotateRange);
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [floatIntensity, 0, -floatIntensity]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ rotate, y }}>
                {children}
            </motion.div>
        </div>
    );
}

// Hook for custom parallax values
export function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
