"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, Globe, AlertTriangle, Scale, UserCheck } from "lucide-react";

export default function CGU() {
  return (
    <main className="min-h-screen bg-white">
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
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-brand-orange" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Conditions Générales d'Utilisation
              </h1>
            </div>
            <p className="text-white/60 text-lg max-w-2xl">
              Conditions régissant l'utilisation du site www.stafaffaires.com
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
                Les présentes Conditions Générales d'Utilisation (ci-après "CGU") ont pour objet de définir les conditions d'accès et d'utilisation du site internet www.stafaffaires.com (ci-après le "Site") édité par STAF AFFAIRES.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                <strong>En accédant au Site, vous acceptez sans réserve les présentes CGU.</strong> Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
              </p>
            </motion.div>

            {/* Article 1 */}
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
                <h2 className="text-xl sm:text-2xl font-bold">1. Objet du Site</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Le Site a pour objet de présenter les activités et services de STAF AFFAIRES dans les domaines suivants :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Conseil stratégique et organisationnel</li>
                  <li>Coaching individuel et collectif pour dirigeants et managers</li>
                  <li>Formations professionnelles</li>
                  <li>Accompagnement à la performance commerciale</li>
                  <li>Mise en relation professionnelle</li>
                </ul>
                <p>
                  Le Site permet également aux utilisateurs de prendre contact avec STAF AFFAIRES, de demander des informations et de prendre rendez-vous.
                </p>
              </div>
            </motion.div>

            {/* Article 2 */}
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
                <h2 className="text-xl sm:text-2xl font-bold">2. Accès au Site</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  L'accès au Site est gratuit et ouvert à tout utilisateur disposant d'un accès à Internet. Tous les coûts afférents à l'accès au Site (matériel informatique, connexion Internet, etc.) sont à la charge de l'utilisateur.
                </p>
                <p>
                  STAF AFFAIRES met en œuvre tous les moyens raisonnables pour assurer un accès de qualité au Site, mais n'est tenue à aucune obligation d'y parvenir. STAF AFFAIRES ne peut être tenue responsable de tout dysfonctionnement du réseau ou des serveurs empêchant l'accès au Site.
                </p>
                <p>
                  STAF AFFAIRES se réserve le droit de suspendre, modifier ou interrompre l'accès au Site, à tout moment, sans préavis et sans que cela puisse donner lieu à une quelconque indemnisation.
                </p>
              </div>
            </motion.div>

            {/* Article 3 */}
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
                <h2 className="text-xl sm:text-2xl font-bold">3. Propriété intellectuelle</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  L'ensemble des éléments constituant le Site (textes, graphiques, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) ainsi que le Site lui-même, sont protégés par les lois en vigueur en France et les conventions internationales relatives à la propriété intellectuelle.
                </p>
                <p>
                  Ces éléments sont la propriété exclusive de STAF AFFAIRES ou de ses partenaires. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, sans l'autorisation écrite préalable de STAF AFFAIRES, est strictement interdite et constituerait une contrefaçon sanctionnée par le Code de la Propriété Intellectuelle.
                </p>
                <p>
                  Les programmes, processus et méthodes dont la <strong>méthode EMPATH®</strong> et la <strong>démarche AVR® – L'Art de la Vente Responsable</strong> ainsi que les <strong>programmes PPS</strong> sont les propriétés exclusives de STAF AFFAIRES et de son fondateur Saïd TAAROUST.
                </p>
              </div>
            </motion.div>

            {/* Article 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-brand-navy">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-brand-orange" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">4. Comportement de l'utilisateur</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>L'utilisateur s'engage à utiliser le Site de manière conforme à sa destination et aux présentes CGU. Il s'interdit notamment de :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Porter atteinte à l'ordre public ou aux bonnes mœurs</li>
                  <li>Diffuser des contenus illicites, diffamatoires, injurieux, obscènes ou contraires à la dignité humaine</li>
                  <li>Usurper l'identité d'un tiers ou transmettre de fausses informations</li>
                  <li>Tenter de nuire au bon fonctionnement du Site</li>
                  <li>Utiliser des robots, araignées ou autres dispositifs automatisés pour accéder au Site</li>
                  <li>Collecter des informations personnelles sur les autres utilisateurs</li>
                  <li>Utiliser le Site à des fins commerciales sans autorisation préalable</li>
                </ul>
                <p>
                  Tout manquement aux présentes obligations peut entraîner la suspension ou la suppression de l'accès au Site, sans préjudice de toute action judiciaire.
                </p>
              </div>
            </motion.div>

            {/* Article 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4">5. Formulaires et données personnelles</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Le Site peut proposer des formulaires de contact ou de demande d'information. En remplissant ces formulaires, l'utilisateur accepte que ses données soient collectées et traitées conformément à notre <Link href="/politique-de-confidentialite" className="text-brand-orange hover:underline">Politique de Confidentialité</Link>.
                </p>
                <p>
                  L'utilisateur s'engage à fournir des informations exactes et à jour. Toute information erronée ou incomplète pourra entraîner le refus de traitement de la demande.
                </p>
              </div>
            </motion.div>

            {/* Article 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4">6. Liens hypertextes</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Le Site peut contenir des liens hypertextes vers d'autres sites internet. STAF AFFAIRES n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur fonctionnement ou leur disponibilité.
                </p>
                <p>
                  La création de liens hypertextes vers le Site est soumise à l'autorisation préalable et écrite de STAF AFFAIRES. Cette autorisation peut être retirée à tout moment sans justification.
                </p>
              </div>
            </motion.div>

            {/* Article 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4">7. Cookies</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Le Site utilise des cookies pour améliorer l'expérience utilisateur, analyser le trafic et proposer des contenus personnalisés. L'utilisateur peut paramétrer son navigateur pour refuser les cookies ou être averti lorsqu'un cookie est déposé.
                </p>
                <p>
                  Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre <Link href="/politique-de-confidentialite" className="text-brand-orange hover:underline">Politique de Confidentialité</Link> et notre bandeau de gestion des cookies accessible sur le Site.
                </p>
              </div>
            </motion.div>

            {/* Article 8 */}
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
                <h2 className="text-xl sm:text-2xl font-bold">8. Limitation de responsabilité</h2>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Les informations contenues sur le Site sont fournies à titre indicatif et sont susceptibles d'être modifiées à tout moment. STAF AFFAIRES ne garantit pas l'exactitude, la complétude ou l'actualité des informations diffusées sur le Site.
                </p>
                <p>
                  STAF AFFAIRES ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation du Site ou de l'impossibilité d'y accéder, notamment en cas de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Interruption ou dysfonctionnement du Site</li>
                  <li>Présence de virus informatiques</li>
                  <li>Perte de données ou de fichiers</li>
                  <li>Utilisation frauduleuse du Site par un tiers</li>
                </ul>
              </div>
            </motion.div>

            {/* Article 9 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4">9. Modification des CGU</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  STAF AFFAIRES se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site. L'utilisateur est invité à consulter régulièrement les CGU.
                </p>
                <p>
                  La poursuite de l'utilisation du Site après modification des CGU vaut acceptation des nouvelles conditions.
                </p>
              </div>
            </motion.div>

            {/* Article 10 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4">10. Droit applicable et juridiction</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Les présentes CGU sont régies par le <strong>droit français</strong>.
                </p>
                <p>
                  En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux compétents de <strong>Mont de Marsan</strong> seront seuls compétents.
                </p>
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
                Pour toute question relative aux présentes CGU :
              </p>
              <div className="space-y-2 text-white/90">
                <p><strong>STAF AFFAIRES</strong></p>
                <p>Email : contact@stafaffaires.com</p>
                <p>Site web : www.stafaffaires.com</p>
              </div>
            </motion.div>

            {/* Date */}
            <p className="text-center text-slate-500 text-sm">
              Dernière mise à jour : 1er mai 2025
            </p>

          </div>
        </div>
      </section>
    </main>
  );
}
