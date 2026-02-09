"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, MapPin, ArrowUpRight, ShieldCheck, Globe, ArrowRight } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Accueil", href: "/" },
    { name: "Expertise", href: "#services" },
    { name: "Philosophie", href: "#about" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Parcours", href: "#timeline" },
  ],
  legal: [
    { name: "Mentions Légales", href: "/mentions-legales" },
    { name: "Confidentialité", href: "/politique-de-confidentialite" },
    { name: "Conditions de Vente", href: "/cgv" },
    { name: "Qualité & Audit", href: "/politique-de-qualite" },
    { name: "RGPD", href: "/rgpd" },
  ],
  contact: [
    { name: "saidtaaroust@gmail.com", href: "mailto:saidtaaroust@gmail.com", icon: Mail },
    { name: "France & International", href: "#", icon: Globe },
    { name: "LinkedIn Profile", href: "https://www.linkedin.com/in/said-taaroust-staf-affaires/", icon: Linkedin },
  ]
};

const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1
};

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24">
          
          {/* Brand Identity Column */}
          <motion.div 
            className="col-span-2 md:col-span-2 lg:col-span-5 space-y-6 sm:space-y-8 md:space-y-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring }}
          >
            <Link href="/" className="inline-block group">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/_a_wipe_bg-1769739098466.png?width=8000&height=8000&resize=contain"
                alt="STAF AFFAIRES"
                width={200}
                height={60}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain brightness-0 invert"
              />
              <p className="text-[8px] sm:text-[10px] font-black tracking-[0.3em] sm:tracking-[0.4em] text-white/40 mt-3 sm:mt-4 uppercase transition-colors group-hover:text-brand-orange">
                Performance & Sens
              </p>
            </Link>
            
            <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed max-w-md font-medium">
              L'excellence de l'accompagnement B2B pour dirigeants et managers. 
              Une approche humaniste pour performer sans s'épuiser.
            </p>

            {/* Philosophical quote */}
            <p className="text-sm italic text-white/40 border-l-2 border-brand-orange/50 pl-4">
              "Le voyage de mille lieues commence par un premier pas."
            </p>

            <div className="flex gap-3 sm:gap-4">
              <motion.div whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://www.linkedin.com/in/said-taaroust-staf-affaires/" target="_blank" className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                  <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                  <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            className="col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.1 }}
          >
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange mb-6 sm:mb-8 md:mb-10">Stratégie</h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.navigation.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-xs sm:text-sm font-bold uppercase tracking-tight flex items-center group">
                    {link.name}
                    <ArrowUpRight className="w-2.5 sm:w-3 h-2.5 sm:h-3 ml-1.5 sm:ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div 
            className="col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange mb-6 sm:mb-8 md:mb-10">Engagement</h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.legal.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-xs sm:text-sm font-bold uppercase tracking-tight flex items-center group">
                    {link.name}
                    <ArrowUpRight className="w-2.5 sm:w-3 h-2.5 sm:h-3 ml-1.5 sm:ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            className="col-span-2 lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.3 }}
          >
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange mb-6 sm:mb-8 md:mb-10">Parlons-en</h4>
            <div className="bg-white/5 p-5 sm:p-6 md:p-8 rounded-[20px] sm:rounded-[32px] border border-white/10 space-y-4 sm:space-y-6">
              {footerLinks.contact.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.href}
                    className="flex items-center gap-3 sm:gap-4 text-white/70 hover:text-white transition-colors group"
                  >
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-orange transition-colors shrink-0">
                      <item.icon className="w-4 sm:w-4 h-4 sm:h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold truncate">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              <Link href="/prendre-rendez-vous" className="block">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 sm:py-4 bg-brand-orange text-white rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Big Brand Stamp */}
        <div className="relative mb-8 sm:mb-12 hidden md:block">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-brand-navy px-8 text-[15vw] font-black text-white/[0.02] uppercase leading-none select-none tracking-tighter">
              STAF
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-12">
            <Link href="/" className="shrink-0">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/_a_wipe_bg-1769739098466.png?width=8000&height=8000&resize=contain"
                alt="Logo STAF AFFAIRES"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
              />
            </Link>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/30">
                © {new Date().getFullYear()} STAF AFFAIRES
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/20">
                <ShieldCheck className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-brand-orange" />
                <span>Certifié RNCP Niveau 6 & PNL</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/20 text-center sm:text-left">
              Performance & Sens en Équilibre
            </span>
            <div className="w-6 sm:w-8 h-px bg-brand-orange/30 hidden sm:block" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
