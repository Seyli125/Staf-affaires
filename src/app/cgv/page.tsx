import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CGV() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Conditions Générales de Vente</h1>
          <div className="prose prose-lg max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">1. Objet</h2>
              <p>Les présentes CGV régissent la vente des prestations de coaching et d'accompagnement proposées par STAFF AFFAIRES.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">2. Tarifs et Paiement</h2>
              <p>Les prix sont indiqués en euros et sont payables selon les modalités définies lors de la commande.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">3. Rétractation</h2>
              <p>Conformément à la loi, le client dispose d'un délai de 14 jours pour exercer son droit de rétractation, sauf pour les prestations de service commencées avec son accord.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
