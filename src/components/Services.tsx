"use client";

import { motion } from "framer-motion";
import { Target, GraduationCap, Users, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "COACHING PROFESSIONNEL & PRÉPARATION MENTALE",
    items: [
      "Accompagnement individuel ou collectif",
      "Coaching neuro-psychologique",
      "Préparation mentale personnalisée",
      "Durées : 3, 4 ou 6 mois selon les besoins"
    ],
    icon: Target,
    color: "bg-brand-navy/5",
    accent: "group-hover:bg-brand-navy",
  },
  {
    title: "FORMATION-ACTION (FORMACTION)",
    items: [
      "Formation + mise en pratique opérationnelle",
      "Animation de formations en entreprise",
      "Création de contenu sur mesure",
      "Audit et recueil des besoins préalables"
    ],
    icon: GraduationCap,
    color: "bg-brand-orange/5",
    accent: "group-hover:bg-brand-orange",
  },
  {
    title: "MENTORAT & MANAGEMENT EXTERNALISÉ",
    items: [
      "Pilotage ou co-pilotage d'équipes commerciales",
      "Conseil stratégique en affaires",
      "Accompagnement opérationnel durable",
      "Développement commercial B2B"
    ],
    icon: Users,
    color: "bg-brand-gold/5",
    accent: "group-hover:bg-brand-gold",
  },
];

const specialities = [
  "Développer la posture du 'Chargé d'affaires aligné' en 4 mois",
  "Augmenter votre taux de propositions commerciales",
  "Signer vos premiers clients / augmenter votre taux de conversions",
  "Déployer et piloter votre stratégie commerciale"
];

export function Services() {
  return (
    <section className="py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-brand-navy">
            Mes 3 Piliers d'Accompagnement
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Une approche holistique alliant posture mentale et excellence opérationnelle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[40px] ${service.color} border border-transparent hover:border-brand-navy/10 hover:shadow-2xl transition-all duration-500 group`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-300 ${service.accent.replace('group-hover:', '')} text-white`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black mb-6 leading-tight text-brand-navy">
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-brand-navy/20 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-navy p-12 rounded-[50px] text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[100px] -mr-32 -mt-32 rounded-full" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">
                Spécialités Opérationnelles
              </h3>
              <p className="text-brand-orange-light font-bold mb-8">
                Des résultats concrets pour transformer votre business.
              </p>
            </div>
            <div className="grid gap-4">
              {specialities.map((spec) => (
                <div key={spec} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span className="text-sm font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
