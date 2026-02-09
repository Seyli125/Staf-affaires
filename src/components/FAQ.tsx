"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

// Premium easing curve
const premiumEase = [0.25, 0.4, 0.25, 1] as const;

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="relative"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 rounded-xl overflow-hidden">
            <motion.div 
              className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-28 h-28 bg-brand-salmon/15 rounded-full blur-3xl -ml-14 -mb-14 pointer-events-none"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 text-center">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: premiumEase }}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 mb-4"
            >
              <motion.div
                animate={{ rotate: [0, 12, 0, -12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <HelpCircle className="w-3 h-3 text-brand-orange" />
              </motion.div>
              <span className="text-white/80 font-semibold text-[9px]">FAQ</span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: premiumEase }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-3"
            >
              Des questions sur{" "}
              <span className="text-brand-orange">l'approche AVR®</span> ?
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
              className="text-[10px] text-white/60 max-w-sm mx-auto mb-6"
            >
              Découvrez nos réponses aux questions les plus fréquentes sur nos méthodes, formations et accompagnements.
            </motion.p>

            {/* Philosophical touch */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: premiumEase }}
              className="text-[9px] italic text-white/40 mb-5 max-w-xs mx-auto"
            >
              "La curiosité est le premier pas vers la maîtrise."
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: premiumEase }}
              className="flex flex-col sm:flex-row gap-2.5 justify-center"
            >
              <Link href="/faq">
                <motion.button 
                  whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -8px rgba(255,107,74,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-1.5 bg-brand-orange text-white px-5 py-2.5 rounded-full font-semibold text-[10px] hover:bg-brand-orange/90 transition-all duration-300 shadow-md group w-full sm:w-auto"
                >
                  <Sparkles className="w-3 h-3" />
                  Consulter la FAQ
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                </motion.button>
              </Link>
              <Link href="/prendre-rendez-vous">
                <motion.button 
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-1.5 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-semibold text-[10px] transition-all duration-300 border border-white/10 w-full sm:w-auto"
                >
                  Poser une question
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
