"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  return (
    <section ref={sectionRef} id="testimonials" className="container mx-auto px-4 sm:px-6 overflow-visible">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
        <motion.div 
          style={{ y: headerY }}
          className="max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, type: "spring", stiffness: 200 }}
                  className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm"
                >
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
                  >
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>
              <span className="text-[10px] font-medium text-slate-400 mt-0.5">5/5 sur LinkedIn</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-tight"
          >
            L'excellence reconnue <br className="hidden sm:block" />
            <span className="text-brand-orange">par vos pairs</span>
          </motion.h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:max-w-xs"
        >
          <p className="text-sm text-slate-500 italic border-l-2 border-brand-orange pl-3">
            "L'impact du coaching se mesure aux résultats durables et à l'épanouissement quotidien."
          </p>
        </motion.div>
      </div>

      {/* Testimonials Grid - Compact Modern Design */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 sm:mb-16">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.08,
              ease: [0.25, 0.4, 0.25, 1]
            }}
            whileHover={{ 
              y: -6, 
              transition: { duration: 0.3 } 
            }}
            className={`relative p-5 rounded-2xl border transition-all duration-300 group cursor-default ${
              item.highlight 
              ? 'bg-brand-navy text-white border-transparent shadow-xl' 
              : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-lg'
            }`}
          >
            {/* Quote Icon */}
            <Quote className={`absolute top-4 right-4 w-6 h-6 ${
              item.highlight ? 'text-white/10' : 'text-slate-100'
            }`} />
            
            {/* Rating & Date */}
            <div className="flex items-center justify-between mb-4">
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
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  item.highlight ? 'bg-brand-orange text-white' : 'bg-brand-navy text-white'
                }`}
              >
                <span className="font-bold text-sm">{item.name[0]}</span>
              </motion.div>
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
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="bg-gradient-to-r from-brand-orange to-brand-orange/90 rounded-3xl p-6 sm:p-8 text-white text-center shadow-xl relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold mb-4"
          >
            Rejoignez ceux qui performent avec <span className="underline decoration-white/30 underline-offset-4">Sens</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm mb-6 max-w-md mx-auto"
          >
            Commencez votre transformation dès aujourd'hui
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/prendre-rendez-vous">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-brand-navy px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-lg"
              >
                Commencer mon accompagnement
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
