"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/contact" },
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
        <Link href="/" className="flex items-center gap-2 group">
          <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${
            isScrolled ? "text-primary" : "text-white"
          }`}>
            STAF <span className="opacity-50 group-hover:opacity-100 transition-opacity">AFFAIRES</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:scale-110 active:scale-95 ${
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant={isScrolled ? "default" : "outline"}
            className={`rounded-full px-6 font-bold transition-all duration-500 hover:scale-105 active:scale-95 ${
              !isScrolled && "text-white border-white hover:bg-white hover:text-primary"
            }`}
          >
            Réserver un appel
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-white"} />
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
