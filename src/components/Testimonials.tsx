"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";
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

const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1
};

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-3.5 h-3.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} 
      />
    ))}
  </div>
);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <section ref={sectionRef} id="testimonials" className="container mx-auto px-4 sm:px-6 overflow-visible">
      {/* Header */}
      <motion.div 
        className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8"
        style={{ y: headerY }}
      >
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-md"
                >
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-medium text-slate-400 mt-0.5">5/5 sur LinkedIn</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight"
          >
            L'excellence reconnue <br className="hidden sm:block" />
            <span className="text-brand-orange">par vos pairs</span>
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring, delay: 0.2 }}
          className="lg:max-w-sm"
        >
          <p className="text-base text-slate-500 italic border-l-2 border-brand-orange pl-4">
            "L'impact du coaching se mesure aux résultats durables et à l'épanouissement quotidien."
          </p>
          <p className="text-sm text-brand-orange font-semibold mt-2 pl-4">— Philosophie STAF</p>
        </motion.div>
      </motion.div>

      {/* Testimonials Grid - Better proportioned cards */}
      <motion.div 
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-18"
        style={{ opacity: cardsOpacity }}
      >
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...smoothSpring, delay: index * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className={`relative p-6 rounded-2xl border transition-all duration-300 group ${
              item.highlight 
              ? 'bg-brand-navy text-white border-transparent shadow-xl' 
              : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-xl'
            }`}
          >
            {/* Quote Icon */}
            <Quote className={`absolute top-5 right-5 w-7 h-7 ${
              item.highlight ? 'text-white/10' : 'text-slate-100'
            }`} />
            
            {/* Rating & Date */}
            <div className="flex items-center justify-between mb-4">
              <StarRating rating={item.rating} />
              <span className={`text-xs font-medium ${item.highlight ? 'text-white/50' : 'text-slate-400'}`}>
                {item.date}
              </span>
            </div>
            
            {/* Quote */}
            <p className={`text-base leading-relaxed mb-5 ${
              item.highlight ? 'text-white/90' : 'text-slate-600'
            }`}>
              "{item.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-current/10">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                item.highlight ? 'bg-brand-orange text-white' : 'bg-brand-navy text-white'
              }`}>
                <span className="font-bold text-base">{item.name[0]}</span>
              </div>
              <div className="min-w-0">
                <h4 className={`font-semibold text-sm truncate ${
                  item.highlight ? 'text-white' : 'text-brand-navy'
                }`}>
                  {item.name}
                </h4>
                <p className={`text-xs truncate ${
                  item.highlight ? 'text-brand-orange' : 'text-slate-400'
                }`}>
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA - Premium design */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...smoothSpring }}
        className="bg-gradient-to-r from-brand-orange to-brand-orange/90 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-6 h-6 mx-auto mb-4 opacity-80" />
          </motion.div>
          
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
            Rejoignez ceux qui performent avec <span className="underline decoration-white/30 underline-offset-4">Sens</span>
          </h3>
          <p className="text-white/70 text-base sm:text-lg mb-8 max-w-lg mx-auto">
            Commencez votre transformation dès aujourd'hui
          </p>
          <Link href="/prendre-rendez-vous">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-brand-navy px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Commencer mon accompagnement
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
