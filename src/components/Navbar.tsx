"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Home, Briefcase, User, HelpCircle, Phone, Calendar } from "lucide-react";

const navItems = [
  { name: "Accueil",       href: "/",            short: "Accueil",  icon: Home,        desc: "Page principale" },
  { name: "Prestations",   href: "/#services",   short: "Services", icon: Briefcase,   desc: "Mes offres d'accompagnement" },
  { name: "Qui suis-je ?", href: "/#biographie", short: "Bio",      icon: User,        desc: "Mon parcours & ma philosophie" },
  { name: "FAQ",           href: "/faq",          short: "FAQ",      icon: HelpCircle,  desc: "Questions fréquentes" },
];

export function Navbar() {
  const [activeItem, setActiveItem]   = useState("Accueil");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const isAnimating   = useRef(false);
  const scrollYRef    = useRef(0);
  const { scrollY }   = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => setScrolled(val > 12));

  useEffect(() => {
    if (isMenuOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.cssText = `position:fixed;top:-${scrollYRef.current}px;left:0;right:0;overflow:hidden`;
    } else {
      document.body.style.cssText = "";
      if (scrollYRef.current) window.scrollTo(0, scrollYRef.current);
    }
    return () => { document.body.style.cssText = ""; };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsMenuOpen((v) => !v);
    setTimeout(() => { isAnimating.current = false; }, 650);
  }, []);

  const closeMenu = useCallback(() => {
    if (!isMenuOpen || isAnimating.current) return;
    isAnimating.current = true;
    setIsMenuOpen(false);
    setTimeout(() => { isAnimating.current = false; }, 650);
  }, [isMenuOpen]);

  return (
    <>
      {/* ══════════════════════════════════════════════
          DESKTOP / TABLET pill  (≥ 768px)
      ══════════════════════════════════════════════ */}
      <nav
        aria-label="Navigation principale"
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center"
        style={{ paddingTop: "max(env(safe-area-inset-top), 10px)" }}
      >
        <motion.div
          className="mt-4 flex items-center rounded-full"
          style={{
            width: "fit-content",
            maxWidth: "calc(100vw - 32px)",
            background: "#FFFFFF",
            border: "1px solid rgba(0,0,0,0.09)",
              padding: "0px 4px 0px 5px",
            overflow: "visible",
          }}
          animate={{
            boxShadow: scrolled
              ? "0 6px 36px rgba(0,0,0,0.13)"
              : "0 2px 16px rgba(0,0,0,0.08)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setActiveItem("Accueil")}
            aria-label="STAF AFFAIRES – Accueil"
            className="flex items-center shrink-0"
                style={{ marginTop: -4, marginBottom: -4, marginRight: 2 }}
            >
              <Image
                src="/images/logo-staf-affaires.png"
                alt="STAF AFFAIRES"
                  width={280}
                  height={80}
                  className="w-auto object-contain"
                  style={{ height: "clamp(44px, 5vw, 58px)" }}
                  priority
              />
          </Link>

          {/* Separator */}
          <div
            className="shrink-0"
            style={{
              width: 1,
              height: "clamp(16px, 2.5vw, 22px)",
              background: "rgba(0,0,0,0.1)",
              margin: "0 clamp(8px, 1.5vw, 14px)",
            }}
          />

          {/* Links */}
          <div
            className="flex items-center"
            style={{ gap: "clamp(0px, 0.3vw, 2px)" }}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              const isHov    = hoveredItem === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  className="relative rounded-full select-none"
                  style={{
                    textDecoration: "none",
                    padding: "clamp(5px, 0.8vw, 7px) clamp(8px, 1.2vw, 14px)",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-desktop"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(0,0,0,0.055)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <AnimatePresence>
                    {isHov && !isActive && (
                      <motion.span
                        key="hov-bg"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(255,107,74,0.09)" }}
                        initial={{ opacity: 0, scale: 0.88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.88 }}
                        transition={{ duration: 0.18 }}
                      />
                    )}
                  </AnimatePresence>
                  <motion.span
                    className="relative block font-medium whitespace-nowrap"
                    style={{ fontSize: "clamp(12px, 1vw, 13.5px)", letterSpacing: "0.01em" }}
                    animate={{
                      color: isHov ? "#ff6b4a" : isActive ? "#111111" : "rgba(17,17,17,0.52)",
                      y: isHov ? -0.7 : 0,
                    }}
                    transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center shrink-0" style={{ marginLeft: "clamp(6px, 1vw, 12px)", gap: 6 }}>
            <Link
              href="/prendre-rendez-vous"
              className="flex items-center gap-1.5 rounded-full font-semibold text-white whitespace-nowrap active:scale-95"
              style={{
                background: "#111",
                fontSize: "clamp(11px, 1vw, 12.5px)",
                padding: "7px 15px",
                transition: "background 0.25s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#ff6b4a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
            >
              Contact
            </Link>
            <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </motion.div>
      </nav>

      {/* ══════════════════════════════════════════════
          MOBILE top bar  (< 768px)
      ══════════════════════════════════════════════ */}
      <nav
        aria-label="Navigation principale mobile"
        className="md:hidden fixed top-0 left-0 right-0 z-50"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <motion.div
          className="flex items-center justify-between px-4"
          style={{
            height: 56,
            background: "rgba(255,255,255,0.96)",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
          }}
          animate={{
            backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
            boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.09)" : "none",
          }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" onClick={() => setActiveItem("Accueil")} aria-label="STAF AFFAIRES">
            <Image
              src="/images/logo-staf-affaires.png"
              alt="STAF AFFAIRES"
              width={160}
              height={44}
              className="w-auto object-contain"
              style={{ height: 38 }}
              priority
            />
          </Link>
          <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </motion.div>
      </nav>

      {/* ══════════════════════════════════════════════
          MOBILE bottom tab bar  (< 768px)
      ══════════════════════════════════════════════ */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.97)",
            borderTop: "1px solid rgba(0,0,0,0.07)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            height: 58,
          }}
        >
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className="flex flex-col items-center justify-center gap-0.5 select-none active:scale-90 transition-transform"
                style={{ textDecoration: "none", padding: "6px 0 4px" }}
              >
                <motion.div
                  className="relative flex items-center justify-center"
                  style={{ width: 32, height: 24 }}
                  animate={{ y: isActive ? -1 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bottom-tab-bg"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(255,107,74,0.12)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon
                    size={18}
                    strokeWidth={isActive ? 2.2 : 1.7}
                    style={{
                      color: isActive ? "#ff6b4a" : "rgba(17,17,17,0.38)",
                      transition: "color 0.22s ease",
                    }}
                  />
                </motion.div>
                <motion.span
                  style={{
                    fontSize: 9.5,
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "0.01em",
                    color: isActive ? "#ff6b4a" : "rgba(17,17,17,0.38)",
                    transition: "color 0.22s ease",
                    lineHeight: 1,
                  }}
                >
                  {item.short}
                </motion.span>
              </Link>
            );
          })}

          {/* CTA tab */}
          <Link
            href="/prendre-rendez-vous"
            className="flex flex-col items-center justify-center gap-0.5 select-none active:scale-90 transition-transform"
            style={{ textDecoration: "none", padding: "6px 0 4px" }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: 32, height: 24, background: "#111" }}
            >
              <Phone size={13} strokeWidth={2} style={{ color: "#fff" }} />
            </div>
            <span
              style={{
                fontSize: 9.5,
                fontWeight: 600,
                letterSpacing: "0.01em",
                color: "rgba(17,17,17,0.55)",
                lineHeight: 1,
              }}
            >
              Contact
            </span>
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          PREMIUM OVERLAY MENU
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay-root"
            className="fixed inset-0 z-[60]"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0"
              style={{ background: "rgba(10,25,47,0.35)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={closeMenu}
            />

            {/* Panel — fond blanc pur, glisse depuis la droite */}
            <motion.aside
              className="absolute right-0 top-0 bottom-0 flex flex-col"
              style={{
                width: "min(92vw, 420px)",
                background: "#FFFFFF",
                boxShadow: "-2px 0 60px rgba(10,25,47,0.14), -1px 0 0 rgba(0,0,0,0.06)",
              }}
              variants={{ closed: { x: "100%" }, open: { x: 0 } }}
              transition={{ type: "spring", stiffness: 320, damping: 36, mass: 0.9 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
            >
              {/* Accent bar orange en haut */}
              <motion.div
                className="absolute top-0 left-0 right-0 origin-left"
                style={{
                  height: 3,
                  background: "linear-gradient(90deg, #ff6b4a 0%, #ffb347 100%)",
                  borderRadius: "0 0 2px 2px",
                }}
                variants={{ closed: { scaleX: 0, originX: 0 }, open: { scaleX: 1, originX: 0 } }}
                transition={{ delay: 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* ── Header ── */}
              <div
                className="flex items-center justify-between"
                style={{
                  padding: "max(calc(env(safe-area-inset-top) + 22px), 30px) 28px 20px",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src="/images/logo-staf-affaires.png"
                  alt="STAF AFFAIRES"
                  width={220}
                  height={64}
                  className="w-auto object-contain"
                  style={{ height: 58 }}
                />
                <motion.button
                  onClick={closeMenu}
                  aria-label="Fermer le menu"
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(0,0,0,0.1)",
                    background: "rgba(0,0,0,0.03)",
                    color: "rgba(0,0,0,0.4)",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                  whileHover={{ background: "rgba(255,107,74,0.08)", borderColor: "rgba(255,107,74,0.3)", color: "#ff6b4a" }}
                  whileTap={{ scale: 0.88 }}
                  transition={{ duration: 0.18 }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </motion.button>
              </div>

              {/* ── Nav links ── */}
              <div className="flex-1 flex flex-col justify-center px-6 py-4" style={{ gap: 0 }}>
                {navItems.map((item, i) => (
                  <MenuLink
                    key={item.name}
                    item={item}
                    index={i}
                    isActive={activeItem === item.name}
                    onSelect={() => { setActiveItem(item.name); closeMenu(); }}
                  />
                ))}
              </div>

              {/* ── CTA bloc ── */}
              <motion.div
                className="px-6 pb-6 pt-5 flex flex-col gap-3"
                style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                variants={{ closed: { opacity: 0, y: 20 }, open: { opacity: 1, y: 0 } }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Primary CTA */}
                <Link
                  href="/prendre-rendez-vous"
                  onClick={closeMenu}
                  className="group flex items-center justify-center gap-2 w-full rounded-2xl font-semibold text-white"
                  style={{
                    background: "#ff6b4a",
                    padding: "15px 24px",
                    fontSize: 14,
                    letterSpacing: "0.01em",
                    transition: "background 0.25s, transform 0.18s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#e85535"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#ff6b4a"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <Calendar size={15} strokeWidth={2} />
                  Prendre rendez-vous
                  <ArrowUpRight size={15} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Tagline */}
                <p
                  className="text-center select-none"
                  style={{ fontSize: 10, color: "rgba(0,0,0,0.2)", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}
                >
                  Performer sans s&apos;épuiser
                </p>
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────────── */

function HamburgerButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  const ease = [0.76, 0, 0.24, 1] as const;
  return (
    <motion.button
      onClick={onClick}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
      className="relative flex items-center justify-center rounded-full shrink-0 select-none"
      style={{
        width: 34,
        height: 34,
        border: "1px solid",
        borderColor: isOpen ? "rgba(255,107,74,0.3)" : "rgba(0,0,0,0.08)",
        background: isOpen ? "rgba(255,107,74,0.07)" : "transparent",
        transition: "background 0.3s, border-color 0.3s",
        cursor: "pointer",
      }}
      whileTap={{ scale: 0.86 }}
    >
      {/* Container 16×12 pour 3 barres */}
      <div style={{ width: 16, height: 12, position: "relative" }}>
        {/* Barre 1 — tourne en \ */}
        <motion.span
          style={{
            display: "block",
            position: "absolute",
            height: 1.6,
            width: 16,
            borderRadius: 2,
            left: 0,
            top: 0,
            originX: 0.5,
            originY: 0.5,
          }}
          animate={isOpen
            ? { top: 5.2, rotate: 45, backgroundColor: "#ff6b4a" }
            : { top: 0,   rotate: 0,  backgroundColor: "#111111" }
          }
          transition={{ duration: 0.38, ease }}
        />
        {/* Barre 2 — disparaît */}
        <motion.span
          style={{
            display: "block",
            position: "absolute",
            height: 1.6,
            width: 16,
            borderRadius: 2,
            left: 0,
            top: 5.2,
            originX: 0.5,
          }}
          animate={isOpen
            ? { opacity: 0, scaleX: 0.4, backgroundColor: "#111111" }
            : { opacity: 1, scaleX: 1,   backgroundColor: "#111111" }
          }
          transition={{ duration: 0.22, ease }}
        />
        {/* Barre 3 — tourne en / */}
        <motion.span
          style={{
            display: "block",
            position: "absolute",
            height: 1.6,
            width: 16,
            borderRadius: 2,
            left: 0,
            top: 10.4,
            originX: 0.5,
            originY: 0.5,
          }}
          animate={isOpen
            ? { top: 5.2, rotate: -45, backgroundColor: "#ff6b4a" }
            : { top: 10.4, rotate: 0,  backgroundColor: "#111111" }
          }
          transition={{ duration: 0.38, ease }}
        />
      </div>
    </motion.button>
  );
}

function MenuLink({
  item, index, isActive, onSelect,
}: {
  item: { name: string; href: string; desc: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }> };
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      variants={{
        closed: { opacity: 0, x: 32 },
        open:   { opacity: 1, x: 0  },
      }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={item.href}
        onClick={onSelect}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center justify-between rounded-2xl group"
        style={{
          padding: "14px 16px",
          marginBottom: 4,
          textDecoration: "none",
          background: hovered ? "rgba(255,107,74,0.05)" : isActive ? "rgba(0,0,0,0.03)" : "transparent",
          transition: "background 0.2s ease",
        }}
      >
        {/* Left: icon + text */}
        <div className="flex items-center gap-3.5">
          {/* Icon pill */}
          <motion.div
            className="flex items-center justify-center rounded-xl shrink-0"
            style={{ width: 40, height: 40 }}
            animate={{
              background: hovered
                ? "rgba(255,107,74,0.12)"
                : isActive
                ? "rgba(0,0,0,0.06)"
                : "rgba(0,0,0,0.04)",
            }}
            transition={{ duration: 0.2 }}
          >
            <Icon
              size={18}
              strokeWidth={hovered || isActive ? 2.2 : 1.8}
              style={{
                color: hovered ? "#ff6b4a" : isActive ? "#0A192F" : "rgba(0,0,0,0.45)",
                transition: "color 0.2s ease",
              }}
            />
          </motion.div>

          {/* Name + desc */}
          <div className="flex flex-col gap-0.5">
            <motion.span
              className="font-semibold leading-none"
              style={{ fontSize: 16, letterSpacing: "-0.01em" }}
              animate={{
                color: hovered ? "#ff6b4a" : isActive ? "#0A192F" : "rgba(0,0,0,0.82)",
              }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
            </motion.span>
            <span style={{ fontSize: 11.5, color: "rgba(0,0,0,0.35)", fontWeight: 400 }}>
              {item.desc}
            </span>
          </div>
        </div>

        {/* Right: arrow */}
        <motion.div
          className="flex items-center justify-center rounded-full shrink-0"
          style={{ width: 28, height: 28 }}
          animate={{
            background: hovered ? "#ff6b4a" : "rgba(0,0,0,0.05)",
            color: hovered ? "#fff" : "rgba(0,0,0,0.25)",
          }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight size={13} strokeWidth={2} />
        </motion.div>
      </Link>
    </motion.div>
  );
}
