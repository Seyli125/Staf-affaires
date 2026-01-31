"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Mail, ArrowRight, Sparkles, Quote } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  LineReveal,
  MagneticButton,
  TiltCard,
} from "@/components/animations";

const team = [
  {
    name: "Saïd Taaroust",
    role: "Fondateur & Coach Principal",
    bio: "Expert en stratégie B2B et préparation mentale avec 25 ans d'expérience. Coach certifié RNCP Niveau 6 & formateur PNL.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png",
    featured: true,
  },
  {
    name: "Sarah Martin",
    role: "Coach d'Équipe",
    bio: "Spécialiste en dynamique de groupe et intelligence émotionnelle.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    featured: false,
  },
  {
    name: "Marc Lavoie",
    role: "Mentor Business",
    bio: "Ancien entrepreneur ayant scalé plusieurs startups à l'international.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    featured: false,
  },
];

const socialIcons = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Mail, label: "Email" },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-brand-navy">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 20% 40%, rgba(255,107,74,0.4) 0%, transparent 50%)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 80% 60%, rgba(255,142,117,0.4) 0%, transparent 50%)",
            }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">
                Notre Force
              </span>
            </div>
          </ScrollReveal>

          <div className="mb-8">
            <LineReveal delay={0.3}>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                L'ÉQUIPE
              </h1>
            </LineReveal>
            <LineReveal delay={0.5}>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                  STAFF AFFAIRES
                </span>
              </h1>
            </LineReveal>
          </div>

          <ScrollReveal delay={0.7}>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto font-medium leading-relaxed">
              Une alliance d'experts passionnés par la{" "}
              <span className="text-white font-bold">transformation humaine</span>{" "}
              et la réussite entrepreneuriale.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          FEATURED MEMBER - Saïd Taaroust
      ============================================ */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-orange/5 to-transparent skew-x-12 -translate-x-1/4" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-br from-brand-orange/20 to-brand-salmon/20 rounded-[3rem] -rotate-3"
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src={team[0].image}
                    alt={team[0].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

                  {/* Floating social buttons */}
                  <motion.div
                    className="absolute bottom-8 left-8 flex gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {socialIcons.map((social) => (
                      <MagneticButton
                        key={social.label}
                        intensity={0.5}
                        scale={1.15}
                      >
                        <a
                          href="#"
                          className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-navy hover:text-brand-orange shadow-lg transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      </MagneticButton>
                    ))}
                  </motion.div>
                </div>

                {/* Experience badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-brand-navy text-white px-8 py-4 rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
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
                  Fondateur
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.95]">
                  {team[0].name.split(" ")[0]}
                  <br />
                  <span className="text-brand-orange">
                    {team[0].name.split(" ")[1]}
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-xl text-brand-orange font-bold uppercase tracking-widest mb-8">
                  {team[0].role}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="relative pl-6 border-l-4 border-brand-orange/30 mb-10">
                  <Quote className="absolute -left-4 -top-2 w-8 h-8 text-brand-orange/20" />
                  <p className="text-xl font-medium text-muted-foreground italic leading-relaxed">
                    {team[0].bio}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <MagneticButton intensity={0.3} scale={1.05}>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand-orange transition-colors shadow-xl group"
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TEAM GRID
      ============================================ */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">
              Nos Experts
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              L'ÉQUIPE COMPLÈTE
            </h2>
          </ScrollReveal>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
            staggerDelay={0.15}
          >
            {team.slice(1).map((member) => (
              <StaggerItem key={member.name}>
                <TiltCard maxTilt={5} glareOpacity={0.1}>
                  <div className="group">
                    {/* Image */}
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <div className="flex gap-3">
                          {socialIcons.map((social) => (
                            <motion.a
                              key={social.label}
                              href="#"
                              whileHover={{ scale: 1.2, y: -5 }}
                              className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-brand-navy shadow-lg"
                              aria-label={social.label}
                            >
                              <social.icon className="w-5 h-5" />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-3xl font-black tracking-tighter mb-2 group-hover:text-brand-orange transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}

            {/* Join Us Card */}
            <StaggerItem>
              <TiltCard maxTilt={5} glareOpacity={0.1}>
                <div className="bg-brand-navy rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center h-full min-h-[500px] relative overflow-hidden group">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <motion.div
                    className="w-20 h-20 bg-brand-orange/20 rounded-full flex items-center justify-center mb-8 relative z-10"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Sparkles className="w-10 h-10 text-brand-orange" />
                  </motion.div>

                  <h3 className="text-3xl font-black text-white tracking-tighter mb-4 relative z-10">
                    Rejoignez-nous
                  </h3>
                  <p className="text-white/60 font-medium mb-8 relative z-10">
                    Nous recherchons des coachs talentueux pour renforcer notre
                    impact.
                  </p>

                  <MagneticButton intensity={0.3} scale={1.05}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-orange hover:text-white transition-colors shadow-lg group/btn relative z-10"
                    >
                      Postuler
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </MagneticButton>
                </div>
              </TiltCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
      ============================================ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,107,74,0.3) 0%, transparent 60%)",
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
              PRÊT À{" "}
              <span className="text-brand-orange">NOUS RENCONTRER ?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Planifiez un appel découverte avec notre équipe et définissez
              ensemble votre parcours de transformation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
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
