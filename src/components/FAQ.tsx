"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      <div className="max-w-4xl mx-auto">
        {/* CTA Card vers la page FAQ dédiée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          {/* Background avec gradient animé */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/90 rounded-[20px] sm:rounded-[28px] overflow-hidden">
            <motion.div
              className="absolute top-0 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-brand-orange/20 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-brand-salmon/15 rounded-full blur-3xl"
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
                scale: [1.1, 1, 1.1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-14 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 mb-5 sm:mb-6 md:mb-8"
            >
              <HelpCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-orange" />
              <span className="text-white/80 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs">
                FAQ
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-4 sm:mb-5 md:mb-6"
            >
              Des questions sur
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                l'approche AVR® ?
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10 font-medium leading-relaxed px-2"
            >
              Découvrez nos réponses aux questions les plus fréquentes sur nos méthodes, 
              formations et accompagnements.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <Link href="/faq" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-brand-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/25 group w-full sm:w-auto">
                  <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  Consulter la FAQ
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/prendre-rendez-vous" className="w-full sm:w-auto">
                <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white/20 transition-all border border-white/10 w-full sm:w-auto">
                  Poser une question directement
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
