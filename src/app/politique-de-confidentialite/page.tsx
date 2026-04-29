"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Shield, Database, Eye, Lock, UserCheck, Mail, Clock, FileText } from "lucide-react";

export default function PolitiqueConfidentialite() {
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
              Politique de Confidentialité
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Protection de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) - Règlement UE 2016/679.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="space-y-12">
            
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 sm:p-8"
            >
              <p className="text-slate-700 leading-relaxed">
                STAF AFFAIRES, représentée par Saïd TAAROUST, s'engage à protéger la vie privée des utilisateurs de son site internet et de ses services. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos données personnelles.
              </p>
            </motion.div>

            {/* Responsable du traitement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">1. Responsable du traitement</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-3">
                <p><strong>Responsable :</strong> STAF AFFAIRES - SASU</p>
                <p><strong>Représentant :</strong> Saïd TAAROUST, Président</p>
                <p><strong>SIREN :</strong> 944 424 670</p>
                <p><strong>Email DPO :</strong> contact@stafaffaires.com</p>
                <p className="text-slate-600 text-sm mt-4">
                  Pour toute question relative à la protection de vos données, vous pouvez contacter notre responsable du traitement à l'adresse ci-dessus.
                </p>
              </div>
            </motion.div>

            {/* Données collectées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">2. Données personnelles collectées</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-brand-navy mb-3">Données d'identification :</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Nom et prénom</li>
                    <li>Adresse email professionnelle</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom de l'entreprise et fonction</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy mb-3">Données de navigation :</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages consultées et durée de visite</li>
                    <li>Données de cookies (voir notre politique cookies)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy mb-3">Données contractuelles :</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-700">
                    <li>Informations relatives aux prestations souscrites</li>
                    <li>Historique des échanges et communications</li>
                    <li>Données de facturation</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Finalités */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">3. Finalités du traitement</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
                <p className="text-slate-700 mb-4">Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <span><strong>Exécution contractuelle :</strong> Gestion des prestations de coaching, formation et accompagnement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <span><strong>Relation client :</strong> Réponse à vos demandes de contact et de renseignements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <span><strong>Communication :</strong> Envoi d'informations sur nos services (avec votre consentement)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <span><strong>Amélioration :</strong> Analyse statistique pour améliorer notre site et nos services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <span><strong>Obligations légales :</strong> Respect des obligations comptables et fiscales</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Base légale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">4. Base légale du traitement</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700">
                <p>Le traitement de vos données repose sur les bases légales suivantes :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>L'exécution d'un contrat</strong> : pour la fourniture de nos prestations</li>
                  <li><strong>Votre consentement</strong> : pour l'envoi de communications commerciales</li>
                  <li><strong>L'intérêt légitime</strong> : pour l'amélioration de nos services et la sécurité du site</li>
                  <li><strong>Les obligations légales</strong> : pour le respect des réglementations applicables</li>
                </ul>
              </div>
            </motion.div>

            {/* Durée de conservation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">5. Durée de conservation</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 font-semibold text-brand-navy">Type de données</th>
                      <th className="text-left py-3 font-semibold text-brand-navy">Durée de conservation</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100">
                      <td className="py-3">Données de contact (prospects)</td>
                      <td className="py-3">3 ans à compter du dernier contact</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3">Données clients</td>
                      <td className="py-3">5 ans après la fin de la relation contractuelle</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3">Données de facturation</td>
                      <td className="py-3">10 ans (obligation légale comptable)</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3">Cookies analytiques</td>
                      <td className="py-3">13 mois maximum</td>
                    </tr>
                    <tr>
                      <td className="py-3">Données de navigation</td>
                      <td className="py-3">12 mois</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Destinataires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">6. Destinataires des données</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700">
                <p>Vos données personnelles peuvent être transmises aux destinataires suivants :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personnel habilité de STAF AFFAIRES</li>
                  <li>Sous-traitants techniques (hébergement, emailing) dans le cadre de contrats conformes au RGPD</li>
                  <li>Organismes de formation partenaires (le cas échéant, avec votre accord)</li>
                  <li>Autorités administratives ou judiciaires (sur requête légale)</li>
                </ul>
                <p className="text-sm text-slate-600 mt-4">
                  <strong>Important :</strong> Vos données ne sont jamais vendues à des tiers. Tout transfert hors UE fait l'objet de garanties appropriées (clauses contractuelles types, décision d'adéquation).
                </p>
              </div>
            </motion.div>

            {/* Sécurité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">7. Sécurité des données</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700">
                <p>STAF AFFAIRES met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Chiffrement des données sensibles (SSL/TLS)</li>
                  <li>Accès restreint aux données par authentification</li>
                  <li>Hébergement sécurisé chez des prestataires certifiés</li>
                  <li>Sauvegardes régulières et procédures de récupération</li>
                  <li>Sensibilisation du personnel aux bonnes pratiques</li>
                </ul>
              </div>
            </motion.div>

            {/* Vos droits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">8. Vos droits</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4">
                <p className="text-slate-700">Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-brand-navy mb-2">Droit d'accès</h4>
                    <p className="text-sm text-slate-600">Obtenir confirmation du traitement et accéder à vos données</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-brand-navy mb-2">Droit de rectification</h4>
                    <p className="text-sm text-slate-600">Corriger des données inexactes ou incomplètes</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-brand-navy mb-2">Droit à l'effacement</h4>
                    <p className="text-sm text-slate-600">Demander la suppression de vos données ("droit à l'oubli")</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-brand-navy mb-2">Droit à la limitation</h4>
                    <p className="text-sm text-slate-600">Limiter le traitement dans certaines circonstances</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-brand-navy mb-2">Droit à la portabilité</h4>
                    <p className="text-sm text-slate-600">Recevoir vos données dans un format structuré</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-brand-navy mb-2">Droit d'opposition</h4>
                    <p className="text-sm text-slate-600">Vous opposer au traitement pour motifs légitimes</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  Pour exercer vos droits, contactez-nous à : <strong>contact@stafaffaires.com</strong>
                </p>
              </div>
            </motion.div>

            {/* Réclamation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">9. Réclamation</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 text-slate-700">
                <p>
                  Si vous estimez que le traitement de vos données n'est pas conforme à la réglementation, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
                </p>
                <div className="mt-4 p-4 bg-white rounded-xl border border-slate-200">
                  <p><strong>CNIL</strong></p>
                  <p>3 Place de Fontenoy - TSA 80715</p>
                  <p>75334 Paris Cedex 07</p>
                  <p className="mt-2">
                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">www.cnil.fr</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-brand-orange" />
                <h2 className="text-xl sm:text-2xl font-bold">Contact</h2>
              </div>
              <p className="text-white/80 mb-4">
                Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits :
              </p>
              <div className="space-y-2">
                <p><strong>Email :</strong> contact@stafaffaires.com</p>
                <p><strong>Adresse :</strong> STAF AFFAIRES, France</p>
              </div>
            </motion.div>

            {/* Mise à jour */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <p className="text-slate-500 text-sm">
                Cette politique de confidentialité peut être mise à jour. La date de dernière modification sera toujours indiquée.
              </p>
              <p className="text-slate-600 font-medium">
                Dernière mise à jour : 1er mai 2025
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
