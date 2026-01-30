"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Frédérique Laban-Bounayre",
    role: "Assistante chez Activ'Expertise Landes",
    date: "Janv. 2026",
    quote: "Saïd m'a accompagné à faire le point sur mon positionnement et à trouver l'équilibre vie perso/pro. Grâce à sa bienveillance et écoute, j'en ressors avec des véritables clés.",
    highlight: true,
  },
  {
    name: "Aurélie Durquet",
    role: "Sophrologue-Masseur",
    date: "Oct. 2025",
    quote: "Sa capacité à analyser ma problématique, ses outils et son expérience m'ont permis de dessiner de nouveaux contours professionnels et d'améliorer l'équilibre de mon travail.",
  },
  {
    name: "Mathilda V.",
    role: "Système & Réseau",
    date: "Avr. 2025",
    quote: "Saïd m'a accompagné au moment de ma reconversion. Sa bienveillance offre un support rassurant — le cadre idéal. Coaching 100% concluant !",
  },
  {
    name: "Charlotte Sarthou",
    role: "Directrice RH",
    date: "Mars 2025",
    quote: "Son expertise, sa pédagogie et sa capacité à créer un engagement ont fait la différence. Il sait allier théorie et mise en pratique — un véritable partenaire de confiance.",
    highlight: true,
  },
  {
    name: "Nathalie PERLATI",
    role: "Chargée d'affaires SNA",
    date: "Mars 2025",
    quote: "À chaque intervention : des échanges constructifs, une montée en compétence. Merci Said pour ton aide.",
  },
  {
    name: "Yael PELTIER COHEN",
    role: "Responsable adjointe",
    date: "Mars 2025",
    quote: "Saïd possède une grande maîtrise de son domaine et sait adapter son approche. Son professionnalisme, sa disponibilité et son enthousiasme sont remarquables.",
  },
  {
    name: "Guillaume Bourgier",
    role: "Fondateur Eventick",
    date: "Sep. 2023",
    quote: "M'a accompagné en coaching développement commercial. Cela m'a aidé à prendre du recul et mieux analyser les freins. Je recommande vivement Saïd.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-6 overflow-visible">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
              ))}
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-2">7 Avis LinkedIn</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-brand-navy leading-[1.1] tracking-tighter uppercase"
          >
            Ils ont <span className="text-brand-gold">osé</span> le changement.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl text-slate-500 max-w-sm leading-relaxed"
        >
          Découvrez les retours authentiques de dirigeants et managers accompagnés par Saïd.
        </motion.p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`break-inside-avoid relative p-10 rounded-[40px] border transition-all duration-500 group ${
              item.highlight 
              ? 'bg-brand-navy text-white border-transparent shadow-2xl shadow-brand-navy/20 scale-105 z-10' 
              : 'bg-white border-slate-100 hover:border-brand-gold/30 hover:shadow-xl'
            }`}
          >
            <Quote className={`absolute top-8 right-8 w-12 h-12 transition-colors ${
              item.highlight ? 'text-white/10' : 'text-slate-50'
            }`} />
            
            <p className={`text-lg leading-relaxed mb-10 italic relative z-10 ${
              item.highlight ? 'text-white/90 font-medium' : 'text-slate-700'
            }`}>
              "{item.quote}"
            </p>

            <div className="flex items-center gap-4 relative z-10">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                item.highlight ? 'bg-brand-gold text-white' : 'bg-brand-navy text-white'
              }`}>
                <span className="font-black text-lg">{item.name[0]}</span>
              </div>
              <div>
                <h4 className={`font-black uppercase tracking-tight text-sm ${
                  item.highlight ? 'text-white' : 'text-brand-navy'
                }`}>
                  {item.name}
                </h4>
                <p className={`text-[10px] font-black uppercase tracking-widest mt-1 ${
                  item.highlight ? 'text-brand-gold' : 'text-brand-orange'
                }`}>
                  {item.role} • {item.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
