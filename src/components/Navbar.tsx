"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Accueil", href: "/", active: true },
  { name: "Services", href: "#services" },
  { name: "Qui suis-je ?", href: "#features" },
  { name: "Parcours", href: "#timeline" },
  { name: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-lg py-2 sm:py-4 shadow-sm" 
          : "bg-transparent py-3 sm:py-6"
      }`}
    >
      <div className="w-full px-4 md:px-8 flex justify-between items-center relative h-full">
        {/* Left: Logo */}
        <div className="flex justify-start items-center -translate-y-2 sm:-translate-y-4 lg:-translate-y-6">
          <Link href="/" className="flex items-center group">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/_a_wipe_bg-1769739098466.png?width=8000&height=8000&resize=contain"
              alt="STAF AFFAIRES"
              width={400}
              height={120}
              className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Nav - Absolute centering for pixel-perfect alignment */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-10 -translate-y-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="group flex items-center gap-2 text-[12px] xl:text-[13px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-all whitespace-nowrap"
            >
              {item.active && <div className="w-2 h-2 bg-brand-orange rounded-full" />}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex justify-end items-center gap-4 sm:gap-6 -translate-y-2 sm:-translate-y-4">
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/prendre-rendez-vous">
              <Button 
                className="rounded-full bg-brand-navy text-white px-6 xl:px-8 py-5 xl:py-6 font-bold hover:scale-105 transition-all text-[12px] xl:text-[13px] uppercase tracking-widest cursor-pointer shadow-lg"
              >
                Prendre RDV
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-black p-2.5 hover:bg-black/5 rounded-full transition-colors active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto"
          >
            <div className="flex flex-col p-6 sm:p-8 gap-2 min-h-full">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 border-b border-slate-100 text-lg sm:text-xl font-black uppercase tracking-wider text-brand-navy hover:text-brand-orange transition-colors group"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 pt-6 border-t border-slate-100"
              >
                <Link href="/prendre-rendez-vous" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full py-6 font-bold uppercase tracking-widest text-sm bg-brand-navy text-white hover:bg-brand-orange transition-colors shadow-lg">
                    Prendre rendez-vous
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Contact info on mobile */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto pt-8 text-center"
              >
                <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
                  Performer sans s'épuiser
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
