"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 rounded-3xl overflow-hidden">
            <motion.div 
              className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl -mr-24 -mt-24"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-32 h-32 bg-brand-salmon/15 rounded-full blur-3xl -ml-16 -mb-16"
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-10 text-center">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-5"
            >
              <motion.div
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
              </motion.div>
              <span className="text-white/80 font-semibold text-xs">FAQ</span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-4"
            >
              Des questions sur{" "}
              <span className="text-brand-orange">l'approche AVR®</span> ?
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-white/60 max-w-md mx-auto mb-8"
            >
              Découvrez nos réponses aux questions les plus fréquentes sur nos méthodes, formations et accompagnements.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link href="/faq">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255,107,74,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-orange/90 transition-all duration-300 shadow-lg group w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4" />
                  Consulter la FAQ
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/prendre-rendez-vous">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border border-white/10 w-full sm:w-auto"
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
