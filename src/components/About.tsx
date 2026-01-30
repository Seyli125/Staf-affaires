"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const certifications = [
  "Coach-consultant RNCP Niveau 6 (CIC)",
  "Technicien PNL certifié (The Society Of NLP)",
  "Formateur professionnel agréé (AFPA)",
  "Spécialiste de l'approche AVR®",
  "+300 heures de coaching certifié",
  "Respect de la charte éthique du coach",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10 border border-brand-navy/5">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
                alt="Saïd Taaroust - Portrait Professionnel"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl -z-0" />
            
            {/* Philosophy quote overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-brand-navy text-white p-8 rounded-2xl shadow-2xl z-20 max-w-xs border border-white/10"
            >
              <p className="font-serif italic text-lg leading-relaxed">
                "La performance ne se joue pas dans les méthodes — elle se joue dans le mindset, l'énergie et l'incarnation."
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full text-brand-gold font-bold text-xs uppercase tracking-widest mb-6">
              Qui suis-je ?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-8 leading-tight">
              Saïd Taaroust : <br />
              <span className="text-brand-gold italic">L'expert humaniste</span>
            </h2>
            
            <div className="space-y-6 text-brand-navy/70 text-lg leading-relaxed mb-10">
              <p>
                Coach certifié en entreprise et formateur depuis 2011, j'accompagne les managers et vendeurs responsables pour atteindre leurs objectifs sans se renier ni s'épuiser.
              </p>
              <p>
                Avec 25 ans d'expérience en développement commercial et 15 ans dans l'accompagnement des organisations, j'aide les professionnels à vendre avec plaisir et responsabilité, manager sans négliger leur santé, et obtenir des résultats concrets et durables.
              </p>
              <p className="font-bold text-brand-navy bg-brand-offwhite p-6 rounded-2xl border-l-4 border-brand-gold">
                Ma philosophie : la performance ne se joue pas dans les méthodes et les processus — elle se joue dans le mindset, l'énergie et la capacité à incarner le professionnel qui impacte.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3 bg-brand-offwhite p-4 rounded-xl border border-brand-navy/5 hover:border-brand-gold/30 transition-colors group"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-brand-navy/80">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
