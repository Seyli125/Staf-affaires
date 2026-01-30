"use client";

import { motion } from "framer-motion";
import { Target, BookOpen, Users2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Coaching Professionnel & Préparation Mentale",
    icon: Target,
    description: "Accompagnement individuel ou collectif pour atteindre vos objectifs sans vous épuiser.",
    features: [
      "Coaching neuro-psychologique",
      "Préparation mentale personnalisée",
      "Durées : 3, 4 ou 6 mois",
      "Gestion du stress professionnel"
    ],
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Formation-Action (FORMACTION)",
    icon: BookOpen,
    description: "Des formations concrètes avec mise en pratique immédiate sur le terrain.",
    features: [
      "Animation de formations en entreprise",
      "Création de contenu sur mesure",
      "Audit et recueil des besoins",
      "Montée en compétences commerciales"
    ],
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    title: "Mentorat & Management Externalisé",
    icon: Users2,
    description: "Un partenaire de confiance pour piloter vos équipes et votre stratégie.",
    features: [
      "Pilotage d'équipes commerciales",
      "Conseil stratégique en affaires",
      "Accompagnement opérationnel",
      "Transformation d'équipes"
    ],
    color: "bg-emerald-50",
    iconColor: "text-emerald-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-orange" />
            <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Mes piliers d'accompagnement
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-8">
            Des solutions concrètes pour <br />
            <span className="text-white">performer avec sens.</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Mon approche exclusive <span className="text-white font-bold underline decoration-brand-orange underline-offset-4">AVR®</span> (Approche de la Vente Responsable) se décline en trois piliers stratégiques pour transformer votre posture et vos résultats.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white rounded-[2.5rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>

              <h3 className="text-2xl font-black mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-8 text-lg">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-black/70 uppercase tracking-tight">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant="ghost" 
                className="group/btn p-0 hover:bg-transparent font-black uppercase tracking-widest text-sm flex items-center gap-2"
              >
                En savoir plus
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-black rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5 shadow-2xl">
          <div className="max-w-2xl">
            <h4 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter">
              Besoin d'un accompagnement sur mesure ?
            </h4>
            <p className="text-white/60 text-lg">
              Chaque entreprise est unique. Discutons de vos enjeux pour construire la stratégie qui vous ressemble.
            </p>
          </div>
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-10 py-8 text-lg font-black transition-all hover:scale-105 shadow-xl shrink-0">
            Échanger avec Saïd
          </Button>
        </div>
      </div>
    </section>
  );
}
