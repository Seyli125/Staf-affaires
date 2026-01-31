"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CountUpProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    delay?: number;
    className?: string;
    once?: boolean;
    decimals?: number;
}

export function CountUp({
    value,
    suffix = "",
    prefix = "",
    duration = 2,
    delay = 0,
    className = "",
    once = true,
    decimals = 0,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once, margin: "-100px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        if (decimals > 0) {
            return latest.toFixed(decimals);
        }
        return Math.round(latest);
    });

    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            });

            const unsubscribe = rounded.on("change", (latest) => {
                setDisplayValue(String(latest));
            });

            return () => {
                controls.stop();
                unsubscribe();
            };
        }
    }, [isInView, value, duration, delay, count, rounded]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay }}
        >
            {prefix}{displayValue}{suffix}
        </motion.span>
    );
}

// Animated progress bar
interface ProgressBarProps {
    value: number;
    max?: number;
    className?: string;
    barClassName?: string;
    duration?: number;
    delay?: number;
    showValue?: boolean;
}

export function AnimatedProgressBar({
    value,
    max = 100,
    className = "",
    barClassName = "bg-brand-orange",
    duration = 1.5,
    delay = 0,
    showValue = false,
}: ProgressBarProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const percentage = (value / max) * 100;

    return (
        <div ref={ref} className={`relative ${className}`}>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full rounded-full ${barClassName}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
                    transition={{
                        duration,
                        delay,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                />
            </div>
            {showValue && (
                <motion.span
                    className="absolute right-0 top-4 text-sm font-bold text-brand-navy"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: delay + duration * 0.5 }}
                >
                    {value}%
                </motion.span>
            )}
        </div>
    );
}

// Circular progress indicator
interface CircularProgressProps {
    value: number;
    max?: number;
    size?: number;
    strokeWidth?: number;
    className?: string;
    duration?: number;
    delay?: number;
    showValue?: boolean;
    suffix?: string;
}

export function CircularProgress({
    value,
    max = 100,
    size = 120,
    strokeWidth = 8,
    className = "",
    duration = 2,
    delay = 0,
    showValue = true,
    suffix = "%",
}: CircularProgressProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const percentage = (value / max) * 100;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div ref={ref} className={`relative inline-flex items-center justify-center ${className}`}>
            <svg width={size} height={size} className="-rotate-90">
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    className="fill-none stroke-gray-100"
                />
                {/* Progress circle */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    className="fill-none stroke-brand-orange"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
                    transition={{
                        duration,
                        delay,
                        ease: [0.25, 0.4, 0.25, 1],
                    }}
                    style={{
                        strokeDasharray: circumference,
                    }}
                />
            </svg>
            {showValue && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <CountUp
                        value={value}
                        suffix={suffix}
                        duration={duration}
                        delay={delay}
                        className="text-2xl font-black text-brand-navy"
                    />
                </div>
            )}
        </div>
    );
}
