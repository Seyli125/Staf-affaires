"use client";

import { motion } from "framer-motion";
import { Target, BookOpen, Users, ArrowRight, Zap, TrendingUp, UserPlus, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "COACHING PROFESSIONNEL & PRÉPARATION MENTALE",
    icon: <Target className="w-8 h-8" />,
    description: "Atteignez vos objectifs sans vous renier ni vous épuiser. Un accompagnement neuro-psychologique pour managers et dirigeants.",
    features: [
      "Coaching individuel ou collectif",
      "Préparation mentale personnalisée",
      "Durées : 3, 4 ou 6 mois",
      "Cas : Reconversion, gestion du stress"
    ],
    color: "bg-white",
    iconColor: "text-brand-gold",
  },
  {
    title: "FORMATION-ACTION (FORMACTION)",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Monter en compétences immédiatement grâce à la mise en pratique opérationnelle et des contenus sur mesure.",
    features: [
      "Animation de formations en entreprise",
      "Audit et recueil des besoins préalable",
      "Création de contenu pédagogique",
      "Cas : Commercial, Management d'équipe"
    ],
    color: "bg-brand-navy/5",
    iconColor: "text-brand-gold",
  },
  {
    title: "MENTORAT & MANAGEMENT EXTERNALISÉ",
    icon: <Users className="w-8 h-8" />,
    description: "Pilotage ou co-pilotage d'équipes commerciales pour un développement stratégique et opérationnel durable.",
    features: [
      "Conseil stratégique en affaires",
      "Accompagnement opérationnel durable",
      "Développement commercial B2B",
      "Cas : Transformation d'équipes"
    ],
    color: "bg-white",
    iconColor: "text-brand-gold",
  },
];

const specialties = [
  { title: "Posture du 'Chargé d'affaires aligné'", desc: "Développer votre impact en 4 mois", icon: <UserPlus className="w-5 h-5" /> },
  { title: "Taux de propositions commerciales", desc: "Augmenter votre volume d'offres", icon: <TrendingUp className="w-5 h-5" /> },
  { title: "Signer vos premiers clients", desc: "Augmenter votre taux de conversions", icon: <Zap className="w-5 h-5" /> },
  { title: "Votre stratégie commerciale", desc: "Déployer et piloter avec efficacité", icon: <ShieldCheck className="w-5 h-5" /> },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold text-sm uppercase tracking-widest px-4 py-2 bg-brand-gold/10 rounded-full"
          >
            Mes Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-brand-navy mt-6 mb-6"
          >
            Les 3 piliers de <br />
            <span className="text-brand-gold italic">votre performance.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-brand-navy/60"
          >
            Une approche innovante basée sur le paradigme <span className="font-bold text-brand-navy border-b-2 border-brand-gold/30">AVR®</span> pour performer sans s'épuiser.
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
              className={`p-10 rounded-[32px] border border-brand-navy/5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col ${pillar.color}`}
            >
              <div className={`mb-8 p-5 bg-white rounded-2xl shadow-sm inline-block w-fit ${pillar.iconColor}`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-brand-navy/60 mb-8 flex-grow">
                {pillar.description}
              </p>
              <ul className="space-y-4 mb-8">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-brand-navy/80 font-medium">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                asChild
                variant="ghost" 
                className="p-0 text-brand-gold hover:text-brand-navy hover:bg-transparent font-bold flex items-center gap-2 group w-fit"
              >
                <a href="#contact">
                  En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-navy rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -z-0" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-2xl -z-0" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Spécialités opérationnelles</h3>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Je ne propose pas de recettes magiques. J'interviens concrètement sur le terrain pour transformer votre posture et vos résultats commerciaux.
              </p>
              <Button asChild className="bg-brand-gold text-brand-navy hover:bg-brand-gold/90 rounded-full px-10 py-7 font-bold text-lg transition-transform hover:scale-105">
                <a href="#contact">Prendre rendez-vous</a>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {specialties.map((spec, idx) => (
                <motion.div 
                  key={spec.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="text-brand-gold mb-4 p-2 bg-brand-gold/10 rounded-lg w-fit">{spec.icon}</div>
                  <h4 className="font-bold mb-2 text-white">{spec.title}</h4>
                  <p className="text-sm text-white/50">{spec.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
