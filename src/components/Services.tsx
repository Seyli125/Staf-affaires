"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
    color: "bg-slate-50",
    accent: "bg-brand-navy",
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs mb-3 block"
          >
            Expertise & Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-brand-navy mb-6 leading-[1.1] tracking-tighter uppercase"
          >
            Propulsez votre <span className="text-brand-orange">performance</span> sans sacrifier votre sens.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-600 leading-relaxed"
          >
            Trois piliers complémentaires pour une transformation durable, alliant posture mentale et efficacité terrain.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-6 rounded-[28px] ${service.color} border border-transparent hover:border-brand-navy/10 hover:shadow-xl transition-all duration-500 flex flex-col`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${service.accent} text-white shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black mb-3 leading-tight text-brand-navy uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="mt-auto space-y-2.5">
                {service.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-[11px] text-slate-700 font-bold leading-relaxed">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${service.accent.replace('bg-', 'text-')} shrink-0 mt-0.5`} />
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
          className="bg-brand-navy rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/20 blur-[120px] -mr-48 -mt-48 rounded-full" />
          <div className="relative z-10">
            <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-black mb-5 leading-tight tracking-tighter uppercase">
                    Focus <br/><span className="text-brand-orange">Opérationnel</span>
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Parce que la théorie ne suffit pas, nous activons des leviers concrets pour vos résultats quotidiens.
                  </p>
                  <Link href="/prendre-rendez-vous">
                    <button 
                      className="group flex items-center gap-3 bg-brand-orange px-6 py-3 rounded-full font-bold hover:bg-white hover:text-brand-navy transition-all text-xs"
                    >
                      Découvrir l'approche AVR® <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              <div className="md:col-span-3 grid gap-2.5">
                {specialities.map((spec, i) => (
                  <motion.div 
                    key={spec}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center text-brand-orange font-black text-sm group-hover/item:bg-brand-orange group-hover/item:text-white transition-colors">
                      {i + 1}
                    </div>
                    <span className="text-sm font-bold tracking-tight">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
    </section>
  );
}
