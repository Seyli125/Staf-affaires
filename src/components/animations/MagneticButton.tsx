"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
    scale?: number;
    onClick?: () => void;
    as?: "button" | "a" | "div";
    href?: string;
}

export function MagneticButton({
    children,
    className = "",
    intensity = 0.4,
    scale = 1.05,
    onClick,
    as: Component = "button",
    href,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * intensity;
        const deltaY = (e.clientY - centerY) * intensity;

        x.set(deltaX);
        y.set(deltaY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const MotionComponent = motion[Component as keyof typeof motion] as typeof motion.div;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            <MotionComponent
                style={{ x: xSpring, y: ySpring }}
                whileHover={{ scale }}
                whileTap={{ scale: 0.95 }}
                onClick={onClick}
                {...(href && Component === "a" ? { href } : {})}
                className={className}
            >
                {children}
            </MotionComponent>
        </motion.div>
    );
}

// Magnetic wrapper for any element (non-interactive)
interface MagneticWrapperProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
}

export function MagneticWrapper({
    children,
    className = "",
    intensity = 0.3,
}: MagneticWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * intensity);
        y.set((e.clientY - centerY) * intensity);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Hover card with 3D tilt effect
interface TiltCardProps {
    children: ReactNode;
    className?: string;
    maxTilt?: number;
    perspective?: number;
    scale?: number;
    glareOpacity?: number;
}

export function TiltCard({
    children,
    className = "",
    maxTilt = 10,
    perspective = 1000,
    scale = 1.02,
    glareOpacity = 0.1,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const rotateXSpring = useSpring(rotateX, springConfig);
    const rotateYSpring = useSpring(rotateY, springConfig);

    // Glare effect position
    const glareX = useTransform(rotateY, [-maxTilt, maxTilt], ["0%", "100%"]);
    const glareY = useTransform(rotateX, [maxTilt, -maxTilt], ["0%", "100%"]);

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const percentX = (e.clientX - centerX) / (rect.width / 2);
        const percentY = (e.clientY - centerY) / (rect.height / 2);

        rotateX.set(-percentY * maxTilt);
        rotateY.set(percentX * maxTilt);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective,
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale }}
            className={`relative ${className}`}
        >
            {children}
            {/* Glare effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-inherit"
                style={{
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,${glareOpacity}) 0%, transparent 50%)`,
                }}
            />
        </motion.div>
    );
}
