"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Frédérique Laban-Bounayre",
    role: "Assistante chez Activ'Expertise Landes",
    date: "Janv. 2026",
    quote: "Saïd m'a accompagné à faire le point sur mon positionnement et à trouver l'équilibre vie perso/pro. Grâce à sa bienveillance et écoute, j'en ressors avec des véritables clés.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Aurélie Durquet",
    role: "Sophrologue-Masseur",
    date: "Oct. 2025",
    quote: "Sa capacité à analyser ma problématique, ses outils et son expérience m'ont permis de dessiner de nouveaux contours professionnels.",
    rating: 5,
  },
  {
    name: "Mathilda V.",
    role: "Système & Réseau",
    date: "Avr. 2025",
    quote: "Saïd m'a accompagné au moment de ma reconversion. Sa bienveillance offre un support rassurant — le cadre idéal. Coaching 100% concluant !",
    rating: 5,
  },
  {
    name: "Charlotte Sarthou",
    role: "Directrice RH",
    date: "Mars 2025",
    quote: "Son expertise, sa pédagogie et sa capacité à créer un engagement ont fait la différence. Un véritable partenaire de confiance.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Nathalie PERLATI",
    role: "Chargée d'affaires SNA",
    date: "Mars 2025",
    quote: "À chaque intervention : des échanges constructifs, une montée en compétence. Merci Said pour ton aide.",
    rating: 5,
  },
  {
    name: "Guillaume Bourgier",
    role: "Fondateur Eventick",
    date: "Sep. 2023",
    quote: "M'a accompagné en coaching développement commercial. Cela m'a aidé à prendre du recul et mieux analyser les freins.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} 
      />
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-4 sm:px-6 overflow-visible">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-medium text-slate-400 mt-0.5">5/5 sur LinkedIn</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-tight"
          >
            L'excellence reconnue <br className="hidden sm:block" />
            <span className="text-brand-orange">par vos pairs</span>
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:max-w-xs"
        >
          <p className="text-sm text-slate-500 italic border-l-2 border-brand-orange pl-3">
            "L'impact du coaching se mesure aux résultats durables et à l'épanouissement quotidien."
          </p>
        </motion.div>
      </div>

      {/* Testimonials Grid - Compact Modern Design */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 sm:mb-14">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`relative p-5 rounded-xl border transition-all duration-300 group ${
              item.highlight 
              ? 'bg-brand-navy text-white border-transparent shadow-lg' 
              : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-md'
            }`}
          >
            {/* Quote Icon */}
            <Quote className={`absolute top-4 right-4 w-6 h-6 ${
              item.highlight ? 'text-white/10' : 'text-slate-100'
            }`} />
            
            {/* Rating & Date */}
            <div className="flex items-center justify-between mb-3">
              <StarRating rating={item.rating} />
              <span className={`text-[10px] font-medium ${item.highlight ? 'text-white/50' : 'text-slate-400'}`}>
                {item.date}
              </span>
            </div>
            
            {/* Quote */}
            <p className={`text-sm leading-relaxed mb-4 ${
              item.highlight ? 'text-white/90' : 'text-slate-600'
            }`}>
              "{item.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-3 border-t border-current/10">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                item.highlight ? 'bg-brand-orange text-white' : 'bg-brand-navy text-white'
              }`}>
                <span className="font-bold text-sm">{item.name[0]}</span>
              </div>
              <div className="min-w-0">
                <h4 className={`font-semibold text-xs truncate ${
                  item.highlight ? 'text-white' : 'text-brand-navy'
                }`}>
                  {item.name}
                </h4>
                <p className={`text-[10px] truncate ${
                  item.highlight ? 'text-brand-orange' : 'text-slate-400'
                }`}>
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA - Compact */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-brand-orange to-brand-orange/90 rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative z-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Rejoignez ceux qui performent avec <span className="underline decoration-white/30 underline-offset-4">Sens</span>
          </h3>
          <p className="text-white/70 text-sm mb-5 max-w-md mx-auto">
            Commencez votre transformation dès aujourd'hui
          </p>
          <Link href="/prendre-rendez-vous">
            <button className="inline-flex items-center gap-2 bg-white text-brand-navy px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-navy hover:text-white transition-all shadow-lg hover:shadow-xl">
              Commencer mon accompagnement
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
