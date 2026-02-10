"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Frédérique Laban-Bounayre",
    role: "Assistante chez Activ'Expertise Landes",
    date: "Janv. 2026",
    quote: "Saïd m'a accompagné à faire le point sur mon positionnement et à trouver l'équilibre vie perso/pro. Grâce à sa bienveillance et écoute, j'en ressors avec des véritables clés.",
    rating: 5,
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
        className={`w-3.5 h-3.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} 
      />
    ))}
  </div>
);

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            {/* Social proof */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm"
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-slate-400">5/5 sur LinkedIn</span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              L'excellence reconnue{" "}
              <span className="text-brand-orange">par vos pairs</span>
            </h2>
          </motion.div>
          
          {/* Navigation arrows */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft 
                  ? 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white' 
                  : 'border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canScrollRight 
                  ? 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white' 
                  : 'border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className="relative -mx-4 sm:-mx-6">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide px-4 sm:px-6 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="testimonial-card flex-shrink-0 w-[320px] sm:w-[360px] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 snap-center"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-brand-orange/10 mb-4" />
                
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={item.rating} />
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.date}
                  </span>
                </div>
                
                {/* Quote */}
                <p className="text-base text-slate-600 leading-relaxed mb-6 line-clamp-4">
                  "{item.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center shrink-0">
                    <span className="font-bold text-sm text-white">{item.name[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm text-brand-navy truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-16"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-orange to-brand-orange/90" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-navy/10 rounded-full blur-3xl -ml-24 -mb-24" />
            
            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12 text-center">
              <Sparkles className="w-6 h-6 mx-auto mb-4 text-white/80" />
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto leading-tight">
                Rejoignez ceux qui performent{" "}
                <span className="underline decoration-white/30 underline-offset-4">avec Sens</span>
              </h3>
              
              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-lg mx-auto">
                Commencez votre transformation dès aujourd'hui
              </p>
              
              <Link href="/prendre-rendez-vous">
                <button className="cta-button inline-flex items-center gap-3 bg-white text-brand-navy px-8 py-4 rounded-full font-semibold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                  Commencer mon accompagnement
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
