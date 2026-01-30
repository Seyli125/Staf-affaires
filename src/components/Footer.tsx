import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Top Section: Brand & Main Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter uppercase italic">
              Staff Affaires
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              L'excellence du coaching B2B par Saïd Taaroust. Transformez votre vision en résultats concrets avec une approche premium et personnalisée.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-black transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-brand-orange">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">À propos de nous</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Nos Services</Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">L'Équipe</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Tarifs</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-brand-orange">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-brand-orange" />
                <a href="mailto:info@staffaffaires.fr" className="hover:text-white transition-colors">info@staffaffaires.fr</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-brand-orange" />
                <a href="tel:+33123456789" className="hover:text-white transition-colors">+33 1 23 45 67 89</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm leading-relaxed">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>8 Avenue des Champs-Élysées, 75008 Paris</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Légal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-brand-orange">Légal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Mentions Légales</Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Politique de Confidentialité</Link>
              </li>
              <li>
                <Link href="/cgv" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Conditions Générales de Vente</Link>
              </li>
              <li>
                <Link href="/rgpd" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Gestion des cookies / RGPD</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Brand Text Divider */}
        <div className="border-t border-white/10 pt-12 pb-8 overflow-hidden">
          <h2 className="text-[12vw] font-black text-white/5 leading-none tracking-tighter uppercase whitespace-nowrap select-none">
            Saïd Taaroust • Staff Affaires • 
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            © {new Date().getFullYear()} STAFF AFFAIRES. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              DESIGNED FOR EXCELLENCE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
