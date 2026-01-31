"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
    staggerChildren?: number;
    once?: boolean;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

// Character by character reveal
export function TextReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.05,
    staggerChildren = 0.03,
    once = true,
    as: Component = "span",
}: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren,
                delayChildren: delay,
            },
        },
    };

    const charVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: duration + 0.3,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    const characters = children.split("");

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`inline-block ${className}`}
            style={{ perspective: "1000px" }}
        >
            <Component className="inline">
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={charVariants}
                        className="inline-block"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </Component>
        </motion.div>
    );
}

// Word by word reveal
interface WordRevealProps {
    children: string;
    className?: string;
    delay?: number;
    staggerChildren?: number;
    once?: boolean;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
    highlightWords?: string[];
    highlightClassName?: string;
}

export function WordReveal({
    children,
    className = "",
    delay = 0,
    staggerChildren = 0.08,
    once = true,
    as: Component = "span",
    highlightWords = [],
    highlightClassName = "text-brand-orange",
}: WordRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren,
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
            },
        },
    };

    const words = children.split(" ");

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            <Component className="inline">
                {words.map((word, index) => {
                    const isHighlighted = highlightWords.some(
                        (hw) => word.toLowerCase().includes(hw.toLowerCase())
                    );
                    return (
                        <motion.span
                            key={index}
                            variants={wordVariants}
                            className={`inline-block mr-[0.25em] ${isHighlighted ? highlightClassName : ""}`}
                        >
                            {word}
                        </motion.span>
                    );
                })}
            </Component>
        </motion.div>
    );
}

// Line reveal with mask effect
interface LineRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean;
}

export function LineReveal({
    children,
    className = "",
    delay = 0,
    duration = 1,
    once = true,
}: LineRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.4, 0.25, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

// Split text that reveals from center
interface SplitRevealProps {
    children: string;
    className?: string;
    delay?: number;
    once?: boolean;
}

export function SplitReveal({
    children,
    className = "",
    delay = 0,
    once = true,
}: SplitRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-50px" });

    const midpoint = Math.floor(children.length / 2);
    const leftPart = children.slice(0, midpoint);
    const rightPart = children.slice(midpoint);

    return (
        <div ref={ref} className={`flex justify-center overflow-hidden ${className}`}>
            <motion.span
                initial={{ x: "100%", opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
                transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
            >
                {leftPart}
            </motion.span>
            <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
                transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
            >
                {rightPart}
            </motion.span>
        </div>
    );
}
