"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, TrendingUp, Users, Target } from "lucide-react";

const timelineData = [
  {
    year: "2000 - 2002",
    title: "Formation Initiale",
    description: "BTS Gestion commerciale & DEUG Arts visuels (Univ. Montpellier).",
    icon: GraduationCap,
  },
  {
    year: "2002 - 2012",
    title: "Go Sport",
    description: "Directeur adjoint (10+ ans). Gestion d'équipes et pilotage P&L.",
    icon: Building2,
  },
  {
    year: "2010",
    title: "AFPA",
    description: "Titre de Formateur professionnel niveau 5.",
    icon: GraduationCap,
  },
  {
    year: "2014 - 2020",
    title: "STAF40",
    description: "Fondateur. Formation et accompagnement stratégique des TPE/PME.",
    icon: Target,
  },
  {
    year: "2017 - 2022",
    title: "CCI des Landes",
    description: "Formateur et Chargé d'affaires. Développement commercial et audit.",
    icon: TrendingUp,
  },
  {
    year: "2021 - 2025",
    title: "CCITY Groupe",
    description: "Coach-consultant associé. Accompagnement PME et coaching collectif.",
    icon: Users,
  },
  {
    year: "Depuis 2025",
    title: "STAF Affaires",
    description: "CEO. Coaching, formation et management externalisé.",
    icon: Target,
  },
];

export function Timeline() {
  return (
    <section className="py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-brand-navy">
            Parcours & Expertises
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Plus de 40 ans d'expérience cumulée au service de votre performance.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 md:-translate-x-1/2" />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-orange rounded-full md:-translate-x-1/2 z-10 border-4 border-white shadow-sm" />

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                  <div className="bg-white p-8 rounded-[30px] shadow-sm border border-slate-50 hover:shadow-xl transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-black text-brand-orange">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-black mb-2 text-brand-navy uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
