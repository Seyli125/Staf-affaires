"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Find a Tutor", href: "#" },
  { name: "Pricing", href: "#" },
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <div className="relative w-24 h-14 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/sa-1769737491653.jpg?width=8000&height=8000&resize=contain"
                alt="STAF AFFAIRES"
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
          </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item, index) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={`text-[15px] font-medium transition-all duration-300 hover:text-orange-500 relative flex items-center gap-2 ${
                isScrolled ? "text-black/70" : "text-black"
              }`}
            >
              {index === 0 && (
                <span className="w-2 h-2 rounded-full bg-orange-500" />
              )}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="#"
            className={`text-[15px] font-medium transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-black"
            }`}
          >
            Sign In
          </Link>
          <Button 
            className="bg-black text-white hover:bg-black/80 rounded-full px-8 py-5 text-sm font-bold transition-transform active:scale-95"
          >
            Sign Up
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
                  className="text-lg font-bold text-black/70 hover:text-black transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4 border-t">
                <Link href="#" className="text-lg font-bold text-black">Sign In</Link>
                <Button className="w-full rounded-full py-6 font-bold bg-black text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
