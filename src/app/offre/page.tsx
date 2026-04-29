"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Star,
    Shield,
    Zap,
    Target,
    Users,
    TrendingUp,
    Award,
    Clock,
    Sparkles,
    Play,
    Quote,
    ChevronRight,
} from "lucide-react";
import {
    ScrollReveal,
    StaggerContainer,
    StaggerItem,
    LineReveal,
    CountUp,
    TiltCard,
    MagneticButton,
    AppleGlassCard,
    SquircleButton,
    CinematicReveal,
    LetterAnimation,
    InfiniteMarquee,
} from "@/components/animations";

// Premium offer data
const offerBenefits = [
    {
        icon: Target,
        title: "Clarté Stratégique",
        description: "Définissez une vision cristalline et un plan d'action implacable.",
    },
    {
        icon: TrendingUp,
        title: "Croissance Accélérée",
        description: "Multipliez vos résultats grâce à une méthodologie éprouvée.",
    },
    {
        icon: Shield,
        title: "Mindset Inébranlable",
        description: "Développez la résilience mentale des leaders d'exception.",
    },
    {
        icon: Users,
        title: "Leadership Magnétique",
        description: "Inspirez et fédérez vos équipes vers l'excellence.",
    },
];

const testimonials = [
    {
        name: "Marie Dupont",
        role: "CEO, TechScale",
        content: "Saïd a transformé ma façon de diriger. En 6 mois, mon chiffre d'affaires a doublé.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
        rating: 5,
    },
    {
        name: "Thomas Bernard",
        role: "Founder, GrowthLab",
        content: "L'approche de Saïd est unique. Il voit ce que personne d'autre ne voit.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
        rating: 5,
    },
    {
        name: "Sophie Martin",
        role: "DG, Innovate SA",
        content: "Un investissement qui s'est remboursé 10 fois. Sans hésitation.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
        rating: 5,
    },
];

const includedItems = [
    "Sessions de coaching individuelles (2h/semaine)",
    "Accès prioritaire WhatsApp 7j/7",
    "Audit complet de votre business",
    "Plan d'action personnalisé sur 90 jours",
    "Templates et outils exclusifs",
    "Accès à la communauté privée",
    "Sessions de groupe mensuelles",
    "Garantie résultats ou remboursement",
];

const objections = [
    {
        question: "Est-ce vraiment adapté à mon secteur ?",
        answer: "La méthodologie est universelle. J'ai accompagné des dirigeants de +40 secteurs différents. Les principes de leadership et de croissance transcendent les industries.",
    },
    {
        question: "Je n'ai pas le temps pour un coaching",
        answer: "Si vous n'avez pas 4h/semaine pour transformer votre business et votre vie, c'est précisément le signe que vous en avez besoin. Le coaching vous fait GAGNER du temps.",
    },
    {
        question: "C'est un investissement important",
        answer: "Mes clients génèrent en moyenne 3x le coût du programme en nouveaux revenus dans les 6 premiers mois. Ce n'est pas une dépense, c'est un investissement avec ROI mesurable.",
    },
];

const logos = [
    "TechScale", "GrowthLab", "Innovate SA", "LeadGen Pro", "ScaleUp", "VisionFirst"
];

export default function OffrePage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [activeObjection, setActiveObjection] = useState<number | null>(null);

    const { scrollYProgress: heroProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(heroProgress, [0, 1], [0, 300]);
    const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
    const heroScale = useTransform(heroProgress, [0, 0.5], [1, 0.9]);

    return (
        <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#1D1D1F] overflow-hidden">
            <Navbar />

            {/* ============================================
          HERO SECTION - Cinematic Power Statement
      ============================================ */}
            <section
                ref={heroRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy"
            >
                {/* Animated gradient background */}
                <div className="absolute inset-0">
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: "radial-gradient(ellipse at 30% 20%, rgba(255,107,74,0.3) 0%, transparent 50%)",
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: "radial-gradient(ellipse at 70% 80%, rgba(255,142,117,0.25) 0%, transparent 50%)",
                        }}
                        animate={{
                            scale: [1.2, 1, 1.2],
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />
                </div>

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                    }}
                />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
                    className="container mx-auto px-6 relative z-10 text-center"
                >
                    {/* Badge */}
                    <ScrollReveal delay={0.2}>
                        <motion.div
                            className="inline-flex items-center gap-2 bg-brand-orange/20 backdrop-blur-sm border border-brand-orange/30 rounded-full px-6 py-3 mb-10"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Sparkles className="w-4 h-4 text-brand-orange" />
                            <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs">
                                Programme Signature
                            </span>
                        </motion.div>
                    </ScrollReveal>

                    {/* Main headline */}
                    <div className="mb-10">
                        <LineReveal delay={0.3}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                                DEVENEZ LE LEADER
                            </h1>
                        </LineReveal>
                        <LineReveal delay={0.5}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mt-2">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-salmon to-brand-orange">
                                    QUE VOUS MÉRITEZ
                                </span>
                            </h1>
                        </LineReveal>
                        <LineReveal delay={0.7}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mt-2">
                                D'ÊTRE
                            </h1>
                        </LineReveal>
                    </div>

                    {/* Subheadline */}
                    <ScrollReveal delay={0.9}>
                        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                            Un programme de coaching intensif de 90 jours pour transformer votre mindset,
                            votre leadership et vos résultats.{" "}
                            <span className="text-white font-bold">Définitivement.</span>
                        </p>
                    </ScrollReveal>

                    {/* CTAs */}
                    <ScrollReveal delay={1.1}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <MagneticButton intensity={0.3} scale={1.05}>
                                <Link
                                    href="/prendre-rendez-vous"
                                    className="inline-flex items-center gap-3 bg-brand-orange text-white px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-[0_10px_50px_rgba(255,107,74,0.4)] group"
                                >
                                    Candidater maintenant
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </MagneticButton>

                            <button className="inline-flex items-center gap-3 text-white/60 hover:text-white font-bold uppercase tracking-widest text-sm transition-colors group">
                                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <Play className="w-5 h-5 text-white ml-1" />
                                </div>
                                Voir la vidéo
                            </button>
                        </div>
                    </ScrollReveal>

                    {/* Trust indicators */}
                    <ScrollReveal delay={1.3}>
                        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-white/40 text-sm font-bold uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                                <span>Places limitées</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-brand-orange" />
                                <span>Garantie résultats</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-brand-orange" />
                                <span>+200 leaders formés</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <motion.div
                            className="w-1.5 h-3 bg-brand-orange rounded-full"
                            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* ============================================
          SOCIAL PROOF MARQUEE
      ============================================ */}
            <section className="py-8 bg-gray-50 border-y border-gray-100 overflow-hidden">
                <InfiniteMarquee speed={25}>
                    {logos.map((logo, i) => (
                        <div key={i} className="flex items-center gap-4 mx-12">
                            <div className="w-3 h-3 bg-brand-orange/30 rounded-full" />
                            <span className="text-xl font-black text-gray-300 uppercase tracking-widest">
                                {logo}
                            </span>
                        </div>
                    ))}
                </InfiniteMarquee>
            </section>

            {/* ============================================
          PROBLEM SECTION - Emotional Hook
      ============================================ */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-navy/5 to-transparent" />

                <div className="container mx-auto px-6 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal>
                            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-6 block">
                                Le Problème
                            </span>
                        </ScrollReveal>

                        <CinematicReveal direction="up">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 leading-tight">
                                VOUS TRAVAILLEZ <span className="text-brand-orange">PLUS DUR</span>
                                <br />
                                MAIS LES RÉSULTATS <span className="text-brand-orange">STAGNENT</span>
                            </h2>
                        </CinematicReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="grid md:grid-cols-3 gap-8 mt-16">
                                {[
                                    { emoji: "😓", text: "Vous êtes épuisé par des journées de 12h sans voir de progrès" },
                                    { emoji: "🎯", text: "Vous savez que vous pouvez faire plus, mais quelque chose vous bloque" },
                                    { emoji: "💭", text: "Vous vous demandez si le succès est vraiment fait pour vous" },
                                ].map((item, i) => (
                                    <TiltCard key={i} maxTilt={5}>
                                        <div className="bg-gray-50 p-8 rounded-[2rem] text-center">
                                            <div className="text-5xl mb-4">{item.emoji}</div>
                                            <p className="text-lg font-medium text-muted-foreground">{item.text}</p>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <p className="text-2xl font-bold text-brand-navy mt-16">
                                Ce n'est pas de votre faute.{" "}
                                <span className="text-brand-orange">Personne ne vous a appris à penser comme un leader.</span>
                            </p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ============================================
          SOLUTION - Benefits Grid
      ============================================ */}
            <section className="py-32 bg-brand-navy relative overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <ScrollReveal className="text-center mb-20">
                        <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-6 block">
                            La Solution
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
                            LE PROGRAMME QUI CHANGE TOUT
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            90 jours pour reprogrammer votre mindset et accélérer votre ascension.
                        </p>
                    </ScrollReveal>

                    <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
                        {offerBenefits.map((benefit, i) => (
                            <StaggerItem key={benefit.title}>
                                <TiltCard maxTilt={5} glareOpacity={0.1}>
                                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] group hover:bg-white/10 transition-all duration-500">
                                        <div className="flex items-start gap-6">
                                            <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                                                <benefit.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-brand-orange transition-colors">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-white/60 font-medium leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ============================================
          WHAT'S INCLUDED
      ============================================ */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* Image side */}
                        <ScrollReveal direction="left">
                            <div className="relative">
                                <motion.div
                                    className="absolute -inset-4 bg-gradient-to-br from-brand-orange/20 to-brand-salmon/10 rounded-[3rem] -rotate-3"
                                    whileHover={{ rotate: 0, scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png"
                                        alt="Saïd Taaroust"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
                                </div>

                                {/* Floating stats */}
                                <motion.div
                                    className="absolute -bottom-6 -right-6 bg-brand-navy p-6 rounded-2xl shadow-2xl"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-4xl font-black text-white">
                                        <CountUp value={98} suffix="%" duration={2} />
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-white/60">
                                        Taux de satisfaction
                                    </div>
                                </motion.div>
                            </div>
                        </ScrollReveal>

                        {/* Content side */}
                        <div>
                            <ScrollReveal>
                                <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-6 block">
                                    Ce qui est inclus
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">
                                    TOUT CE DONT VOUS AVEZ{" "}
                                    <span className="text-brand-orange">BESOIN</span>
                                </h2>
                            </ScrollReveal>

                            <StaggerContainer className="space-y-4" staggerDelay={0.05}>
                                {includedItems.map((item, i) => (
                                    <StaggerItem key={item}>
                                        <motion.div
                                            className="flex items-center gap-4 bg-gray-50 hover:bg-brand-orange/5 p-5 rounded-2xl transition-colors group"
                                            whileHover={{ x: 10 }}
                                        >
                                            <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                                                <CheckCircle2 className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                                            </div>
                                            <span className="font-bold text-brand-navy">{item}</span>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          TESTIMONIALS - Social Proof
      ============================================ */}
            <section className="py-32 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <ScrollReveal className="text-center mb-20">
                        <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-6 block">
                            Témoignages
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                            ILS ONT TRANSFORMÉ LEUR VIE
                        </h2>
                    </ScrollReveal>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
                        {testimonials.map((testimonial, i) => (
                            <StaggerItem key={testimonial.name}>
                                <TiltCard maxTilt={5} glareOpacity={0.1}>
                                    <div className="bg-white p-10 rounded-[2rem] shadow-xl h-full flex flex-col relative overflow-hidden group">
                                        <Quote className="absolute top-6 right-6 w-12 h-12 text-brand-orange/10" />

                                        {/* Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 text-brand-orange fill-brand-orange" />
                                            ))}
                                        </div>

                                        {/* Content */}
                                        <p className="text-xl font-medium text-brand-navy mb-8 flex-grow leading-relaxed">
                                            "{testimonial.content}"
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-brand-orange/20">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={56}
                                                    height={56}
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-black text-brand-navy">{testimonial.name}</div>
                                                <div className="text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ============================================
          OBJECTIONS - FAQ Style
      ============================================ */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal className="text-center mb-16">
                            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-6 block">
                                Vos Questions
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                                LEVER LES DERNIERS DOUTES
                            </h2>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {objections.map((objection, index) => (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <motion.div
                                        className="bg-gray-50 rounded-[2rem] overflow-hidden"
                                        layout
                                    >
                                        <motion.button
                                            className="w-full p-8 text-left flex items-center justify-between"
                                            onClick={() => setActiveObjection(activeObjection === index ? null : index)}
                                        >
                                            <span className="text-xl font-black text-brand-navy pr-8">
                                                {objection.question}
                                            </span>
                                            <motion.div
                                                animate={{ rotate: activeObjection === index ? 90 : 0 }}
                                                className="flex-shrink-0"
                                            >
                                                <ChevronRight className="w-6 h-6 text-brand-orange" />
                                            </motion.div>
                                        </motion.button>

                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: activeObjection === index ? "auto" : 0,
                                                opacity: activeObjection === index ? 1 : 0,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-8">
                                                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                                                    {objection.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================
          FINAL CTA - Urgency & Scarcity
      ============================================ */}
            <section className="py-32 bg-brand-navy relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(255,107,74,0.2) 0%, transparent 60%)",
                    }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8">
                            <Clock className="w-4 h-4 text-red-400" />
                            <span className="text-red-300 font-bold uppercase tracking-widest text-xs">
                                Plus que 3 places disponibles
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
                            VOTRE TRANSFORMATION
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                                COMMENCE ICI
                            </span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
                            Ne laissez pas passer cette opportunité. Chaque jour qui passe est un jour de moins
                            vers la vie que vous méritez.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <MagneticButton intensity={0.3} scale={1.05}>
                            <Link
                                href="/prendre-rendez-vous"
                                className="inline-flex items-center gap-3 bg-brand-orange text-white px-16 py-7 rounded-full font-black uppercase tracking-widest text-lg hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-[0_10px_60px_rgba(255,107,74,0.5)] group"
                            >
                                Réserver mon appel stratégique
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </MagneticButton>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <p className="text-white/40 text-sm mt-8 font-medium">
                            Appel 100% gratuit • Sans engagement • 45 minutes qui peuvent tout changer
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </main>
    );
}
