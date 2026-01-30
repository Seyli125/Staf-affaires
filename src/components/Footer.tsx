"use client";

import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, ArrowUpRight, ShieldCheck, Globe } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-32 pb-12 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="inline-block group">
              <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">
                STAF <span className="text-brand-gold">AFFAIRES</span>
              </h3>
              <p className="text-[10px] font-black tracking-[0.4em] text-white/40 mt-2 uppercase transition-colors group-hover:text-brand-orange">
                Performance & Sens
              </p>
            </Link>
            
            <p className="text-lg text-white/60 leading-relaxed max-w-md font-medium">
              L'excellence de l'accompagnement B2B pour dirigeants et managers. 
              Une approche humaniste pour performer sans s'épuiser.
            </p>

            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/said-taaroust-staf-affaires/" target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest text-brand-gold mb-10">Stratégie</h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-tight flex items-center group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest text-brand-gold mb-10">Engagement</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-tight flex items-center group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-widest text-brand-gold mb-10">Parlons-en</h4>
            <div className="bg-white/5 p-8 rounded-[32px] border border-white/10 space-y-6">
              {footerLinks.contact.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold truncate">{item.name}</span>
                </Link>
              ))}
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-brand-orange text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all shadow-lg shadow-brand-orange/20"
              >
                Prendre rendez-vous
              </button>
            </div>
          </div>
        </div>

        {/* Big Brand Stamp */}
        <div className="relative mb-12">
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
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          <div className="flex items-center gap-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              © {new Date().getFullYear()} STAF AFFAIRES
            </p>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              <ShieldCheck className="w-3 h-3" />
              <span>Certifié RNCP & PNL</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              Conçu pour l'excellence
            </span>
            <div className="w-8 h-px bg-brand-gold/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
