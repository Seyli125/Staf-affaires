"use client";

import { motion } from "framer-motion";
import { Target, GraduationCap, Users, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "COACHING & PRÉPARATION MENTALE",
    description: "Libérez votre plein potentiel. Un accompagnement neuro-psychologique pour aligner performance et sérénité.",
    items: [
      "Individuel ou collectif haute performance",
      "Mindset & gestion de l'énergie",
      "Préparation mentale personnalisée",
      "Accompagnement sur 3, 4 ou 6 mois"
    ],
    icon: Target,
    color: "bg-brand-navy/5",
    accent: "bg-brand-navy",
  },
  {
    title: "FORMATION-ACTION (FORMACTION)",
    description: "Apprenez en faisant. Des sessions immersives pour transformer immédiatement vos compétences commerciales.",
    items: [
      "Audit et recueil des besoins sur mesure",
      "Animation en entreprise ou à distance",
      "Contenu pédagogique exclusif",
      "Mise en pratique opérationnelle immédiate"
    ],
    icon: GraduationCap,
    color: "bg-brand-orange/5",
    accent: "bg-brand-orange",
  },
  {
    title: "MENTORAT & MANAGEMENT",
    description: "Expertise externalisée pour piloter votre croissance. Un partenaire stratégique pour vos équipes commerciales.",
    items: [
      "Pilotage d'équipes commerciales B2B",
      "Conseil stratégique en affaires",
      "Audit des processus de vente",
      "Accompagnement opérationnel durable"
    ],
    icon: Users,
    color: "bg-brand-gold/5",
    accent: "bg-brand-gold",
  },
];

const specialities = [
  "Développer la posture du 'Chargé d'affaires aligné'",
  "Optimiser vos taux de propositions commerciales",
  "Sécuriser vos signatures et augmenter le panier moyen",
  "Déployer et piloter une stratégie commerciale impactante"
];

export function Services() {
  return (
    <section id="services" className="container mx-auto px-6 overflow-visible">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
        >
          Expertise & Excellence
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-brand-navy mb-8 leading-[1.1] tracking-tighter uppercase"
        >
          Propulsez votre <span className="text-brand-orange">performance</span> sans sacrifier votre sens.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-600 leading-relaxed"
        >
          Trois piliers complémentaires pour une transformation durable, alliant posture mentale et efficacité terrain.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-24">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`group p-10 rounded-[40px] ${service.color} border border-transparent hover:border-brand-navy/10 hover:shadow-2xl transition-all duration-500 flex flex-col`}
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${service.accent} text-white shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500`}>
              <service.icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4 leading-tight text-brand-navy uppercase tracking-tight">
              {service.title}
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              {service.description}
            </p>
            <div className="mt-auto space-y-4">
              {service.items.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-700 font-semibold leading-relaxed">
                  <CheckCircle2 className={`w-5 h-5 ${service.accent.replace('bg-', 'text-')} shrink-0 mt-0.5`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-brand-navy rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/20 blur-[120px] -mr-64 -mt-64 rounded-full" />
        <div className="relative z-10">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
                Focus <br/><span className="text-brand-gold">Opérationnel</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Parce que la théorie ne suffit pas, nous activons des leviers concrets pour vos résultats quotidiens.
              </p>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3 bg-brand-orange px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-navy transition-all"
              >
                Découvrir l'approche AVR® <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="md:col-span-3 grid gap-4">
              {specialities.map((spec, i) => (
                <motion.div 
                  key={spec}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors group/item"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold font-black text-xl group-hover/item:bg-brand-gold group-hover/item:text-white transition-colors">
                    {i + 1}
                  </div>
                  <span className="text-lg font-bold tracking-tight">{spec}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
