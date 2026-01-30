"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Formateur professionnel agréé (AFPA)",
  "Technicien PNL certifié",
  "Coach-consultant RNCP Niveau 6",
  "Spécialiste de l'approche AVR®",
  "+300 heures de coaching certifié",
  "Respect de la charte éthique du coach"
];

export function About() {
  return (
    <section id="a-propos" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-brand-orange/10 rounded-[2rem] rotate-3 transition-transform group-hover:rotate-0 duration-500" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
                alt="Saïd Taaroust - Coach Professionnel"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-2xl shadow-2xl z-20">
              <div className="text-4xl font-black mb-1">40 ans</div>
              <div className="text-xs uppercase tracking-widest font-bold text-white/60">D'expérience cumulée</div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-orange" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Qui suis-je ?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
              L'expertise humaniste au service de <span className="text-brand-orange">votre performance.</span>
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                Coach certifié en entreprise et formateur depuis 2011, j'accompagne les managers et vendeurs responsables pour atteindre leurs objectifs sans se renier ni s'épuiser.
              </p>
              <p>
                Avec 25 ans d'expérience en développement commercial et 15 ans dans l'accompagnement des organisations, j'aide les professionnels à vendre avec plaisir et responsabilité, manager sans négliger leur santé, et obtenir des résultats concrets et durables.
              </p>
              <p className="font-bold text-black italic">
                "Ma philosophie : la performance ne se joue pas dans les méthodes et les processus — elle se joue dans le mindset, l'énergie et la capacité à incarner le professionnel qui impacte."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="font-bold text-sm uppercase tracking-tight">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
