"use client";

import { motion } from "framer-motion";
import { Target, GraduationCap, Users, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "COACHING PROFESSIONNEL & PRÉPARATION MENTALE",
    description: "Accompagnement individuel ou collectif pour managers et vendeurs.",
    details: [
      "Coaching neuro-psychologique",
      "Préparation mentale personnalisée",
      "Durées : 3, 4 ou 6 mois selon besoins",
      "Cas : Reconversion, gestion du stress"
    ],
    icon: Target,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "FORMATION-ACTION (FORMACTION)",
    description: "Formation concrète avec mise en pratique opérationnelle immédiate.",
    details: [
      "Animation de formations en entreprise",
      "Création de contenu sur mesure",
      "Audit et recueil des besoins préalables",
      "Cas : Montée en compétences commerciales"
    ],
    icon: GraduationCap,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "MENTORAT & MANAGEMENT EXTERNALISÉ",
    description: "Pilotage d'équipes et conseil stratégique pour votre croissance.",
    details: [
      "Pilotage ou co-pilotage commercial",
      "Conseil stratégique en affaires",
      "Accompagnement opérationnel durable",
      "Cas : Transformation d'équipes B2B"
    ],
    icon: Users,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const specialties = [
  "Développer la posture du 'Chargé d'affaires aligné' en 4 mois",
  "Augmenter votre taux de propositions commerciales",
  "Signer vos premiers clients / augmenter conversions",
  "Déployer et piloter votre stratégie commerciale"
];

export function Services() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-primary mb-6"
          >
            Trois Piliers pour votre <br /> 
            <span className="text-brand-gold">Transformation</span>
          </motion.h2>
          <p className="text-xl text-muted-foreground">
            Une approche humaniste et pragmatique pour performer sans s'épuiser.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
              </div>
              
              <h3 className="text-xl font-black mb-4 leading-tight text-primary">
                {pillar.title}
              </h3>
              
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {pillar.description}
              </p>

              <ul className="space-y-4">
                {pillar.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Operational Specialties */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6 leading-tight">
                Spécialités <br />
                <span className="text-brand-gold">Opérationnelles</span>
              </h3>
              <p className="text-blue-100 mb-8">
                Des interventions ciblées pour des résultats mesurables et durables sur votre activité commerciale.
              </p>
            </div>
            
            <div className="grid gap-4">
              {specialties.map((spec) => (
                <div key={spec} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                  <span className="font-bold text-sm md:text-base">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
