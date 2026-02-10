"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, ScrollText } from "lucide-react";

export default function CGV() {
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
                <ScrollText className="w-6 h-6 text-brand-orange" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Conditions Générales de Vente et d'Utilisation
              </h1>
            </div>
            <p className="text-white/60 text-lg max-w-2xl">
              Version 2025 – Applicables à compter du 01 mai 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            
            {/* Article 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">1. Objet</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Les présentes CGVU, conformément à l'article L 441-6 du Code de Commerce, ont pour objet de fixer les conditions dans lesquelles STAF Affaires fournit à ses clients des prestations d'accompagnement et de services.
                </p>
                <p>
                  Les présentes Conditions Générales de Vente (CGVU) s'appliquent à toutes les prestations fournies par la société STAF Affaires, SASU immatriculée au RCS de Mont de Marsan sous le N° Siren 944424670.
                </p>
                <p>
                  STAF Affaires intervient dans les domaines du conseil, du coaching, de la formation, de l'accompagnement organisationnel, de la mise à disposition de ressources et de la mise en relation professionnelle, pour le compte des organisations ou des particuliers.
                </p>
                <p>
                  Les prestations de services et formations s'adressent à des entrepreneurs, clients professionnels, personnes physiques ou morales de droit privé ou de droit public, prestataires de service, entrepreneurs individuels, collectivités, organismes professionnels, entreprises... en France et à l'étranger.
                </p>
                <p>
                  Le client déclare être un professionnel en capacité de représenter sa propre entreprise ou avoir les mandats nécessaires pour représenter l'entreprise pour laquelle il s'engage. Il déclare être majeur et capable de contracter en vertu de la loi. Le Client se porte fort du respect des CGVU par l'ensemble de ses salariés, préposés, agents et prestataires.
                </p>
                <p>
                  Le client reconnaît expressément que le présent contrat constitue un contrat d'adhésion au sens de l'article 1110 alinéa 2 du Code Civil, comportant un ensemble de clauses non négociables, déterminées à l'avance par STAF Affaires.
                </p>
                <p>
                  Les programmes, processus et méthodes dont la <strong>méthode EMPATH®</strong> et la <strong>démarche AVR® – L'Art de la Vente Responsable</strong> ou encore les <strong>programmes PPS</strong>... utilisés dans le cadre de sa marque et de ses prestations sont les propriétés exclusives de STAF Affaires et de son fondateur.
                </p>
                <p>
                  La participation à un programme, une formation ou l'utilisation d'un service proposé par STAF Affaires vaut acceptation par le client des présentes Conditions Générales de Vente et d'Utilisation.
                </p>
              </div>
            </motion.div>

            {/* Article 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">2. Champ d'application et conditions particulières</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>Les présentes CGV s'appliquent à l'ensemble des prestations de services de STAF Affaires :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Conseil stratégique et organisationnel</li>
                  <li>Coaching individuel ou collectif</li>
                  <li>Formations (présentielles, à distance ou mixtes)</li>
                  <li>Actions de FormAction ou d'AFEST</li>
                  <li>Mise à disposition de ressources humaines externalisées</li>
                  <li>Mise en relation professionnelle</li>
                  <li>Vente de contenus pédagogiques ou d'outils</li>
                </ul>
                <p className="font-semibold mt-4">Toute commande implique l'adhésion pleine et entière aux présentes CGV.</p>
              </div>
            </motion.div>

            {/* Article 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">3. Commande et contractualisation</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Les présentes CGVU peuvent être complétées par les Conditions Particulières prévues dans les documents transmis par STAF Affaires aux Clients à titre d'offre commerciale, contrat, convention ou conditions Particulières.
                </p>
                <p>
                  Les présentes CGVU ainsi que les Conditions Particulières expriment l'intégralité de l'accord entre STAF Affaires et le Client. Les parties ne pourront se prévaloir d'aucun autre document, contrat ou échange antérieurs à la signature de la convention.
                </p>
                <p>
                  En cas de contradiction entre les Conditions Particulières et les présentes CGVU, les dispositions des Conditions Particulières priment si elles ont été préalablement retournées signées par le Client dans les quatorze (14) jours calendaires suivant son accès au Service de STAF Affaires. En cas de contradiction avec tout document émis par le Client, notamment ses conditions générales d'achat, les présentes CGVU et les Conditions Particulières priment.
                </p>
                <p>
                  Si une clause des CGVU est jugée non valide, nulle ou inapplicable, pour quelque raison que ce soit, cette disposition sera considérée comme distincte et n'affectera pas la validité ni l'applicabilité des autres clauses. Les autres dispositions demeureront pleinement en vigueur et seront interprétées de manière à respecter l'intention initiale des parties.
                </p>
                <p>
                  STAF Affaires se réserve le droit de modifier les présentes Conditions Générales de Vente et d'Utilisation (CGVU) à tout moment. Les CGVU en vigueur sont celles accessibles en ligne sur le site internet de STAF Affaires au moment de la commande. En accédant aux services proposés par STAF Affaires, le Client déclare en avoir pris connaissance et les accepter sans réserve et dans leur intégralité.
                </p>
                <p>
                  Le Client s'engage à conserver une copie des CGVU au moment de son inscription, conformément aux recommandations de la convention.
                </p>
                <p>
                  Le Client reconnaît avoir sollicité et reçu toutes les informations nécessaires et/ou complémentaires pour passer sa commande en toute connaissance de cause. Le Client reconnaît également que, préalablement à toute commande, il a bénéficié des informations et conseils suffisants de la part de STAF Affaires, lui permettant de s'assurer de l'adéquation de la formule sélectionnée à ses besoins propres.
                </p>
                <p>
                  Le Client reconnaît expressément que STAF Affaires a pleinement rempli envers lui son devoir général d'information en application des articles 1112 et suivants du Code Civil et l'a informé de ses obligations de confidentialité en application de l'article 1112-2 dudit Code.
                </p>
              </div>
            </motion.div>

            {/* Article 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">4. Modalités financières</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Les tarifs sont exprimés en euros hors taxes. Ils sont fixés de manière forfaitaire (par programme, mission, journée, séance...) et/ou en fonction des résultats obtenus (si expressément prévu au contrat).
                </p>
                <p>
                  STAF Affaires se réserve le droit de modifier ses prix à tout moment avant la signature de la convention de formation par le Client, sans préavis ou autre formalité. Le prix applicable est celui qui est indiqué dans la convention de formation.
                </p>
                <p>
                  Sauf exception prévue dans la convention, le prix des prestations de service fournies par STAF Affaires ne comprend pas les frais directs engagés par le Client, notamment : les frais de transport ; les frais d'hébergement et de repas ; les assurances annulation, rapatriement, accident ; les assurances relatives aux pertes, vols, ou destruction de biens et colis de toute nature ; les frais d'acheminement de la documentation ; les frais d'expédition des échantillons ; les dépenses personnelles...
                </p>
                <p>
                  Les tarifs de prolongation pourront varier à tout moment. Une communication claire sera alors faite aux clients qui pourront formuler une demande de prolongation dans le respect des dispositions de l'article "Durée et Résiliation". L'information sur l'évolution tarifaire devra être faite dans le mois précédant son application pour permettre aux clients engagés qui souhaiteraient résilier leur prolongation pour ce motif de pouvoir le faire.
                </p>
                <p>
                  Les paiements doivent être effectués en € et en fonction de l'accord explicitement conclu. <strong>Un acompte minimal de 30% est exigé à la signature.</strong> Le solde est payable soit avant le démarrage, soit conformément à l'échéancier conclu ou à 30 jours fin de mois, sauf mention contraire.
                </p>
                <p>
                  Le paiement est réputé valide que lorsque les centres de paiement bancaires concernés ont donné leur accord et confirmé la réception des fonds. Pour les paiements en échelonné, le Client donne l'autorisation à STAF Affaires d'effectuer des opérations de débit de façon automatisée dans la limite du Prix prévu.
                </p>
                <p>
                  Le Client autorise également STAF Affaires à transmettre de façon sécurisée les informations et instructions de paiement nécessaires pour effectuer ces opérations via des plateformes de paiement tierces.
                </p>
                <p>
                  Les pénalités de retard de paiement sont calculées à partir des frais réels engagés (relance, temps de traitement) et d'une indemnisation forfaitaire de recouvrement de 40 € (art. L441-3 - art. L441-6 et art. L441-10 C. com.).
                </p>
              </div>
            </motion.div>

            {/* Article 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">5. Annulation et report</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p><strong>Toute annulation doit être formulée par écrit.</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Annulation à plus de 15 jours :</strong> sans frais.</li>
                  <li><strong>Report possible jusqu'à 48h avant la prestation :</strong> sans frais sauf si ces derniers ont déjà été engagés sans possibilité de report ou de remboursement (déplacements, hébergements...).</li>
                  <li><strong>Annulation à moins de 48h :</strong> facturation de 50% du montant prévu.</li>
                </ul>
              </div>
            </motion.div>

            {/* Article 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">6. Engagements et responsabilité de STAF Affaires</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Les prestations de services proposées par STAF Affaires mettent à sa charge une <strong>obligation de moyens</strong>. STAF Affaires s'engage à fournir les moyens humains adéquats et à apporter les soins nécessaires à l'exécution de sa prestation.
                </p>
                <p>
                  Les prestations sont réalisées sur la base des informations et documents que le Client transmet à STAF Affaires par écrit, par mail ou lors des entretiens (y compris en visioconférence) et échanges. Ces informations sont considérées comme exactes et sincères.
                </p>
                <p>
                  Les recommandations formulées par STAF Affaires dans le cadre ou à l'issue de la prestation correspondent à la situation du Client telle qu'elle a été décrite par le Client au moment des entretiens et échanges. STAF Affaires décline toute responsabilité en cas d'omission, d'insuffisance, d'inexactitude ou d'erreur concernant les informations ou les documents qui lui sont transmis par le Client.
                </p>
                <p>
                  Dans les séances collectives (présentiel ou distanciel), l'intérêt général du groupe prime sur l'intérêt particulier d'un participant. Dans le but d'animer la séance de groupe pour qu'elle bénéficie au mieux à tous ceux qui la visionnent, le Coach/Mentor est libre de faire intervenir les clients de son choix, d'écourter leur intervention si nécessaire et de clôturer la séance à tout moment.
                </p>
                <p>
                  Si le participant n'est pas appelé pour être coaché ou mentoré en direct, cela ne remet pas en cause le respect des obligations de STAF Affaires, ni la prestation, dans la mesure où le participant bénéficiera tout autant des éclairages apportés par le Mentor à un autre Membre et qu'il pourra également poser sa question en asynchrone.
                </p>
                <p>
                  Le contenu et le format des Programmes peuvent évoluer au fil du temps, et STAF Affaires se réserve le droit de les modifier raisonnablement à tout moment afin de les adapter aux besoins pédagogiques.
                </p>
                <p>
                  Le client est informé et accepte que la composition de l'équipe de Mentors puisse être amenée à évoluer en fonction des disponibilités et des besoins du programme. STAF Affaires se réserve le droit de remplacer ou de changer les Mentors à tout moment, sans préavis, tout en veillant à maintenir la qualité et la continuité des services proposés. Ces modifications n'affecteront pas les obligations de STAF Affaires envers le Client, et ne donneront lieu à aucune indemnité ni à un remboursement.
                </p>
                <p>
                  STAF Affaires s'engage à fournir les prestations proposées dans le Programme conformément aux termes des présentes CGVU. Toutefois, des périodes de fermeture pour tout motif légitime peuvent survenir. Ces périodes de fermeture sont indiquées dans le planning accessible aux Clients et sont prises en compte dans le tarif proposé. Pendant ces périodes de fermeture, des moyens sont mis en place par STAF Affaires afin que le Client et participant puisse avancer vers son objectif (FOAD, Exercices, lectures...).
                </p>
                <p>
                  Le Client reconnaît et accepte que ces périodes de fermeture, intégrées dans le tarif, ne pourront donner lieu à aucune demande de remboursement, d'indemnisation, ou d'extension de la durée du Programme.
                </p>
                <p>
                  STAF Affaires est soumis à une obligation de moyens envers ses Clients, dans la fourniture de contenu, l'animation, l'accompagnement et le fonctionnement de son site si la prestation est en ligne. Du fait de l'obligation de moyens incombant à STAF Affaires dans le cadre des prestations objet des présentes conditions générales de vente, cette dernière ne saurait être tenue pour responsable de la mauvaise utilisation des informations par le Client, du fait (action, omission, manquement, etc.) d'un tiers, du manque d'adéquation des prestations aux besoins du Client, du non-respect de la législation, du nombre et de la qualité des rendez-vous obtenus dans le cadre d'une prestation, ainsi que, plus globalement, du résultat des prestations.
                </p>
                <p>
                  Compte tenu de l'obligation de moyens à la charge de STAF Affaires, sa responsabilité ne pourra être engagée que si la preuve de sa faute est rapportée. Elle ne peut être engagée pour des éléments contractuels ou extra-contractuels ne relevant pas de la stricte exécution de ses obligations.
                </p>
                <p>
                  STAF Affaires ne peut en aucun cas voir sa responsabilité engagée lorsque le retard, la mauvaise exécution ou l'inexécution du Contrat est imputable au Client ou qu'elle est liée à un cas de Force Majeure.
                </p>
                <p>
                  STAF Affaires n'est pas responsable des problèmes techniques, d'encombrement du réseau Internet ou de la défaillance de tout autre système de télétransmission, qui pourraient empêcher la bonne communication entre coach et Clients/Participants.
                </p>
                <p>
                  STAF Affaires ne pourra, en aucun cas, voir sa responsabilité engagée en cas de dommage résultant d'un défaut de sécurité, d'un manquement déontologique, d'une faute ou d'une négligence de la part du Client ou d'un autre Membre.
                </p>
                <p>
                  Les informations, communications, atelier et tout autre prestation apparentée à du coaching ou dénommées « Mindset » ont pour objectif de motiver et encourager l'engagement des participants dans la réussite de leurs objectifs. STAF Affaires ainsi que ses Mentors ne sont pas des professionnels de santé. Les programmes proposés ne sont pas destinés à remplacer un suivi médical ou un traitement médical approprié. Ni STAF Affaires ni ses Mentors ne sont habilités à diagnostiquer des maladies ou à prescrire des soins.
                </p>
                <p>
                  Il est recommandé à tout Client ayant des préoccupations médicales de consulter un professionnel de santé qualifié avant de participer aux Programmes. La responsabilité de l'utilisation des informations et des conseils proposés incombe entièrement au Client/Participant.
                </p>
                <p>
                  Les informations de nature réglementaire fournies au Client/Participant ont un caractère purement indicatif et n'ont pas valeur de conseil juridique. Ces informations n'ont pas vocation à fournir une réponse exhaustive et ne peuvent pas remplacer une consultation approfondie. En conséquence, elles ne peuvent engager la responsabilité de leur auteur ou de STAF Affaires en raison de leur éventuelle imprécision ou inexactitude.
                </p>
                <p>
                  STAF Affaires ne répond, lorsque sa responsabilité est engagée, que des seuls dommages matériels directs, personnels et certains. Le Client ne pourra en aucun cas prétendre à l'indemnisation de dommages indirects et immatériels, tels que, notamment, le préjudice d'exploitation, la perte de bénéfice, la perte de données, le préjudice commercial ou la perte de chance.
                </p>
                <p>
                  Dans le cas où la responsabilité de STAF Affaires serait engagée, l'indemnité à laquelle le Client pourrait prétendre est plafonnée au prix de la prestation. Il est expressément convenu que le Client renonce à tout recours qu'il serait en droit d'engager tant contre STAF Affaires que contre ses assureurs, au titre des dommages autres que les dommages matériels directs, personnels et certains, d'un montant au maximum égal au prix de la prestation. En outre, le Client s'engage à obtenir pareille renonciation de la part de ses assureurs.
                </p>
                <p>
                  Les parties renoncent expressément à mettre en œuvre les dispositions de l'article 1223 du Code Civil relatives à la réduction de prix pour exécution imparfaite de la prestation régie par les présentes Conditions Générales de Vente et d'Utilisation.
                </p>
              </div>
            </motion.div>

            {/* Article 7 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">7. Engagements et responsabilité du Client</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Le Client ne devra en aucun cas faire une utilisation non autorisée du contenu appartenant à STAF Affaires, c'est-à-dire contraire à la loi et à la réglementation applicable ou porter atteinte aux tiers et notamment aux autres participants. Il devra respecter les présentes CGVU.
                </p>
                <p>
                  Par ailleurs, le Client s'engage à agir de bonne foi pendant toute la durée de son accès au Programme. Il s'engage notamment à adopter une attitude courtoise et respectueuse envers les Mentors, coachs et les autres Membres de STAF Affaires.
                </p>
                <p>
                  Le Client s'engage également à ne pas dénigrer ou nuire aux autres Participants, aux Mentors ou à STAF Affaires. Sans que cette liste ne soit exhaustive, le Client déclare être informé qu'il est interdit et s'engage à ne pas faire d'intervention ou diffuser de messages :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-sm">
                  <li>À caractère diffamatoire, obscène, abusif, menaçant, calomnieux, contrevenant aux droits de propriété intellectuelle, ou préjudiciable à des tiers ou répréhensible</li>
                  <li>Insultant, déplacé, injurieux, haineux, raciste, xénophobe, pédophile, homophobe, révisionniste ou portant atteinte à l'honneur ou à la réputation d'autrui</li>
                  <li>Incitant à la discrimination, à la haine d'une personne ou d'un groupe de personnes en raison de leur origine ou de leur appartenance</li>
                  <li>Permettant de se procurer directement ou indirectement des logiciels piratés ou tout outil permettant de porter atteinte aux droits d'autrui</li>
                  <li>Visant à encourager, aider, colporter ou propager de quelque manière que ce soit des rumeurs et/ou violant le caractère privé des correspondances</li>
                </ul>
                <p className="mt-4">
                  Le Mentor/Coach sera en droit de supprimer ou modifier sans préavis tout message qui violerait les présentes conditions générales d'utilisation et plus généralement les lois et règlements en vigueur.
                </p>
                <p>Par ailleurs, le Client/Participant s'engage à :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fournir les informations et les moyens (matériels et humains) nécessaires au bon déroulement des prestations</li>
                  <li>Déclarer ses résultats de façon transparente lorsque les prestations sont conditionnées à une évaluation de performance</li>
                  <li>Respecter les clauses de confidentialité ou de non-divulgation prévues au contrat</li>
                  <li>Participer activement à la co-construction et au déploiement des plans d'actions décidés</li>
                </ul>
              </div>
            </motion.div>

            {/* Article 8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">8. Sous-traitance et externalisation</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  STAF Affaires peut intervenir en qualité de sous-traitant d'autres cabinets de conseil ou de formation, selon les accords contractuels passés avec les donneurs d'ordre. Dans ce cadre, STAF Affaires s'engage à :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respecter les exigences de confidentialité et de neutralité</li>
                  <li>Fournir les prestations au nom du donneur d'ordre si prévu ainsi</li>
                  <li>Ne pas démarcher directement le client final sans autorisation expresse</li>
                </ul>
                <p>
                  De la même façon, STAF Affaires peut être amenée à sous-traiter certaines parties de mission à des experts partenaires, dans le cadre d'un contrat global avec le client, tout en restant seul responsable de la bonne exécution des prestations. Les sous-traitants s'engagent réciproquement au respect des règles précédentes.
                </p>
                <p>
                  Dans le cadre d'une externalisation, STAF Affaires agit au nom et pour le compte du client dans la limite du mandat défini contractuellement. Le client s'engage à transmettre les accès, données et documents nécessaires à la réalisation de la mission. Toute obligation résultant d'une telle intervention reste soumise au cadre contractuel.
                </p>
              </div>
            </motion.div>

            {/* Article 9 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">9. Mise en relation professionnelle</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  STAF Affaires peut agir comme prescripteur ou intermédiaire entre un prestataire et un client. Dans ce cadre, sauf convention tripartite spécifique :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>STAF Affaires n'est pas responsable de la qualité ou de l'exécution de la prestation par le tiers</li>
                  <li>Le client conserve l'entière liberté de contracter ou non avec le prestataire recommandé</li>
                  <li>Aucune commission ou rétribution ne pourra être exigée sans accord préalable</li>
                </ul>
              </div>
            </motion.div>

            {/* Article 10 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">10. Protection des contenus et propriété intellectuelle</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Tous les droits qui ne sont pas expressément accordés au Client par les présentes CGVU sont réservés et restent à STAF Affaires ou à ses éventuels concédants. L'intégralité des contenus, éléments graphiques, photos, images, supports, enregistrements et informations mis à disposition sur le Site ou fournis par STAF Affaires dans le cadre de ses prestations appartiennent soit de façon exclusive à STAF Affaires, soit à des tiers autorisant STAF Affaires à les exploiter.
                </p>
                
                <h3 className="font-semibold text-brand-navy mt-6 mb-3">Utilisation Autorisée</h3>
                <p>
                  Le Client/Participant bénéficie, sous réserve du respect des CGVU, d'un droit d'usage limité, non exclusif, non transférable, non cessible, pour accéder personnellement au contenu et aux Programmes via une autorisation, ainsi que pour télécharger les documents dans un format non modifiable. Ce droit est accordé au Membre pendant toute la durée de l'accompagnement et sur l'ensemble des territoires où STAF Affaires commercialise ses prestations.
                </p>

                <h3 className="font-semibold text-brand-navy mt-6 mb-3">Restrictions d'Utilisation</h3>
                <p>Le Client/Participant/Membre/Stagiaire/coaché s'engage à ne pas :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Concéder, vendre, céder, louer, exporter, importer, distribuer ou transférer des droits sur le contenu à un tiers</li>
                  <li>Modifier, copier, décompiler, effectuer l'ingénierie inverse, désassembler tout ou partie des éléments composant le contenu des prestations/programmes</li>
                  <li>Supprimer, masquer ou modifier les mentions de droit des marques ou d'autres mentions de propriété incluses sur le Site</li>
                </ul>
                <p className="mt-4 font-semibold">Toute violation des droits de STAF Affaires pourra entraîner des poursuites judiciaires.</p>

                <h3 className="font-semibold text-brand-navy mt-6 mb-3">Informations Confidentielles</h3>
                <p>
                  Les informations et documents communiqués par STAF Affaires dans le cadre du Programme sont confidentiels, y compris les supports écrits, audio et vidéo, les messages publiés par les autres Clients/Participants/Membres sur le Site et les enregistrements des appels de groupe.
                </p>

                <h3 className="font-semibold text-brand-navy mt-6 mb-3">Propriété Intellectuelle des Livrables</h3>
                <p>
                  Les biens et prestations livrables sont protégés par la législation française et internationale sur la propriété intellectuelle. La vente d'un service ou d'un bien livrable n'emporte aucune cession de droits de propriété intellectuelle appartenant à STAF Affaires au bénéfice du Client.
                </p>
                <p>
                  Ces obligations resteront en vigueur <strong>vingt (20) ans</strong> après la fin de la prestation, et ce, pour quelque motif que ce soit.
                </p>
              </div>
            </motion.div>

            {/* Article 11 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">11. Traitement des données personnelles</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  STAF Affaires collecte et traite des données personnelles dans le cadre de ses prestations, dans le strict respect du RGPD (Règlement UE 2016/679).
                </p>
                <p>
                  Les données sont conservées pour la durée nécessaire aux finalités du traitement, et ne sont pas transmises à des tiers sans consentement.
                </p>
                <p>Le Client/Participant/Stagiaire concède, à titre non exclusif, les droits suivants sur son Contenu :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Le droit de reproduire, modifier, adapter, représenter et traduire tout ou partie du Contenu du Client/Membre sur tout support d'enregistrement</li>
                  <li>Le droit de concéder, à titre onéreux ou gratuit, des sous-licences des droits concédés au titre de la licence ci-dessus mentionnée à tout tiers</li>
                </ul>

                <h3 className="font-semibold text-brand-navy mt-6 mb-3">Durée et Portée</h3>
                <p>
                  Ces droits sont concédés à STAF à toutes fins commerciales et non commerciales, pour toute la durée légale des droits d'auteur applicable à ce jour et dans l'avenir et pour le monde entier. STAF Affaires s'interdit d'ajouter l'information sur le nom de famille du Client/Participant ou tout autre information permettant de l'identifier sans son autorisation écrite.
                </p>

                <h3 className="font-semibold text-brand-navy mt-6 mb-3">Captation d'Image et de Voix</h3>
                <p>
                  Dans le cadre de la participation aux sessions collectives ou individuelles, le Client/Participant autorise STAF Affaires à capter son image et/ou sa voix sous forme de photographies, vidéos et/ou enregistrements audio pour des fins pédagogiques.
                </p>
              </div>
            </motion.div>

            {/* Article 12 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">12. Confidentialité et secret des affaires</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Chaque partie s'engage à la plus stricte confidentialité sur les informations à caractère professionnel, commercial, technique ou stratégique auxquelles elle aurait accès avant, pendant et après l'exécution du contrat.
                </p>
                <p>
                  Chaque partie s'engage donc au secret professionnel dès les premiers échanges d'informations et ce, même lorsqu'ils ne débouchent pas sur une collaboration contractuelle.
                </p>
                <p>
                  Les données personnelles du Client sont traitées conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016.
                </p>
                <p>
                  Cependant, STAF Affaires ne peut pas garantir la sécurité des informations transmises via Internet, par courrier électronique, par téléphone ou par message texte. Toutes les communications avec STAF Affaires que le Client initie sont effectuées sous sa propre responsabilité.
                </p>
              </div>
            </motion.div>

            {/* Article 13 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">13. Droit à l'image, à la voix et à l'exploitation de contenus enregistrés</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Les interlocuteurs acceptent que certaines séances, visioconférences, ou entretiens puissent être enregistrés (image, voix, vidéos, interactions) à des fins de suivi de la prestation, de retranscription, ou d'analyse par des outils d'intelligence artificielle pour amélioration du service rendu.
                </p>
                <p>
                  Ces enregistrements sont strictement confidentiels, non diffusés, et conservés uniquement pour la durée nécessaire à la prestation. Le client peut à tout moment s'opposer ou demander à ne pas apparaître ou à supprimer tout support où figure son image ou sa voix, sauf si l'exploitation est liée au suivi opérationnel contractuel.
                </p>
              </div>
            </motion.div>

            {/* Article 14 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-brand-navy border-l-4 border-brand-orange pl-4 mb-4">14. Droit applicable et litiges</h2>
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Les CGVU sont régies par le <strong>droit français</strong>. Tout différend relève de la compétence exclusive des tribunaux de Mont de Marsan.
                </p>
                <p>
                  Sauf lorsqu'un formalisme spécifique est expressément imposé, le Client reconnaît la validité et la valeur probante des courriers électroniques (courriels) échangés avec STAF Affaires dans le cadre de l'exécution du Contrat et leur attribue la même valeur qu'un courrier postal.
                </p>
                <p>
                  Le Client et STAF Affaires reconnaissent agir chacun pour leur propre compte. Le Contrat formé entre les parties sur la base de ces CGVU ne constitue ni une association, ni une franchise, ni un mandat donné par le Client à STAF Affaires.
                </p>

                <h3 className="font-semibold text-brand-navy mt-6 mb-3">Cession</h3>
                <p>
                  Le contrat est conclu en considération de la personne du Client et/ou du Participant, qui ne pourra céder son accès aux Programmes à un tiers.
                </p>
                <p>
                  Les commandes passées en vertu des présentes CGVU ne pourront faire l'objet d'une cession totale ou partielle, de la part du Client, à titre onéreux ou gracieux, sans l'accord écrit et préalable de STAF Affaires, même en cas de pluralité de défendeurs ou d'appel en garantie.
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
              <div className="space-y-2 text-white/90">
                <p><strong>STAF Affaires</strong></p>
                <p>Email : contact@stafaffaires.com</p>
                <p>Email : saidtaaroust@gmail.com</p>
                <p>Site web : www.stafaffaires.com</p>
              </div>
              <p className="text-white/60 text-sm mt-6 italic">
                Document rédigé par juriste spécialisé – conforme aux obligations du Code de commerce et aux pratiques en conseil/formation/prestation/accompagnement/coaching B2B et B2C.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
