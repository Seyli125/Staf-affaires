"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Frédérique Laban-Bounayre",
    role: "Assistante chez Activ'Expertise Landes",
    date: "9 janv. 2026",
    text: "Saïd m'a accompagné à faire le point sur mon positionnement et à trouver l'équilibre vie perso/pro. Grâce à sa bienveillance et écoute, j'en ressors avec des véritables clés.",
  },
  {
    name: "Aurélie Durquet",
    role: "Sophrologue-Masseur",
    date: "13 octobre 2025",
    text: "Sa capacité à analyser ma problématique, ses outils et son expérience m'ont permis de dessiner de nouveaux contours professionnels et d'améliorer l'équilibre de mon travail.",
  },
  {
    name: "Mathilda V.",
    role: "Système & Réseau",
    date: "13 avr 2025",
    text: "Saïd m'a accompagné au moment de ma reconversion. Sa bienveillance offre un support rassurant — le cadre idéal. Coaching 100% concluant !",
  },
  {
    name: "Charlotte Sarthou",
    role: "Directrice RH",
    date: "26 mars 2025",
    text: "Son expertise, sa pédagogie et sa capacité à créer un engagement ont fait la différence. Il sait allier théorie et mise en pratique — un véritable partenaire de confiance.",
  },
  {
    name: "Nathalie PERLATI",
    role: "Chargée d'affaires SNA",
    date: "21 mars 2025",
    text: "À chaque intervention : des échanges constructifs, une montée en compétence. Merci Said pour ton aide.",
  },
  {
    name: "Yael PELTIER COHEN",
    role: "Responsable adjointe",
    date: "11 mars 2025",
    text: "Saïd possède une grande maîtrise de son domaine et sait adapter son approche. Son professionnalisme, sa disponibilité et son enthousiasme sont remarquables.",
  },
  {
    name: "Guillaume Bourgier",
    role: "Fondateur Eventick",
    date: "25 sep 2023",
    text: "M'a accompagné en coaching développement commercial. Cela m'a aidé à prendre du recul et mieux analyser les freins. Je recommande vivement Saïd.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 -z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold text-sm uppercase tracking-widest px-4 py-2 bg-brand-gold/10 rounded-full"
          >
            Témoignages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mt-6 mb-6"
          >
            Ils m'ont fait <span className="text-brand-gold italic">confiance.</span>
          </motion.h2>
          <p className="text-brand-navy/60 text-lg">
            Retrouvez les avis authentiques issus de mon profil LinkedIn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-offwhite p-8 rounded-[32px] border border-brand-navy/5 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-gold/20 group-hover:text-brand-gold transition-colors" />
              </div>

              <p className="text-brand-navy/80 leading-relaxed mb-8 italic flex-grow">
                "{t.text}"
              </p>

              <div className="pt-6 border-t border-brand-navy/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold shadow-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm">{t.name}</h4>
                  <p className="text-xs text-brand-navy/60 font-medium">{t.role}</p>
                  <p className="text-[10px] text-brand-gold mt-1 font-bold uppercase tracking-wider">{t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
