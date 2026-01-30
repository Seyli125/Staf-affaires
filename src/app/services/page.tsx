"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Calendar, 
  Zap, 
  ShieldCheck, 
  BrainCircuit,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const allServices = [
  {
    title: "Coaching Individuel",
    description: "Accompagnement sur-mesure pour dirigeants et entrepreneurs à haut potentiel.",
    icon: Target,
    details: ["Clarté stratégique", "Prise de décision", "Leadership", "Équilibre vie pro/perso"],
    color: "bg-brand-navy/5",
    accent: "bg-brand-navy",
  },
  {
    title: "Coaching d'Équipe",
    description: "Renforcez la cohésion et la performance collective de vos managers.",
    icon: Users,
    details: ["Alignement des visions", "Gestion des conflits", "Culture d'entreprise", "Efficacité collective"],
    color: "bg-brand-orange/5",
    accent: "bg-brand-orange",
  },
  {
    title: "Parcours Collectifs",
    description: "Programmes immersifs de 3, 4 ou 6 mois pour transformer vos équipes.",
    icon: Calendar,
    details: ["Workshops intensifs", "Suivi hebdomadaire", "KPIs de transformation", "Communauté d'apprentissage"],
    color: "bg-brand-navy/5",
    accent: "bg-brand-navy",
  },
  {
    title: "FormAction",
    description: "Formations activables immédiatement pour des résultats rapides.",
    icon: Zap,
    details: ["Vente & Négociation", "Communication d'influence", "Gestion du temps", "Productivité"],
    color: "bg-brand-orange/5",
    accent: "bg-brand-orange",
  },
  {
    title: "Mentorat & Management",
    description: "Management externalisé pour structurer votre croissance.",
    icon: ShieldCheck,
    details: ["Structuration RH", "Pilotage opérationnel", "Externalisation stratégique", "Conseil expert"],
    color: "bg-brand-navy/5",
    accent: "bg-brand-navy",
  },
  {
    title: "Préparation Mentale",
    description: "Préparez-vous comme un athlète de haut niveau pour les enjeux business.",
    icon: BrainCircuit,
    details: ["Gestion du stress", "Concentration laser", "Résilience", "Confiance absolue"],
    color: "bg-brand-orange/5",
    accent: "bg-brand-orange",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
              Nos Solutions
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none text-brand-navy">
              NOS APPROCHES <br />
              <span className="text-brand-orange">DE COACHING</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-medium leading-relaxed">
              Des solutions d'accompagnement pragmatiques, orientées résultats, pour transformer vos défis en opportunités de croissance.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 -skew-x-12 translate-x-1/4" />
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col h-full group transition-all duration-500"
              >
                <div className={`w-16 h-16 ${service.accent} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-4 text-brand-navy group-hover:text-brand-orange transition-colors uppercase">
                  {service.title}
                </h3>
                <p className="text-slate-600 font-medium mb-8 flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-10">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link href="/prendre-rendez-vous" className="w-full">
                  <Button className="w-full rounded-full py-6 font-black uppercase tracking-widest text-xs bg-brand-navy hover:bg-brand-orange text-white transition-all">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
              VOUS NE SAVEZ PAS <br/><span className="text-brand-orange">PAR OÙ COMMENCER ?</span>
            </h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Prenons 45 minutes pour analyser votre situation et définir ensemble le parcours le plus adapté à vos besoins.
            </p>
            <Link href="/prendre-rendez-vous">
              <Button size="lg" className="bg-brand-orange text-white hover:bg-white hover:text-brand-navy rounded-full px-12 py-8 text-lg font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl">
                Réserver un diagnostic gratuit
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-white/20" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
