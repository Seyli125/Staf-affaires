"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Frédérique Laban-Bounayre",
    role: "Assistante chez Activ'Expertise Landes",
    date: "9 janv. 2026",
    text: "Saïd m'a accompagné à faire le point sur mon positionnement et à trouver l'équilibre vie perso/pro. Grâce à sa bienveillance et écoute, j'en ressors avec des véritables clés.",
    rating: 5
  },
  {
    name: "Aurélie Durquet",
    role: "Sophrologue-Masseur",
    date: "13 octobre 2025",
    text: "Sa capacité à analyser ma problématique, ses outils et son expérience m'ont permis de dessiner de nouveaux contours professionnels et d'améliorer l'équilibre de mon travail.",
    rating: 5
  },
  {
    name: "Mathilda V.",
    role: "Système & Réseau",
    date: "13 avr 2025",
    text: "Saïd m'a accompagné au moment de ma reconversion. Sa bienveillance offre un support rassurant — le cadre idéal. Coaching 100% concluant !",
    rating: 5
  },
  {
    name: "Charlotte Sarthou",
    role: "Directrice RH",
    date: "26 mars 2025",
    text: "Son expertise, sa pédagogie et sa capacité à créer un engagement ont fait la différence. Il sait allier théorie et mise en pratique — un véritable partenaire de confiance.",
    rating: 5
  },
  {
    name: "Nathalie PERLATI",
    role: "Chargée d'affaires SNA",
    date: "21 mars 2025",
    text: "À chaque intervention : des échanges constructifs, une montée en compétence. Merci Said pour ton aide.",
    rating: 5
  },
  {
    name: "Yael PELTIER COHEN",
    role: "Responsable adjointe",
    date: "11 mars 2025",
    text: "Saïd possède une grande maîtrise de son domaine et sait adapter son approche. Son professionnalisme, sa disponibilité et son enthousiasme sont remarquables.",
    rating: 5
  },
  {
    name: "Guillaume Bourgier",
    role: "Fondateur Eventick",
    date: "25 sep 2023",
    text: "M'a accompagné en coaching développement commercial. Cela m'a aidé à prendre du recul et mieux analyser les freins. Je recommande vivement Saïd.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-10 h-[2px] bg-brand-orange" />
            <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Témoignages
            </span>
            <div className="w-10 h-[2px] bg-brand-orange" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
            Ils nous font <span className="text-brand-orange">confiance.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les retours d'expérience de ceux qui ont transformé leur posture et leur performance avec Saïd.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid bg-gray-50 rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-brand-orange/20 group-hover:text-brand-orange/40 transition-colors" />
              </div>

              <p className="text-lg leading-relaxed mb-8 italic text-black/80">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center font-black text-brand-orange text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-tight">{review.name}</h4>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-tight mt-1">
                    {review.role}
                  </p>
                  <p className="text-[10px] text-muted-foreground/60 uppercase mt-1">
                    {review.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
