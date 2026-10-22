import { Experience, Education, SkillCategory, Language } from '../types/portfolio';

export const personalInfo = {
  name: "Arif Muhammad Ali",
  title: "Commercial & Négociateur B2B / B2C",
  subtitle: "Étudiant en Bachelor Vente & Négociation commerciale · Euridis Business School",
  email: "m.alimuhammadpro@gmail.com",
  phone: "06 63 00 94 60",
  phoneFormatted: "+33 6 63 00 94 60",
  location: "Val-d’Oise (95), Île-de-France",
  avatarUrl: "/profile_photo.png",
  cloudinaryFallbackUrl: "https://res.cloudinary.com/kxma4uib/image/upload/v1792674762/photo_profil_ronde_296.png",
  cvPdfUrl: "/assets/aistudio/Portfolio_word_afb72b6b.pdf",
  bio: "Mon parcours mêle vente, relation client et logistique. J’ai appris le métier par la pratique : d’abord la rigueur et l’organisation en logistique, puis le conseil et la vente côté client. J’aime comprendre un besoin, proposer une réponse claire et accompagner le client jusqu’au bout.",
  vision: "Pour moi, vendre, c’est répondre à un vrai besoin. Tout commence par l’écoute du client. Je m’intéresse aussi à l’intelligence artificielle et aux outils commerciaux, qui permettent de gagner du temps sur les tâches répétitives et de laisser plus de place à l’échange humain."
};

export const metrics = [
  {
    value: "65%",
    label: "Taux de transformation des devis",
    context: "Garage Khan · Vente automobile & pièces"
  },
  {
    value: "280 € HT",
    label: "Panier moyen par transaction",
    context: "Pièces détachées & accessoires"
  },
  {
    value: "14 mois+",
    label: "Expérience pratique cumulée",
    context: "Vente client & Logistique d'expédition"
  },
  {
    value: "3 langues",
    label: "Français (C2) · Ourdou (C2) · Anglais (C1)",
    context: "Aisance multiculturelle & négociation"
  }
];

export const workMethod = [
  {
    step: "01",
    title: "Écouter",
    tagline: "Comprendre la situation avant de parler d'offre",
    description: "Découverte active, questionnement ouvert sur les irritants du client et son contexte opérationnel. Aucun pitch prématuré.",
    concreteAction: "Cartographie des besoins prioritaires et contraintes de délais/budget.",
    iconName: "Ear"
  },
  {
    step: "02",
    title: "Qualifier",
    tagline: "Identifier le besoin réel et la personne qui décide",
    description: "Vérification des critères d'éligibilité, des ressources allouées et du circuit de décision (décisionnaire, utilisateur final, payeur).",
    concreteAction: "Ciblage précis pour éviter les déperditions de temps et maximiser le closing.",
    iconName: "Target"
  },
  {
    step: "03",
    title: "Proposer",
    tagline: "Présenter une réponse claire, chiffrée et adaptée",
    description: "Élaboration d'une offre commerciale transparente, argumentée par la valeur apportée plutôt que le seul prix brut.",
    concreteAction: "Devis précis à 280 € HT de panier moyen avec 65% de taux de conversion validé.",
    iconName: "FileSpreadsheet"
  },
  {
    step: "04",
    title: "Suivre",
    tagline: "Relancer et accompagner jusqu’à la livraison",
    description: "Tenue des engagements, relances rythmées sans être intrusives, coordination logistique et fidélisation post-vente.",
    concreteAction: "Accompagnement de bout en bout jusqu'à la remise des clés ou la livraison effective.",
    iconName: "CheckCircle2"
  }
];

export const experiences: Experience[] = [
  {
    id: "garage-khan",
    role: "Assistant Commercial",
    company: "Garage Khan",
    period: "02.2026 à 07.2026",
    location: "Île-de-France",
    type: "Expérience commerciale & relation client",
    description: "Gestion complète du cycle de vente de pièces automobiles, accueil et relation client, élaboration des devis et pilotage de la commande fournisseur jusqu'à la remise du véhicule.",
    achievements: [
      "Vente active de pièces automobiles avec un panier moyen constaté de 280 € HT.",
      "Élaboration rigoureuse des devis et facturation : 65 % de devis transformés en commandes effectives.",
      "Accueil physique et téléphonique, conseil personnalisé et suivi client jusqu’à la livraison du véhicule.",
      "Commandes directes auprès des centrales d'achats / équipementiers et gestion optimisée du stock de pièces détachées."
    ],
    skills: ["Négociation commerciale", "Chiffrage devis", "Closing", "Gestion des pièces", "Fidélisation"],
    highlightMetric: {
      value: "65%",
      label: "Devis transformés"
    }
  },
  {
    id: "akar-ulker",
    role: "Employé Logistique",
    company: "Akar Ulker",
    period: "10.2024 à 11.2025",
    location: "Île-de-France",
    type: "Mission logistique & gestion des flux (14 mois)",
    description: "Coordination des flux logistiques, gestion de stocks, préparation des commandes et contrôle de conformité. Expérience fondatrice sur la rigueur, le sens du détail et le respect des engagements clients.",
    achievements: [
      "Réception, préparation et contrôle qualitatif et quantitatif des commandes clients B2B/B2C.",
      "Expéditions rigoureuses dans le strict respect des délais impartis et protocoles de conformité.",
      "Coordination transversale fluide avec les équipes de quai, de réception et d’expédition."
    ],
    skills: ["Gestion des stocks", "Rigueur d'exécution", "Contrôle qualité", "Coordination d'équipe", "Respect des délais"],
    highlightMetric: {
      value: "100%",
      label: "Respect des délais"
    }
  }
];

export const educations: Education[] = [
  {
    id: "euridis",
    degree: "Bachelor Vente & Négociation Commerciale",
    school: "Euridis Business School",
    period: "2026 à 2027",
    description: "Formation d'excellence dédiée à la vente B2B, négociation complexe, prospection omnicanale, ingénierie d'affaires et stratégies de closing de haut niveau.",
    keyLearnings: [
      "Techniques de vente consultative et négociation à fort enjeu",
      "Prospection B2B, qualification des décideurs et social selling",
      "Pilotage de cycles d'affaires et CRM"
    ]
  },
  {
    id: "pnbs",
    degree: "Titre Professionnel Négociateur Technico-Commercial",
    school: "Paris Nord Business School",
    period: "2025",
    description: "Certification d'État validant l'expertise en développement de portefeuille client, négociation d'accords commerciaux et argumentation technique chiffrée.",
    keyLearnings: [
      "Développement de clientèle et plan de prospection",
      "Conseil technique et valorisation de l'offre commerciale",
      "Closing et fidélisation client"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Vente & Négociation",
    description: "Maîtrise de bout en bout du cycle de vente, de la prospection au closing.",
    items: [
      { name: "Prospection & Démarchage", level: "Avancé", detail: "Identification de comptes cibles & qualification" },
      { name: "Négociation commerciale", level: "Avancé", detail: "Argumentaire de valeur & gestion des objections" },
      { name: "Closing", level: "Confirmé", detail: "65% de taux de transformation mesuré" },
      { name: "Devis & Facturation", level: "Avancé", detail: "Chiffrage précis et justification de marges" },
      { name: "Conseil client & Fidélisation", level: "Avancé", detail: "Écoute active et suivi relationnel" },
      { name: "Achats & Gestion fournisseurs", level: "Confirmé", detail: "Approvisionnement et négociation tarifaire" }
    ]
  },
  {
    category: "Outils Commerciaux & CRM",
    description: "Stack logicielle pour automatiser et structurer la relation client.",
    items: [
      { name: "HubSpot (CRM)", level: "Opérationnel", detail: "Gestion de pipeline, contacts et deals" },
      { name: "Pack Office", level: "Avancé", detail: "Excel (tableaux de bord, chiffrage), Word, PowerPoint" },
      { name: "Canva", level: "Avancé", detail: "Supports de présentation commerciale et visuels percutants" },
      { name: "CapCut", level: "Opérationnel", detail: "Montage de formats vidéo courts et pitchs dynamiques" }
    ]
  },
  {
    category: "Intelligence Artificielle & Productivité",
    description: "Utilisation professionnelle de l'IA générative comme copilote d'affaires.",
    items: [
      { name: "Claude & ChatGPT", level: "Pratique quotidienne", detail: "Recherche préparatoire, synthèse de comptes, structuration de pitch" },
      { name: "Vérification systématique", level: "Règle absolue", detail: "Zéro hallucination : contrôle méticuleux des données chiffrées" },
      { name: "Gain de temps commercial", level: "Méthode", detail: "Automatisation de l'administratif pour libérer du temps d'échange humain" }
    ]
  }
];

export const languages: Language[] = [
  { name: "Français", level: "Langue maternelle / Courant", cefr: "C2", percentage: 100 },
  { name: "Ourdou", level: "Bilingue / Maîtrise parfaite", cefr: "C2", percentage: 100 },
  { name: "Anglais", level: "Professionnel / Négociation", cefr: "C1", percentage: 85 }
];

export const sportsInterests = [
  {
    name: "Boxe & Kickboxing",
    attribute: "Gestion de la pression & Résilience",
    description: "Apprentissage du sang-froid face aux situations tendues, discipline stricte et combativité dans l'effort."
  },
  {
    name: "Football",
    attribute: "Esprit d'équipe & Collectif",
    description: "Coordination rapide, solidarité sur le terrain et sens de la stratégie collective pour atteindre l'objectif."
  },
  {
    name: "Padel & Badminton",
    attribute: "Réflexes & Agilité tactique",
    description: "Vitesse d'analyse des trajectoires, anticipation des coups adverses et adaptation instantanée au rythme."
  }
];

export const recruiterReviewPoints = [
  {
    title: "La force du terrain : Rigueur logistique avant la vente",
    verdict: "Atout majeur",
    badge: "Crédibilité 100%",
    summary: "Beaucoup de commerciaux vendent des promesses qu'ils ne savent pas faire livrer. Avoir 14 mois de logistique chez Akar Ulker avant de passer en vente donne à Arif une compréhension chirurgicale des délais, des stocks et de la réalité opérationnelle.",
    impact: "Confiance immédiate du client et zéro litige post-vente."
  },
  {
    title: "Des métriques de closing prouvées",
    verdict: "Chiffré & Factuel",
    badge: "65% de conversion",
    summary: "Dans le milieu exigeant de l'automobile (Garage Khan), Arif affiche 65% de devis transformés et un panier moyen de 280 € HT. Ce n'est pas de la théorie : c'est un savoir-faire éprouvé en qualification et traitement des objections prix.",
    impact: "Un profil immédiatement rentable sur des cycles B2B ou B2C."
  },
  {
    title: "Le profil commercial de la nouvelle génération",
    verdict: "Moderne & Efficace",
    badge: "CRM + IA Maîtrisée",
    summary: "À l'aise avec HubSpot, Excel et l'IA (Claude, ChatGPT) comme copilotes de recherche tout en gardant un esprit critique aiguisé. Il utilise la tech pour se concentrer sur ce qui compte : l'humain et l'écoute.",
    impact: "Productivité x2 sur la préparation des rdv et relances."
  },
  {
    title: "Trilingue avec intelligence situationnelle",
    verdict: "Ouverture internationale",
    badge: "Français C2 · Ourdou C2 · Anglais C1",
    summary: "Capacité à échanger avec des profils très variés, fournisseurs internationaux, clients exigeants et partenaires d'horizons divers avec aisance naturelle.",
    impact: "Polyvalence relationnelle et adaptabilité multiculturelle."
  }
];
