"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const events = [
  {
    year: "2000-2002",
    title: "Formation Initiale",
    description: "BTS Gestion commerciale & DEUG Arts visuels (Univ. Montpellier)",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "2002-2012",
    title: "Go Sport - Management & P&L",
    description: "Directeur adjoint, gestion d'équipes et pilotage de la performance pendant 10 ans.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2010",
    title: "Certification Formateur",
    description: "Titre Formateur professionnel niveau 5 (AFPA).",
    icon: Award,
    type: "cert"
  },
  {
    year: "2014-2020",
    title: "Fondateur STAF40",
    description: "Formation et accompagnement des TPE/PME.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2017-2022",
    title: "CCI des Landes",
    description: "Formateur et Chargé d'affaires - Développement commercial, gestion, audit.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "2021-2022",
    title: "Certification Coach RNCP 6",
    description: "Obtention du titre de Coach-Consultant Certifié RNCP Niveau 6 (CIC).",
    icon: Award,
    type: "cert"
  },
  {
    year: "2021-2025",
    title: "CCITY Groupe",
    description: "Coach-consultant associé - Accompagnement PME, coaching individuel/collectif.",
    icon: Briefcase,
    type: "work"
  },
  {
    year: "Depuis Janv 2025",
    title: "CEO STAF Affaires",
    description: "Coaching, formation et management externalisé.",
    icon: Briefcase,
    type: "work"
  }
];

const certifications = [
  "Certification Coach-Consultant RNCP Niveau 6 (CIC)",
  "Technicien PNL certifié (The Society Of NLP)",
  "Formateur professionnel agréé (AFPA)"
];

export function Timeline() {
  return (
    <section id="parcours" className="py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Left: Timeline */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-orange" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Mon Parcours
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter uppercase">
              25 ans d'expérience <br />
              <span className="text-brand-orange text-3xl md:text-4xl">au service de votre réussite.</span>
            </h2>

            <div className="relative border-l-2 border-brand-orange/20 ml-4 md:ml-6 space-y-12">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute -left-[25px] top-0 w-12 h-12 bg-white rounded-2xl shadow-lg border border-brand-orange/20 flex items-center justify-center z-10">
                    <event.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-brand-orange font-black text-sm uppercase tracking-widest mb-2 block">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-black mb-3 uppercase tracking-tight">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certifications sticky card */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 blur-3xl rounded-full -mr-16 -mt-16" />
              
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">
                Certifications & <br />
                <span className="text-brand-orange">Expertises</span>
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex gap-4">
                    <Award className="w-6 h-6 text-brand-orange shrink-0" />
                    <p className="font-bold text-sm uppercase tracking-wide text-white/80">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm italic leading-relaxed">
                  "Chaque accompagnement respecte scrupuleusement la charte éthique du coaching professionnel."
                </p>
              </div>
            </motion.div>

            {/* AVR Approach Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-brand-orange p-10 rounded-[2.5rem] text-white shadow-xl"
            >
              <h4 className="text-xl font-black mb-4 uppercase">L'Approche AVR®</h4>
              <p className="text-white/90 font-medium leading-relaxed">
                Une méthode propriétaire basée sur la Vente Responsable : performer durablement tout en préservant le sens et l'humain.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
