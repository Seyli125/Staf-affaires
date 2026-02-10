"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ArrowRight, ArrowLeft, Sparkles, Play } from "lucide-react";
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
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} 
      />
    ))}
  </div>
);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

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
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 sm:py-28 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 max-w-7xl"
        style={{ opacity }}
      >
        
        {/* Header - Redesigned */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 sm:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl"
            style={{ y }}
          >
            {/* Social proof badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="w-10 h-10 rounded-full border-3 border-white bg-slate-100 overflow-hidden shadow-md ring-2 ring-white"
                  >
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+20}`} 
                      alt="Client" 
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-500 mt-1">5.0 sur LinkedIn • 50+ avis</span>
              </div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight">
              L'excellence reconnue{" "}
              <span className="text-brand-orange relative inline-block">
                par vos pairs
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-orange/30 rounded-full origin-left"
                />
              </span>
            </h2>
          </motion.div>
          
          {/* Navigation arrows - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <motion.button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              whileHover={canScrollLeft ? { scale: 1.05 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                canScrollLeft 
                  ? 'bg-brand-navy text-white shadow-lg shadow-brand-navy/20 hover:shadow-xl' 
                  : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              whileHover={canScrollRight ? { scale: 1.05 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                canScrollRight 
                  ? 'bg-brand-navy text-white shadow-lg shadow-brand-navy/20 hover:shadow-xl' 
                  : 'bg-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Testimonials - Enhanced */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-12">
          {/* Gradient masks - More elegant */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-12 pb-6 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            drag="x"
            dragConstraints={scrollContainerRef}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`testimonial-card flex-shrink-0 w-[340px] sm:w-[380px] p-7 rounded-3xl snap-center relative ${
                  item.highlight 
                    ? 'bg-brand-navy text-white' 
                    : 'bg-white border border-slate-100'
                }`}
                style={{
                  boxShadow: item.highlight 
                    ? '0 20px 50px -12px rgba(10,25,47,0.3)' 
                    : '0 4px 24px -4px rgba(10,25,47,0.08), 0 0 0 1px rgba(10,25,47,0.04)'
                }}
              >
                {/* Quote Icon */}
                <Quote className={`w-10 h-10 mb-5 ${item.highlight ? 'text-brand-orange' : 'text-brand-orange/20'}`} />
                
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-5">
                  <StarRating rating={item.rating} />
                  <span className={`text-xs font-semibold ${item.highlight ? 'text-white/50' : 'text-slate-400'}`}>
                    {item.date}
                  </span>
                </div>
                
                {/* Quote */}
                <p className={`text-base leading-relaxed mb-7 ${item.highlight ? 'text-white/80' : 'text-slate-600'}`}>
                  "{item.quote}"
                </p>

                {/* Author */}
                <div className={`flex items-center gap-4 pt-5 border-t ${item.highlight ? 'border-white/10' : 'border-slate-100'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    item.highlight ? 'bg-brand-orange' : 'bg-brand-navy'
                  }`}>
                    <span className="font-bold text-base text-white">{item.name[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className={`font-semibold text-sm truncate ${item.highlight ? 'text-white' : 'text-brand-navy'}`}>
                      {item.name}
                    </h4>
                    <p className={`text-xs truncate ${item.highlight ? 'text-white/50' : 'text-slate-400'}`}>
                      {item.role}
                    </p>
                  </div>
                </div>
                
                {/* Highlight badge */}
                {item.highlight && (
                  <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Récent
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 sm:mt-28"
        >
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* Background with enhanced gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange to-brand-salmon" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/15 rounded-full blur-[100px] -mr-40 -mt-40" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/10 rounded-full blur-[80px] -ml-32 -mb-32" />
            
            {/* Content */}
            <div className="relative z-10 p-10 sm:p-14 lg:p-16 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white text-xs font-semibold">Rejoignez la communauté</span>
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-3xl mx-auto leading-[1.1] tracking-tight">
                Rejoignez ceux qui performent{" "}
                <span className="relative inline-block">
                  avec Sens
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-white/40 rounded-full origin-left"
                  />
                </span>
              </h3>
              
              <p className="text-white/70 text-lg sm:text-xl mb-10 max-w-lg mx-auto">
                Commencez votre transformation dès aujourd'hui
              </p>
              
              <Link href="/prendre-rendez-vous">
                <motion.button 
                  className="cta-button inline-flex items-center gap-3 bg-white text-brand-navy px-10 py-5 rounded-full font-semibold shadow-2xl shadow-brand-navy/20 group"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Commencer mon accompagnement
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
