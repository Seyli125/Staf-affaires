"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, Brain, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  { title: "RNCP Niveau 6", description: "Certification d'excellence", icon: Award },
  { title: "Technicien PNL", description: "Expertise psychologique", icon: Brain },
  { title: "Approche AVR®", description: "Méthode propriétaire", icon: Zap },
  { title: "Expertise B2B", description: "25 ans de terrain", icon: Users },
];

export function Features() {
  return (
    <section id="features" className="container mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 blur-[100px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 lg:order-1"
        >
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white max-w-sm mx-auto">
              <Image 
                src="/images/said-meeting.jpg"
                alt="Saïd TAAROUST - Expert Performance B2B"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-3 -right-3 bg-brand-orange p-3 rounded-xl text-white shadow-lg hidden sm:block"
            >
              <div className="text-center">
                <span className="text-2xl font-bold block">25+</span>
                <span className="text-[8px] font-medium uppercase tracking-wide opacity-90">Années B2B</span>
              </div>
            </motion.div>

            {/* RNCP Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -top-3 -left-3 z-20 w-16 h-16 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white p-1.5 hidden sm:block"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                alt="Certification RNCP"
                fill
                className="object-contain p-1"
              />
            </motion.div>
          </div>

          {/* Mobile badges */}
          <div className="flex sm:hidden justify-center gap-2 mt-4">
            <span className="bg-brand-orange text-white px-3 py-1.5 rounded-full text-[10px] font-semibold">
              25+ ans d'expertise
            </span>
            <span className="bg-brand-navy text-white px-3 py-1.5 rounded-full text-[10px] font-semibold">
              RNCP Niveau 6
            </span>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 order-2 lg:order-2"
        >
          {/* Header */}
          <div className="mb-5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              className="h-0.5 bg-brand-orange mb-3"
            />
            <span className="text-brand-orange font-semibold text-xs mb-2 block">
              La Signature d'un Expert
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-2">
              Saïd <span className="text-brand-orange">TAAROUST</span>
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              Coach d'Élite • Expert Performance Commerciale & Leadership B2B
            </p>
          </div>

          {/* Quote */}
          <div className="relative bg-slate-50 rounded-xl p-4 mb-5">
            <Quote className="absolute top-3 right-3 w-5 h-5 text-slate-200" />
            <p className="text-sm font-medium text-brand-navy italic leading-relaxed">
              "Transformer vos défis complexes en leviers de croissance, tout en préservant votre équilibre."
            </p>
          </div>
          
          {/* Description */}
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed mb-5">
            <p>
              Avec un parcours forgé au sein de structures de premier plan, Saïd Taaroust incarne l'alliance rare entre <span className="text-brand-navy font-semibold">rigueur stratégique</span> et <span className="text-brand-navy font-semibold">intelligence émotionnelle</span>. 
            </p>
            <p>
              Maître des dynamiques B2B depuis plus de 25 ans, il a propulsé des centaines de dirigeants vers l'excellence. Sa méthode <span className="text-brand-orange font-semibold">AVR®</span> garantit des résultats concrets et durables.
            </p>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group"
              >
                <div className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors">
                  <item.icon className="w-3.5 h-3.5 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-brand-navy text-[10px] truncate">{item.title}</p>
                  <p className="text-[9px] text-slate-400 truncate">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/prendre-rendez-vous">
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white rounded-full font-semibold text-sm hover:bg-brand-orange transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
              Réserver votre session stratégique 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
