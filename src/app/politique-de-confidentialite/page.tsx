import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Politique de Confidentialité</h1>
          <div className="prose prose-lg max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">1. Collecte des données</h2>
              <p>Nous collectons les informations que vous nous fournissez via les formulaires de contact, notamment votre nom, adresse e-mail et numéro de téléphone.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">2. Utilisation des données</h2>
              <p>Vos données sont utilisées exclusivement pour répondre à vos demandes de coaching et pour la gestion de la relation client.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">3. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
