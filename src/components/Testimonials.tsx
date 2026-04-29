"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import { Star, ArrowRight, ArrowLeft } from "lucide-react";

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
        className={`w-3.5 h-3.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 dark:fill-white/10 text-slate-200 dark:text-white/10'}`} 
      />
    ))}
  </div>
);

// Triplicate for seamless infinite loop
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  const CARD_WIDTH = 360 + 20; // w-[360px] + gap-5
  const TOTAL_ORIGINAL = testimonials.length * CARD_WIDTH;

  // On mount, jump to the middle copy so we can loop both directions
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollLeft = TOTAL_ORIGINAL;
  }, [TOTAL_ORIGINAL]);

  // Seamless loop: when we drift too far, silently teleport
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || isScrollingRef.current) return;
    const { scrollLeft } = container;
    if (scrollLeft <= TOTAL_ORIGINAL * 0.25) {
      container.scrollLeft = scrollLeft + TOTAL_ORIGINAL;
    } else if (scrollLeft >= TOTAL_ORIGINAL * 1.75) {
      container.scrollLeft = scrollLeft - TOTAL_ORIGINAL;
    }
  }, [TOTAL_ORIGINAL]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction === 'left' ? -CARD_WIDTH : CARD_WIDTH,
      behavior: 'smooth',
    });
  };

  // Keep arrow buttons always active (infinite loop = never disabled)
  const canScrollLeft = true;
  const canScrollRight = true;

  return (
    <section id="testimonials" className="overflow-hidden">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-[1280px]">
        
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
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1D1D1F] bg-slate-200 overflow-hidden shadow-sm"
                  >
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="" loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-slate-400 dark:text-white/40">5/5 sur LinkedIn</span>
              </div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy dark:text-white leading-[1.15] tracking-tight">
                L&apos;excellence reconnue{" "}
                <span className="text-brand-orange italic">par vos pairs</span>
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
                  ? 'border-brand-navy dark:border-white/20 text-brand-navy dark:text-white hover:bg-brand-navy hover:text-white dark:hover:bg-white dark:hover:text-brand-navy' 
                  : 'border-slate-200 dark:border-white/10 text-slate-300 dark:text-white/20 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                canScrollRight 
                  ? 'border-brand-navy dark:border-white/20 text-brand-navy dark:text-white hover:bg-brand-navy hover:text-white dark:hover:bg-white dark:hover:text-brand-navy' 
                  : 'border-slate-200 dark:border-white/10 text-slate-300 dark:text-white/20 cursor-not-allowed'
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className="relative -mx-6 sm:-mx-8 lg:-mx-12">
          {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#FFFFFF] dark:from-[#1D1D1F] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#FFFFFF] dark:from-[#1D1D1F] to-transparent z-10 pointer-events-none" />
          
            <div
              ref={scrollContainerRef}
              data-scroll-container
              className="flex gap-5 overflow-x-auto scrollbar-hide px-6 sm:px-8 lg:px-12 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
              {infiniteTestimonials.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                  className="testimonial-card flex-shrink-0 w-[320px] sm:w-[360px] p-6 rounded-2xl bg-white dark:bg-[#2C2C2E] border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-xl dark:hover:shadow-black/30 hover:border-brand-orange/20 dark:hover:border-brand-orange/20 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-default"
                >
                  {/* Rating & Date */}
                  <div className="flex items-center justify-between mb-5">
                    <StarRating rating={item.rating} />
                    <span className="text-[11px] font-medium text-slate-400 dark:text-white/40 tracking-wide">
                      {item.date}
                    </span>
                  </div>
                  
                  {/* Quote */}
                  <p className="text-sm text-slate-600 dark:text-white/65 leading-relaxed mb-6 line-clamp-4 flex-1">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/10">
                    <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center shrink-0">
                      <span className="font-semibold text-xs text-white">{item.name[0]}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm text-brand-navy dark:text-white truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400 dark:text-white/40 truncate mt-0.5">
                        {item.role}
                      </p>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
