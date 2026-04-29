"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/animations";

export function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-white">

      {/* Warm ambient glow — static, no animation */}
      <div
        className="absolute top-0 right-0 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 20%, rgba(255,107,74,0.07) 0%, rgba(255,107,74,0.02) 40%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 80%, rgba(197,160,89,0.05) 0%, transparent 60%)" }}
      />

      {/* Noise texture overlay — inline SVG, zero JS */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }}
      />

      {/* Main container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-28 sm:py-32 lg:pt-10 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16 xl:gap-20">

          {/* Left — Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            {/* Tag line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={show ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
            >
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-orange/80 mb-6 sm:mb-8">
                <motion.span
                  className="w-6 h-px bg-brand-orange/60"
                  initial={{ scaleX: 0 }}
                  animate={show ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
                Formation &middot; Coaching &middot; Pr&eacute;paration Neuro-Psychologique
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
              className="text-[1.7rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[2.6rem] xl:text-[2.85rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-brand-navy dark:text-white mb-6 sm:mb-7 text-balance"
            >
                Devenez meilleurs sans vous{" "}
                <span className="relative inline">
                <span
                  className="relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #ff6b4a 0%, #ff8c42 50%, #e85d35 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  renier
                </span>
                <motion.span
                  className="absolute -bottom-1.5 left-0 w-full h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #ff6b4a, #ffb347, #ff6b4a)" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={show ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.1, delay: 0.85, ease: EASE_OUT_EXPO }}
                />
              </span>{" "}
                ni vous{" "}
                <span className="relative inline">
                <span
                  className="relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #ff6b4a 0%, #ff8c42 50%, #e85d35 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  &eacute;puiser
                </span>
                <motion.span
                  className="absolute -bottom-1.5 left-0 w-full h-[3px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #ff6b4a, #ffb347, #ff6b4a)" }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={show ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.1, delay: 1.0, ease: EASE_OUT_EXPO }}
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE_OUT_EXPO }}
              className="mb-9 sm:mb-10"
            >
              <p className="text-[16px] sm:text-[17px] text-brand-navy dark:text-white/90 leading-[1.7] font-semibold">
                Pour les managers op&eacute;rationnels et les prestataires des organisations engag&eacute;es.
                <br className="hidden sm:block" />
                <span className="text-brand-navy dark:text-white/90 font-semibold">(Acteurs RSE et ESS, entreprises &agrave; missions&hellip;)</span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5, ease: EASE_OUT_EXPO }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Link href="/prendre-rendez-vous">
                <button
                  className="group relative inline-flex items-center justify-center gap-2.5 text-white px-8 py-4 rounded-full font-semibold text-sm shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 ease-out cursor-pointer overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #ff6b4a 0%, #ff8142 100%)" }}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg, #ff7a5a 0%, #ff8f52 100%)" }}
                  />
                  <span className="relative z-10 flex items-center gap-2.5">
                    Prendre rendez-vous
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </button>
              </Link>
              <Link href="#services">
                <button className="inline-flex items-center justify-center gap-2 text-brand-navy/50 dark:text-white/50 hover:text-brand-navy dark:hover:text-white px-6 py-4 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer hover:-translate-y-0.5">
                  D&eacute;couvrir
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={show ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-stretch justify-center lg:justify-start mt-12 sm:mt-16"
            >
              {[
                { value: "100+", label: "professionnels accompagn\u00e9s" },
                { value: "25", label: "ans d\u2019expertise terrain" },
                { value: "98%", label: "taux de satisfaction" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-stretch">
                  <div className="text-center lg:text-left px-6 sm:px-8 first:pl-0">
                    <span className="block text-xl sm:text-2xl font-black tracking-tight"
                      style={{ background: "linear-gradient(135deg, #0A192F 30%, #ff6b4a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                    >{stat.value}</span>
                    <span className="block text-[10px] sm:text-[11px] text-brand-navy/35 dark:text-white/30 mt-1 font-medium tracking-wide uppercase">{stat.label}</span>
                  </div>

                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo */}
          <div className="relative flex-shrink-0 w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] xl:max-w-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={show ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT_EXPO }}
              className="relative"
            >
              {/* Certified badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: -8 }}
                animate={show ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 bg-white dark:bg-[#2C2C2E] border border-brand-orange/20 rounded-full px-3 py-1.5 shadow-md"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span className="text-[10px] font-bold text-brand-navy dark:text-white tracking-wide">Certifi&eacute; RNCP</span>
              </motion.div>

              {/* Warm glow behind frame */}
              <div className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(255,107,74,0.15) 0%, rgba(197,160,89,0.05) 50%, transparent 70%)" }}
              />

              {/* Frame */}
              <div className="relative rounded-3xl p-[2px]" style={{ background: "linear-gradient(160deg, rgba(255,107,74,0.6) 0%, rgba(255,107,74,0.12) 45%, rgba(197,160,89,0.5) 100%)" }}>
                <div className="rounded-[22px] overflow-hidden">
                  <Image
                    src="/images/hero-said-coaching.png"
                    alt="Sa\u00efd Taaroust en s\u00e9ance de coaching professionnel"
                    width={400}
                    height={500}
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
                    className="w-full h-auto rounded-[22px]"
                    style={{ aspectRatio: "4/5", objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* Citation flottante */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3, ease: EASE_OUT_EXPO }}
                className="mt-5 px-1"
              >
                <div className="flex items-start gap-2.5">
                  <p className="text-[12px] italic text-brand-navy/45 dark:text-white/40 leading-[1.6]">
                    Performer sans s&apos;&eacute;puiser, c&apos;est choisir une croissance align&eacute;e avec ce qu&apos;on est vraiment.
                  </p>
                </div>
                <p className="mt-2 text-center text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-navy/35 dark:text-white/30">
                  Sa&iuml;d Taaroust
                </p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
