import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RGPD() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Gestion des Cookies & RGPD</h1>
          <div className="prose prose-lg max-w-none space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">1. Qu'est-ce qu'un cookie ?</h2>
              <p>Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site. Ils nous permettent de faciliter votre navigation et de mesurer l'audience.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">2. Vos choix concernant les cookies</h2>
              <p>Vous pouvez configurer votre navigateur pour refuser les cookies ou pour être averti lorsqu'un cookie est envoyé.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight mb-4">3. Protection des données (RGPD)</h2>
              <p>Nous nous engageons à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD).</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
