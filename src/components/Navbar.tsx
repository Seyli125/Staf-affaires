"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Accueil", href: "#", active: true },
  { name: "Qui suis-je ?", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center relative h-full">
          {/* Left: Logo */}
          <div className="flex justify-start items-center">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-serif font-bold tracking-tight text-brand-navy">STAF <span className="text-brand-gold">Affaires</span></span>
            </Link>
          </div>

              {/* Center: Desktop Nav */}
              <div className="hidden lg:flex items-center gap-10">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-brand-navy/60 hover:text-brand-navy transition-all whitespace-nowrap"
                  >
                    {item.active && <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />}
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right: Actions */}
              <div className="flex justify-end items-center gap-6">
                <div className="hidden lg:flex items-center gap-6">
                  <Button 
                    asChild
                    className="rounded-full bg-brand-navy text-white px-8 py-5 font-bold hover:scale-105 transition-all text-[12px] uppercase tracking-widest cursor-pointer shadow-lg shadow-brand-navy/20"
                  >
                    <a href="#contact">Prendre RDV</a>
                  </Button>
                </div>

                {/* Mobile Toggle */}
                <button 
                  className="lg:hidden text-brand-navy p-2 hover:bg-brand-navy/5 rounded-full transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-border overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-widest text-brand-navy"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 border-t border-brand-navy/10 pt-8">
                <Button 
                  asChild
                  className="w-full rounded-full bg-brand-navy text-white py-6 font-bold uppercase tracking-widest text-[13px]"
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Prendre RDV</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
