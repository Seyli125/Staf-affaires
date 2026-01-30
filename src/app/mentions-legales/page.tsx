import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Mentions Légales</h1>
          <div className="prose prose-lg max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">1. Éditeur du site</h2>
              <p>Le site STAFF AFFAIRES est édité par Saïd Taaroust, exerçant en tant qu'auto-entrepreneur / société [NOM SOCIÉTÉ], immatriculée au RCS de [VILLE] sous le numéro [NUMÉRO SIRET].</p>
              <p>Siège social : 8 Avenue des Champs-Élysées, 75008 Paris.</p>
              <p>Directeur de la publication : Saïd Taaroust.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">2. Hébergement</h2>
              <p>Le site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #1107, Walnut, CA 91789, États-Unis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">3. Propriété intellectuelle</h2>
              <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
