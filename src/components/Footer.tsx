import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Top Section: Brand & Main Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold tracking-tight">
              STAF <span className="text-brand-gold">Affaires</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              L'accompagnement humaniste pour managers et vendeurs responsables. Performer sans s'épuiser, manager et vendre avec sens.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-brand-gold">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">Qui suis-je ?</Link>
              </li>
              <li>
                <Link href="#services" className="text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">Services</Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">Témoignages</Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">Contact</Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-brand-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a href="mailto:saidtaaroust@gmail.com" className="hover:text-white transition-colors">saidtaaroust@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-brand-gold" />
                <a href="tel:+33000000000" className="hover:text-white transition-colors">+33 (France)</a>
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm leading-relaxed">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>France (Portée nationale et internationale)</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Légal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-brand-gold">Légal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/mentions-legales" className="text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">Mentions Légales</Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">Politique de Confidentialité</Link>
              </li>
              <li>
                <Link href="/cgv" className="text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">Conditions Générales de Vente</Link>
              </li>
              <li>
                <Link href="/rgpd" className="text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">Gestion des cookies / RGPD</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Brand Text Divider */}
        <div className="border-t border-white/10 pt-12 pb-8 overflow-hidden">
          <h2 className="text-[12vw] font-serif font-bold text-white/5 leading-none tracking-tighter uppercase whitespace-nowrap select-none">
            Saïd Taaroust • STAF Affaires • 
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
            © {new Date().getFullYear()} STAF AFFAIRES. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
              COACH CERTIFIÉ RNCP NIVEAU 6
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
