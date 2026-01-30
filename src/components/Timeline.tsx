"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, BookOpen } from "lucide-react";

const events = [
  {
    date: "Depuis Jan 2025",
    title: "STAF Affaires",
    role: "CEO - Coaching, Formation, Management externalisé",
    description: "Accompagnement B2B, stratégie commerciale et coaching de dirigeants.",
    icon: <Briefcase className="w-5 h-5" />,
    highlight: true,
  },
  {
    date: "2021 - 2025",
    title: "CCITY Groupe",
    role: "Coach-consultant associé",
    description: "Accompagnement de PME, coaching individuel et collectif.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "2021 - 2022",
    title: "Certification CIC",
    role: "Coach-Consultant RNCP Niveau 6",
    description: "Crédibilité absolue avec +300h de coaching certifié.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    date: "2017 - 2022",
    title: "CCI des Landes",
    role: "Formateur et Chargé d'affaires",
    description: "Développement commercial, gestion, audit et conseil stratégique.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "2019",
    title: "The Society Of NLP",
    role: "Technicien PNL certifié",
    description: "Maîtrise des outils de communication et changement comportemental.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    date: "2014 - 2020",
    title: "STAF40",
    role: "Fondateur",
    description: "Formation et accompagnement sur mesure pour TPE/PME.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "2010",
    title: "AFPA",
    role: "Formateur professionnel agréé",
    description: "Titre de niveau 5, expertise pédagogique confirmée.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    date: "2002 - 2012",
    title: "Go Sport",
    role: "Directeur adjoint",
    description: "Gestion d'équipes et P&L pendant plus de 10 ans.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "2000",
    title: "Formation Initiale",
    role: "BTS Gestion Commerciale & Arts Visuels",
    description: "Bases solides en gestion et créativité visuelle.",
    icon: <BookOpen className="w-5 h-5" />,
  },
];

export function Timeline() {
  return (
    <section id="journey" className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold text-sm uppercase tracking-widest px-4 py-2 bg-brand-gold/10 rounded-full"
          >
            Parcours & Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mt-6 mb-6"
          >
            40 ans d'expérience <br />
            <span className="text-brand-gold italic">cumulée à votre service.</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-brand-navy/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-brand-gold rounded-full -translate-x-1/2 z-10 hidden md:block border-4 border-white shadow-lg" />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <div className={`p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${
                    event.highlight 
                      ? "bg-brand-navy text-white border-brand-navy shadow-2xl scale-105 z-20" 
                      : "bg-white border-brand-navy/5 shadow-xl hover:shadow-2xl"
                  }`}>
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className={`p-2 rounded-lg ${event.highlight ? "bg-brand-gold/20 text-brand-gold" : "bg-brand-offwhite text-brand-gold"}`}>
                        {event.icon}
                      </div>
                      <span className={`text-sm font-bold tracking-wider uppercase ${event.highlight ? "text-brand-gold" : "text-brand-navy/40"}`}>
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-serif">{event.title}</h3>
                    <p className={`font-bold mb-3 ${event.highlight ? "text-white" : "text-brand-navy"}`}>
                      {event.role}
                    </p>
                    <p className={`text-sm leading-relaxed ${event.highlight ? "text-white/60" : "text-brand-navy/50"}`}>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="w-full md:w-1/2 h-8 md:h-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
