export interface Destination {
  id: string;
  name: string;
  country: string;
  flightPriceFromPrague: number; // CZK
  accommodationPerNight: number; // CZK per person
  foodPerDay: number; // CZK per person
  minRecommendedDays: number;
  description: string;
  highlights: string[];
  imageUrl?: string;
}

export const destinations: Destination[] = [
  {
    id: "vienna",
    name: "Vídeň",
    country: "Rakousko",
    flightPriceFromPrague: 2500,
    accommodationPerNight: 1200,
    foodPerDay: 800,
    minRecommendedDays: 2,
    description: "Císařské město plné historie, architektury a kultury.",
    highlights: ["Schönbrunn", "Belvedere", "Vídeňská opera", "Káva a sachertorte"]
  },
  {
    id: "budapest",
    name: "Budapešť",
    country: "Maďarsko",
    flightPriceFromPrague: 2800,
    accommodationPerNight: 900,
    foodPerDay: 600,
    minRecommendedDays: 3,
    description: "Perla Dunaje s termálními lázněmi a úchvatnou architekturou.",
    highlights: ["Parlamentní budova", "Rybářská bašta", "Széchenyi lázně", "Noční plavba po Dunaji"]
  },
  {
    id: "paris",
    name: "Paříž",
    country: "Francie",
    flightPriceFromPrague: 4500,
    accommodationPerNight: 2200,
    foodPerDay: 1400,
    minRecommendedDays: 4,
    description: "Město světel, módy a romantiky.",
    highlights: ["Eiffelova věž", "Louvre", "Montmartre", "Seine a Champs-Élysées"]
  },
  {
    id: "amsterdam",
    name: "Amsterdam",
    country: "Nizozemsko",
    flightPriceFromPrague: 4200,
    accommodationPerNight: 1800,
    foodPerDay: 1200,
    minRecommendedDays: 3,
    description: "Město kanálů, muzeí a jedinečné atmosféry.",
    highlights: ["Kanály", "Van Gogh muzeum", "Jordaan čtvrť", "Květinový trh"]
  },
  {
    id: "rome",
    name: "Řím",
    country: "Itálie",
    flightPriceFromPrague: 4800,
    accommodationPerNight: 1600,
    foodPerDay: 1000,
    minRecommendedDays: 4,
    description: "Věčné město plné antických památek a skvělého jídla.",
    highlights: ["Koloseum", "Vatikán", "Fontána di Trevi", "Italská kuchyně"]
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Španělsko",
    flightPriceFromPrague: 5200,
    accommodationPerNight: 1500,
    foodPerDay: 1100,
    minRecommendedDays: 4,
    description: "Katalánské město architektury, pláží a gastronomie.",
    highlights: ["Sagrada Família", "Park Güell", "Las Ramblas", "Středozemní pláže"]
  },
  {
    id: "berlin",
    name: "Berlín",
    country: "Německo",
    flightPriceFromPrague: 3200,
    accommodationPerNight: 1300,
    foodPerDay: 900,
    minRecommendedDays: 3,
    description: "Hlavní město s bohatou historií a pulsujícím kulturním životem.",
    highlights: ["Brandenburská brána", "Muzeum ostrova", "East Side Gallery", "Berlínská zeď"]
  },
  {
    id: "lisbon",
    name: "Lisabon",
    country: "Portugalsko",
    flightPriceFromPrague: 5800,
    accommodationPerNight: 1400,
    foodPerDay: 900,
    minRecommendedDays: 4,
    description: "Slunečné město na sedmi kopcích s bohatou námořnickou historií.",
    highlights: ["Tram 28", "Belém", "Alfama", "Pastéis de nata"]
  },
  {
    id: "stockholm",
    name: "Stockholm",
    country: "Švédsko",
    flightPriceFromPrague: 4800,
    accommodationPerNight: 2000,
    foodPerDay: 1600,
    minRecommendedDays: 3,
    description: "Severská krása rozložená na 14 ostrovech.",
    highlights: ["Gamla Stan", "Vasa muzeum", "Archipelag", "Design a IKEA"]
  },
  {
    id: "copenhagen",
    name: "Kodaň",
    country: "Dánsko",
    flightPriceFromPrague: 4600,
    accommodationPerNight: 1900,
    foodPerDay: 1500,
    minRecommendedDays: 3,
    description: "Hygge, design a skandinávský životní styl.",
    highlights: ["Nyhavn", "Tivoli", "Malá mořská víla", "Christiania"]
  },
  {
    id: "zagreb",
    name: "Záhreb",
    country: "Chorvatsko",
    flightPriceFromPrague: 3800,
    accommodationPerNight: 1100,
    foodPerDay: 700,
    minRecommendedDays: 2,
    description: "Šarmantní hlavní město s rakousko-uherským dědictvím.",
    highlights: ["Dolní město", "Horní město", "Krvavý most", "Tkalčićeva ulice"]
  },
  {
    id: "florence",
    name: "Florence",
    country: "Itálie",
    flightPriceFromPrague: 5000,
    accommodationPerNight: 1700,
    foodPerDay: 1200,
    minRecommendedDays: 3,
    description: "Kolébka renesance a umění.",
    highlights: ["Uffizi", "Duomo", "Ponte Vecchio", "Toskánská kuchyně"]
  },
  {
    id: "brussels",
    name: "Brusel",
    country: "Belgie",
    flightPriceFromPrague: 4000,
    accommodationPerNight: 1600,
    foodPerDay: 1300,
    minRecommendedDays: 2,
    description: "Evropské hlavní město s výborným pivem a čokoládou.",
    highlights: ["Grand Place", "Atomium", "Belgické pivo", "Čokoláda a vafle"]
  },
  {
    id: "zurich",
    name: "Curych",
    country: "Švýcarsko",
    flightPriceFromPrague: 5500,
    accommodationPerNight: 2800,
    foodPerDay: 2200,
    minRecommendedDays: 2,
    description: "Luxusní švýcarské město u jezera s alpským výhledem.",
    highlights: ["Curyšské jezero", "Staré město", "Bahnhofstrasse", "Alpské panorama"]
  },
  {
    id: "krakow",
    name: "Krakov",
    country: "Polsko",
    flightPriceFromPrague: 2200,
    accommodationPerNight: 800,
    foodPerDay: 500,
    minRecommendedDays: 2,
    description: "Středověké město s bohatou historií a krásnou architekturou.",
    highlights: ["Hlavní náměstí", "Wawelský hrad", "Židovská čtvrť", "Solné doly"]
  },
  {
    id: "dublin",
    name: "Dublin",
    country: "Irsko",
    flightPriceFromPrague: 5200,
    accommodationPerNight: 1800,
    foodPerDay: 1400,
    minRecommendedDays: 3,
    description: "Irské hlavní město s bohatou literární tradicí.",
    highlights: ["Temple Bar", "Trinity College", "Guinness Storehouse", "Irská hudba"]
  },
  {
    id: "edinburgh",
    name: "Edinburgh",
    country: "Skotsko",
    flightPriceFromPrague: 5800,
    accommodationPerNight: 1700,
    foodPerDay: 1300,
    minRecommendedDays: 3,
    description: "Skotské hlavní město s hradem a whisky.",
    highlights: ["Edinburgh Castle", "Royal Mile", "Arthur's Seat", "Skotská whisky"]
  },
  {
    id: "oslo",
    name: "Oslo",
    country: "Norsko",
    flightPriceFromPrague: 6000,
    accommodationPerNight: 2400,
    foodPerDay: 1800,
    minRecommendedDays: 3,
    description: "Norské hlavní město obklopené fjordy a přírodou.",
    highlights: ["Vigeland Park", "Opera House", "Fjordy", "Severské design"]
  },
  {
    id: "athens",
    name: "Atény",
    country: "Řecko",
    flightPriceFromPrague: 5400,
    accommodationPerNight: 1200,
    foodPerDay: 800,
    minRecommendedDays: 4,
    description: "Kolébka demokracie a antické civilizace.",
    highlights: ["Akropolis", "Parthénon", "Řecká kuchyně", "Antické památky"]
  },
  {
    id: "helsinki",
    name: "Helsinky",
    country: "Finsko",
    flightPriceFromPrague: 5500,
    accommodationPerNight: 1900,
    foodPerDay: 1500,
    minRecommendedDays: 3,
    description: "Finské hlavní město s moderní architekturou a saunami.",
    highlights: ["Market Square", "Temppeliaukio", "Suomenlinna", "Finský design"]
  }
];

export const mockItineraries = {
  vienna: [
    "Den 1: Příjezd, prohlídka Stephansdom a procházka centrem",
    "Den 2: Schönbrunn, Belvedere a večerní koncert"
  ],
  budapest: [
    "Den 1: Budapešť - Rybářská bašta a Budínský hrad",
    "Den 2: Parlamentní budova, termální lázně Széchenyi",
    "Den 3: Plavba po Dunaji a Váci utca pro nákupy"
  ],
  paris: [
    "Den 1: Eiffelova věž, Champ de Mars a večerní plavba po Seine",
    "Den 2: Louvre, Tuileries a procházka na Montmartre",
    "Den 3: Versailles - celodenní výlet",
    "Den 4: Champs-Élysées, Arc de Triomphe a latinská čtvrť"
  ]
};