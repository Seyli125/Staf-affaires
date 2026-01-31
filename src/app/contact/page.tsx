"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Linkedin,
  Instagram,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  LineReveal,
  MagneticButton,
  TiltCard,
} from "@/components/animations";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@staffaffaires.fr",
    link: "mailto:contact@staffaffaires.fr",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+33 (0)1 23 45 67 89",
    link: "tel:+33123456789",
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Paris, France (Disponible à l'international)",
    link: null,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const benefits = [
  "Réponse sous 24h",
  "Consultation initiale offerte",
  "Accompagnement personnalisé",
];

export default function ContactPage() {
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
                "radial-gradient(ellipse at 30% 30%, rgba(255,107,74,0.4) 0%, transparent 50%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 70% 70%, rgba(255,142,117,0.4) 0%, transparent 50%)",
            }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
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
              <MessageSquare className="w-4 h-4 text-brand-orange" />
              <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">
                Parlons de vous
              </span>
            </div>
          </ScrollReveal>

          <div className="mb-8">
            <LineReveal delay={0.3}>
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                CONTACTEZ
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
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              Prêt à franchir une nouvelle étape ? Parlons de vos projets et
              de comment nous pouvons vous aider à les réaliser.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          CONTACT CONTENT
      ============================================ */}
      <section className="py-32 relative">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/5 to-transparent -skew-x-12 translate-x-1/4" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info Side */}
            <div>
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">
                  <span className="text-brand-orange">COORDONNÉES</span>
                </h2>
              </ScrollReveal>

              <StaggerContainer className="space-y-8" staggerDelay={0.1}>
                {contactInfo.map((item) => (
                  <StaggerItem key={item.title}>
                    <motion.div
                      className="flex items-start gap-6 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-brand-orange/20">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-black text-lg tracking-tight mb-1 group-hover:text-brand-orange transition-colors">
                          {item.title}
                        </h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground font-medium hover:text-brand-orange transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Social Links */}
              <ScrollReveal delay={0.4}>
                <div className="mt-16 pt-16 border-t border-gray-100">
                  <h3 className="font-black text-xl mb-6 tracking-tight">
                    SUIVEZ-NOUS
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <MagneticButton
                        key={social.label}
                        intensity={0.4}
                        scale={1.1}
                      >
                        <a
                          href={social.href}
                          className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-orange transition-all shadow-lg hover:shadow-brand-orange/20"
                          aria-label={social.label}
                        >
                          <social.icon className="w-6 h-6" />
                        </a>
                      </MagneticButton>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Benefits */}
              <ScrollReveal delay={0.5}>
                <div className="mt-12 p-8 bg-brand-navy/5 rounded-3xl">
                  <div className="space-y-4">
                    {benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 text-brand-navy font-bold"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form Side */}
            <ScrollReveal direction="right">
              <TiltCard maxTilt={3} glareOpacity={0.05}>
                <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                  {/* Decorative icon */}
                  <MessageSquare className="absolute -top-10 -right-10 w-40 h-40 text-brand-orange/5 -rotate-12" />

                  <form className="relative z-10 space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                          Nom
                        </label>
                        <input
                          type="text"
                          placeholder="Votre nom"
                          className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 focus:bg-white rounded-2xl font-medium outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="votre@email.com"
                          className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 focus:bg-white rounded-2xl font-medium outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                        Sujet
                      </label>
                      <input
                        type="text"
                        placeholder="Comment pouvons-nous vous aider ?"
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 focus:bg-white rounded-2xl font-medium outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">
                        Message
                      </label>
                      <textarea
                        placeholder="Dites-nous en plus sur vos besoins..."
                        rows={5}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 focus:bg-white rounded-2xl font-medium outline-none transition-all resize-none"
                      />
                    </div>

                    <MagneticButton
                      intensity={0.2}
                      scale={1.02}
                      className="w-full"
                    >
                      <button
                        type="submit"
                        className="w-full py-6 rounded-2xl bg-brand-navy text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-orange transition-colors shadow-xl hover:shadow-brand-orange/20 group"
                      >
                        Envoyer le message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </MagneticButton>
                  </form>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          MAP SECTION
      ============================================ */}
      <section className="h-[400px] w-full bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-16 h-16 text-brand-orange mx-auto mb-4" />
            </motion.div>
            <span className="font-black uppercase tracking-widest text-brand-navy">
              Paris, France
            </span>
            <p className="text-muted-foreground mt-2 font-medium">
              Disponible à l'international
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
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
              PRÉFÉREZ-VOUS{" "}
              <span className="text-brand-orange">UN APPEL DIRECT ?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Réservez directement un créneau pour une session stratégique
              gratuite avec Saïd Taaroust.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <MagneticButton intensity={0.3} scale={1.05}>
              <Link
                href="/prendre-rendez-vous"
                className="inline-flex items-center gap-3 bg-white text-brand-navy px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors shadow-2xl group"
              >
                Réserver un appel
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
