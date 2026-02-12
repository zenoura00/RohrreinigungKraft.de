// جميع المدن ضمن 100 كم من نورنبرغ
export interface City {
  name: string;
  slug: string;
  region: string;
  distance: number; // بالكيلومترات من نورنبرغ
  population?: number;
  description: string;
}

export const cities: City[] = [
  // المدن الرئيسية
  {
    name: "Nürnberg",
    slug: "nuernberg",
    region: "Mittelfranken",
    distance: 0,
    population: 518370,
    description: "Zweitgrößte Stadt Bayerns und unser Hauptstandort für Rohrreinigung und Kanalreinigung."
  },
  {
    name: "Fürth",
    slug: "fuerth",
    region: "Mittelfranken",
    distance: 7,
    population: 132000,
    description: "Direkte Nachbarstadt von Nürnberg. Schnelle Anfahrt für alle Rohrreinigungsarbeiten."
  },
  {
    name: "Erlangen",
    slug: "erlangen",
    region: "Mittelfranken",
    distance: 18,
    population: 113000,
    description: "Universitätsstadt mit moderner Infrastruktur. Wir sind schnell vor Ort."
  },
  {
    name: "Bamberg",
    slug: "bamberg",
    region: "Oberfranken",
    distance: 63,
    population: 77000,
    description: "UNESCO-Weltkulturerbe. Spezialisierte Rohrreinigung für historische Gebäude."
  },
  {
    name: "Ansbach",
    slug: "ansbach",
    region: "Mittelfranken",
    distance: 52,
    population: 42000,
    description: "Regierungssitz von Mittelfranken. Zuverlässiger Rohrreinigungsservice."
  },
  // Mittelfranken
  {
    name: "Schwabach",
    slug: "schwabach",
    region: "Mittelfranken",
    distance: 15,
    population: 40000,
    description: "Goldschlägerstadt südlich von Nürnberg. Schnelle Soforthilfe bei Verstopfungen."
  },
  {
    name: "Zirndorf",
    slug: "zirndorf",
    region: "Mittelfranken",
    distance: 12,
    population: 26000,
    description: "Spielzeugstadt mit schnellem Zugang zu unseren Rohrreinigungsdiensten."
  },
  {
    name: "Herzogenaurach",
    slug: "herzogenaurach",
    region: "Mittelfranken",
    distance: 22,
    population: 25000,
    description: "Heimat von Adidas und Puma. Professionelle Rohrreinigung für Privat und Gewerbe."
  },
  {
    name: "Lauf an der Pegnitz",
    slug: "lauf-an-der-pegnitz",
    region: "Mittelfranken",
    distance: 18,
    population: 26000,
    description: "Idyllische Stadt an der Pegnitz. Zuverlässige Kanalreinigung."
  },
  {
    name: "Roth",
    slug: "roth",
    region: "Mittelfranken",
    distance: 28,
    population: 25000,
    description: "Kreisstadt südlich von Nürnberg. 24/7 Notdienst verfügbar."
  },
  {
    name: "Neumarkt in der Oberpfalz",
    slug: "neumarkt-in-der-oberpfalz",
    region: "Oberpfalz",
    distance: 40,
    population: 41000,
    description: "Größte Stadt der Oberpfalz nach Regensburg. Schnelle Rohrreinigung."
  },
  {
    name: "Forchheim",
    slug: "forchheim",
    region: "Oberfranken",
    distance: 32,
    population: 32000,
    description: "Tor zur Fränkischen Schweiz. Kompetente Abflussreinigung."
  },
  {
    name: "Weißenburg in Bayern",
    slug: "weissenburg-in-bayern",
    region: "Mittelfranken",
    distance: 55,
    population: 18000,
    description: "Römische Geschichte trifft moderne Rohrreinigungstechnik."
  },
  {
    name: "Gunzenhausen",
    slug: "gunzenhausen",
    region: "Mittelfranken",
    distance: 60,
    population: 17000,
    description: "Am Altmühlsee gelegen. Professioneller Rohrreinigungsservice."
  },
  {
    name: "Dinkelsbühl",
    slug: "dinkelsbuehl",
    region: "Mittelfranken",
    distance: 85,
    population: 12000,
    description: "Historische Altstadt. Spezialisierte Rohrreinigung für alte Gebäude."
  },
  {
    name: "Rothenburg ob der Tauber",
    slug: "rothenburg-ob-der-tauber",
    region: "Mittelfranken",
    distance: 80,
    population: 11000,
    description: "Weltberühmte mittelalterliche Stadt. Schonende Rohrreinigung."
  },
  // Oberfranken
  {
    name: "Bayreuth",
    slug: "bayreuth",
    region: "Oberfranken",
    distance: 85,
    population: 75000,
    description: "Festspielstadt mit Wagner-Tradition. Zuverlässige Kanalreinigung."
  },
  {
    name: "Coburg",
    slug: "coburg",
    region: "Oberfranken",
    distance: 95,
    population: 41000,
    description: "Residenzstadt an der bayerisch-thüringischen Grenze."
  },
  {
    name: "Kulmbach",
    slug: "kulmbach",
    region: "Oberfranken",
    distance: 75,
    population: 26000,
    description: "Bierstadt mit professionellem Rohrreinigungsservice."
  },
  {
    name: "Lichtenfels",
    slug: "lichtenfels",
    region: "Oberfranken",
    distance: 72,
    population: 20000,
    description: "Deutsche Korbstadt. Schnelle Hilfe bei Rohrverstopfungen."
  },
  {
    name: "Kronach",
    slug: "kronach",
    region: "Oberfranken",
    distance: 88,
    population: 17000,
    description: "Lucas-Cranach-Stadt. Kompetente Abflussreinigung."
  },
  {
    name: "Pegnitz",
    slug: "pegnitz",
    region: "Oberfranken",
    distance: 55,
    population: 14000,
    description: "Am Fuße der Fränkischen Schweiz. 24/7 Notdienst."
  },
  // Oberpfalz
  {
    name: "Amberg",
    slug: "amberg",
    region: "Oberpfalz",
    distance: 65,
    population: 42000,
    description: "Historische Stadt in der Oberpfalz. Professionelle Rohrreinigung."
  },
  {
    name: "Weiden in der Oberpfalz",
    slug: "weiden-in-der-oberpfalz",
    region: "Oberpfalz",
    distance: 100,
    population: 43000,
    description: "Porzellanstadt mit schnellem Rohrreinigungsservice."
  },
  {
    name: "Sulzbach-Rosenberg",
    slug: "sulzbach-rosenberg",
    region: "Oberpfalz",
    distance: 55,
    population: 20000,
    description: "Herzogstadt mit zuverlässiger Kanalreinigung."
  },
  // Mittelfranken weitere Städte
  {
    name: "Stein",
    slug: "stein",
    region: "Mittelfranken",
    distance: 10,
    population: 14000,
    description: "Direkt bei Nürnberg. Schnellste Anfahrt für Notfälle."
  },
  {
    name: "Wendelstein",
    slug: "wendelstein",
    region: "Mittelfranken",
    distance: 15,
    population: 16000,
    description: "Marktgemeinde südlich von Nürnberg. Professioneller Service."
  },
  {
    name: "Feucht",
    slug: "feucht",
    region: "Mittelfranken",
    distance: 12,
    population: 14000,
    description: "Verkehrsknotenpunkt bei Nürnberg. Schnelle Hilfe."
  },
  {
    name: "Altdorf bei Nürnberg",
    slug: "altdorf-bei-nuernberg",
    region: "Mittelfranken",
    distance: 20,
    population: 16000,
    description: "Universitätsstadt mit zuverlässigem Rohrreinigungsservice."
  },
  {
    name: "Oberasbach",
    slug: "oberasbach",
    region: "Mittelfranken",
    distance: 10,
    population: 18000,
    description: "Direkte Nachbarstadt. Schnelle Anfahrt garantiert."
  },
  {
    name: "Heroldsberg",
    slug: "heroldsberg",
    region: "Mittelfranken",
    distance: 12,
    population: 9000,
    description: "Markt nordöstlich von Nürnberg. Kompetente Abflussreinigung."
  },
  {
    name: "Kalchreuth",
    slug: "kalchreuth",
    region: "Mittelfranken",
    distance: 15,
    population: 5000,
    description: "Kirschendorf bei Erlangen. Professionelle Rohrreinigung."
  },
  {
    name: "Cadolzburg",
    slug: "cadolzburg",
    region: "Mittelfranken",
    distance: 18,
    population: 11000,
    description: "Burgstadt westlich von Fürth. Zuverlässiger Service."
  },
  {
    name: "Langenzenn",
    slug: "langenzenn",
    region: "Mittelfranken",
    distance: 22,
    population: 10000,
    description: "Stadt im Rangau. 24/7 Notdienst verfügbar."
  },
  {
    name: "Heilsbronn",
    slug: "heilsbronn",
    region: "Mittelfranken",
    distance: 30,
    population: 9000,
    description: "Klosterstadt an der Autobahn. Schnelle Anfahrt."
  },
  {
    name: "Windsbach",
    slug: "windsbach",
    region: "Mittelfranken",
    distance: 35,
    population: 6000,
    description: "Knabenchor-Stadt. Professionelle Rohrreinigung."
  },
  {
    name: "Georgensgmünd",
    slug: "georgensgemuend",
    region: "Mittelfranken",
    distance: 30,
    population: 7000,
    description: "Markt im Landkreis Roth. Kompetenter Service."
  },
  {
    name: "Hilpoltstein",
    slug: "hilpoltstein",
    region: "Mittelfranken",
    distance: 35,
    population: 14000,
    description: "Burgstadt im Landkreis Roth. Schnelle Hilfe."
  },
  {
    name: "Greding",
    slug: "greding",
    region: "Mittelfranken",
    distance: 42,
    population: 7000,
    description: "Stadt im Altmühltal. Zuverlässige Kanalreinigung."
  },
  {
    name: "Treuchtlingen",
    slug: "treuchtlingen",
    region: "Mittelfranken",
    distance: 58,
    population: 13000,
    description: "Altmühl-Stadt. Professionelle Rohrreinigung."
  },
  {
    name: "Pappenheim",
    slug: "pappenheim",
    region: "Mittelfranken",
    distance: 62,
    population: 4000,
    description: "Burgenstadt im Altmühltal. Kompetente Abflussreinigung."
  },
  // Weitere Oberfranken
  {
    name: "Ebermannstadt",
    slug: "ebermannstadt",
    region: "Oberfranken",
    distance: 42,
    population: 7000,
    description: "Herz der Fränkischen Schweiz. Professioneller Service."
  },
  {
    name: "Gräfenberg",
    slug: "graefenberg",
    region: "Oberfranken",
    distance: 35,
    population: 4000,
    description: "Stadt in der Fränkischen Schweiz. Schnelle Hilfe."
  },
  {
    name: "Hollfeld",
    slug: "hollfeld",
    region: "Oberfranken",
    distance: 55,
    population: 5000,
    description: "Fränkische Schweiz. Zuverlässige Rohrreinigung."
  },
  {
    name: "Waischenfeld",
    slug: "waischenfeld",
    region: "Oberfranken",
    distance: 50,
    population: 3000,
    description: "Burgenlandschaft. Kompetente Kanalreinigung."
  },
  {
    name: "Hirschaid",
    slug: "hirschaid",
    region: "Oberfranken",
    distance: 50,
    population: 12000,
    description: "Markt bei Bamberg. 24/7 Notdienst."
  },
  {
    name: "Hallstadt",
    slug: "hallstadt",
    region: "Oberfranken",
    distance: 60,
    population: 9000,
    description: "Bei Bamberg. Schnelle Anfahrt."
  },
  {
    name: "Scheßlitz",
    slug: "schesslitz",
    region: "Oberfranken",
    distance: 58,
    population: 7000,
    description: "Stadt bei Bamberg. Professionelle Rohrreinigung."
  },
  {
    name: "Burgebrach",
    slug: "burgebrach",
    region: "Oberfranken",
    distance: 52,
    population: 7000,
    description: "Markt im Steigerwald. Zuverlässiger Service."
  },
  {
    name: "Höchstadt an der Aisch",
    slug: "hoechstadt-an-der-aisch",
    region: "Mittelfranken",
    distance: 35,
    population: 14000,
    description: "Karpfenstadt. Kompetente Abflussreinigung."
  },
  {
    name: "Neustadt an der Aisch",
    slug: "neustadt-an-der-aisch",
    region: "Mittelfranken",
    distance: 42,
    population: 13000,
    description: "Kreisstadt. Professionelle Rohrreinigung."
  },
  {
    name: "Bad Windsheim",
    slug: "bad-windsheim",
    region: "Mittelfranken",
    distance: 50,
    population: 12000,
    description: "Kurstadt. Schnelle Hilfe bei Verstopfungen."
  },
  {
    name: "Uffenheim",
    slug: "uffenheim",
    region: "Mittelfranken",
    distance: 62,
    population: 6000,
    description: "Stadt im Weinland. Zuverlässige Kanalreinigung."
  },
  // Oberpfalz weitere
  {
    name: "Velburg",
    slug: "velburg",
    region: "Oberpfalz",
    distance: 55,
    population: 5000,
    description: "Stadt im Oberpfälzer Jura. Professioneller Service."
  },
  {
    name: "Parsberg",
    slug: "parsberg",
    region: "Oberpfalz",
    distance: 60,
    population: 7000,
    description: "Stadt im Landkreis Neumarkt. Schnelle Anfahrt."
  },
  {
    name: "Berching",
    slug: "berching",
    region: "Oberpfalz",
    distance: 52,
    population: 9000,
    description: "Stadt am Main-Donau-Kanal. Kompetente Rohrreinigung."
  },
  {
    name: "Beilngries",
    slug: "beilngries",
    region: "Oberbayern",
    distance: 60,
    population: 10000,
    description: "Stadt im Altmühltal. Zuverlässiger Service."
  },
  {
    name: "Dietfurt an der Altmühl",
    slug: "dietfurt-an-der-altmuehl",
    region: "Oberpfalz",
    distance: 65,
    population: 6000,
    description: "Sieben-Täler-Stadt. Professionelle Abflussreinigung."
  },
  // Unterfranken (Grenzbereich)
  {
    name: "Würzburg",
    slug: "wuerzburg",
    region: "Unterfranken",
    distance: 100,
    population: 128000,
    description: "Universitätsstadt am Main. Professionelle Rohrreinigung."
  },
  {
    name: "Kitzingen",
    slug: "kitzingen",
    region: "Unterfranken",
    distance: 80,
    population: 22000,
    description: "Weinstadt am Main. Schneller Rohrreinigungsservice."
  },
  {
    name: "Volkach",
    slug: "volkach",
    region: "Unterfranken",
    distance: 75,
    population: 9000,
    description: "Weinort an der Mainschleife. Kompetente Kanalreinigung."
  },
  {
    name: "Gerolzhofen",
    slug: "gerolzhofen",
    region: "Unterfranken",
    distance: 85,
    population: 7000,
    description: "Stadt im Steigerwald. Zuverlässiger Service."
  },
  {
    name: "Haßfurt",
    slug: "hassfurt",
    region: "Unterfranken",
    distance: 82,
    population: 14000,
    description: "Stadt am Main. Professionelle Rohrreinigung."
  },
  {
    name: "Eltmann",
    slug: "eltmann",
    region: "Unterfranken",
    distance: 78,
    population: 5000,
    description: "Stadt am Main. Schnelle Hilfe."
  },
  {
    name: "Ebern",
    slug: "ebern",
    region: "Unterfranken",
    distance: 88,
    population: 7000,
    description: "Stadt im Landkreis Haßberge. 24/7 Notdienst."
  },
  // Schwaben (Grenzbereich)
  {
    name: "Nördlingen",
    slug: "noerdlingen",
    region: "Schwaben",
    distance: 90,
    population: 21000,
    description: "Riesstadt. Professionelle Rohrreinigung."
  },
  {
    name: "Donauwörth",
    slug: "donauwoerth",
    region: "Schwaben",
    distance: 95,
    population: 20000,
    description: "Stadt an der Donau. Schneller Service."
  },
  {
    name: "Oettingen in Bayern",
    slug: "oettingen-in-bayern",
    region: "Schwaben",
    distance: 85,
    population: 5000,
    description: "Residenzstadt. Kompetente Abflussreinigung."
  },
  // Weitere wichtige Orte
  {
    name: "Burgthann",
    slug: "burgthann",
    region: "Mittelfranken",
    distance: 18,
    population: 12000,
    description: "Markt bei Nürnberg. Schnelle Anfahrt garantiert."
  },
  {
    name: "Schwarzenbruck",
    slug: "schwarzenbruck",
    region: "Mittelfranken",
    distance: 15,
    population: 9000,
    description: "Gemeinde im Nürnberger Land. Professioneller Service."
  },
  {
    name: "Winkelhaid",
    slug: "winkelhaid",
    region: "Mittelfranken",
    distance: 14,
    population: 5000,
    description: "Gemeinde bei Altdorf. Zuverlässige Rohrreinigung."
  },
  {
    name: "Schnaittach",
    slug: "schnaittach",
    region: "Mittelfranken",
    distance: 25,
    population: 8000,
    description: "Markt im Nürnberger Land. Kompetente Hilfe."
  },
  {
    name: "Simmelsdorf",
    slug: "simmelsdorf",
    region: "Mittelfranken",
    distance: 30,
    population: 3000,
    description: "Gemeinde bei Hersbruck. 24/7 Notdienst."
  },
  {
    name: "Hersbruck",
    slug: "hersbruck",
    region: "Mittelfranken",
    distance: 28,
    population: 13000,
    description: "Stadt im Pegnitztal. Professionelle Rohrreinigung."
  },
  {
    name: "Happurg",
    slug: "happurg",
    region: "Mittelfranken",
    distance: 32,
    population: 4000,
    description: "Gemeinde am Happurger Stausee. Schnelle Hilfe."
  },
  {
    name: "Velden",
    slug: "velden",
    region: "Mittelfranken",
    distance: 35,
    population: 2000,
    description: "Markt im Pegnitztal. Zuverlässiger Service."
  },
  {
    name: "Königstein",
    slug: "koenigstein",
    region: "Mittelfranken",
    distance: 38,
    population: 2000,
    description: "Markt in der Hersbrucker Schweiz. Kompetente Kanalreinigung."
  },
  {
    name: "Betzenstein",
    slug: "betzenstein",
    region: "Mittelfranken",
    distance: 42,
    population: 2500,
    description: "Stadt in der Fränkischen Schweiz. Professioneller Service."
  },
  {
    name: "Plech",
    slug: "plech",
    region: "Mittelfranken",
    distance: 45,
    population: 1500,
    description: "Markt in der Fränkischen Schweiz. Schnelle Anfahrt."
  },
  {
    name: "Ottensoos",
    slug: "ottensoos",
    region: "Mittelfranken",
    distance: 15,
    population: 3500,
    description: "Gemeinde im Nürnberger Land. 24/7 Notdienst."
  },
  {
    name: "Neunkirchen am Sand",
    slug: "neunkirchen-am-sand",
    region: "Mittelfranken",
    distance: 18,
    population: 8500,
    description: "Markt bei Nürnberg. Professionelle Abflussreinigung."
  },
  {
    name: "Eckental",
    slug: "eckental",
    region: "Mittelfranken",
    distance: 16,
    population: 14000,
    description: "Markt bei Erlangen. Zuverlässige Rohrreinigung."
  },
  {
    name: "Uttenreuth",
    slug: "uttenreuth",
    region: "Mittelfranken",
    distance: 15,
    population: 5500,
    description: "Gemeinde bei Erlangen. Kompetenter Service."
  },
  {
    name: "Buckenhof",
    slug: "buckenhof",
    region: "Mittelfranken",
    distance: 14,
    population: 4000,
    description: "Gemeinde bei Erlangen. Schnelle Hilfe."
  },
  {
    name: "Spardorf",
    slug: "spardorf",
    region: "Mittelfranken",
    distance: 15,
    population: 5000,
    description: "Gemeinde bei Erlangen. Professionelle Rohrreinigung."
  },
  {
    name: "Möhrendorf",
    slug: "moehrendorf",
    region: "Mittelfranken",
    distance: 18,
    population: 5500,
    description: "Gemeinde bei Erlangen. 24/7 Notdienst."
  },
  {
    name: "Baiersdorf",
    slug: "baiersdorf",
    region: "Mittelfranken",
    distance: 20,
    population: 8000,
    description: "Stadt bei Erlangen. Zuverlässige Kanalreinigung."
  },
];

export const regions = ["Mittelfranken", "Oberfranken", "Oberpfalz", "Unterfranken", "Schwaben", "Oberbayern"];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getCitiesByRegion(region: string): City[] {
  return cities.filter((city) => city.region === region);
}

export function getNearbyCities(distance: number = 30): City[] {
  return cities.filter((city) => city.distance <= distance);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
