"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* === Multi-layer background === */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0e2240] to-[#071428]" />

            {/* Animated orbs */}
            <div
              className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full pointer-events-none opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,107,74,0.45) 0%, rgba(255,107,74,0.1) 40%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(197,160,89,0.4) 0%, rgba(197,160,89,0.08) 40%, transparent 70%)",
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-[0.07]"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 60%)",
              }}
            />

              {/* Subtle grain texture overlay */}
              <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />

              {/* Decorative border lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            {/* Decorative corner stars */}
            <div className="absolute top-6 left-8 text-brand-gold/15">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div className="absolute bottom-6 right-8 text-brand-orange/15">
              <Star className="w-4 h-4 fill-current" />
            </div>

            {/* === Content === */}
            <div className="relative z-10 py-14 sm:py-16 lg:py-18 px-8 sm:px-12 lg:px-20 text-center">
              {/* Sparkle badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/10 rounded-full px-5 py-2 mb-6"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span className="text-xs font-medium tracking-wide text-white/70 uppercase">
                  Votre transformation commence ici
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-4 max-w-3xl mx-auto leading-[1.15] tracking-tight"
              >
                Rejoignez ceux qui{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b4a] via-[#ffb347] to-[#f5d78e]">
                      performent
                    </span>
                    {/* Underline */}
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-orange via-amber-400 to-brand-gold rounded-full opacity-80" />
                  </span>{" "}
                  avec du Sens
                </motion.h3>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                  <Link href="/prendre-rendez-vous">
                    <button className="group relative inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-semibold text-sm overflow-hidden" style={{ background: "linear-gradient(135deg, #ff6b4a 0%, #e85535 100%)", boxShadow: "0 8px 32px -4px rgba(255,107,74,0.45), 0 0 0 1px rgba(255,255,255,0.1) inset" }}>
                      {/* Shimmer sweep */}
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)" }} />
                      <span className="relative z-10 flex items-center gap-2.5">
                        Commencer mon accompagnement
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </Link>

                  <Link href="/#services">
                    <button className="inline-flex items-center gap-2 text-white/60 hover:text-white px-6 py-3.5 rounded-full font-medium text-sm border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300">
                      D&eacute;couvrir les accompagnements
                    </button>
                  </Link>
              </motion.div>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/30 text-xs font-medium tracking-wide"
              >

                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                    Premier &eacute;change offert
                  </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                  100% des clients satisfaits
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
