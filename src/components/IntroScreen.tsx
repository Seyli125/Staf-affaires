"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";

const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_CINEMA = [0.76, 0, 0.24, 1] as const;

const WORDS = ["Performer.", "Grandir.", "Durer."];

type Phase = "words" | "logo" | "exit" | "done";

export function IntroScreen() {
  const [mounted, setMounted] = useState(false);
  const [skip, setSkip] = useState(false);
  const [phase, setPhase] = useState<Phase>("words");
  const [wordIndex, setWordIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const progressValue = useMotionValue(0);
  const progressWidth = useTransform(progressValue, [0, 1], ["0%", "100%"]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Vérifier si l'intro a déjà été jouée pendant cette session
    if (typeof window !== "undefined") {
      const played = sessionStorage.getItem("staf_intro_played");
      if (played === "1") {
        setSkip(true);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || skip) return;

    document.body.style.overflow = "hidden";

    const add = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timersRef.current.push(t);
    };

    // Acte 1 — mots
    add(() => setWordIndex(1), 650);
    add(() => setWordIndex(2), 1300);
    add(() => setShowAll(true), 1850);

    // Acte 2 — logo
    add(() => setPhase("logo"), 2750);
    add(() => animate(progressValue, 1, { duration: 2.0, ease: "linear" }), 2800);

    // Acte 3 — rideau
    add(() => setPhase("exit"), 4900);

    // Fin
    add(() => {
      setPhase("done");
      document.body.style.overflow = "";
      // Mémoriser que l'intro a été jouée
      sessionStorage.setItem("staf_intro_played", "1");
    }, 6400);

    return () => {
      timersRef.current.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [mounted, skip, progressValue]);

  if (!mounted || skip || phase === "done") return null;

  return (
    <>
      {/* ── RIDEAU FINAL ── */}
      <AnimatePresence>
        {phase === "exit" && (
          <>
            {/* Panneau du haut — descend vers le haut */}
            <motion.div
              key="curtain-top"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "50%",
                backgroundColor: "#0A192F",
                zIndex: 9999,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                overflow: "hidden",
              }}
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 1.4, ease: EASE_CINEMA, delay: 0.1 }}
            >
              {/* Bande orange en bas du panneau */}
              <motion.div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "linear-gradient(90deg, transparent, #ff6b4a 20%, #ff6b4a 80%, transparent)",
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.0 }}
              />
              {/* Logo centré dans le panneau */}
              <motion.div
                style={{ marginBottom: 40, opacity: 1 }}
                animate={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: EASE_EXPO, delay: 0.05 }}
              >
                <Image
                  src="/images/logo-staf-affaires.png"
                  alt="STAF Affaires"
                  width={140}
                  height={48}
                  style={{ width: "auto", height: "auto", maxWidth: "140px", filter: "brightness(0) invert(1)" }}
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Panneau du bas — monte vers le bas */}
            <motion.div
              key="curtain-bottom"
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                height: "50%",
                backgroundColor: "#0A192F",
                zIndex: 9999,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                overflow: "hidden",
              }}
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 1.4, ease: EASE_CINEMA, delay: 0.1 }}
            >
              {/* Bande orange en haut du panneau */}
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "linear-gradient(90deg, transparent, #ff6b4a 20%, #ff6b4a 80%, transparent)",
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: EASE_EXPO, delay: 0.0 }}
              />
              {/* Tagline dans le panneau bas */}
              <motion.p
                style={{
                  marginTop: 36,
                  fontFamily: "var(--font-serif, Georgia, serif)",
                  fontSize: "clamp(11px, 1.4vw, 14px)",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.12em",
                }}
                animate={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35, ease: EASE_EXPO, delay: 0.05 }}
              >
                Performer sans s&apos;épuiser
              </motion.p>
            </motion.div>

            {/* Éclat de lumière central au moment de l'ouverture */}
            <motion.div
              key="curtain-light"
              style={{
                position: "fixed",
                top: "50%",
                left: 0,
                right: 0,
                height: 1,
                transform: "translateY(-50%)",
                zIndex: 10000,
                background: "linear-gradient(90deg, transparent 0%, #ff6b4a 20%, #ffffff 50%, #ff6b4a 80%, transparent 100%)",
                pointerEvents: "none",
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 1] }}
              transition={{ duration: 1.0, ease: EASE_EXPO, delay: 0.0, times: [0, 0.15, 1] }}
            />
          </>
        )}
      </AnimatePresence>

      {/* ── SHELL PRINCIPAL ── */}
      <motion.div
        className="fixed inset-0 z-[9998] overflow-hidden bg-white"
        animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
        transition={phase === "exit" ? { duration: 0.5, ease: EASE_EXPO, delay: 0.6 } : { duration: 0 }}
      >
        {/* ── ACTE 1 : Mots du manifeste ── */}
        <AnimatePresence mode="wait">
          {phase === "words" && (
            <motion.div
              key="words-scene"
              className="absolute inset-0 flex items-center justify-center"
              exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
            >
              {/* Vignette orange subtile */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 55% at 50% 50%, transparent 40%, rgba(255,107,74,0.04) 100%)",
                }}
              />

              {/* Trait vertical gauche */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.1, ease: EASE_EXPO, delay: 0.05 }}
                style={{
                  background: "linear-gradient(to bottom, transparent, #ff6b4a 30%, #ff6b4a 70%, transparent)",
                  originY: "0.5",
                }}
              />

              {/* Mots */}
              <div className="relative flex flex-col items-center select-none">
                <AnimatePresence mode="popLayout">
                  {!showAll ? (
                    WORDS.slice(0, wordIndex + 1).map((word, i) => (
                      <motion.span
                        key={`scroll-${word}`}
                        layout
                        initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
                        animate={{
                          opacity: i === wordIndex ? 1 : 0.12,
                          y: 0,
                          filter: "blur(0px)",
                          scale: i === wordIndex ? 1 : 0.95,
                        }}
                        exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                        transition={{ duration: 0.6, ease: EASE_EXPO }}
                        style={{
                          fontFamily: "var(--font-serif, Georgia, serif)",
                          fontSize: "clamp(42px, 7.5vw, 86px)",
                          fontWeight: 700,
                          lineHeight: 1.06,
                          letterSpacing: "-0.025em",
                          color: "#0A192F",
                          display: "block",
                          textAlign: "center",
                        }}
                      >
                        {word}
                      </motion.span>
                    ))
                  ) : (
                    <motion.div
                      key="all-words"
                      className="flex flex-col items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {WORDS.map((word, i) => (
                        <motion.span
                          key={`all-${word}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: EASE_EXPO, delay: i * 0.08 }}
                          style={{
                            fontFamily: "var(--font-serif, Georgia, serif)",
                            fontSize: "clamp(42px, 7.5vw, 86px)",
                            fontWeight: 700,
                            lineHeight: 1.06,
                            letterSpacing: "-0.025em",
                            color: i === 2 ? "#ff6b4a" : "#0A192F",
                            display: "block",
                            textAlign: "center",
                          }}
                        >
                          {word}
                        </motion.span>
                      ))}

                      <motion.div
                        className="mt-6 flex items-center gap-3"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, ease: EASE_EXPO, delay: 0.3 }}
                        style={{ originX: "50%" } as React.CSSProperties}
                      >
                        <div style={{ width: 32, height: 1, background: "rgba(10,25,47,0.15)" }} />
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#ff6b4a" }} />
                        <div style={{ width: 32, height: 1, background: "rgba(10,25,47,0.15)" }} />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── ACTE 2 : Logo reveal ── */}
        <AnimatePresence mode="wait">
          {(phase === "logo" || phase === "exit") && (
            <motion.div
              key="logo-scene"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, ease: EASE_EXPO }}
            >
              {/* Halo orange central */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.6, ease: EASE_EXPO }}
                style={{
                  background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,107,74,0.06) 0%, transparent 70%)",
                }}
              />

              {/* Lignes décoratives */}
              {["-80px", "80px"].map((offset, idx) => (
                <motion.div
                  key={`hline-${idx}`}
                  className="absolute pointer-events-none"
                  style={{
                    top: `calc(50% + ${offset})`,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(10,25,47,0.06) 25%, rgba(10,25,47,0.06) 75%, transparent)",
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.1, ease: EASE_EXPO, delay: 0.25 + idx * 0.06 }}
                />
              ))}

              <div className="relative flex flex-col items-center select-none">
                <motion.p
                  initial={{ opacity: 0, y: -12, letterSpacing: "0.5em" }}
                  animate={{ opacity: 1, y: 0, letterSpacing: "0.28em" }}
                  transition={{ duration: 0.9, ease: EASE_EXPO, delay: 0.15 }}
                  style={{
                    fontSize: "clamp(9px, 1.1vw, 11px)",
                    color: "rgba(10,25,47,0.35)",
                    textTransform: "uppercase" as const,
                    fontWeight: 500,
                    marginBottom: "22px",
                    fontFamily: "var(--font-geist-sans, sans-serif)",
                  }}
                >
                  Bienvenue dans votre univers
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.0, ease: EASE_EXPO, delay: 0.05 }}
                >
                  <Image
                    src="/images/logo-staf-affaires.png"
                    alt="STAF Affaires"
                    width={230}
                    height={80}
                    style={{ width: "auto", height: "auto", maxWidth: "230px" }}
                    className="object-contain"
                    priority
                  />
                </motion.div>

                <div className="flex items-center gap-3 mt-7">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.5 }}
                    style={{ width: 44, height: 1, background: "rgba(255,107,74,0.3)", transformOrigin: "left" }}
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1], delay: 0.8 }}
                    style={{ width: 5, height: 5, borderRadius: "50%", background: "#ff6b4a", flexShrink: 0 }}
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.5 }}
                    style={{ width: 44, height: 1, background: "rgba(255,107,74,0.3)", transformOrigin: "right" }}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.72 }}
                  style={{
                    marginTop: "14px",
                    fontFamily: "var(--font-serif, Georgia, serif)",
                    fontSize: "clamp(12px, 1.7vw, 15px)",
                    fontStyle: "italic",
                    color: "rgba(10,25,47,0.42)",
                    letterSpacing: "0.07em",
                  }}
                >
                  Performer sans s&apos;épuiser
                </motion.p>
              </div>

              {/* Barre de progression */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px]"
                style={{
                  width: progressWidth,
                  background: "linear-gradient(90deg, #ff6b4a 0%, rgba(255,107,74,0.25) 100%)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
