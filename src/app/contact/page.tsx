"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  ArrowRight,
  CheckCircle2,
  Clock,
  Gift,
  User,
} from "lucide-react";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "saidtaaroust@gmail.com",
    link: "mailto:saidtaaroust@gmail.com",
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
    value: "Landes – Mont-de-Marsan",
    subtitle: "Disponible à l'international",
    link: null,
  },
];

const promises = [
  { icon: Clock, text: "Réponse sous 24h" },
  { icon: Gift, text: "Consultation initiale offerte" },
  { icon: User, text: "Accompagnement personnalisé" },
];

const FORMSPREE_URL = "https://formspree.io/f/mnjlvneb";

export default function ContactPage() {
  const [formData, setFormData] = useState({ nom: "", email: "", sujet: "", message: "", rgpd: false, newsletter: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) return;
    setIsSubmitting(true);
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Nouveau message — ${formData.nom}`,
          _replyto: formData.email,
          "Nom": formData.nom,
          "Email": formData.email,
          "Sujet": formData.sujet,
          "Message": formData.message,
          "Newsletter": formData.newsletter ? "Oui" : "Non",
        }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);
    }
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#1D1D1F] overflow-hidden">
      <Navbar />

      {/* ============================================
          HERO — Minimal & Elegant
      ============================================ */}
      <section className="pt-40 pb-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-5">
                Contact
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight leading-[1.05]">
                Parlons de votre
                <br />
                <span className="text-brand-orange">prochaine étape.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-gray-500 text-lg mt-6 max-w-xl leading-relaxed">
                Prêt à franchir un nouveau cap ? Partagez-nous votre projet et
                découvrez comment STAF Affaires peut vous accompagner.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          MAIN CONTENT — Form + Info
      ============================================ */}
      <section className="pb-28 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* ---- FORM (3/5) ---- */}
            <div className="lg:col-span-3 order-1">
              <ScrollReveal>
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_40px_rgba(0,0,0,0.06)] border border-gray-100/80">
                  <h2 className="text-xl font-black text-brand-navy tracking-tight mb-1">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-gray-400 text-sm mb-8">
                    Tous les champs marqués d'un * sont obligatoires.
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-black text-brand-navy mb-2">Message envoyé !</h3>
                      <p className="text-gray-400 text-sm">Nous vous répondrons dans les 24h.</p>
                    </div>
                  ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-brand-navy/70 uppercase tracking-wider mb-2">
                          Nom <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Votre nom"
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-gray-200 focus:border-brand-orange/40 focus:bg-white rounded-xl text-sm font-medium outline-none transition-all placeholder:text-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-brand-navy/70 uppercase tracking-wider mb-2">
                          Email <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FFFFFF] border border-gray-200 focus:border-brand-orange/40 focus:bg-white rounded-xl text-sm font-medium outline-none transition-all placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy/70 uppercase tracking-wider mb-2">
                        Sujet <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Comment pouvons-nous vous aider ?"
                        value={formData.sujet}
                        onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FFFFFF] border border-gray-200 focus:border-brand-orange/40 focus:bg-white rounded-xl text-sm font-medium outline-none transition-all placeholder:text-gray-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-navy/70 uppercase tracking-wider mb-2">
                        Message <span className="text-brand-orange">*</span>
                      </label>
                      <textarea
                        required
                        placeholder="Dites-nous en plus sur vos besoins..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FFFFFF] border border-gray-200 focus:border-brand-orange/40 focus:bg-white rounded-xl text-sm font-medium outline-none transition-all resize-none placeholder:text-gray-300"
                      />
                    </div>

                    {/* RGPD */}
                    <div className="space-y-3 pt-1">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={formData.rgpd}
                          onChange={(e) => setFormData({ ...formData, rgpd: e.target.checked })}
                          className="mt-0.5 w-4 h-4 rounded border-2 border-gray-300 text-brand-orange focus:ring-brand-orange focus:ring-offset-0 cursor-pointer accent-[#ff6b4a]"
                        />
                        <span className="text-xs text-gray-500 leading-relaxed">
                          J'accepte que mes données personnelles soient
                          collectées et traitées conformément à la{" "}
                          <Link
                            href="/politique-de-confidentialite"
                            className="text-brand-orange hover:underline font-semibold"
                          >
                            politique de confidentialité
                          </Link>{" "}
                          de STAF Affaires.{" "}
                          <span className="text-brand-orange">*</span>
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.newsletter}
                          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                          className="mt-0.5 w-4 h-4 rounded border-2 border-gray-300 text-brand-orange focus:ring-brand-orange focus:ring-offset-0 cursor-pointer accent-[#ff6b4a]"
                        />
                        <span className="text-xs text-gray-500 leading-relaxed">
                          J'accepte de recevoir des communications de STAF
                          Affaires (newsletters, offres, actualités). Désinscription possible à tout moment.
                        </span>
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 mt-2 rounded-xl bg-brand-navy text-white font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-orange transition-colors duration-300 shadow-lg group disabled:opacity-60"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                  </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* ---- SIDEBAR (2/5) ---- */}
            <div className="lg:col-span-2 order-2 space-y-8">
              {/* Contact info cards */}
              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {contactInfo.map((item) => (
                  <StaggerItem key={item.title}>
                    <motion.div
                      className="bg-white rounded-2xl p-5 border border-gray-100/80 shadow-[0_2px_20px_rgba(0,0,0,0.04)] group"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shrink-0">
                          <item.icon className="w-[18px] h-[18px]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">
                            {item.title}
                          </p>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <>
                              <p className="text-sm font-semibold text-brand-navy">
                                {item.value}
                              </p>
                              {item.subtitle && (
                                <p className="text-xs text-gray-400 mt-0.5">
                                  {item.subtitle}
                                </p>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Promises */}
              <ScrollReveal delay={0.3}>
                <div className="bg-brand-navy rounded-2xl p-6 text-white">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-5">
                    Nos engagements
                  </h3>
                  <div className="space-y-4">
                    {promises.map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-brand-orange" />
                        </div>
                        <span className="text-sm font-medium text-white/80">
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Social */}
              <ScrollReveal delay={0.4}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Retrouvez-nous
                  </span>
                  <div className="h-px bg-gray-200 flex-1" />
                  <div className="flex gap-2">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Instagram, href: "#", label: "Instagram" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 shadow-sm"
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA — Clean & Focused
      ============================================ */}
      <section className="py-20 relative">
        {/* Subtle top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />

        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Préférez-vous échanger de vive voix ?
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-black text-brand-navy tracking-tight mb-3">
              Réservez un appel stratégique gratuit
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
              30 minutes avec Saïd Taaroust pour explorer vos enjeux et définir
              la meilleure approche.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/prendre-rendez-vous"
                className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-brand-orange transition-colors duration-300 shadow-lg group"
              >
                Réserver un créneau
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
