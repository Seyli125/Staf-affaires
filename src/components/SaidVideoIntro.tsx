"use client";

import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SaidVideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  }

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#1C1C1E] py-12 sm:py-16">
      {/* Glow décoratif subtil */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ background: "radial-gradient(ellipse, rgba(255,107,74,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header compact */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-orange mb-4">
            <Play className="w-3 h-3 fill-current" />
            Présentation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-brand-navy dark:text-white leading-[1.15] tracking-tight">
            Qui est{" "}
            <span className="text-brand-orange italic">Saïd Taaroust</span>{" "}
            ?
          </h2>
          <p className="mt-3 text-slate-500 dark:text-white/50 text-sm sm:text-base max-w-lg mx-auto">
            3 minutes d'authenticité pour comprendre son parcours, sa démarche et ce qui fait la différence
          </p>
        </div>

        {/* Lecteur */}
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 0 0 1px rgba(255,107,74,0.18), 0 20px 80px -20px rgba(255,107,74,0.25), 0 8px 40px -8px rgba(0,0,0,0.5)",
            }}
          >
            {/* Bande accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-orange via-brand-salmon to-brand-orange z-20" />

            {/* Overlay play (avant que l'user clique) */}
            <AnimatePresence>
              {!playing && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer"
                  style={{ background: "rgba(10,25,47,0.48)" }}
                  onClick={handlePlay}
                >
                  {/* Bouton play */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.94 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Halo externe animé */}
                    <span className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-brand-orange/20 animate-ping" />
                    {/* Anneau intermédiaire */}
                    <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-white/25" />
                    {/* Cercle principal */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-brand-orange rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,107,74,0.6)]">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1.5" />
                    </div>
                  </motion.div>
                  <p className="mt-5 text-white font-semibold text-sm sm:text-base tracking-wide drop-shadow">
                    Lancer la vidéo
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <video
              ref={videoRef}
              controls={playing}
              playsInline
              preload="metadata"
              className="w-full block"
              style={{ display: "block", aspectRatio: "16/9", background: "#0A192F" }}
              onPause={() => {}}
            >
              <source src="/videos/qui-suis-je.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Citation sous la vidéo */}
          <p className="text-xs sm:text-sm text-slate-400 dark:text-white/30 font-medium italic mt-4 text-center">
            « Je ne suis pas là pour vous vendre du rêve — je suis là pour vous aider à vous trans-former. »
          </p>
        </div>
      </div>
    </section>
  );
}
