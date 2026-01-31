"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll, MotionValue } from "framer-motion";
import { useRef, useEffect, ReactNode, useState, useCallback } from "react";

// ============================================
// SMOOTH SCROLL PROVIDER - Lenis-style physics
// ============================================
interface SmoothScrollContextValue {
    scrollY: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
    velocity: MotionValue<number>;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
    return <>{children}</>;
}

// ============================================
// SCROLL VELOCITY COMPONENT - Skewing effect
// ============================================
interface ScrollVelocityProps {
    children: ReactNode;
    className?: string;
    skewIntensity?: number;
    scaleIntensity?: number;
}

export function ScrollVelocity({
    children,
    className = "",
    skewIntensity = 0.5,
    scaleIntensity = 0.02,
}: ScrollVelocityProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [scrollDirection, setScrollDirection] = useState(0);
    const lastScrollY = useRef(0);

    const skew = useSpring(0, { stiffness: 100, damping: 30 });
    const scale = useSpring(1, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const unsubscribe = scrollY.on("change", (current) => {
            const diff = current - lastScrollY.current;
            const velocity = Math.min(Math.max(diff * skewIntensity, -8), 8);
            const scaleValue = 1 - Math.min(Math.abs(diff) * scaleIntensity * 0.01, 0.05);

            skew.set(velocity);
            scale.set(scaleValue);
            lastScrollY.current = current;
        });

        return unsubscribe;
    }, [scrollY, skewIntensity, scaleIntensity, skew, scale]);

    return (
        <motion.div
            ref={ref}
            style={{ skewY: skew, scale }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// APPLE GLASS CARD - Glassmorphism component
// ============================================
interface AppleGlassCardProps {
    children: ReactNode;
    className?: string;
    intensity?: "light" | "medium" | "heavy";
    border?: boolean;
    hover?: boolean;
    onClick?: () => void;
}

export function AppleGlassCard({
    children,
    className = "",
    intensity = "medium",
    border = true,
    hover = true,
    onClick,
}: AppleGlassCardProps) {
    const intensityStyles = {
        light: "bg-white/40 backdrop-blur-md",
        medium: "bg-white/60 backdrop-blur-xl",
        heavy: "bg-white/80 backdrop-blur-2xl",
    };

    return (
        <motion.div
            onClick={onClick}
            className={`
        ${intensityStyles[intensity]}
        ${border ? "border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" : ""}
        rounded-[2rem]
        ${className}
      `}
            whileHover={hover ? {
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            } : undefined}
            whileTap={onClick ? { scale: 0.98 } : undefined}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// APPLE DARK GLASS - For dark backgrounds
// ============================================
interface AppleDarkGlassProps {
    children: ReactNode;
    className?: string;
    intensity?: "light" | "medium" | "heavy";
}

export function AppleDarkGlass({
    children,
    className = "",
    intensity = "medium",
}: AppleDarkGlassProps) {
    const intensityStyles = {
        light: "bg-brand-navy/40 backdrop-blur-md",
        medium: "bg-brand-navy/60 backdrop-blur-xl",
        heavy: "bg-brand-navy/80 backdrop-blur-2xl",
    };

    return (
        <motion.div
            className={`
        ${intensityStyles[intensity]}
        border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        rounded-[2rem]
        ${className}
      `}
            whileHover={{
                borderColor: "rgba(255,255,255,0.2)",
            }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// SQUIRCLE BUTTON - Apple-style rounded button
// ============================================
interface SquircleButtonProps {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "ghost" | "glass";
    size?: "sm" | "md" | "lg" | "xl";
    magnetic?: boolean;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

export function SquircleButton({
    children,
    className = "",
    variant = "primary",
    size = "md",
    magnetic = true,
    onClick,
    href,
    disabled = false,
}: SquircleButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!magnetic || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.3;
        const deltaY = (e.clientY - centerY) * 0.3;
        x.set(deltaX);
        y.set(deltaY);
    }, [magnetic, x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    const variants = {
        primary: "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-[0_4px_20px_rgba(255,107,74,0.4)]",
        secondary: "bg-brand-navy text-white hover:bg-brand-navy/90 shadow-[0_4px_20px_rgba(10,25,47,0.3)]",
        ghost: "bg-transparent text-brand-navy hover:bg-brand-navy/5 border-2 border-brand-navy/20 hover:border-brand-navy/40",
        glass: "bg-white/20 backdrop-blur-xl text-white border border-white/30 hover:bg-white/30",
    };

    const sizes = {
        sm: "px-5 py-2.5 text-xs",
        md: "px-8 py-4 text-sm",
        lg: "px-10 py-5 text-base",
        xl: "px-14 py-6 text-lg",
    };

    const Component = href ? motion.a : motion.button;

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring }}
            className="inline-block"
        >
            <Component
                href={href}
                onClick={onClick}
                disabled={disabled}
                className={`
          inline-flex items-center justify-center gap-3
          font-black uppercase tracking-[0.15em]
          rounded-[1rem]
          transition-all duration-300
          ${variants[variant]}
          ${sizes[size]}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${className}
        `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {children}
            </Component>
        </motion.div>
    );
}

// ============================================
// LIQUID HOVER - Morphing element on hover
// ============================================
interface LiquidHoverProps {
    children: ReactNode;
    className?: string;
}

export function LiquidHover({ children, className = "" }: LiquidHoverProps) {
    return (
        <motion.div
            className={`relative ${className}`}
            whileHover="hover"
            initial="initial"
        >
            <motion.div
                className="absolute inset-0 bg-brand-orange/10 rounded-[2rem]"
                variants={{
                    initial: {
                        scale: 0,
                        borderRadius: "50%",
                        opacity: 0,
                    },
                    hover: {
                        scale: 1.5,
                        borderRadius: "2rem",
                        opacity: 1,
                        transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }
                    },
                }}
                style={{ originX: 0.5, originY: 0.5 }}
            />
            <motion.div className="relative z-10">
                {children}
            </motion.div>
        </motion.div>
    );
}

// ============================================
// MAGNETIC CURSOR - Element follows cursor
// ============================================
interface MagneticCursorProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
}

export function MagneticCursor({
    children,
    className = "",
    intensity = 0.5
}: MagneticCursorProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 15 });
    const rotateXSpring = useSpring(rotateX, { stiffness: 150, damping: 15 });
    const rotateYSpring = useSpring(rotateY, { stiffness: 150, damping: 15 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * intensity;
        const deltaY = (e.clientY - centerY) * intensity;

        x.set(deltaX);
        y.set(deltaY);
        rotateY.set(deltaX * 0.1);
        rotateX.set(-deltaY * 0.1);
    }, [intensity, x, y, rotateX, rotateY]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    }, [x, y, rotateX, rotateY]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                x: xSpring,
                y: ySpring,
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformPerspective: 1000,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// REVEAL ON SCROLL - Cinematic entrance
// ============================================
interface CinematicRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "scale" | "rotate";
    duration?: number;
}

export function CinematicReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 1,
}: CinematicRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "start 20%"],
    });

    const directionConfig = {
        up: { y: [100, 0], x: [0, 0], scale: [1, 1], rotate: [0, 0] },
        down: { y: [-100, 0], x: [0, 0], scale: [1, 1], rotate: [0, 0] },
        left: { x: [100, 0], y: [0, 0], scale: [1, 1], rotate: [0, 0] },
        right: { x: [-100, 0], y: [0, 0], scale: [1, 1], rotate: [0, 0] },
        scale: { scale: [0.5, 1], y: [50, 0], x: [0, 0], rotate: [0, 0] },
        rotate: { rotate: [-15, 0], y: [50, 0], x: [0, 0], scale: [0.9, 1] },
    };

    const config = directionConfig[direction];

    const y = useTransform(scrollYProgress, [0, 1], config.y);
    const x = useTransform(scrollYProgress, [0, 1], config.x);
    const scale = useTransform(scrollYProgress, [0, 1], config.scale);
    const rotate = useTransform(scrollYProgress, [0, 1], config.rotate);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ y, x, scale, rotate, opacity }}
            className={className}
            transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// LETTER ANIMATION - Character by character
// ============================================
interface LetterAnimationProps {
    text: string;
    className?: string;
    delay?: number;
    staggerChildren?: number;
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function LetterAnimation({
    text,
    className = "",
    delay = 0,
    staggerChildren = 0.03,
    as: Component = "span",
}: LetterAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 85%", "start 40%"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    const letters = text.split("");

    return (
        <motion.div
            ref={ref}
            className={`inline-block ${className}`}
            style={{ opacity }}
        >
            <Component className="inline-flex flex-wrap">
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        className="inline-block"
                        initial={{ y: 100, opacity: 0, rotateX: -90 }}
                        whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: delay + index * staggerChildren,
                            ease: [0.25, 0.4, 0.25, 1],
                        }}
                        style={{ transformOrigin: "bottom", transformStyle: "preserve-3d" }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </Component>
        </motion.div>
    );
}

// ============================================
// PARALLAX IMAGE - With scale and blur effects
// ============================================
interface ParallaxImageAdvancedProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number;
    scale?: boolean;
    blur?: boolean;
}

export function ParallaxImageAdvanced({
    src,
    alt,
    className = "",
    speed = 0.5,
    scale = true,
    blur = false,
}: ParallaxImageAdvancedProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);
    const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [1.2, 1, 1.2] : [1, 1, 1]);
    const blurValue = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], blur ? [8, 0, 0, 8] : [0, 0, 0, 0]);

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                style={{
                    y,
                    scale: scaleValue,
                    filter: useTransform(blurValue, (v) => `blur(${v}px)`),
                }}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

// ============================================
// CURSOR GLOW - Glowing effect following cursor
// ============================================
export function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999] w-[600px] h-[600px] rounded-full"
            style={{
                background: "radial-gradient(circle, rgba(255,107,74,0.15) 0%, transparent 70%)",
                x: mousePosition.x - 300,
                y: mousePosition.y - 300,
            }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
        />
    );
}

// ============================================
// INFINITE MARQUEE - Smooth scrolling text
// ============================================
interface InfiniteMarqueeProps {
    children: ReactNode;
    speed?: number;
    direction?: "left" | "right";
    className?: string;
}

export function InfiniteMarquee({
    children,
    speed = 30,
    direction = "left",
    className = "",
}: InfiniteMarqueeProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <div className="flex shrink-0">{children}</div>
                <div className="flex shrink-0">{children}</div>
            </motion.div>
        </div>
    );
}

// ============================================
// PROGRESS INDICATOR - Apple-style scroll progress
// ============================================
export function ProgressIndicator() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-brand-orange origin-left z-[100]"
            style={{ scaleX }}
        />
    );
}
