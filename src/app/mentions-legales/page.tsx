"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Building2, User, Server, Scale, Shield, Link2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="bg-brand-navy pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Mentions Légales
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl">
              Informations légales concernant le site STAF AFFAIRES et son éditeur, conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="space-y-8 sm:space-y-10">
            
            {/* Éditeur du site */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">1. Éditeur du site</h2>
              </div>
              <div className="space-y-2.5 text-slate-600 text-sm sm:text-base">
                <p><strong className="text-brand-navy">Raison sociale :</strong> STAF AFFAIRES</p>
                <p><strong className="text-brand-navy">Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</p>
                <p><strong className="text-brand-navy">N° SIREN :</strong> 944 424 670</p>
                <p><strong className="text-brand-navy">RCS :</strong> Mont de Marsan</p>
                <p><strong className="text-brand-navy">Siège social :</strong> France</p>
                <p><strong className="text-brand-navy">Email :</strong> <a href="mailto:contact@stafaffaires.com" className="text-brand-orange hover:underline">contact@stafaffaires.com</a></p>
                <p><strong className="text-brand-navy">Site web :</strong> <a href="https://www.stafaffaires.com" className="text-brand-orange hover:underline">www.stafaffaires.com</a></p>
              </div>
            </motion.div>

            {/* Directeur de publication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">2. Directeur de la publication</h2>
              </div>
              <div className="space-y-2.5 text-slate-600 text-sm sm:text-base">
                <p><strong className="text-brand-navy">Nom :</strong> Saïd TAAROUST</p>
                <p><strong className="text-brand-navy">Qualité :</strong> Président et fondateur de STAF AFFAIRES</p>
                <p><strong className="text-brand-navy">Email :</strong> <a href="mailto:saidtaaroust@gmail.com" className="text-brand-orange hover:underline">saidtaaroust@gmail.com</a></p>
              </div>
            </motion.div>

            {/* Hébergement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">3. Hébergement</h2>
              </div>
              <div className="space-y-2.5 text-slate-600 text-sm sm:text-base">
                <p><strong className="text-brand-navy">Hébergeur :</strong> Vercel Inc.</p>
                <p><strong className="text-brand-navy">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                <p><strong className="text-brand-navy">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">https://vercel.com</a></p>
              </div>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">4. Propriété intellectuelle</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, icônes, etc.) est la propriété exclusive de STAF AFFAIRES ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p>
                  Les marques, méthodes et processus suivants sont la propriété exclusive de STAF AFFAIRES et de son fondateur :
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-4">
                  <li>Méthode EMPATH®</li>
                  <li>Démarche AVR® – L'Art de la Vente Responsable</li>
                  <li>Programmes PPS</li>
                </ul>
                <p>
                  Toute reproduction, représentation, modification, publication, transmission, ou exploitation de tout ou partie du contenu de ce site, par quelque procédé que ce soit, sans l'autorisation préalable écrite de STAF AFFAIRES, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </div>
            </motion.div>

            {/* Responsabilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">5. Limitation de responsabilité</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  STAF AFFAIRES s'efforce de fournir sur ce site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p>
                  STAF AFFAIRES ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation du site et/ou des informations qu'il contient.
                </p>
                <p>
                  L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                </p>
              </div>
            </motion.div>

            {/* Liens hypertextes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">6. Liens hypertextes</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Le site peut contenir des liens hypertextes vers d'autres sites. STAF AFFAIRES n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou aux dommages pouvant résulter de leur utilisation.
                </p>
                <p>
                  La création de liens hypertextes vers le site www.stafaffaires.com est soumise à l'autorisation préalable écrite de STAF AFFAIRES.
                </p>
              </div>
            </motion.div>

            {/* Droit applicable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 px-2"
            >
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">7. Droit applicable et juridiction compétente</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, les tribunaux de Mont de Marsan seront seuls compétents.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy rounded-2xl p-6 sm:p-8 text-white"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4">Contact</h2>
              <p className="text-white/70 mb-4 text-sm sm:text-base">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <div className="space-y-2 text-sm sm:text-base">
                <p><strong>Email :</strong> <a href="mailto:contact@stafaffaires.com" className="text-brand-orange hover:underline">contact@stafaffaires.com</a></p>
                <p><strong>Site web :</strong> <a href="https://www.stafaffaires.com" className="text-brand-orange hover:underline">www.stafaffaires.com</a></p>
              </div>
            </motion.div>

            <p className="text-xs sm:text-sm text-slate-400 text-center pt-4">
              Dernière mise à jour : 1er mai 2025
            </p>

          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
