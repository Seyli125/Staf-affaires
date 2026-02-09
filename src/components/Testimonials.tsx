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

// Premium easing curve
const premiumEase = [0.25, 0.4, 0.25, 1] as const;

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-2.5 h-2.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} 
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

  const headerY = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  return (
    <section ref={sectionRef} id="testimonials" className="container mx-auto px-4 sm:px-6 overflow-visible">
      {/* Header - Compact */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-4">
        <motion.div 
          style={{ y: headerY }}
          className="max-w-lg"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="flex items-center gap-2.5 mb-4"
          >
            <div className="flex -space-x-1.5">
              {[1, 2, 3, 4].map(i => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.4, ease: premiumEase }}
                  className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm"
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
                    transition={{ delay: 0.25 + i * 0.04, duration: 0.3, ease: premiumEase }}
                  >
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>
              <span className="text-[8px] font-medium text-slate-400 mt-0.5">5/5 sur LinkedIn</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-brand-navy leading-tight"
          >
            L'excellence reconnue <br className="hidden sm:block" />
            <span className="text-brand-orange">par vos pairs</span>
          </motion.h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
          className="lg:max-w-xs"
        >
          <p className="text-[10px] text-slate-500 italic border-l-2 border-brand-orange pl-2.5">
            "L'impact du coaching se mesure aux résultats durables et à l'épanouissement quotidien."
          </p>
        </motion.div>
      </div>

      {/* Testimonials Grid - Compact */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.06,
              ease: premiumEase
            }}
            whileHover={{ 
              y: -4, 
              transition: { duration: 0.3, ease: premiumEase } 
            }}
            className={`relative p-3.5 sm:p-4 rounded-xl border transition-all duration-400 group cursor-default ${
              item.highlight 
              ? 'bg-brand-navy text-white border-transparent shadow-lg' 
              : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-md'
            }`}
          >
            {/* Quote Icon */}
            <Quote className={`absolute top-3 right-3 w-4 h-4 ${
              item.highlight ? 'text-white/10' : 'text-slate-100'
            }`} />
            
            {/* Rating & Date */}
            <div className="flex items-center justify-between mb-2.5">
              <StarRating rating={item.rating} />
              <span className={`text-[8px] font-medium ${item.highlight ? 'text-white/50' : 'text-slate-400'}`}>
                {item.date}
              </span>
            </div>
            
            {/* Quote */}
            <p className={`text-[10px] leading-relaxed mb-3 ${
              item.highlight ? 'text-white/90' : 'text-slate-600'
            }`}>
              "{item.quote}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-2 pt-2.5 border-t border-current/10">
              <motion.div 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3, ease: premiumEase }}
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  item.highlight ? 'bg-brand-orange text-white' : 'bg-brand-navy text-white'
                }`}
              >
                <span className="font-bold text-[10px]">{item.name[0]}</span>
              </motion.div>
              <div className="min-w-0">
                <h4 className={`font-semibold text-[9px] truncate ${
                  item.highlight ? 'text-white' : 'text-brand-navy'
                }`}>
                  {item.name}
                </h4>
                <p className={`text-[8px] truncate ${
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
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: premiumEase }}
        className="bg-gradient-to-r from-brand-orange to-brand-orange/90 rounded-xl p-5 sm:p-6 text-white text-center shadow-lg relative overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"
        />
        <div className="relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: premiumEase }}
            className="text-base sm:text-lg font-bold mb-3"
          >
            Rejoignez ceux qui performent avec <span className="underline decoration-white/30 underline-offset-4">Sens</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: premiumEase }}
            className="text-white/70 text-[10px] mb-4 max-w-sm mx-auto"
          >
            Commencez votre transformation dès aujourd'hui
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, ease: premiumEase }}
          >
            <Link href="/prendre-rendez-vous">
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -8px rgba(0,0,0,0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-1.5 bg-white text-brand-navy px-5 py-2.5 rounded-full font-semibold text-[10px] hover:bg-brand-navy hover:text-white transition-all duration-300 shadow-md"
              >
                Commencer mon accompagnement
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
