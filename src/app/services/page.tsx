"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Target,
  Calendar,
  Zap,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  LineReveal,
  TiltCard,
  MagneticButton,
} from "@/components/animations";

const allServices = [
  {
    title: "Coaching Individuel",
    description:
      "Accompagnement sur-mesure pour dirigeants et entrepreneurs à haut potentiel.",
    icon: Target,
    details: [
      "Clarté stratégique",
      "Prise de décision",
      "Leadership",
      "Équilibre vie pro/perso",
    ],
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "blue",
  },
  {
    title: "Coaching d'Équipe",
    description:
      "Renforcez la cohésion et la performance collective de vos managers.",
    icon: Users,
    details: [
      "Alignement des visions",
      "Gestion des conflits",
      "Culture d'entreprise",
      "Efficacité collective",
    ],
    gradient: "from-brand-orange to-brand-salmon",
    accentColor: "orange",
  },
  {
    title: "Parcours Collectifs",
    description:
      "Programmes immersifs de 3, 4 ou 6 mois pour transformer vos équipes.",
    icon: Calendar,
    details: [
      "Workshops intensifs",
      "Suivi hebdomadaire",
      "KPIs de transformation",
      "Communauté d'apprentissage",
    ],
    gradient: "from-purple-500 to-violet-600",
    accentColor: "purple",
  },
  {
    title: "FormAction",
    description:
      "Formations activables immédiatement pour des résultats rapides.",
    icon: Zap,
    details: [
      "Vente & Négociation",
      "Communication d'influence",
      "Gestion du temps",
      "Productivité",
    ],
    gradient: "from-amber-500 to-orange-500",
    accentColor: "amber",
  },
  {
    title: "Mentorat & Management",
    description:
      "Management externalisé pour structurer votre croissance.",
    icon: ShieldCheck,
    details: [
      "Structuration RH",
      "Pilotage opérationnel",
      "Externalisation stratégique",
      "Conseil expert",
    ],
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "emerald",
  },
  {
    title: "Préparation Mentale",
    description:
      "Préparez-vous comme un athlète de haut niveau pour les enjeux business.",
    icon: BrainCircuit,
    details: [
      "Gestion du stress",
      "Concentration laser",
      "Résilience",
      "Confiance absolue",
    ],
    gradient: "from-rose-500 to-pink-600",
    accentColor: "rose",
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* ============================================
          HERO SECTION - Split Screen Reveal
      ============================================ */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center overflow-hidden"
      >
        {/* Background with diagonal split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white" />
          <motion.div
            className="absolute top-0 right-0 w-2/3 h-full bg-brand-navy origin-top-right"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
          />
        </div>

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <ScrollReveal delay={0.3}>
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs">
                  Nos Solutions
                </span>
              </div>
            </ScrollReveal>

            {/* Title with staggered reveal */}
            <div className="mb-8">
              <LineReveal delay={0.4}>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9]">
                  NOS APPROCHES
                </h1>
              </LineReveal>
              <LineReveal delay={0.6}>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                    DE COACHING
                  </span>
                </h1>
              </LineReveal>
            </div>

            <ScrollReveal delay={0.8}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
                Des solutions d'accompagnement pragmatiques, orientées résultats,
                pour transformer vos défis en{" "}
                <span className="text-brand-navy font-bold">
                  opportunités de croissance
                </span>
                .
              </p>
            </ScrollReveal>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-brand-navy/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-brand-orange rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ============================================
          SERVICES GRID - Staggered 3D Cards
      ============================================ */}
      <section className="py-32 bg-gray-50 relative">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-navy/10 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative">
          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            {allServices.map((service, index) => (
              <StaggerItem key={service.title}>
                <TiltCard
                  className="h-full"
                  maxTilt={6}
                  glareOpacity={0.1}
                  scale={1.02}
                >
                  <motion.div
                    className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <div
                      className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <service.icon className="w-10 h-10" />
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black tracking-tighter mb-4 group-hover:text-brand-orange transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground font-medium mb-8 flex-grow leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details list */}
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, i) => (
                        <motion.li
                          key={detail}
                          className="flex items-center gap-3 text-sm font-bold text-brand-navy/80"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="w-full py-5 rounded-2xl bg-brand-navy text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 group/btn hover:bg-brand-orange transition-colors duration-300 shadow-lg"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================
          CTA SECTION - Premium Conversion Block
      ============================================ */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(255,107,74,0.15) 0%, transparent 50%)",
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 right-0 w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 80% 50%, rgba(255,142,117,0.1) 0%, transparent 50%)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-white" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">
                Diagnostic Offert
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
              VOUS NE SAVEZ PAS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                PAR OÙ COMMENCER ?
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Prenons 30 minutes pour analyser votre situation et définir
              ensemble le parcours le plus adapté à vos besoins.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <MagneticButton intensity={0.3} scale={1.05}>
              <Link
                href="/prendre-rendez-vous"
                className="inline-flex items-center gap-3 bg-white text-brand-navy px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-2xl group"
              >
                Réserver un diagnostic gratuit
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
