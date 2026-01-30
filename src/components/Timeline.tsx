"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const events = [
  {
    date: "Depuis Jan 2025",
    title: "STAF Affaires",
    role: "CEO - Coaching, Formation, Management externalisé",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "2021 - 2025",
    title: "CCITY Groupe",
    role: "Coach-consultant associé - Accompagnement PME",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "2021 - 2022",
    title: "Certification CIC",
    role: "Coach-Consultant RNCP Niveau 6",
    icon: <Award className="w-5 h-5" />,
    highlight: true,
  },
  {
    date: "2017 - 2022",
    title: "CCI des Landes",
    role: "Formateur et Chargé d'affaires",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "2019",
    title: "Certification PNL",
    role: "Technicien PNL certifié (The Society Of NLP)",
    icon: <Award className="w-5 h-5" />,
  },
  {
    date: "2014 - 2020",
    title: "STAF40",
    role: "Fondateur - Formation et accompagnement TPE/PME",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "2010",
    title: "Certification AFPA",
    role: "Titre Formateur professionnel niveau 5",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    date: "2002 - 2012",
    title: "Go Sport",
    role: "Directeur adjoint - Gestion d'équipes et P&L",
    icon: <Briefcase className="w-5 h-5" />,
  },
];

export function Timeline() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold text-sm uppercase tracking-widest"
          >
            Parcours & Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mt-4 mb-6"
          >
            40 ans d'expérience <br />
            <span className="text-brand-gold italic">à votre service.</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-brand-navy/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-brand-gold rounded-full -translate-x-1/2 z-10 hidden md:block border-4 border-white shadow-sm" />

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-right"}`}>
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    event.highlight 
                      ? "bg-brand-navy text-white border-brand-navy shadow-xl scale-105" 
                      : "bg-brand-offwhite border-brand-navy/5 shadow-sm hover:shadow-md"
                  }`}>
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className={event.highlight ? "text-brand-gold" : "text-brand-gold"}>
                        {event.icon}
                      </div>
                      <span className={`text-sm font-bold ${event.highlight ? "text-white/60" : "text-brand-navy/50"}`}>
                        {event.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                    <p className={event.highlight ? "text-white/80" : "text-brand-navy/70"}>
                      {event.role}
                    </p>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="w-full md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
