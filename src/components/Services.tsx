"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

  return (
    <motion.section 
      ref={sectionRef}
      id="services" 
      className="container mx-auto px-4 sm:px-6 overflow-visible"
      style={{ opacity }}
    >
      {/* Header - Reduced sizes */}
      <motion.div 
        className="max-w-xl mx-auto text-center mb-10 sm:mb-12"
        style={{ y }}
      >
        <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-[10px] mb-3 px-3 py-1.5 bg-brand-orange/10 rounded-full">
          <Sparkles className="w-3 h-3" />
          Expertise & Excellence
        </span>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-3 leading-tight text-balance">
          Propulsez votre performance
        </h2>
        
        <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
          Trois piliers complémentaires pour une transformation durable, alliant posture mentale et efficacité terrain.
        </p>

        {/* Philosophical touch */}
        <p className="mt-4 text-xs italic text-brand-orange/80 font-medium">
          "L'excellence n'est pas un acte, mais une habitude."
        </p>
      </motion.div>

      {/* Services Cards - GPU-accelerated hover, reduced sizes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="service-card group relative bg-white rounded-xl border border-slate-100 overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-sm`}>
                {service.badge}
              </span>
            </div>
            
            {/* Icon Header - Reduced height */}
            <div className={`relative h-16 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="service-icon">
                <service.icon className="w-7 h-7 text-white/90" />
              </div>
            </div>
            
            {/* Content - Compact spacing */}
            <div className="p-4 sm:p-5">
              <h3 className="text-base font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-2">
                {service.subtitle}
              </p>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Items - Compact */}
              <div className="space-y-2">
                {service.items.map((item) => (
                  <div 
                    key={item} 
                    className="flex items-start gap-2 text-xs text-slate-600"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Link href="/prendre-rendez-vous" className="block mt-4">
                <button className="service-cta w-full py-2.5 text-xs font-semibold text-brand-navy bg-slate-50 rounded-lg flex items-center justify-center gap-1.5">
                  En savoir plus
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Focus Operationnel - Balanced, compact */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-brand-navy rounded-2xl p-5 sm:p-8 text-white relative overflow-hidden shadow-xl"
      >
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-orange/20 blur-[100px] -mr-30 -mt-30 rounded-full" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-salmon/10 blur-[80px] -ml-20 -mb-20 rounded-full" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
          {/* Image - Smaller, balanced */}
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl border-2 border-white/10 max-w-[140px] mx-auto">
              <Image
                src="/images/said-casual.jpg"
                alt="Saïd Taaroust"
                fill
                className="object-cover object-top"
                sizes="140px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-brand-orange text-white px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-lg hidden sm:block">
              Méthode AVR®
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Focus <span className="text-brand-orange">Opérationnel</span>
            </h3>
            
            <p className="text-white/60 text-sm mb-4">
              Des leviers concrets pour vos résultats quotidiens.
            </p>
            
            <div className="grid gap-2 mb-5">
              {specialities.map((spec, i) => (
                <div 
                  key={spec}
                  className="speciality-item flex items-center gap-2.5 bg-white/5 p-2.5 rounded-lg border border-white/5"
                >
                  <div className="w-6 h-6 rounded-md bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-xs shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-xs font-medium">{spec}</span>
                </div>
              ))}
            </div>
            
            <Link href="/prendre-rendez-vous">
              <button className="cta-button flex items-center gap-2 bg-brand-orange px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg">
                Découvrir l'approche AVR® 
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
