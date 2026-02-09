"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function FAQ() {
  return (
    <section id="faq" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy/95 rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl -mr-24 -mt-24" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-salmon/15 rounded-full blur-3xl -ml-16 -mb-16" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 mb-4">
              <HelpCircle className="w-3 h-3 text-brand-orange" />
              <span className="text-white/80 font-semibold text-xs">FAQ</span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
              Des questions sur{" "}
              <span className="text-brand-orange">l'approche AVR®</span> ?
            </h2>

            {/* Description */}
            <p className="text-sm text-white/60 max-w-md mx-auto mb-6">
              Découvrez nos réponses aux questions les plus fréquentes sur nos méthodes, formations et accompagnements.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/faq">
                <button className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-orange/90 transition-all shadow-lg group w-full sm:w-auto">
                  <Sparkles className="w-3.5 h-3.5" />
                  Consulter la FAQ
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/prendre-rendez-vous">
                <button className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-all border border-white/10 w-full sm:w-auto">
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
