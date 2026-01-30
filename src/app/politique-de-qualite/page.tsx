import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Award, CheckCircle2, Search } from "lucide-react";

export default function PolitiqueQualite() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-16 text-brand-navy leading-none">Engagement <br/><span className="text-brand-orange">Qualité & Audit</span></h1>
            
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-brand-navy p-10 rounded-[40px] text-white">
                <ShieldCheck className="w-12 h-12 text-brand-orange mb-6" />
                <h3 className="text-2xl font-black uppercase mb-4">Certification RNCP</h3>
                <p className="text-white/70 leading-relaxed">
                  Notre accompagnement est ancré dans la rigueur d'un titre certifié Niveau 6, garantissant une méthodologie éprouvée et une déontologie irréprochable.
                </p>
              </div>
              <div className="bg-brand-orange p-10 rounded-[40px] text-white">
                <Award className="w-12 h-12 text-white mb-6" />
                <h3 className="text-2xl font-black uppercase mb-4">Standard Qualiopi</h3>
                <p className="text-white/70 leading-relaxed">
                  Nos processus de formation suivent les exigences de qualité les plus strictes pour assurer le développement réel de vos compétences.
                </p>
              </div>
            </div>

          <div className="space-y-12 text-slate-600 leading-relaxed text-lg">
            
            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">1. Transparence des Objectifs</h2>
              <p className="mb-6">
                Chaque mission commence par un audit précis de vos besoins. Nous définissons ensemble des indicateurs de réussite clairs et mesurables dès le premier rendez-vous.
              </p>
              <ul className="space-y-4">
                {[
                  "Évaluation initiale des compétences",
                  "Plan de progression personnalisé",
                  "Points d'étape réguliers"
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 font-bold text-brand-navy">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">2. Amélioration Continue</h2>
              <p className="mb-6">
                Nous sollicitons systématiquement votre feedback à la fin de chaque accompagnement. Cette démarche d'écoute active nous permet d'affiner nos méthodes et de garantir un niveau d'excellence constant.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start gap-6">
                <Search className="w-8 h-8 text-brand-gold shrink-0 mt-1" />
                <p className="italic text-slate-500">
                  "La qualité n'est pas un acte, c'est une habitude." Nous auditons nos propres pratiques trimestriellement pour rester à la pointe des neurosciences appliquées au coaching.
                </p>
              </div>
            </section>

            <section className="px-10">
              <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-6">3. Éthique et Confidentialité</h2>
              <p>
                En tant que coach certifié, Saïd Taaroust s'engage à respecter le secret professionnel absolu concernant les échanges tenus lors des séances de coaching ou de mentorat. Notre politique qualité inclut le respect strict de la charte de déontologie de l'ICF (International Coaching Federation).
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
