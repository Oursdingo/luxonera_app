import { Watch } from "@/types/product";

export const watches: Watch[] = [
  {
    id: "watch-001",
    slug: "royal-oak-automatique",
    name: "Royal Oak Automatique 41mm",
    brand: "Audemars Piguet",
    collection: "Royal Oak",
    price: 18500000,
    currency: "FCFA",
    images: {
      main: "/images/watches/audemar-royal/royal-oak-automatique-main.jpg",
      gallery: [
        "/images/watches/audemar-royal/royal-oak-automatique-1.jpg",
        "/images/watches/audemar-royal/royal-oak-automatique-2.jpg",
        "/images/watches/audemar-royal/royal-oak-automatique-3.jpg",
      ],
    },
    description:
      "Icône de l'horlogerie de luxe depuis 1972, la Royal Oak révolutionne les codes avec son boîtier octogonal et sa lunette vissée. En acier brossé et poli, elle arbore le légendaire motif 'Grande Tapisserie' sur son cadran bleu. Une pièce d'exception qui incarne l'excellence horlogère de la Vallée de Joux.",
    specifications: {
      movement: "Calibre manufacture 4302 automatique",
      case: "Acier inoxydable 904L brossé/poli",
      diameter: "41mm",
      waterResistance: "50m (5 ATM)",
      strap: "Bracelet intégré acier avec fermoir déployant AP",
      features: [
        "Cadran Grande Tapisserie bleu",
        "Lunette octogonale 8 vis apparentes",
        "Réserve de marche 70h",
        "Date à 3h",
        "Poinçon de Genève",
        "Garantie internationale 5 ans",
      ],
    },
    inStock: true,
    featured: true,
  },

  {
    id: "watch-002",
    slug: "submariner-date-noir",
    name: "Submariner Date 41mm",
    brand: "Rolex",
    collection: "Professional",
    price: 12800000,
    currency: "FCFA",
    images: {
      main: "/images/watches/rolex-subrinoir/subrinoir-main.jpg",
      gallery: [
        "/images/watches/rolex-subrinoir/subrinoir-1.jpg",
        "/images/watches/rolex-subrinoir/subrinoir-2.png",
        "/images/watches/rolex-subrinoir/subrinoir-3.png",
      ],
    },
    description:
      "La Submariner Date est LA référence des montres de plongée depuis 1953. Étanche jusqu'à 300 mètres, elle est équipée de la lunette Cerachrom unidirectionnelle et du calibre manufacture 3235. Une légende horlogère intemporelle qui traverse les générations.",
    specifications: {
      movement: "Calibre 3235 automatique perpétuel",
      case: "Acier Oystersteel 904L",
      diameter: "41mm",
      waterResistance: "300m (30 ATM)",
      strap: "Bracelet Oyster avec Glidelock",
      features: [
        "Lunette Cerachrom unidirectionnelle",
        "Chronomètre Superlatif Certifié",
        "Date Cyclope grossissant x2.5",
        "Chromalight luminescent bleu",
        "Garantie Rolex 5 ans",
        "Valve à hélium",
      ],
    },
    inStock: true,
    featured: true,
  },

  {
    id: "watch-003",
    slug: "nautilus-acier",
    name: "Nautilus 5711/1A Acier",
    brand: "Patek Philippe",
    collection: "Nautilus",
    price: 28500000,
    currency: "FCFA",
    images: {
      main: "/images/watches/nautilus/nutilis-main.png",
      gallery: [
        "/images/watches/nautilus/nutilis-1.png",
        "/images/watches/nautilus/nutilis-2.png",
        "/images/watches/nautilus/nutilis-3.png",
      ],
    },
    description:
      "Le Nautilus 5711/1A est l'une des montres les plus recherchées au monde. Son élégance sportive intemporelle, son cadran bleu horizontal embossé et son boîtier aux oreilles caractéristiques en font une icône absolue de l'horlogerie de luxe. Production discontinuée, objet de collection.",
    specifications: {
      movement: "Calibre 26‑330 S C automatique",
      case: "Acier inoxydable brossé/poli",
      diameter: "40mm, épaisseur 8.3mm",
      waterResistance: "120m (12 ATM)",
      strap: "Bracelet intégré acier avec fermoir déployant",
      features: [
        "Cadran embossé horizontal bleu",
        "Date à 3h",
        "Petite seconde",
        "Poinçon Patek Philippe",
        "Fond transparent saphir",
        "Modèle discontinué - collection",
      ],
    },
    inStock: true,
    featured: true,
  },

  {
    id: "watch-004",
    slug: "speedmaster-moonwatch",
    name: "Speedmaster Moonwatch Professional",
    brand: "Omega",
    collection: "Speedmaster",
    price: 2450000,
    currency: "FCFA",
    images: {
      main: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
      ],
    },
    description:
      "La seule montre portée sur la Lune ! Le chronographe Speedmaster Moonwatch a accompagné toutes les missions Apollo. Inchangé depuis 1969, c'est un véritable instrument de précision avec mouvement manuel et verre hesalite historique.",
    specifications: {
      movement: "Calibre 1861 chronographe manuel",
      case: "Acier inoxydable brossé",
      diameter: "42mm",
      waterResistance: "50m (5 ATM)",
      strap: "Bracelet acier ou NATO",
      features: [
        "Chronographe 3 compteurs",
        "Tachymètre",
        "Verre hesalite bombé",
        "Fond gravé hippocampe",
        "Mouvement manuel historique",
        "Certifié missions spatiales NASA",
      ],
    },
    inStock: true,
    featured: true,
  },

  {
    id: "watch-005",
    slug: "carrera-calibre-heuer-02",
    name: "Carrera Calibre Heuer 02",
    brand: "TAG Heuer",
    collection: "Carrera",
    price: 1850000,
    currency: "FCFA",
    images: {
      main: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
      ],
    },
    description:
      "Chronographe sportif élégant avec mouvement manufacture visible. La Carrera incarne l'esprit racing de TAG Heuer avec son design épuré et son chronographe haute performance. Fond transparent pour admirer le calibre Heuer 02.",
    specifications: {
      movement: "Calibre Heuer 02 manufacture automatique",
      case: "Acier inoxydable brossé/poli",
      diameter: "43mm",
      waterResistance: "100m (10 ATM)",
      strap: "Bracelet acier H-link ou cuir",
      features: [
        "Chronographe colonne de roues",
        "Réserve de marche 80h",
        "Fond saphir transparent",
        "Date à 3h",
        "Certification COSC",
      ],
    },
    inStock: true,
    featured: false,
  },

  {
    id: "watch-006",
    slug: "santos-de-cartier-grand",
    name: "Santos de Cartier Grand Modèle",
    brand: "Cartier",
    collection: "Santos",
    price: 3200000,
    currency: "FCFA",
    images: {
      main: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=800&q=80",
      ],
    },
    description:
      "Première montre-bracelet de l'histoire horlogère, créée en 1904 pour l'aviateur Alberto Santos-Dumont. Ligne architecturale iconique avec vis apparentes, chiffres romains et bracelet QuickSwitch interchangeable. L'élégance française à son apogée.",
    specifications: {
      movement: "Calibre 1847 MC automatique manufacture",
      case: "Acier et or jaune 18K (2 tons)",
      diameter: "39.8mm carré",
      waterResistance: "100m (10 ATM)",
      strap: "Bracelet acier/or avec QuickSwitch",
      features: [
        "Boîtier carré iconique",
        "Vis or apparentes",
        "Couronne saphir cabochon",
        "Système QuickSwitch",
        "Chiffres romains",
      ],
    },
    inStock: true,
    featured: false,
  },

  {
    id: "watch-007",
    slug: "big-bang-unico-titanium",
    name: "Big Bang Unico Titanium",
    brand: "Hublot",
    collection: "Big Bang",
    price: 4200000,
    currency: "FCFA",
    images: {
      main: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
      ],
    },
    description:
      "Design avant-gardiste avec boîtier en titane et lunette céramique. Le mouvement manufacture UNICO est visible avec son chronographe flyback. L'Art de la Fusion selon Hublot : matériaux high-tech et complications horlogères.",
    specifications: {
      movement: "HUB1242 UNICO chronographe flyback manufacture",
      case: "Titane poli/satiné avec lunette céramique",
      diameter: "45mm",
      waterResistance: "100m (10 ATM)",
      strap: "Caoutchouc structuré noir",
      features: [
        "Chronographe flyback",
        "Architecture squelette",
        "Réserve de marche 72h",
        "Lunette céramique 6 vis H",
        "Système One Click strap",
      ],
    },
    inStock: true,
    featured: false,
  },

  {
    id: "watch-008",
    slug: "classic-sheffield-daniel-wellington",
    name: "Classic Sheffield 40mm",
    brand: "Daniel Wellington",
    collection: "Classic",
    price: 185000,
    currency: "FCFA",
    images: {
      main: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
      ],
    },
    description:
      "Design minimaliste scandinave avec cadran blanc épuré et bracelet NATO en nylon. La montre Daniel Wellington incarne l'élégance décontractée moderne. Parfaite pour un style casual-chic accessible.",
    specifications: {
      movement: "Quartz japonais",
      case: "Acier inoxydable poli argent",
      diameter: "40mm, épaisseur 6mm",
      waterResistance: "30m (3 ATM)",
      strap: "NATO nylon bleu marine/blanc",
      features: [
        "Design minimaliste",
        "Ultra-fin 6mm",
        "Bracelets interchangeables",
        "Index bâtons",
        "Garantie 2 ans",
      ],
    },
    inStock: true,
    featured: false,
  },

  {
    id: "watch-009",
    slug: "g-shock-mudmaster-gwg-2000",
    name: "G-SHOCK Mudmaster GWG-2000",
    brand: "Casio",
    collection: "Master of G",
    price: 285000,
    currency: "FCFA",
    images: {
      main: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
      ],
    },
    description:
      "La montre outdoor ultime conçue pour les environnements extrêmes. Résistante à la boue, aux chocs et à l'eau, elle intègre la technologie Tough Solar et le Multi-Band 6 pour une précision atomique. Parfaite pour les aventuriers et militaires.",
    specifications: {
      movement: "Quartz Tough Solar Multi-Band 6",
      case: "Résine carbone renforcée avec protection boue",
      diameter: "55.8mm",
      waterResistance: "200m (20 ATM)",
      strap: "Résine noire avec boucle ardillon",
      features: [
        "Résistance aux chocs et boue",
        "Tough Solar charging",
        "Réception signal atomique 6 stations",
        "Triple capteur (boussole/altitude/pression)",
        "Thermomètre",
        "Éclairage LED",
      ],
    },
    inStock: true,
    featured: false,
  },

  {
    id: "watch-010",
    slug: "casio-vintage-a168-gold",
    name: "Vintage A168WG-9WDF Gold",
    brand: "Casio",
    collection: "Vintage",
    price: 42000,
    currency: "FCFA",
    images: {
      main: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600790461306-70a39b2af2b4?w=800&q=80",
      ],
    },
    description:
      "Icône rétro des années 80 remise au goût du jour. Design digital vintage avec boîtier et bracelet dorés. Cette montre culte incarne l'esthétique nostalgique tout en restant ultra fonctionnelle. Un classique abordable et stylé.",
    specifications: {
      movement: "Quartz digital module 3298",
      case: "Résine plaqué or",
      diameter: "36mm",
      waterResistance: "30m (3 ATM)",
      strap: "Bracelet acier plaqué or",
      features: [
        "Affichage digital rétro",
        "Chronomètre 1/100s",
        "Alarme quotidienne",
        "Éclairage LED",
        "Calendrier automatique",
        "Pile 7 ans",
      ],
    },
    inStock: true,
    featured: false,
  },

  {
    id: "watch-011",
    slug: "daytona-or-blanc-cadran-bleu",
    name: "Cosmograph Daytona Or Blanc",
    brand: "Rolex",
    collection: "Professional",
    price: 42500000,
    currency: "FCFA",
    images: {
      main: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800&q=80",
      ],
    },
    description:
      "Le chronographe ultime pour les pilotes et passionnés d'automobile. Cadran ice blue exclusif en or blanc 18 carats avec lunette Cerachrom. Calibre 4131 manufacture perpétuel. Une légende des circuits devenue objet de collection inestimable.",
    specifications: {
      movement: "Calibre 4131 chronographe automatique perpétuel",
      case: "Or blanc 18 carats massif",
      diameter: "40mm",
      waterResistance: "100m (10 ATM)",
      strap: "Bracelet Oyster or blanc",
      features: [
        "Cadran ice blue exclusif",
        "Lunette Cerachrom noire",
        "Chronomètre Superlatif Certifié",
        "Compteurs 3-6-9",
        "Échelle tachymétrique",
        "Garantie Rolex 5 ans",
      ],
    },
    inStock: true,
    featured: true,
  },

  {
    id: "watch-012",
    slug: "grand-complications-perpetual-calendar",
    name: "Grand Complications 5320G",
    brand: "Patek Philippe",
    collection: "Grand Complications",
    price: 38500000,
    currency: "FCFA",
    images: {
      main: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=80",
      ],
    },
    description:
      "Chef-d'œuvre de haute horlogerie avec calendrier perpétuel et phases de lune. Boîtier or gris avec cadran argenté opalin. Cette Grande Complication nécessite un ajustement seulement en 2100. L'excellence horlogère suisse absolue.",
    specifications: {
      movement: "Calibre 324 S Q automatique calendrier perpétuel",
      case: "Or gris 18 carats (750/1000)",
      diameter: "40mm, épaisseur 11.13mm",
      waterResistance: "30m (3 ATM)",
      strap: "Alligator noir cousu main",
      features: [
        "Calendrier perpétuel",
        "Phase de lune précision 122 ans",
        "Jour, date, mois, année bissextile",
        "Petite seconde",
        "Poinçon Patek Philippe",
        "Certificat d'origine",
      ],
    },
    inStock: true,
    featured: true,
  },
];
export function getWatchBySlug(slug: string): Watch | undefined {
  return watches.find((watch) => watch.slug === slug);
}

export function getFeaturedWatches(): Watch[] {
  return watches.filter((watch) => watch.featured);
}

export function getWatchesByCollection(collection: string): Watch[] {
  return watches.filter((watch) => watch.collection === collection);
}

export function getAllCollections(): string[] {
  return Array.from(new Set(watches.map((watch) => watch.collection)));
}
