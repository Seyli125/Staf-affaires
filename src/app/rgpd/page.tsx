import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RGPD() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#1D1D1F]">
      <Navbar />
      <div className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-6xl font-black uppercase tracking-tighter mb-16 text-brand-navy dark:text-white">RGPD & Cookies</h1>
            <div className="space-y-12 text-slate-600 dark:text-white/60 leading-relaxed text-lg">
              
              <section className="bg-slate-50 dark:bg-[#2C2C2E] p-10 rounded-[40px] border border-slate-100 dark:border-white/10">
                <h2 className="text-2xl font-black text-brand-navy dark:text-white uppercase tracking-tight mb-6">Notre Engagement</h2>
              <p>
                La protection de votre vie privée et de vos données personnelles est une priorité pour STAF AFFAIRES. Nous nous engageons à traiter vos données en toute transparence et en conformité avec le Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            <section className="px-10">
                <h2 className="text-2xl font-black text-brand-navy dark:text-white uppercase tracking-tight mb-6">1. Utilisation des Cookies</h2>
              <p className="mb-4">Le site utilise des cookies pour améliorer votre navigation et analyser notre audience. Les types de cookies utilisés sont :</p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Cookies techniques :</strong> Essentiels au bon fonctionnement du site.</li>
                <li><strong>Cookies d'analyse :</strong> Pour comprendre comment vous utilisez le site et améliorer nos services (Google Analytics, etc.).</li>
                <li><strong>Cookies de tiers :</strong> Liés aux réseaux sociaux ou aux outils de réservation (LinkedIn, Calendly, etc.).</li>
              </ul>
            </section>

            <section className="px-10">
                <h2 className="text-2xl font-black text-brand-navy dark:text-white uppercase tracking-tight mb-6">2. Consentement</h2>
              <p className="mb-4">
                Lors de votre première visite, un bandeau vous informe de l'utilisation des cookies. En poursuivant votre navigation, vous consentez à leur utilisation. Vous pouvez toutefois les désactiver à tout moment via les réglages de votre navigateur.
              </p>
            </section>

            <section className="px-10">
                <h2 className="text-2xl font-black text-brand-navy dark:text-white uppercase tracking-tight mb-6">3. Protection des Données</h2>
              <p className="mb-4">
                Les données collectées via nos formulaires sont stockées de manière sécurisée. Nous mettons en œuvre des mesures techniques et organisationnelles pour prévenir tout accès non autorisé, perte ou détournement de vos informations.
              </p>
            </section>

            <section className="px-10">
                <h2 className="text-2xl font-black text-brand-navy dark:text-white uppercase tracking-tight mb-6">4. Contact DPO</h2>
              <p>
                Pour toute question relative à la protection de vos données ou pour exercer vos droits, vous pouvez contacter notre responsable de la protection des données :
              </p>
              <p className="mt-4 font-bold text-brand-navy dark:text-white">
                Saïd Taaroust - saidtaaroust@gmail.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
