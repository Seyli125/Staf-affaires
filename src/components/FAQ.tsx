"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl -mr-24 -mt-24" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-brand-salmon/15 rounded-full blur-3xl -ml-18 -mb-18" />
          </div>

          {/* Content - Compact */}
          <div className="relative z-10 p-6 sm:p-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-white/80 font-semibold text-xs">FAQ</span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
              Des questions sur{" "}
              <span className="text-brand-orange">l'approche AVR®</span> ?
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/60 max-w-md mx-auto mb-4">
              Découvrez nos réponses aux questions les plus fréquentes sur nos méthodes et accompagnements.
            </p>

            {/* Philosophical quote */}
            <p className="text-xs italic text-white/50 mb-6">
              "La seule vraie question est celle qui ouvre de nouvelles portes."
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/faq">
                <button className="cta-button inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg group w-full sm:w-auto">
                  <Sparkles className="w-3.5 h-3.5" />
                  Consulter la FAQ
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/prendre-rendez-vous">
                <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-semibold text-sm border border-white/10 w-full sm:w-auto hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Poser une question
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
