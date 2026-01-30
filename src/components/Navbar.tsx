"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Accueil", href: "#", active: true },
  { name: "Services", href: "#services" },
  { name: "À propos", href: "#about" },
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
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className={`text-xl font-bold tracking-tight transition-colors duration-500 italic ${
            isScrolled ? "text-black" : "text-black/80"
          }`}>
            STAF AFFAIRES
          </span>
        </Link>

        {/* Centered Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                isScrolled ? "text-black/60 hover:text-black" : "text-black/70 hover:text-black"
              }`}
            >
              {item.active && (
                <motion.span 
                  layoutId="activeDot"
                  className="w-1.5 h-1.5 rounded-full bg-brand-orange" 
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#" 
            className={`text-sm font-bold transition-colors ${
              isScrolled ? "text-black/60 hover:text-black" : "text-black/70 hover:text-black"
            }`}
          >
            Se connecter
          </Link>
          <Button 
            className="rounded-full px-7 bg-black text-white hover:bg-black/80 font-bold transition-all hover:scale-105 active:scale-95"
          >
            S'inscrire
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-black" />
          ) : (
            <Menu className="text-black" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full rounded-full py-6 font-bold">
                Réserver un appel
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
