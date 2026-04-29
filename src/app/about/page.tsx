"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { CheckCircle2, Award, Users, Target, ArrowRight, Quote, Sparkles } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  WordReveal,
  LineReveal,
  CountUp,
  TiltCard,
  MagneticButton,
  ParallaxSection,
} from "@/components/animations";

const stats = [
  { label: "Années d'expérience", value: 25, suffix: "+" },
  { label: "Clients accompagnés", value: 200, suffix: "+" },
  { label: "Taux de satisfaction", value: 98, suffix: "%" },
  { label: "Entreprises scalées", value: 50, suffix: "+" },
];

const values = [
  {
    title: "Excellence",
    description: "Nous visons le plus haut niveau de performance dans chaque interaction.",
    icon: Award,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Impact",
    description: "Chaque action est mesurée par les résultats concrets qu'elle génère.",
    icon: Target,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Humilité",
    description: "Le succès se construit avec une écoute active et une remise en question constante.",
    icon: Users,
    gradient: "from-emerald-500 to-teal-600",
  },
];

const expertise = [
  "Expertise en scale-up",
  "Spécialiste en préparation mentale",
  "Ancien cadre dirigeant",
  "Mentor d'entrepreneurs",
  "Coach certifié RNCP Niveau 6",
  "Formateur PNL",
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#1D1D1F] overflow-hidden">
      <Navbar />

      {/* ============================================
          HERO SECTION - Cinematic Reveal
      ============================================ */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-navy"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse at 30% 20%, rgba(255,107,74,0.4) 0%, transparent 50%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background: "radial-gradient(ellipse at 70% 80%, rgba(255,142,117,0.4) 0%, transparent 50%)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          {/* Eyebrow */}
          <ScrollReveal delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">
                Notre Histoire
              </span>
            </div>
          </ScrollReveal>

          {/* Main Title with Word Reveal */}
          <div className="mb-8">
            <LineReveal delay={0.3}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                À PROPOS DE
              </h1>
            </LineReveal>
            <LineReveal delay={0.5}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                  STAF AFFAIRES
                </span>
              </h1>
            </LineReveal>
          </div>

          {/* Subtitle */}
          <ScrollReveal delay={0.7}>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-medium leading-relaxed">
              Découvrez la vision de{" "}
              <span className="text-white font-bold">Saïd Taaroust</span> et
              comment nous transformons le paysage du leadership B2B.
            </p>
          </ScrollReveal>

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
        </motion.div>
      </section>

      {/* ============================================
          BIOGRAPHY SECTION - Immersive Parallax
      ============================================ */}
      <section className="py-32 relative">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/5 to-transparent -skew-x-12 translate-x-1/4" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image with reveal effect */}
            <ScrollReveal direction="left" className="relative">
              <div className="relative">
                {/* Decorative frame */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-brand-orange/20 to-brand-salmon/20 rounded-[3rem] -rotate-3"
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute -inset-4 border-2 border-brand-navy/10 rounded-[3rem] rotate-3"
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Main image */}
                <ParallaxSection speed={0.1}>
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png"
                      alt="Saïd Taaroust Portrait"
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
                  </div>
                </ParallaxSection>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-brand-navy text-white px-8 py-4 rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-3xl font-black">25+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/60">
                    Ans d'expertise
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div>
              <ScrollReveal>
                <span className="inline-block text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-6">
                  Notre Fondateur
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95]">
                  SAÏD
                  <br />
                  <span className="text-brand-orange">TAAROUST</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="relative pl-6 border-l-4 border-brand-orange/30 mb-10">
                  <Quote className="absolute -left-4 -top-2 w-8 h-8 text-brand-orange/20" />
                  <p className="text-2xl font-medium text-brand-navy/80 italic leading-relaxed">
                    "Je ne suis pas seulement un coach. Je suis un partenaire de
                    croissance qui a vécu les réalités du terrain, les échecs et
                    les succès qui forgent les plus grandes entreprises."
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed mb-10">
                  Avec plus de 25 ans d'expérience dans le conseil stratégique
                  et le management, Saïd Taaroust a fondé STAF AFFAIRES pour
                  répondre à un besoin crucial : l'alignement entre performance
                  opérationnelle et mindset de leader.
                </p>
              </ScrollReveal>

              {/* Expertise tags */}
              <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.05}>
                {expertise.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-2 bg-brand-navy/5 hover:bg-brand-orange/10 px-4 py-2.5 rounded-full transition-colors group cursor-default">
                      <CheckCircle2 className="text-brand-orange w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-bold text-brand-navy">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION - Animated Counters
      ============================================ */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-salmon/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-20">
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">
              Nos Résultats
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              DES CHIFFRES QUI PARLENT
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="relative inline-block">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-brand-orange/20 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <div className="relative text-6xl md:text-8xl font-black text-white tracking-tighter">
                      <CountUp
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2.5}
                        delay={0.5 + index * 0.2}
                      />
                    </div>
                  </div>
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 mt-4">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          VALUES SECTION - 3D Tilt Cards
      ============================================ */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">
              Ce qui nous guide
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              NOS VALEURS
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-orange to-brand-salmon mx-auto rounded-full" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.15}>
                <TiltCard
                  className="h-full"
                  maxTilt={8}
                  glareOpacity={0.15}
                >
                  <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl h-full flex flex-col group hover:shadow-2xl transition-shadow duration-500">
                    {/* Icon */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <value.icon className="w-10 h-10" />
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl font-black tracking-tighter mb-4 group-hover:text-brand-orange transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed flex-grow">
                      {value.description}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <motion.div
                        className="h-1 bg-gradient-to-r from-brand-orange to-brand-salmon rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - Premium Conversion Block
      ============================================ */}
      <section className="py-32 bg-gradient-to-br from-brand-navy via-brand-navy to-[#0d2340] relative overflow-hidden">
        {/* Animated particles/dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs">
                Passez à l'action
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
              PRÊT À TRANSFORMER
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                VOTRE BUSINESS ?
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-medium">
              Réservez un appel stratégique gratuit avec Saïd Taaroust et
              découvrez comment propulser votre entreprise vers de nouveaux
              sommets.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MagneticButton intensity={0.3} scale={1.05}>
              <Link
                href="/prendre-rendez-vous"
                className="inline-flex items-center gap-3 bg-white text-brand-navy px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors shadow-2xl group"
              >
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
