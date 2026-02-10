"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Database, Clock, Users, Lock, FileText, Settings, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PolitiqueConfidentialite() {
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
              Politique de Confidentialité
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl">
              Protection de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) - Règlement UE 2016/679.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="space-y-8 sm:space-y-10">
            
            {/* Introduction */}
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
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">Introduction</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  La présente Politique de confidentialité a pour but de vous informer sur la manière dont STAF AFFAIRES, SASU immatriculée au RCS de Mont de Marsan sous le N° SIREN 944 424 670, collecte, utilise, stocke et protège vos données personnelles dans le cadre de l'utilisation du site www.stafaffaires.com.
                </p>
                <p>
                  STAF AFFAIRES s'engage à respecter la vie privée des utilisateurs de son site et à protéger les données personnelles qui lui sont communiquées, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée.
                </p>
              </div>
            </motion.div>

            {/* Responsable du traitement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">1. Responsable du traitement</h2>
              </div>
              <div className="space-y-2.5 text-slate-600 text-sm sm:text-base">
                <p>Le responsable du traitement des données personnelles est :</p>
                <p><strong className="text-brand-navy">STAF AFFAIRES</strong></p>
                <p><strong className="text-brand-navy">Représentant légal :</strong> Saïd TAAROUST, Président</p>
                <p><strong className="text-brand-navy">Email :</strong> <a href="mailto:contact@stafaffaires.com" className="text-brand-orange hover:underline">contact@stafaffaires.com</a></p>
              </div>
            </motion.div>

            {/* Données collectées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">2. Données personnelles collectées</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>Nous collectons les données suivantes lorsque vous interagissez avec notre site :</p>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <h3 className="font-semibold text-brand-navy mb-2">Données d'identification</h3>
                    <p>Nom, prénom, adresse e-mail, numéro de téléphone, nom de l'entreprise, fonction (collectées via les formulaires de contact ou de réservation).</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <h3 className="font-semibold text-brand-navy mb-2">Données de navigation</h3>
                    <p>Adresse IP, type de navigateur, système d'exploitation, pages visitées, durée de la visite, données de connexion.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-slate-100">
                    <h3 className="font-semibold text-brand-navy mb-2">Cookies et traceurs</h3>
                    <p>Cookies techniques nécessaires au fonctionnement du site, cookies analytiques (avec votre consentement), cookies de préférences.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Finalités */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">3. Finalités du traitement</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>Vos données personnelles sont traitées pour les finalités suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Gestion des demandes de contact et de renseignements</li>
                  <li>Gestion des réservations de consultations et de séances de coaching</li>
                  <li>Exécution des prestations de services (coaching, formation, accompagnement)</li>
                  <li>Envoi de communications professionnelles (uniquement si vous y avez consenti)</li>
                  <li>Amélioration de l'expérience utilisateur sur le site</li>
                  <li>Établissement de statistiques de fréquentation anonymisées</li>
                  <li>Respect des obligations légales et réglementaires</li>
                </ul>
              </div>
            </motion.div>

            {/* Base légale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">4. Base légale du traitement</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>Le traitement de vos données personnelles repose sur les bases légales suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Votre consentement</strong> : pour l'envoi de communications commerciales et l'utilisation de cookies non essentiels</li>
                  <li><strong>L'exécution d'un contrat</strong> : pour la gestion des prestations de services</li>
                  <li><strong>L'intérêt légitime</strong> : pour l'amélioration de nos services et la sécurité du site</li>
                  <li><strong>Les obligations légales</strong> : pour la conservation de certaines données à des fins comptables ou fiscales</li>
                </ul>
              </div>
            </motion.div>

            {/* Conservation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">5. Durée de conservation des données</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>Les données personnelles sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Données de contact</strong> : 3 ans après le dernier contact</li>
                  <li><strong>Données clients</strong> : durée de la relation contractuelle + 5 ans (obligations légales)</li>
                  <li><strong>Données de navigation</strong> : 13 mois maximum</li>
                  <li><strong>Cookies</strong> : 13 mois maximum à compter du dépôt</li>
                </ul>
                <p>
                  Au-delà de ces durées, les données sont soit supprimées, soit anonymisées à des fins statistiques.
                </p>
              </div>
            </motion.div>

            {/* Destinataires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 px-2"
            >
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">6. Destinataires des données</h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Vos données personnelles sont destinées exclusivement à STAF AFFAIRES et à ses sous-traitants techniques (hébergeur, outils de gestion) dans le strict cadre de l'exécution de leurs missions.
                </p>
                <p>
                  <strong>Vos données ne sont jamais vendues, louées ou transmises à des tiers à des fins commerciales.</strong>
                </p>
                <p>
                  En cas de transfert de données hors de l'Union Européenne, des garanties appropriées sont mises en place (clauses contractuelles types, certification Privacy Shield le cas échéant).
                </p>
              </div>
            </motion.div>

            {/* Sécurité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 px-2"
            >
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">7. Sécurité des données</h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  STAF AFFAIRES met en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité et la confidentialité de vos données personnelles :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Chiffrement des données sensibles (SSL/TLS)</li>
                  <li>Accès restreint aux données personnelles</li>
                  <li>Sauvegardes régulières et sécurisées</li>
                  <li>Mise à jour régulière des systèmes de sécurité</li>
                </ul>
              </div>
            </motion.div>

            {/* Vos droits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy">8. Vos droits</h2>
              </div>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong>Droit d'accès</strong> : obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                  <li><strong>Droit de rectification</strong> : demander la correction de données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données (« droit à l'oubli »)</li>
                  <li><strong>Droit à la limitation</strong> : demander la suspension du traitement de vos données</li>
                  <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données pour des motifs légitimes</li>
                  <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et les transférer à un autre responsable</li>
                  <li><strong>Droit de retirer votre consentement</strong> : à tout moment, sans affecter la licéité du traitement antérieur</li>
                </ul>
                
                <div className="bg-white rounded-xl p-4 border border-slate-100 mt-6">
                  <p className="font-semibold text-brand-navy mb-2">Pour exercer vos droits :</p>
                  <p>Envoyez votre demande accompagnée d'une copie de votre pièce d'identité à :</p>
                  <p className="mt-2"><strong>Email :</strong> <a href="mailto:contact@stafaffaires.com" className="text-brand-orange hover:underline">contact@stafaffaires.com</a></p>
                </div>
                
                <p className="mt-4">
                  En cas de difficulté, vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">www.cnil.fr</a>
                </p>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 px-2"
            >
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">9. Politique relative aux cookies</h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Le site utilise des cookies pour améliorer votre expérience de navigation. Un bandeau de consentement vous permet de gérer vos préférences lors de votre première visite.
                </p>
                <p>
                  Pour en savoir plus sur les cookies utilisés et gérer vos préférences, vous pouvez cliquer sur le lien « Gérer les cookies » en bas de page.
                </p>
              </div>
            </motion.div>

            {/* Modifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 px-2"
            >
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy">10. Modifications de la politique</h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  STAF AFFAIRES se réserve le droit de modifier la présente politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec indication de la date de mise à jour.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé des éventuelles modifications.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy rounded-2xl p-6 sm:p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-5 h-5 text-brand-orange" />
                <h2 className="text-lg sm:text-xl font-bold">Contact</h2>
              </div>
              <p className="text-white/70 mb-4 text-sm sm:text-base">
                Pour toute question concernant cette politique de confidentialité ou vos données personnelles :
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
