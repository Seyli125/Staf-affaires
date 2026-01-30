"use client";

import { motion } from "framer-motion";
import { Target, BookOpen, Users, ArrowRight, Zap, TrendingUp, UserPlus, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "COACHING PROFESSIONNEL & PRÉPARATION MENTALE",
    icon: <Target className="w-8 h-8" />,
    description: "Accompagnement individuel ou collectif pour atteindre vos objectifs sans vous renier ni vous épuiser.",
    features: [
      "Coaching neuro-psychologique",
      "Préparation mentale personnalisée",
      "Durées : 3, 4 ou 6 mois",
      "Gestion du stress et reconversion"
    ],
    color: "bg-slate-50",
    iconColor: "text-brand-gold",
  },
  {
    title: "FORMATION-ACTION (FORMACTION)",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Formation + mise en pratique opérationnelle pour une montée en compétences immédiate.",
    features: [
      "Animation en entreprise",
      "Création de contenu sur mesure",
      "Audit et recueil des besoins",
      "Management d'équipe"
    ],
    color: "bg-brand-navy/5",
    iconColor: "text-brand-gold",
  },
  {
    title: "MENTORAT & MANAGEMENT EXTERNALISÉ",
    icon: <Users className="w-8 h-8" />,
    description: "Pilotage ou co-pilotage de vos équipes commerciales pour un développement durable.",
    features: [
      "Conseil stratégique en affaires",
      "Accompagnement opérationnel",
      "Développement commercial B2B",
      "Transformation d'équipes"
    ],
    color: "bg-white",
    iconColor: "text-brand-gold",
  },
];

const specialties = [
  { title: "Posture du 'Chargé d'affaires aligné'", desc: "En seulement 4 mois", icon: <UserPlus className="w-5 h-5" /> },
  { title: "Augmenter votre taux de propositions", desc: "Optimisation du funnel", icon: <TrendingUp className="w-5 h-5" /> },
  { title: "Signer vos premiers clients", desc: "Booster vos conversions", icon: <Zap className="w-5 h-5" /> },
  { title: "Piloter votre stratégie commerciale", desc: "Accompagnement durable", icon: <ShieldCheck className="w-5 h-5" /> },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold text-sm uppercase tracking-widest"
          >
            Mes Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-navy mt-4 mb-6"
          >
            3 piliers pour votre <br />
            <span className="text-brand-gold italic">transformation.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-navy/60"
          >
            Une approche innovante basée sur le paradigme <span className="font-bold text-brand-navy">AVR®</span> pour performer durablement.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-3xl border border-brand-navy/5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${pillar.color}`}
            >
              <div className={`mb-8 p-4 bg-white rounded-2xl shadow-sm inline-block ${pillar.iconColor}`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-brand-navy/60 mb-8">
                {pillar.description}
              </p>
              <ul className="space-y-4 mb-8">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-brand-navy/80">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                asChild
                variant="ghost" 
                className="p-0 text-brand-gold hover:text-brand-navy hover:bg-transparent font-bold flex items-center gap-2"
              >
                <a href="#contact">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-navy rounded-[40px] p-12 text-white relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Spécialités opérationnelles</h3>
              <p className="text-white/70 text-lg mb-8">
                Un accompagnement concret sur le terrain pour des résultats mesurables sur votre chiffre d'affaires et votre posture.
              </p>
              <Button asChild className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 rounded-full px-8 py-6 font-bold">
                <a href="#contact">Prendre rendez-vous</a>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {specialties.map((spec) => (
                <div key={spec.title} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                  <div className="text-brand-gold mb-4">{spec.icon}</div>
                  <h4 className="font-bold mb-2">{spec.title}</h4>
                  <p className="text-sm text-white/50">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
