"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HelpCircle, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";

const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1
};

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <section ref={sectionRef} id="faq" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      <motion.div 
        className="max-w-3xl mx-auto"
        style={{ scale, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring }}
          className="relative"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 rounded-3xl overflow-hidden">
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -mr-32 -mt-32"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-48 h-48 bg-brand-salmon/15 rounded-full blur-3xl -ml-24 -mb-24"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 text-center">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
            >
              <HelpCircle className="w-4 h-4 text-brand-orange" />
              <span className="text-white/80 font-semibold text-sm">FAQ</span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
            >
              Des questions sur{" "}
              <span className="text-brand-orange">l'approche AVR®</span> ?
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.3 }}
              className="text-base sm:text-lg text-white/60 max-w-lg mx-auto mb-6"
            >
              Découvrez nos réponses aux questions les plus fréquentes sur nos méthodes, formations et accompagnements.
            </motion.p>

            {/* Philosophical quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-8"
            >
              <p className="text-sm italic text-white/50">
                "La seule vraie question est celle qui ouvre de nouvelles portes."
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/faq">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3.5 rounded-full font-semibold text-base hover:bg-brand-orange/90 transition-all duration-300 shadow-xl group w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4" />
                  Consulter la FAQ
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/prendre-rendez-vous">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300 border border-white/10 w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4" />
                  Poser une question
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
