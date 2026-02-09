"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Target, GraduationCap, Users, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    title: "Coaching & Préparation Mentale",
    subtitle: "Libérez votre potentiel",
    description: "Accompagnement neuro-psychologique pour aligner performance et sérénité.",
    items: [
      "Individuel ou collectif haute performance",
      "Mindset & gestion de l'énergie",
      "Préparation mentale personnalisée",
      "Accompagnement sur 3, 4 ou 6 mois"
    ],
    icon: Target,
    gradient: "from-brand-navy to-brand-navy/80",
    badge: "Le plus demandé",
  },
  {
    title: "Formation-Action",
    subtitle: "Apprenez en faisant",
    description: "Sessions immersives pour transformer vos compétences commerciales.",
    items: [
      "Audit et recueil des besoins sur mesure",
      "Animation en entreprise ou à distance",
      "Contenu pédagogique exclusif",
      "Mise en pratique opérationnelle immédiate"
    ],
    icon: GraduationCap,
    gradient: "from-brand-orange to-brand-orange/80",
    badge: "Formaction®",
  },
  {
    title: "Mentorat & Management",
    subtitle: "Expertise externalisée",
    description: "Partenaire stratégique pour piloter votre croissance commerciale.",
    items: [
      "Pilotage d'équipes commerciales B2B",
      "Conseil stratégique en affaires",
      "Audit des processus de vente",
      "Accompagnement opérationnel durable"
    ],
    icon: Users,
    gradient: "from-slate-700 to-slate-600",
    badge: "Premium",
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
    <section id="services" className="container mx-auto px-4 sm:px-6 overflow-visible">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-brand-orange font-semibold text-xs mb-3 px-3 py-1.5 bg-brand-orange/10 rounded-full"
        >
          <Sparkles className="w-3 h-3" />
          Expertise & Excellence
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-3 leading-tight"
        >
          Propulsez votre performance
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto"
        >
          Trois piliers complémentaires pour une transformation durable, alliant posture mentale et efficacité terrain.
        </motion.p>
      </div>

      {/* Services Cards - Premium Design */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-gradient-to-r ${service.gradient} text-white`}>
                {service.badge}
              </span>
            </div>
            
            {/* Icon Header */}
            <div className={`relative h-24 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <service.icon className="w-10 h-10 text-white/90 group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <h3 className="text-base font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-3">
                {service.subtitle}
              </p>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Items */}
              <div className="space-y-2">
                {service.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[11px] text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Link href="/prendre-rendez-vous" className="block mt-5">
                <button className="w-full py-2.5 text-xs font-semibold text-brand-navy bg-slate-50 hover:bg-brand-navy hover:text-white rounded-lg transition-all group/btn flex items-center justify-center gap-2">
                  En savoir plus
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Focus Operationnel - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-brand-navy rounded-2xl p-5 sm:p-8 text-white relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[100px] -mr-32 -mt-32 rounded-full" />
        
        <div className="relative z-10 grid md:grid-cols-5 gap-6 items-center">
          {/* Image */}
          <div className="md:col-span-2 relative">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 max-w-[200px] mx-auto">
              <Image
                src="/images/said-casual.jpg"
                alt="Saïd Taaroust"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-brand-orange text-white px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-lg hidden sm:block">
              Méthode AVR®
            </div>
          </div>
          
          {/* Content */}
          <div className="md:col-span-3">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Focus <span className="text-brand-orange">Opérationnel</span>
            </h3>
            <p className="text-white/60 text-xs mb-4">
              Des leviers concrets pour vos résultats quotidiens.
            </p>
            
            <div className="grid gap-2 mb-5">
              {specialities.map((spec, i) => (
                <motion.div 
                  key={spec}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-white/5 p-2.5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-xs shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs font-medium">{spec}</span>
                </motion.div>
              ))}
            </div>
            
            <Link href="/prendre-rendez-vous">
              <button className="flex items-center gap-2 bg-brand-orange px-5 py-2.5 rounded-full font-semibold hover:bg-white hover:text-brand-navy transition-all text-xs">
                Découvrir l'approche AVR® 
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
