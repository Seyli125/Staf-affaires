"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Building2, User, Globe, Server, Scale } from "lucide-react";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#1D1D1F]">
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Mentions Légales
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="space-y-12">
            
            {/* Éditeur du site */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Éditeur du site</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-3">
                <p><strong>Raison sociale :</strong> STAF AFFAIRES</p>
                <p><strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</p>
                <p><strong>Capital social :</strong> Variable</p>
                <p><strong>Siège social :</strong> France</p>
                <p><strong>RCS :</strong> Mont de Marsan</p>
                <p><strong>N° SIREN :</strong> 944 424 670</p>
                <p><strong>N° TVA Intracommunautaire :</strong> FR [à compléter]</p>
                <p><strong>Code APE :</strong> 7022Z - Conseil pour les affaires et autres conseils de gestion</p>
              </div>
            </motion.div>

            {/* Directeur de publication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Directeur de la publication</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-3">
                <p><strong>Nom :</strong> Saïd TAAROUST</p>
                <p><strong>Qualité :</strong> Président de STAF AFFAIRES</p>
                <p><strong>Email :</strong> contact@stafaffaires.com</p>
              </div>
            </motion.div>

            {/* Hébergement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Hébergement</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-3">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">https://vercel.com</a></p>
              </div>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Propriété intellectuelle</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <p>
                  Les marques, logos, signes et tout autre contenu du site font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
                </p>
                <p>
                  Les programmes, processus et méthodes dont la <strong>méthode EMPATH®</strong> et la <strong>démarche AVR® – L'Art de la Vente Responsable</strong> ainsi que les <strong>programmes PPS</strong> sont les propriétés exclusives de STAF AFFAIRES et de son fondateur.
                </p>
              </div>
            </motion.div>

            {/* Crédits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">Crédits</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-3">
                <p><strong>Conception et développement :</strong> STAF AFFAIRES</p>
                <p><strong>Photographies :</strong> © STAF AFFAIRES - Tous droits réservés</p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact</h2>
              <p className="text-white/80 mb-4">
                Pour toute question relative aux mentions légales, vous pouvez nous contacter :
              </p>
              <div className="space-y-2">
                <p><strong>Email :</strong> contact@stafaffaires.com</p>
                <p><strong>Email alternatif :</strong> saidtaaroust@gmail.com</p>
                <p><strong>Site web :</strong> www.stafaffaires.com</p>
              </div>
            </motion.div>

            {/* Date de mise à jour */}
            <p className="text-center text-slate-500 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}
