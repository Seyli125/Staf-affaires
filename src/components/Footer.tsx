"use client";

import Link from "next/link";
import Image from "next/image";
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="inline-block group">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/_a_wipe_bg-1769739098466.png?width=8000&height=8000&resize=contain"
                alt="STAF AFFAIRES"
                width={200}
                height={60}
                className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
              />
              <p className="text-[10px] font-black tracking-[0.4em] text-white/40 mt-4 uppercase transition-colors group-hover:text-brand-orange">
                Performance & Sens
              </p>
            </Link>
            
            <p className="text-lg text-white/60 leading-relaxed max-w-md font-medium">
              L'excellence de l'accompagnement B2B pour dirigeants et managers. 
              Une approche humaniste pour performer sans s'épuiser.
            </p>

            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/said-taaroust-staf-affaires/" target="_blank" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-widest text-brand-orange mb-10">Stratégie</h4>
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
            <h4 className="text-sm font-black uppercase tracking-widest text-brand-orange mb-10">Engagement</h4>
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
            <h4 className="text-sm font-black uppercase tracking-widest text-brand-orange mb-10">Parlons-en</h4>
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
                <Link href="/prendre-rendez-vous" className="block">
                  <button 
                    className="w-full py-4 bg-brand-orange text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all shadow-lg shadow-brand-orange/20"
                  >
                    Prendre rendez-vous
                  </button>
                </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Link href="/" className="opacity-50 hover:opacity-100 transition-opacity">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/a258b3e3-0205-4bf5-95de-0163cb732922/_a_wipe_bg-1769739098466.png?width=8000&height=8000&resize=contain"
                alt="STAF AFFAIRES"
                width={140}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="h-8 w-px bg-white/10 hidden md:block" />
            <div className="flex flex-col gap-2">
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">
                © {new Date().getFullYear()} STAF AFFAIRES • TOUS DROITS RÉSERVÉS
              </p>
              <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-brand-orange">
                <ShieldCheck className="w-3 h-3" />
                <span>Expertise Certifiée RNCP & PNL</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20">
              Performer sans s'épuiser
            </span>
            <div className="w-12 h-px bg-brand-orange/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
