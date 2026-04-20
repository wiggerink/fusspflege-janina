export const site = {
  name: "Janinas Fußpflege",
  tagline: "Moderne kosmetische Fußpflege in Emlichheim",
  description:
    "Janinas Fußpflege in Emlichheim – zertifizierte kosmetische Fußpflege, sanfte Hornhautentfernung, liebevolle Nagelpflege. Für gesunde, schöne Füße in der Grafschaft Bentheim.",
  url: "https://fusspflege-janina.de",
  owner: "Janina Wiggerink",
  phone: "+49 174 4110098",
  phoneDisplay: "0174 / 41 10 098",
  whatsapp: "491744110098",
  email: "kontakt@fusspflege-janina.de",
  address: {
    street: "Anne-Frank-Str. 5",
    zip: "49824",
    city: "Emlichheim",
    region: "Niedersachsen",
    country: "DE",
    countryName: "Deutschland",
    lat: 52.6109,
    lng: 6.8472,
  },
  hours: [
    { day: "Montag", time: "Geschlossen" },
    { day: "Dienstag", time: "09:00 – 18:00" },
    { day: "Mittwoch", time: "09:00 – 18:00" },
    { day: "Donnerstag", time: "09:00 – 18:00" },
    { day: "Freitag", time: "09:00 – 18:00" },
    { day: "Samstag", time: "Nach Vereinbarung" },
    { day: "Sonntag", time: "Geschlossen" },
  ],
  openingHoursSchema: [
    "Tu-Fr 09:00-18:00",
    "Sa 10:00-14:00",
  ],
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  nav: [
    { label: "Start", href: "/" },
    { label: "Über mich", href: "/ueber-mich" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Studio", href: "/studio" },
    { label: "Kontakt", href: "/kontakt" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  includes: string[];
  price: string;
  duration: string;
  image: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "kosmetische-fusspflege",
    title: "Kosmetische Fußpflege",
    tagline: "Die wohltuende Basis-Behandlung",
    description:
      "Mein Herzstück: Eine ganzheitliche Fußpflege, die Ihre Füße von Kopf bis Ferse verwöhnt. Mit zertifizierten Markenprodukten, hygienisch einwandfreien Instrumenten und vor allem: viel Zeit für Sie.",
    includes: [
      "Entspannendes Fußbad mit hochwertigen Essenzen",
      "Sanfte, präzise Nagelpflege & Kürzung",
      "Professionelle Hornhautentfernung",
      "Pflege und Bearbeitung der Nagelhaut",
      "Finale Fußmassage mit hochwertiger Pflegecreme",
    ],
    price: "ab 35 €",
    duration: "ca. 45 Minuten",
    image: "/images/hornhautbehandlung.jpg",
    featured: true,
  },
  {
    slug: "huehneraugen",
    title: "Hühneraugen-Behandlung",
    tagline: "Schmerzfrei und nachhaltig",
    description:
      "Hühneraugen können im Alltag wirklich lästig werden. Ich entferne sie fachgerecht und zeige Ihnen, wie Sie einer Neubildung vorbeugen können.",
    includes: [
      "Fachgerechte Entfernung des Hühnerauges",
      "Gezielte Druckentlastung",
      "Beratung zur Ursache & Prävention",
      "Pflegeempfehlung für zuhause",
    ],
    price: "Aufpreis nach Aufwand",
    duration: "Zusatzleistung",
    image: "/images/spa-detail-1.jpg",
  },
  {
    slug: "nagellack",
    title: "Nagellack & Feinschliff",
    tagline: "Der perfekte letzte Schliff",
    description:
      "Ob zarter Nude-Ton oder selbstbewusstes Rot – nach der Pflege erhalten Ihre Nägel auf Wunsch einen makellosen Lack-Finish in Ihrer Wieblingsfarbe.",
    includes: [
      "Entfernung alter Lackreste",
      "Präzises Formen & Feilen",
      "Base Coat für gesunde Nägel",
      "Farbauftrag in Ihrer Wunschfarbe",
      "Schützender Top Coat",
    ],
    price: "ab 5 € Aufpreis",
    duration: "ca. 15 Minuten zusätzlich",
    image: "/images/spa-detail-3.jpg",
  },
  {
    slug: "eingewachsene-naegel",
    title: "Eingewachsene Nägel",
    tagline: "Behutsame Hilfe für schmerzende Nägel",
    description:
      "Eingewachsene Nägel sind unangenehm und können sich entzünden. Ich behandle sie sanft, entlaste das betroffene Gewebe und berate Sie zur richtigen Nagelpflege.",
    includes: [
      "Vorsichtige Nagelkorrektur",
      "Entlastung des umliegenden Gewebes",
      "Desinfektion und Pflege",
      "Tipps zur richtigen Schnitttechnik",
    ],
    price: "Aufpreis nach Aufwand",
    duration: "Zusatzleistung",
    image: "/images/mobile-fusspflege.jpg",
  },
  {
    slug: "gutschein",
    title: "Geschenkgutschein",
    tagline: "Wohltuend verschenken",
    description:
      "Machen Sie einem lieben Menschen eine Freude: Geschenkgutscheine für alle Behandlungen sind in jedem Wunschbetrag erhältlich. Liebevoll gestaltet und sofort einlösbar.",
    includes: [
      "Individueller Wunschbetrag",
      "Liebevoll verpackt",
      "Auf alle Leistungen einlösbar",
      "Ideal zu Geburtstag, Muttertag & Weihnachten",
    ],
    price: "ab 20 €",
    duration: "Individuell",
    image: "/images/spa-beauty-2.jpg",
  },
];

export const testimonials = [
  {
    name: "Anna K.",
    location: "Emlichheim",
    rating: 5,
    text: "Ich bin absolut begeistert! Janina nimmt sich so viel Zeit, ihre Art ist herzlich und professionell zugleich. Meine Füße fühlen sich wie neu an – ich komme ganz sicher wieder.",
  },
  {
    name: "Marlies H.",
    location: "Nordhorn",
    rating: 5,
    text: "Eine absolute Wohltat. Das Studio ist wunderschön, sauber und die Atmosphäre so entspannend. Bestpreis-Leistung in der ganzen Grafschaft.",
  },
  {
    name: "Bernd T.",
    location: "Coevorden",
    rating: 5,
    text: "Als Mann war ich lange skeptisch – bei Janina habe ich mich ab der ersten Minute gut aufgehoben gefühlt. Klare Empfehlung, auch für die Herren!",
  },
  {
    name: "Silvia M.",
    location: "Uelsen",
    rating: 5,
    text: "Kompetent, einfühlsam und mit Liebe zum Detail. Nach der Behandlung fühlen sich meine Füße jedes Mal an wie frisch geboren. Danke, Janina!",
  },
];

export const faqs = [
  {
    q: "Muss ich einen Termin vereinbaren?",
    a: "Ja, eine Behandlung in meinem Studio erfolgt ausschließlich nach Terminabsprache. So habe ich ausreichend Zeit für Sie und Sie müssen keine Wartezeit einplanen. Termine können Sie ganz einfach telefonisch, per WhatsApp oder über das Kontaktformular vereinbaren.",
  },
  {
    q: "Wie lange dauert eine Behandlung?",
    a: "Eine vollständige kosmetische Fußpflege dauert bei mir etwa 45 Minuten. Ich nehme mir bewusst Zeit – gute Fußpflege lässt sich nicht durch die Uhr hetzen.",
  },
  {
    q: "Welche Produkte verwenden Sie?",
    a: "Ich arbeite ausschließlich mit hochwertigen Marken-Produkten von Bähr, Allpresan, Ruck und Peclavus. Alle Produkte sind dermatologisch getestet und auch für empfindliche Haut geeignet.",
  },
  {
    q: "Ist die Behandlung auch für Diabetiker geeignet?",
    a: "Meine Fußpflege ist eine kosmetische Behandlung und kann das Wohlbefinden unterstützen. Diabetiker sollten bei offenen Wunden oder akuten Problemen zusätzlich eine medizinische Fußpflege konsultieren. Sprechen Sie mich gerne an – ich berate Sie ehrlich.",
  },
  {
    q: "Kann ich einen Gutschein verschenken?",
    a: "Ja, sehr gerne! Geschenkgutscheine sind in jedem gewünschten Betrag erhältlich und werden liebevoll von mir verpackt. Ein wunderschönes Geschenk zu Geburtstagen, Muttertag, Weihnachten oder einfach so.",
  },
  {
    q: "Was kostet eine Behandlung?",
    a: "Die kosmetische Basis-Fußpflege beginnt bei 35 €. Für Zusatzleistungen wie Hühneraugen-Behandlung oder Nagellack fallen je nach Aufwand moderate Aufpreise an. Eine transparente Preisübersicht finden Sie auf der Leistungen-Seite.",
  },
  {
    q: "Gibt es Parkmöglichkeiten?",
    a: "Ja, direkt vor dem Studio in der Anne-Frank-Straße stehen Parkplätze zur Verfügung. Sie erreichen mich bequem mit dem Auto aus Emlichheim und Umgebung.",
  },
];
