// جميع الخدمات والخدمات الفرعية
export interface Service {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  icon: string;
  priceRange?: string;
}

export const serviceCategories = [
  "Rohrreinigung",
  "Kanalreinigung",
  "Abflussreinigung",
  "Notdienst",
  "Inspektion",
  "Sanierung",
];

export const services: Service[] = [
  // Rohrreinigung Hauptkategorie
  {
    name: "Rohrreinigung",
    slug: "rohrreinigung",
    category: "Rohrreinigung",
    shortDescription: "Professionelle Beseitigung von Rohrverstopfungen",
    longDescription: "Unsere professionelle Rohrreinigung beseitigt alle Arten von Verstopfungen schnell und effektiv. Mit modernster Technik und jahrelanger Erfahrung lösen wir selbst hartnäckigste Blockaden in kürzester Zeit.",
    features: [
      "Schnelle Beseitigung aller Verstopfungen",
      "Moderne Hochdruckreinigung",
      "Schonende Methoden für alle Rohrtypen",
      "24/7 Notdienst verfügbar",
      "Festpreisgarantie nach Besichtigung"
    ],
    icon: "pipe"
  },
  {
    name: "Toilette verstopft",
    slug: "toilette-verstopft",
    category: "Rohrreinigung",
    shortDescription: "Schnelle Hilfe bei verstopfter Toilette",
    longDescription: "Eine verstopfte Toilette ist ein Notfall, der schnelles Handeln erfordert. Unser Fachteam beseitigt die Verstopfung schnell und hygienisch, ohne Schäden an der Sanitäranlage zu verursachen.",
    features: [
      "Soforthilfe innerhalb von 30-60 Minuten",
      "Hygienische Arbeitsweise",
      "Professionelle Ausrüstung",
      "Keine Folgeschäden",
      "Faire Preise"
    ],
    icon: "toilet"
  },
  {
    name: "Waschbecken verstopft",
    slug: "waschbecken-verstopft",
    category: "Rohrreinigung",
    shortDescription: "Professionelle Reinigung verstopfter Waschbecken",
    longDescription: "Verstopfte Waschbecken sind ein häufiges Problem in Küche und Bad. Wir beseitigen Ablagerungen von Haaren, Seife und anderen Materialien schnell und nachhaltig.",
    features: [
      "Effektive Beseitigung von Haaren und Ablagerungen",
      "Reinigung des Siphons",
      "Prüfung der Abflussleitungen",
      "Vorbeugende Tipps",
      "Kurze Anfahrtszeit"
    ],
    icon: "sink"
  },
  {
    name: "Badewanne verstopft",
    slug: "badewanne-verstopft",
    category: "Rohrreinigung",
    shortDescription: "Schnelle Entstopfung der Badewanne",
    longDescription: "Wenn das Wasser in der Badewanne nicht mehr abläuft, sind meist Haare und Seifenreste die Ursache. Wir beseitigen die Verstopfung schnell und sorgen für freien Abfluss.",
    features: [
      "Professionelle Haarentfernung",
      "Reinigung des Ablaufsystems",
      "Keine Chemikalien nötig",
      "Schnelle Durchführung",
      "Langfristige Lösung"
    ],
    icon: "bathtub"
  },
  {
    name: "Dusche verstopft",
    slug: "dusche-verstopft",
    category: "Rohrreinigung",
    shortDescription: "Duschablauf wieder frei machen",
    longDescription: "Eine verstopfte Dusche kann schnell zum Problem werden. Unser Team beseitigt Verstopfungen im Duschablauf effektiv und verhindert zukünftige Blockaden.",
    features: [
      "Schnelle Entstopfung",
      "Reinigung der Ablaufrinne",
      "Prüfung des Abflusssystems",
      "Vorbeugende Maßnahmen",
      "Saubere Arbeitsweise"
    ],
    icon: "shower"
  },
  {
    name: "Küche Abfluss verstopft",
    slug: "kueche-abfluss-verstopft",
    category: "Rohrreinigung",
    shortDescription: "Küchenabfluss schnell entstopfen",
    longDescription: "Fett, Speisereste und Kalk verstopfen häufig den Küchenabfluss. Wir reinigen Ihren Abfluss gründlich und entfernen alle Ablagerungen für optimalen Wasserabfluss.",
    features: [
      "Entfernung von Fettablagerungen",
      "Reinigung des gesamten Abflusssystems",
      "Umweltfreundliche Methoden",
      "Geruchsbeseitigung",
      "Vorbeugende Beratung"
    ],
    icon: "kitchen"
  },
  {
    name: "Urinal verstopft",
    slug: "urinal-verstopft",
    category: "Rohrreinigung",
    shortDescription: "Urinalreinigung und Entstopfung",
    longDescription: "Verstopfte Urinale in Gewerbebetrieben erfordern schnelle und diskrete Hilfe. Wir beseitigen Urinstein und Ablagerungen professionell.",
    features: [
      "Schnelle gewerbliche Hilfe",
      "Entfernung von Urinstein",
      "Hygienische Arbeitsweise",
      "Diskrete Durchführung",
      "Wartungsverträge möglich"
    ],
    icon: "urinal"
  },
  {
    name: "Fallrohr verstopft",
    slug: "fallrohr-verstopft",
    category: "Rohrreinigung",
    shortDescription: "Fallrohrreinigung bei Verstopfung",
    longDescription: "Verstopfte Fallrohre können zu Wasserschäden führen. Wir reinigen Fallrohre von Laub, Schmutz und anderen Ablagerungen.",
    features: [
      "Reinigung von Laub und Schmutz",
      "Hochdruckreinigung",
      "Prüfung des gesamten Systems",
      "Schadensvorbeugung",
      "Regelmäßige Wartung möglich"
    ],
    icon: "downpipe"
  },
  {
    name: "Grundleitung verstopft",
    slug: "grundleitung-verstopft",
    category: "Rohrreinigung",
    shortDescription: "Reinigung verstopfter Grundleitungen",
    longDescription: "Verstopfungen in der Grundleitung sind oft schwer zugänglich. Mit spezieller Ausrüstung lösen wir auch diese Probleme zuverlässig.",
    features: [
      "Spezialausrüstung für Grundleitungen",
      "Hochdruck-Spülung",
      "Wurzelentfernung",
      "Kamerainspektion möglich",
      "Langfristige Lösungen"
    ],
    icon: "foundation"
  },
  // Kanalreinigung Hauptkategorie
  {
    name: "Kanalreinigung",
    slug: "kanalreinigung",
    category: "Kanalreinigung",
    shortDescription: "Professionelle Reinigung von Kanalsystemen",
    longDescription: "Unsere Kanalreinigung umfasst die komplette Reinigung und Wartung Ihres Abwassersystems. Mit Hochdruck-Spültechnik und Kamerainspektion sorgen wir für einwandfreie Funktion.",
    features: [
      "Hochdruck-Spültechnik",
      "Kamerainspektion inklusive",
      "Entfernung aller Ablagerungen",
      "Dokumentation des Zustands",
      "Regelmäßige Wartungsverträge"
    ],
    icon: "canal"
  },
  {
    name: "Kanalinspektion",
    slug: "kanalinspektion",
    category: "Kanalreinigung",
    shortDescription: "TV-Inspektion des Kanalsystems",
    longDescription: "Mit modernster Kameratechnik inspizieren wir Ihr Kanalsystem und dokumentieren den Zustand. So erkennen wir Probleme frühzeitig und können gezielt handeln.",
    features: [
      "HD-Kameratechnik",
      "Detaillierte Dokumentation",
      "Schadenserkennung",
      "Beratung zu Sanierungsmaßnahmen",
      "Protokollerstellung"
    ],
    icon: "camera"
  },
  {
    name: "Kanalreinigung Privat",
    slug: "kanalreinigung-privat",
    category: "Kanalreinigung",
    shortDescription: "Kanalreinigung für Privathaushalte",
    longDescription: "Für Privathaushalte bieten wir umfassende Kanalreinigung zu fairen Preisen. Wir reinigen alle Leitungen von Küche, Bad bis zur Grundleitung.",
    features: [
      "Komplette Hausreinigung",
      "Faire Privatkundenpreise",
      "Schnelle Terminvergabe",
      "Saubere Arbeitsweise",
      "Beratung inklusive"
    ],
    icon: "home"
  },
  {
    name: "Kanalreinigung Gewerbe",
    slug: "kanalreinigung-gewerbe",
    category: "Kanalreinigung",
    shortDescription: "Kanalreinigung für Gewerbebetriebe",
    longDescription: "Gewerbliche Kanalreinigung mit minimaler Betriebsunterbrechung. Wir arbeiten auf Wunsch auch nachts oder am Wochenende.",
    features: [
      "Flexible Terminplanung",
      "Nacht- und Wochenendarbeit möglich",
      "Wartungsverträge",
      "Schnelle Notfallhilfe",
      "Professionelle Dokumentation"
    ],
    icon: "business"
  },
  {
    name: "Wurzelentfernung",
    slug: "wurzelentfernung",
    category: "Kanalreinigung",
    shortDescription: "Entfernung von Wurzeleinwuchs",
    longDescription: "Wurzeln in Abwasserleitungen können zu schweren Schäden führen. Wir entfernen Wurzeleinwüchse mechanisch und verhindern erneuten Einwuchs.",
    features: [
      "Mechanische Wurzelfräse",
      "Schonung der Rohre",
      "Prävention von Neueinwuchs",
      "Kameraprüfung danach",
      "Beratung zu Sanierung"
    ],
    icon: "tree"
  },
  {
    name: "Fettabscheider Reinigung",
    slug: "fettabscheider-reinigung",
    category: "Kanalreinigung",
    shortDescription: "Professionelle Fettabscheider-Wartung",
    longDescription: "Regelmäßige Reinigung von Fettabscheidern ist gesetzlich vorgeschrieben. Wir übernehmen die fachgerechte Reinigung und Entsorgung.",
    features: [
      "Gesetzeskonforme Reinigung",
      "Fachgerechte Entsorgung",
      "Dokumentation",
      "Wartungsverträge",
      "Schnelle Notfallreinigung"
    ],
    icon: "grease"
  },
  // Abflussreinigung
  {
    name: "Abflussreinigung",
    slug: "abflussreinigung",
    category: "Abflussreinigung",
    shortDescription: "Schnelle und gründliche Abflussreinigung",
    longDescription: "Unsere Abflussreinigung beseitigt alle Verstopfungen in Ihren Abflussleitungen. Schnell, sauber und zu fairen Preisen.",
    features: [
      "Alle Abflusstypen",
      "Schnelle Durchführung",
      "Gründliche Reinigung",
      "Keine versteckten Kosten",
      "Zufriedenheitsgarantie"
    ],
    icon: "drain"
  },
  {
    name: "Abfluss verstopft",
    slug: "abfluss-verstopft",
    category: "Abflussreinigung",
    shortDescription: "Soforthilfe bei verstopftem Abfluss",
    longDescription: "Ein verstopfter Abfluss ist ärgerlich und kann schnell zum Problem werden. Unser Notdienst ist schnell vor Ort und löst das Problem.",
    features: [
      "Soforthilfe",
      "Alle Abflusstypen",
      "Professionelle Ausrüstung",
      "Saubere Arbeitsweise",
      "Faire Preise"
    ],
    icon: "blocked"
  },
  {
    name: "Abfluss stinkt",
    slug: "abfluss-stinkt",
    category: "Abflussreinigung",
    shortDescription: "Beseitigung von Geruchsproblemen",
    longDescription: "Üble Gerüche aus dem Abfluss deuten auf Ablagerungen oder Defekte hin. Wir finden die Ursache und beseitigen das Problem nachhaltig.",
    features: [
      "Ursachenforschung",
      "Gründliche Reinigung",
      "Geruchsbeseitigung",
      "Prüfung des Systems",
      "Langfristige Lösung"
    ],
    icon: "smell"
  },
  {
    name: "Abflussreinigung Hochdruck",
    slug: "abflussreinigung-hochdruck",
    category: "Abflussreinigung",
    shortDescription: "Hochdruck-Spülung für hartnäckige Verstopfungen",
    longDescription: "Mit Hochdruck-Spültechnik beseitigen wir auch hartnäckigste Verstopfungen und Ablagerungen. Schonend für die Rohre, effektiv gegen Blockaden.",
    features: [
      "Bis 200 bar Druck",
      "Effektiv gegen alle Verstopfungen",
      "Rohre werden geschont",
      "Schnelle Durchführung",
      "Professionelle Ausrüstung"
    ],
    icon: "highpressure"
  },
  {
    name: "Abflussreinigung mechanisch",
    slug: "abflussreinigung-mechanisch",
    category: "Abflussreinigung",
    shortDescription: "Mechanische Rohrreinigung mit Spirale",
    longDescription: "Die mechanische Reinigung mit Rohrreinigungsspirale ist ideal für viele Verstopfungen. Schnell, effektiv und kostengünstig.",
    features: [
      "Spiralreinigung",
      "Ideal für leichte bis mittlere Verstopfungen",
      "Kostengünstig",
      "Schnelle Durchführung",
      "Bewährte Methode"
    ],
    icon: "spiral"
  },
  // Notdienst
  {
    name: "Rohrreinigung Notdienst",
    slug: "rohrreinigung-notdienst",
    category: "Notdienst",
    shortDescription: "24/7 Notdienst für alle Rohrverstopfungen",
    longDescription: "Unser Notdienst ist rund um die Uhr für Sie da. Bei Rohrbrüchen, schweren Verstopfungen oder Überschwemmungen sind wir schnell vor Ort.",
    features: [
      "24 Stunden, 7 Tage",
      "Schnelle Anfahrt",
      "Sofortige Hilfe",
      "Alle Notfälle",
      "Kompetente Fachleute"
    ],
    icon: "emergency"
  },
  {
    name: "Notdienst Nacht",
    slug: "notdienst-nacht",
    category: "Notdienst",
    shortDescription: "Nächtlicher Notdienst verfügbar",
    longDescription: "Auch nachts sind wir für Sie erreichbar. Rohrnotfälle kennen keine Uhrzeit - wir auch nicht.",
    features: [
      "Verfügbar von 22-6 Uhr",
      "Schnelle Reaktionszeit",
      "Vollständige Ausrüstung",
      "Erfahrene Techniker",
      "Faire Nachtpreise"
    ],
    icon: "night"
  },
  {
    name: "Notdienst Wochenende",
    slug: "notdienst-wochenende",
    category: "Notdienst",
    shortDescription: "Notdienst am Wochenende und Feiertagen",
    longDescription: "Samstag, Sonntag oder Feiertag - unser Notdienst ist immer verfügbar. Keine extra Wartezeit bis Montag.",
    features: [
      "Samstag und Sonntag",
      "Alle Feiertage",
      "Keine Einschränkungen",
      "Volle Einsatzbereitschaft",
      "Schnelle Hilfe"
    ],
    icon: "weekend"
  },
  {
    name: "Rohrbruch Notdienst",
    slug: "rohrbruch-notdienst",
    category: "Notdienst",
    shortDescription: "Soforthilfe bei Rohrbruch",
    longDescription: "Ein Rohrbruch erfordert sofortiges Handeln. Wir lokalisieren den Schaden und führen Notreparaturen durch.",
    features: [
      "Sofortige Schadenslokalisierung",
      "Notreparaturen",
      "Schadensminimierung",
      "Koordination mit Versicherung",
      "Folgemaßnahmen"
    ],
    icon: "burst"
  },
  {
    name: "Wasserrohrbruch",
    slug: "wasserrohrbruch",
    category: "Notdienst",
    shortDescription: "Schnelle Hilfe bei Wasserrohrbruch",
    longDescription: "Bei einem Wasserrohrbruch zählt jede Minute. Wir stoppen das Wasser und reparieren den Schaden.",
    features: [
      "Sofortige Wasserstopp",
      "Professionelle Reparatur",
      "Schadensdokumentation",
      "Trocknungsberatung",
      "24/7 verfügbar"
    ],
    icon: "water"
  },
  // Inspektion
  {
    name: "Kamera-Inspektion",
    slug: "kamera-inspektion",
    category: "Inspektion",
    shortDescription: "TV-Kamerabefahrung der Rohrleitungen",
    longDescription: "Mit hochauflösenden Kameras inspizieren wir Ihre Rohrleitungen von innen. So erkennen wir Probleme, bevor sie zu Schäden führen.",
    features: [
      "HD-Kameratechnik",
      "Aufzeichnung möglich",
      "Detaillierte Analyse",
      "Zustandsbericht",
      "Handlungsempfehlungen"
    ],
    icon: "camera"
  },
  {
    name: "Dichtheitsprüfung",
    slug: "dichtheitspruefung",
    category: "Inspektion",
    shortDescription: "Prüfung der Rohrleitungen auf Dichtheit",
    longDescription: "Die Dichtheitsprüfung ist in vielen Regionen vorgeschrieben. Wir prüfen Ihre Leitungen normgerecht und erstellen ein Protokoll.",
    features: [
      "Normgerechte Prüfung",
      "Offizielles Protokoll",
      "Schadensidentifikation",
      "Beratung bei Mängeln",
      "Behördenkonforme Dokumentation"
    ],
    icon: "leak"
  },
  {
    name: "Leckortung",
    slug: "leckortung",
    category: "Inspektion",
    shortDescription: "Präzise Ortung von Leckagen",
    longDescription: "Mit modernster Technik orten wir Leckagen präzise und zerstörungsfrei. So können Reparaturen gezielt durchgeführt werden.",
    features: [
      "Zerstörungsfreie Ortung",
      "Präzise Lokalisierung",
      "Verschiedene Verfahren",
      "Minimale Folgeschäden",
      "Schnelle Ergebnisse"
    ],
    icon: "location"
  },
  {
    name: "Zustandserfassung",
    slug: "zustandserfassung",
    category: "Inspektion",
    shortDescription: "Vollständige Erfassung des Rohrzustands",
    longDescription: "Wir dokumentieren den Zustand Ihres gesamten Rohrsystems und erstellen einen detaillierten Bericht mit Sanierungsempfehlungen.",
    features: [
      "Komplette Systemerfassung",
      "Detaillierter Bericht",
      "Fotodokumentation",
      "Sanierungsplanung",
      "Kostenschätzung"
    ],
    icon: "report"
  },
  // Sanierung
  {
    name: "Rohrsanierung",
    slug: "rohrsanierung",
    category: "Sanierung",
    shortDescription: "Grabenlose Rohrsanierung",
    longDescription: "Mit modernsten Inliner-Verfahren sanieren wir Rohre von innen - ohne Aufgraben. Schnell, sauber und kostengünstig.",
    features: [
      "Grabenlose Sanierung",
      "Inliner-Verfahren",
      "Minimale Beeinträchtigung",
      "Lange Lebensdauer",
      "Kostenersparnis"
    ],
    icon: "repair"
  },
  {
    name: "Kanalsanierung",
    slug: "kanalsanierung",
    category: "Sanierung",
    shortDescription: "Professionelle Sanierung des Kanalsystems",
    longDescription: "Wir sanieren beschädigte Kanalleitungen mit verschiedenen Verfahren - vom Inliner bis zur Kompletterneuerung.",
    features: [
      "Verschiedene Sanierungsverfahren",
      "Individuelle Lösungen",
      "Langzeitgarantie",
      "Fachgerechte Ausführung",
      "Dokumentation"
    ],
    icon: "construction"
  },
  {
    name: "Inliner Sanierung",
    slug: "inliner-sanierung",
    category: "Sanierung",
    shortDescription: "Schlauchrelining für Rohrleitungen",
    longDescription: "Das Inliner-Verfahren erneuert Rohre von innen mit einem kunstharzgetränkten Schlauch. Ideal für beschädigte Leitungen.",
    features: [
      "Rohr-im-Rohr-Verfahren",
      "Keine Grabungsarbeiten",
      "Schnelle Durchführung",
      "50+ Jahre Lebensdauer",
      "Für alle Rohrtypen"
    ],
    icon: "liner"
  },
  {
    name: "Partielle Reparatur",
    slug: "partielle-reparatur",
    category: "Sanierung",
    shortDescription: "Punktuelle Reparatur von Rohrschäden",
    longDescription: "Bei lokalen Schäden führen wir gezielte Reparaturen durch. Kostengünstig und effektiv für einzelne Schadstellen.",
    features: [
      "Gezielte Reparatur",
      "Kostengünstig",
      "Schnelle Durchführung",
      "Verschiedene Verfahren",
      "Für alle Rohrtypen"
    ],
    icon: "partial"
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((service) => service.category === category);
}

export function getMainServices(): Service[] {
  return services.filter((service) =>
    ["rohrreinigung", "kanalreinigung", "abflussreinigung", "rohrreinigung-notdienst"].includes(service.slug)
  );
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
