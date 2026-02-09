"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, Sparkles, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

const quickQuestions = [
  "Comment se déroule un premier rendez-vous ?",
  "Quelle est la durée d'un accompagnement ?",
  "Quels résultats puis-je espérer ?",
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Main Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-brand-navy" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/20 rounded-full blur-[120px] -mr-40 -mt-40" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-salmon/15 rounded-full blur-[100px] -ml-30 -mb-30" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                
                {/* Left - Text Content */}
                <div className="text-center lg:text-left">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
                  >
                    <HelpCircle className="w-4 h-4 text-brand-orange" />
                    <span className="text-white/80 font-semibold text-xs tracking-wide">Questions fréquentes</span>
                  </motion.div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                    Des questions sur{" "}
                    <span className="text-brand-orange">l'approche AVR®</span> ?
                  </h2>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-white/60 mb-6 max-w-md mx-auto lg:mx-0">
                    Découvrez nos réponses aux questions les plus fréquentes 
                    sur nos méthodes et accompagnements.
                  </p>

                  {/* Quick Questions Preview */}
                  <div className="space-y-2 mb-8">
                    {quickQuestions.map((q, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2 text-white/50 text-sm"
                      >
                        <ChevronRight className="w-4 h-4 text-brand-orange" />
                        <span>{q}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - CTA Buttons */}
                <div className="flex flex-col gap-4 lg:pl-8">
                  <Link href="/faq" className="block">
                    <button className="cta-button w-full flex items-center justify-center gap-3 bg-brand-orange hover:bg-white hover:text-brand-navy text-white px-6 py-4 rounded-2xl font-semibold text-sm shadow-lg transition-all duration-300 group">
                      <Sparkles className="w-5 h-5" />
                      Consulter la FAQ complète
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  
                  <Link href="/prendre-rendez-vous" className="block">
                    <button className="w-full flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-2xl font-semibold text-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
                      <MessageCircle className="w-5 h-5" />
                      Poser une question directement
                    </button>
                  </Link>
                  
                  {/* Trust badge */}
                  <div className="flex items-center justify-center gap-2 text-white/40 text-xs mt-2">
                    <span>Réponse sous 24h</span>
                    <span>•</span>
                    <span>Gratuit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
