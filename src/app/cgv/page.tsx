import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CGV() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-16 text-brand-navy">Conditions de Vente</h1>
          <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
            
            <section className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">1. Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) s'appliquent, sans restriction ni réserve à l'ensemble des ventes conclues par Saïd Taaroust (STAF AFFAIRES) auprès d'acheteurs professionnels et particuliers, désirant acquérir les services de coaching, formation et management externalisé.
              </p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">2. Prestations</h2>
              <p className="mb-4">Les services proposés par STAF AFFAIRES comprennent :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Le coaching professionnel individuel ou collectif.</li>
                <li>Les prestations de formation (Formaction).</li>
                <li>Le management externalisé et conseil en affaires.</li>
              </ul>
              <p className="mt-4">Chaque prestation fait l'objet d'un contrat ou d'un devis spécifique détaillant les modalités d'intervention.</p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">3. Tarifs et Paiement</h2>
              <p className="mb-6">
                Les prestations sont fournies aux tarifs en vigueur figurant sur le devis accepté par le client. Les prix sont exprimés en Euros, HT et TTC.
              </p>
              <p>
                Sauf mention contraire, le paiement s'effectue à réception de facture, par virement bancaire. Tout retard de paiement pourra donner lieu à l'application de pénalités de retard.
              </p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">4. Annulation et Report</h2>
              <p className="mb-4">Toute séance de coaching ou formation annulée par le client moins de 48 heures avant la date prévue sera due intégralement, sauf cas de force majeure.</p>
              <p>STAF AFFAIRES se réserve le droit de reporter une intervention en cas de force majeure ou d'indisponibilité majeure, après en avoir informé le client dans les meilleurs délais.</p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">5. Responsabilité</h2>
              <p className="mb-6">
                STAF AFFAIRES s'engage à mettre en œuvre tous les moyens nécessaires pour la réussite des prestations (obligation de moyens). Toutefois, le succès des interventions dépend également de l'implication et de la mise en œuvre des actions par le client (co-responsabilité).
              </p>
              <p>
                La responsabilité de STAF AFFAIRES ne peut être engagée qu'en cas de faute prouvée et est limitée au montant de la prestation concernée.
              </p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">6. Litiges</h2>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire. À défaut, le tribunal compétent sera celui du siège social de STAF AFFAIRES.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
