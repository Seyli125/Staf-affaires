"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/", active: true },
  { name: "Services", href: "/services" },
  { name: "Find a Tutor", href: "/team" },
  { name: "Pricing", href: "/pricing" },
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
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/_a_wipe_bg-1769739098466.png?width=8000&height=8000&resize=contain"
                    alt="STAFF AFFAIRES"
                    width={500}
                    height={150}
                    className="h-40 md:h-64 w-auto object-contain"
                    priority
                  />
          </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="group flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-black/60 hover:text-black transition-all"
            >
              {item.active && <div className="w-2 h-2 bg-brand-orange rounded-full" />}
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link href="/signin" className="text-[13px] font-bold uppercase tracking-widest text-black/60 hover:text-black">
            Sign In
          </Link>
          <Button 
            className="rounded-full bg-black text-white px-8 py-6 font-bold hover:scale-105 transition-all text-[13px] uppercase tracking-widest"
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
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
                  className="text-xl font-black uppercase tracking-widest text-black"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 border-t pt-8">
                <Button variant="outline" className="w-full rounded-full py-6 font-bold uppercase tracking-widest text-[13px]">
                  Sign In
                </Button>
                <Button className="w-full rounded-full py-6 font-bold uppercase tracking-widest text-[13px]">
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
