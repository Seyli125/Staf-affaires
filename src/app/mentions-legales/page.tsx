import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-16 text-brand-navy">Mentions Légales</h1>
          <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
            
            <section className="bg-slate-50 p-10 rounded-[40px] border border-slate-100">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">1. Éditeur du Site</h2>
              <p className="mb-4">Le site internet <strong>STAF AFFAIRES</strong> (https://staf-affaires.com) est édité par :</p>
              <ul className="space-y-2 font-medium text-brand-navy">
                <li>Saïd Taaroust</li>
                <li>Entrepreneur Individuel</li>
                <li>Siège social : [ADRESSE COMPLETE]</li>
                <li>SIRET : [NUMERO SIRET]</li>
                <li>Email : saidtaaroust@gmail.com</li>
              </ul>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">2. Direction de la Publication</h2>
              <p>Le responsable de la publication et responsable éditorial du site est Monsieur Saïd Taaroust, en sa qualité de dirigeant de STAF AFFAIRES.</p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">3. Hébergement</h2>
              <p className="mb-4">Le site est hébergé par :</p>
              <ul className="space-y-2">
                <li><strong>Vercel Inc.</strong></li>
                <li>340 S Lemon Ave #1107</li>
                <li>Walnut, CA 91789, USA</li>
                <li>https://vercel.com</li>
              </ul>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">4. Propriété Intellectuelle</h2>
              <p className="mb-6">
                L'ensemble des éléments constituant le site STAF AFFAIRES (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc.) ainsi que le site lui-même, relèvent des législations françaises et internationales sur le droit d'auteur et la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Saïd Taaroust.
              </p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">5. Limitation de Responsabilité</h2>
              <p className="mb-6">
                STAF AFFAIRES s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, l'éditeur ne saurait être tenu pour responsable des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son site.
              </p>
              <p>
                L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
              </p>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">6. Liens Hypertextes</h2>
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites. STAF AFFAIRES n'exerce aucun contrôle sur le contenu de ces sites tiers et ne saurait être tenu responsable de leur contenu ou de leur politique de confidentialité.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
