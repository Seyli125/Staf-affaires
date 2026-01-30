"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Frédérique Laban-Bounayre",
    role: "Assistante chez Activ'Expertise Landes",
    date: "9 janv. 2026",
    quote: "Saïd m'a accompagné à faire le point sur mon positionnement et à trouver l'équilibre vie perso/pro. Grâce à sa bienveillance et écoute, j'en ressors avec des véritables clés.",
  },
  {
    name: "Aurélie Durquet",
    role: "Sophrologue-Masseur",
    date: "13 oct. 2025",
    quote: "Sa capacité à analyser ma problématique, ses outils et son expérience m'ont permis de dessiner de nouveaux contours professionnels et d'améliorer l'équilibre de mon travail.",
  },
  {
    name: "Mathilda V.",
    role: "Système & Réseau",
    date: "13 avr. 2025",
    quote: "Saïd m'a accompagné au moment de ma reconversion. Sa bienveillance offre un support rassurant — le cadre idéal. Coaching 100% concluant !",
  },
  {
    name: "Charlotte Sarthou",
    role: "Directrice RH",
    date: "26 mars 2025",
    quote: "Son expertise, sa pédagogie et sa capacité à créer un engagement ont fait la différence. Il sait allier théorie et mise en pratique — un véritable partenaire de confiance.",
  },
  {
    name: "Nathalie PERLATI",
    role: "Chargée d'affaires SNA",
    date: "21 mars 2025",
    quote: "À chaque intervention : des échanges constructifs, une montée en compétence. Merci Said pour ton aide.",
  },
  {
    name: "Yael PELTIER COHEN",
    role: "Responsable adjointe",
    date: "11 mars 2025",
    quote: "Saïd possède une grande maîtrise de son domaine et sait adapter son approche. Son professionnalisme, sa disponibilité et son enthousiasme sont remarquables.",
  },
  {
    name: "Guillaume Bourgier",
    role: "Fondateur Eventick",
    date: "25 sep. 2023",
    quote: "M'a accompagné en coaching développement commercial. Cela m'a aidé à prendre du recul et mieux analyser les freins. Je recommande vivement Saïd.",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-brand-navy">
            Témoignages & Résultats
          </h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ceux qui ont transformé leur posture et leurs résultats avec Saïd.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-all duration-500 group relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-50 group-hover:text-brand-orange/10 transition-colors" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 flex-grow italic relative z-10">
                "{item.quote}"
              </p>

              <div className="relative z-10">
                <h4 className="font-black text-brand-navy uppercase tracking-tight">{item.name}</h4>
                <p className="text-xs font-bold text-brand-orange uppercase tracking-wider mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
