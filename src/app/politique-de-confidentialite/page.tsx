import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-16 text-brand-navy">Confidentialité</h1>
          <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
            
            <section className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">Introduction</h2>
              <p>
                La présente Politique de confidentialité a pour but de vous informer sur la manière dont Saïd Taaroust (STAF AFFAIRES) collecte, utilise et protège vos données personnelles dans le cadre de l'utilisation du site https://staf-affaires.com.
              </p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">1. Données Collectées</h2>
              <p className="mb-4">Nous collectons des données lorsque vous interagissez avec notre site, notamment :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Données d'identification :</strong> Nom, prénom, adresse e-mail, numéro de téléphone (via le formulaire de contact ou de réservation).</li>
                <li><strong>Données de navigation :</strong> Adresse IP, cookies, données de connexion.</li>
              </ul>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">2. Finalités du Traitement</h2>
              <p className="mb-4">Vos données sont traitées pour les finalités suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestion des demandes de contact et de renseignements.</li>
                <li>Gestion des réservations de consultations et de séances de coaching.</li>
                <li>Envoi de communications professionnelles (si consenti).</li>
                <li>Amélioration de l'expérience utilisateur sur le site.</li>
              </ul>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">3. Conservation des Données</h2>
              <p>
                Les données personnelles sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et au maximum pour une durée de 3 ans après le dernier contact, sauf obligation légale contraire.
              </p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">4. Destinataires des Données</h2>
              <p>
                Vos données sont destinées exclusivement à STAF AFFAIRES. Elles ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.
              </p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">5. Vos Droits</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès, de rectification et d'effacement de vos données.</li>
                <li>Droit à la limitation du traitement.</li>
                <li>Droit d'opposition au traitement.</li>
                <li>Droit à la portabilité de vos données.</li>
              </ul>
              <p className="mt-6 font-bold text-brand-navy">
                Pour exercer ces droits, contactez-nous à : saidtaaroust@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
