import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="brands">
        <Brands />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="features">
        <Features />
      </div>
      
      {/* Footer Section */}
      <footer id="contact" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2">
                <h2 className="text-4xl font-black mb-8 tracking-tighter">SAÏD TAAROUST</h2>
                <p className="text-xl text-white/70 max-w-md leading-relaxed">
                  Accompagner les leaders et les entreprises vers une performance durable et un mindset d'exception.
                </p>
              </div>
            <div>
              <h3 className="font-bold uppercase tracking-widest text-sm mb-6 text-white/50">Navigation</h3>
              <ul className="space-y-4 font-medium">
                <li><a href="#" className="hover:text-white/60 transition-colors">Accueil</a></li>
                <li><a href="#services" className="hover:text-white/60 transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white/60 transition-colors">À propos</a></li>
                <li><a href="#contact" className="hover:text-white/60 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-widest text-sm mb-6 text-white/50">Contact</h3>
              <ul className="space-y-4 font-medium">
                <li>contact@stafaffaires.fr</li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-white/40 text-sm font-bold uppercase tracking-widest">
            <p>© 2026 STAF AFFAIRES. Tous droits réservés.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
