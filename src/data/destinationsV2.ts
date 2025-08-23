export interface DestinationV2 {
  id: string;
  city: string;
  country: string;
  avgFlightCosts: {
    Prague: number;
    Vienna: number;
    Brno: number;
  };
  avgNightCostPerPerson: number;
  avgFoodPerDayPerPerson: number;
  topAttractions: string[];
  freeActivities: string[];
  recommendedLength: number;
  description: string;
  itinerary: string[];
}

export const destinationsV2: DestinationV2[] = [
  {
    id: "paris",
    city: "Paříž",
    country: "Francie",
    avgFlightCosts: {
      Prague: 120,
      Vienna: 140,
      Brno: 135
    },
    avgNightCostPerPerson: 80,
    avgFoodPerDayPerPerson: 45,
    topAttractions: [
      "Eiffelova věž",
      "Louvre",
      "Notre-Dame",
      "Arc de Triomphe",
      "Montmartre a Sacré-Cœur"
    ],
    freeActivities: [
      "Procházka podél Seine",
      "Jardins du Luxembourg",
      "Montmartre a umělci",
      "Père Lachaise hřbitov"
    ],
    recommendedLength: 4,
    description: "Město světel, módy a romantiky s nekonečnými kulturními poklady.",
    itinerary: [
      "Den 1: Příjezd, Eiffelova věž, večerní plavba po Seine",
      "Den 2: Louvre (rezervovat předem), Tuileries, procházka na Île de la Cité",
      "Den 3: Montmartre, Sacré-Cœur, Moulin Rouge čtvrť, večer v Le Marais",
      "Den 4: Versailles (celodenní výlet) nebo Champs-Élysées a Arc de Triomphe"
    ]
  },
  {
    id: "london",
    city: "Londýn",
    country: "Velká Británie",
    avgFlightCosts: {
      Prague: 110,
      Vienna: 130,
      Brno: 125
    },
    avgNightCostPerPerson: 90,
    avgFoodPerDayPerPerson: 50,
    topAttractions: [
      "Big Ben a Westminster",
      "Tower Bridge",
      "British Museum",
      "Buckinghamský palác",
      "London Eye"
    ],
    freeActivities: [
      "Hyde Park a Speaker's Corner",
      "Tate Modern",
      "Camden Market",
      "Greenwich Observatory"
    ],
    recommendedLength: 4,
    description: "Královské město s bohatou historií, světovými muzei a jedinečnou atmosférou.",
    itinerary: [
      "Den 1: Westminster, Big Ben, Buckinghamský palác, St. James's Park",
      "Den 2: Tower of London, Tower Bridge, Thames Walk, Borough Market",
      "Den 3: British Museum, Covent Garden, West End divadlo",
      "Den 4: Greenwich, Cutty Sark, Royal Observatory, večer v Shoreditch"
    ]
  },
  {
    id: "rome",
    city: "Řím",
    country: "Itálie",
    avgFlightCosts: {
      Prague: 100,
      Vienna: 95,
      Brno: 105
    },
    avgNightCostPerPerson: 60,
    avgFoodPerDayPerPerson: 35,
    topAttractions: [
      "Koloseum",
      "Vatikán a Sixtinská kaple",
      "Fontána di Trevi",
      "Pantheon",
      "Španělské schody"
    ],
    freeActivities: [
      "Villa Borghese park",
      "Trastevere čtvrť",
      "Piazza Navona",
      "Campo de' Fiori trh"
    ],
    recommendedLength: 4,
    description: "Věčné město plné antických památek, úžasného jídla a nezapomenutelné atmosféry.",
    itinerary: [
      "Den 1: Koloseum (rezervovat!), Palatinský pahorek, Circus Maximus",
      "Den 2: Vatikán - Sixtinská kaple, Bazilika sv. Petra (vstup zdarma)",
      "Den 3: Fontána di Trevi, Pantheon, Španělské schody, večer v Trastevere",
      "Den 4: Villa Adriana v Tivoli nebo Ostia Antica (antický přístav)"
    ]
  },
  {
    id: "barcelona",
    city: "Barcelona",
    country: "Španělsko",
    avgFlightCosts: {
      Prague: 95,
      Vienna: 110,
      Brno: 105
    },
    avgNightCostPerPerson: 55,
    avgFoodPerDayPerPerson: 40,
    topAttractions: [
      "Sagrada Família",
      "Park Güell",
      "Casa Batlló",
      "Las Ramblas",
      "Barceloneta pláž"
    ],
    freeActivities: [
      "Gothic Quarter procházka",
      "Barceloneta beach",
      "Park de la Ciutadella",
      "Bunkers del Carmel (výhled)"
    ],
    recommendedLength: 4,
    description: "Katalánské město architektury Gaudího, pláží a vynikající gastronomie.",
    itinerary: [
      "Den 1: Sagrada Família (rezervovat!), Eixample district, Casa Batlló",
      "Den 2: Park Güell (rezervovat!), Gràcia čtvrť, Casa Milà",
      "Den 3: Gothic Quarter, Las Ramblas, Barceloneta pláž",
      "Den 4: Montjuïc, Palau Nacional, Magic Fountain (večer)"
    ]
  },
  {
    id: "amsterdam",
    city: "Amsterdam",
    country: "Nizozemsko",
    avgFlightCosts: {
      Prague: 85,
      Vienna: 105,
      Brno: 95
    },
    avgNightCostPerPerson: 70,
    avgFoodPerDayPerPerson: 45,
    topAttractions: [
      "Anne Frank House",
      "Van Gogh Museum",
      "Rijksmuseum",
      "Jordaan čtvrť",
      "Kanály"
    ],
    freeActivities: [
      "Vondelpark",
      "Bloemenmarkt (květinový trh)",
      "Red Light District",
      "Begijnhof"
    ],
    recommendedLength: 3,
    description: "Město kanálů, světových muzeí a liberální atmosféry.",
    itinerary: [
      "Den 1: Kanály boat tour, Jordaan district, Anne Frank House (rezervovat!)",
      "Den 2: Rijksmuseum, Vondelpark, Leidseplein večer",
      "Den 3: Van Gogh Museum, Bloemenmarkt, Red Light District"
    ]
  },
  {
    id: "vienna",
    city: "Vídeň",
    country: "Rakousko",
    avgFlightCosts: {
      Prague: 60,
      Vienna: 0,
      Brno: 45
    },
    avgNightCostPerPerson: 65,
    avgFoodPerDayPerPerson: 40,
    topAttractions: [
      "Schönbrunn",
      "Belvedere",
      "Vídeňská státní opera",
      "Stephansdom",
      "Hofburg"
    ],
    freeActivities: [
      "Prater park",
      "Naschmarkt",
      "Stadtpark",
      "Danube Island"
    ],
    recommendedLength: 3,
    description: "Císařské město plné historie, hudby a kávy.",
    itinerary: [
      "Den 1: Schönbrunn Palace a zahrady, Mariahilfer Strasse",
      "Den 2: Historické centrum, Stephansdom, Hofburg, vídeňská kavárna",
      "Den 3: Belvedere (Klimt), Prater, večerní koncert nebo opera"
    ]
  },
  {
    id: "prague",
    city: "Praha",
    country: "Česká republika",
    avgFlightCosts: {
      Prague: 0,
      Vienna: 60,
      Brno: 30
    },
    avgNightCostPerPerson: 40,
    avgFoodPerDayPerPerson: 25,
    topAttractions: [
      "Pražský hrad",
      "Karlův most",
      "Staroměstské náměstí",
      "Josefov",
      "Petřínská rozhledna"
    ],
    freeActivities: [
      "Petřín Hill",
      "Kampa Island",
      "Wenceslas Square",
      "Vítkov Hill panorama"
    ],
    recommendedLength: 3,
    description: "Zlatá Praha - město sta věží s magickou atmosférou.",
    itinerary: [
      "Den 1: Pražský hrad, Malá Strana, Karlův most při západu slunce",
      "Den 2: Staroměstské náměstí, Orloj, Josefov, večer v pivnici",
      "Den 3: Vyšehrad, Wenceslas Square, Petřín, panorama města"
    ]
  },
  {
    id: "budapest",
    city: "Budapešť",
    country: "Maďarsko",
    avgFlightCosts: {
      Prague: 70,
      Vienna: 50,
      Brno: 65
    },
    avgNightCostPerPerson: 45,
    avgFoodPerDayPerPerson: 30,
    topAttractions: [
      "Parlamentní budova",
      "Rybářská bašta",
      "Széchenyi lázně",
      "Budínský hrad",
      "Dunaj v noci"
    ],
    freeActivities: [
      "Citadella vyhlídka",
      "Margaret Island",
      "Central Market Hall",
      "Danube promenade"
    ],
    recommendedLength: 3,
    description: "Perla Dunaje s termálními lázněmi a úchvatnou architekturou.",
    itinerary: [
      "Den 1: Budínský hrad, Rybářská bašta, večerní plavba po Dunaji",
      "Den 2: Parlament (tour), Széchenyi lázně, Váci utca",
      "Den 3: Great Market Hall, Margaret Island, Citadella sunset"
    ]
  },
  {
    id: "berlin",
    city: "Berlín",
    country: "Německo",
    avgFlightCosts: {
      Prague: 75,
      Vienna: 90,
      Brno: 85
    },
    avgNightCostPerPerson: 55,
    avgFoodPerDayPerPerson: 35,
    topAttractions: [
      "Brandenburská brána",
      "East Side Gallery",
      "Museum Island",
      "Reichstag",
      "Checkpoint Charlie"
    ],
    freeActivities: [
      "Tiergarten park",
      "Memorial to the Murdered Jews",
      "Hackescher Markt",
      "Sunday flea markets"
    ],
    recommendedLength: 3,
    description: "Hlavní město s fascinující historií a pulzujícím kulturním životem.",
    itinerary: [
      "Den 1: Brandenburská brána, Reichstag (rezervovat!), Unter den Linden",
      "Den 2: East Side Gallery, Kreuzberg district, Berlin Wall Memorial",
      "Den 3: Museum Island, Hackescher Markt, večer v Prenzlauer Berg"
    ]
  },
  {
    id: "lisbon",
    city: "Lisabon",
    country: "Portugalsko",
    avgFlightCosts: {
      Prague: 130,
      Vienna: 145,
      Brno: 140
    },
    avgNightCostPerPerson: 50,
    avgFoodPerDayPerPerson: 30,
    topAttractions: [
      "Tram 28",
      "Belém Tower",
      "Jerónimos Monastery",
      "Alfama district",
      "São Jorge Castle"
    ],
    freeActivities: [
      "Miradouro da Senhora do Monte",
      "LX Factory",
      "Príncipe Real garden",
      "Cais do Sodré riverside"
    ],
    recommendedLength: 4,
    description: "Slunečné město na sedmi kopcích s bohatou námořnickou historií.",
    itinerary: [
      "Den 1: Tram 28 tour, Alfama, Fado evening",
      "Den 2: Belém - Jerónimos Monastery, Belém Tower, pastéis de nata",
      "Den 3: São Jorge Castle, Chiado, LX Factory",
      "Den 4: Sintra day trip - Pena Palace, Quinta da Regaleira"
    ]
  },
  {
    id: "madrid",
    city: "Madrid",
    country: "Španělsko",
    avgFlightCosts: {
      Prague: 105,
      Vienna: 115,
      Brno: 110
    },
    avgNightCostPerPerson: 60,
    avgFoodPerDayPerPerson: 35,
    topAttractions: [
      "Prado Museum",
      "Reina Sofía",
      "Retiro Park",
      "Royal Palace",
      "Gran Vía"
    ],
    freeActivities: [
      "Retiro Park",
      "El Rastro flea market",
      "Temple of Debod",
      "Malasaña district"
    ],
    recommendedLength: 3,
    description: "Španělské hlavní město umění, tapas a nezměrné energie.",
    itinerary: [
      "Den 1: Prado Museum, Retiro Park, Puerta del Sol",
      "Den 2: Royal Palace, Malasaña, Gran Vía, tapas tour",
      "Den 3: Reina Sofía, Thyssen Museum, El Rastro (neděle)"
    ]
  },
  {
    id: "athens",
    city: "Atény",
    country: "Řecko",
    avgFlightCosts: {
      Prague: 115,
      Vienna: 100,
      Brno: 120
    },
    avgNightCostPerPerson: 45,
    avgFoodPerDayPerPerson: 25,
    topAttractions: [
      "Akropolis",
      "Parthénon",
      "Ancient Agora",
      "National Archaeological Museum",
      "Plaka district"
    ],
    freeActivities: [
      "National Garden",
      "Lycabettus Hill",
      "Changing of the Guard",
      "Monastiraki flea market"
    ],
    recommendedLength: 3,
    description: "Kolébka demokracie a antické civilizace s úžasnou gastronomií.",
    itinerary: [
      "Den 1: Akropolis a museum (rezervovat!), Plaka evening",
      "Den 2: Ancient Agora, National Archaeological Museum, Monastiraki",
      "Den 3: National Garden, Lycabettus Hill sunset, Greek taverna"
    ]
  },
  {
    id: "venice",
    city: "Benátky",
    country: "Itálie",
    avgFlightCosts: {
      Prague: 90,
      Vienna: 85,
      Brno: 95
    },
    avgNightCostPerPerson: 80,
    avgFoodPerDayPerPerson: 50,
    topAttractions: [
      "Náměstí sv. Marka",
      "Dóžecí palác",
      "Rialto Bridge",
      "Gondola ride",
      "Murano island"
    ],
    freeActivities: [
      "Rialto Market",
      "Castello district walk",
      "Giardini Biennale",
      "Dorsoduro galleries"
    ],
    recommendedLength: 2,
    description: "Romantické město na vodě s jedinečnou architekturou a atmosférou.",
    itinerary: [
      "Den 1: Náměstí sv. Marka, Dóžecí palác, gondola ride",
      "Den 2: Murano & Burano islands nebo Rialto Market a Castello walk"
    ]
  },
  {
    id: "florence",
    city: "Florence",
    country: "Itálie",
    avgFlightCosts: {
      Prague: 95,
      Vienna: 90,
      Brno: 100
    },
    avgNightCostPerPerson: 65,
    avgFoodPerDayPerPerson: 40,
    topAttractions: [
      "Uffizi Gallery",
      "Duomo",
      "Ponte Vecchio",
      "Palazzo Pitti",
      "Oltrarno district"
    ],
    freeActivities: [
      "Piazzale Michelangelo",
      "San Lorenzo Market",
      "Santo Spirito square",
      "Boboli Gardens (entrance)"
    ],
    recommendedLength: 3,
    description: "Kolébka renesance plná uměleckých pokladů a toskánské kuchyně.",
    itinerary: [
      "Den 1: Duomo komplex, Uffizi Gallery (rezervovat!)",
      "Den 2: Oltrarno, Palazzo Pitti, Ponte Vecchio, Piazzale Michelangelo",
      "Den 3: San Lorenzo Market, Palazzo Vecchio, gelato tour"
    ]
  },
  {
    id: "milan",
    city: "Milán",
    country: "Itálie",
    avgFlightCosts: {
      Prague: 85,
      Vienna: 80,
      Brno: 90
    },
    avgNightCostPerPerson: 70,
    avgFoodPerDayPerPerson: 45,
    topAttractions: [
      "Duomo di Milano",
      "La Scala",
      "Quadrilatero della Moda",
      "Navigli district",
      "Brera district"
    ],
    freeActivities: [
      "Sempione Park",
      "Porta Nuova skyline",
      "Isola district",
      "Navigli aperitivo"
    ],
    recommendedLength: 2,
    description: "Módní hlavní město s překrásnou architekturou a designem.",
    itinerary: [
      "Den 1: Duomo a terasy (rezervovat!), Galleria Vittorio Emanuele, La Scala",
      "Den 2: Brera district, Navigli, Sempione Park, aperitivo"
    ]
  },
  {
    id: "dublin",
    city: "Dublin",
    country: "Irsko",
    avgFlightCosts: {
      Prague: 120,
      Vienna: 135,
      Brno: 130
    },
    avgNightCostPerPerson: 75,
    avgFoodPerDayPerPerson: 50,
    topAttractions: [
      "Trinity College & Book of Kells",
      "Guinness Storehouse",
      "Temple Bar",
      "Dublin Castle",
      "Phoenix Park"
    ],
    freeActivities: [
      "St. Stephen's Green",
      "Ha'penny Bridge",
      "Grafton Street",
      "Dublin Bay walk"
    ],
    recommendedLength: 3,
    description: "Irské hlavní město s bohatou literární tradicí a živou pub kulturou.",
    itinerary: [
      "Den 1: Trinity College, Temple Bar, Ha'penny Bridge",
      "Den 2: Guinness Storehouse, Dublin Castle, St. Patrick's Cathedral",
      "Den 3: Phoenix Park, National Gallery, traditional pub evening"
    ]
  },
  {
    id: "edinburgh",
    city: "Edinburgh",
    country: "Skotsko",
    avgFlightCosts: {
      Prague: 125,
      Vienna: 140,
      Brno: 135
    },
    avgNightCostPerPerson: 70,
    avgFoodPerDayPerPerson: 45,
    topAttractions: [
      "Edinburgh Castle",
      "Royal Mile",
      "Arthur's Seat",
      "Holyrood Palace",
      "Princes Street"
    ],
    freeActivities: [
      "Calton Hill",
      "Grassmarket",
      "Dean Village",
      "Royal Botanic Garden"
    ],
    recommendedLength: 3,
    description: "Skotské hlavní město s hradem, whisky a festival atmosférou.",
    itinerary: [
      "Den 1: Edinburgh Castle, Royal Mile, Grassmarket",
      "Den 2: Arthur's Seat hike, Holyrood Palace, Calton Hill sunset",
      "Den 3: Whisky experience, Dean Village, Princes Street shopping"
    ]
  },
  {
    id: "copenhagen",
    city: "Kodaň",
    country: "Dánsko",
    avgFlightCosts: {
      Prague: 90,
      Vienna: 105,
      Brno: 100
    },
    avgNightCostPerPerson: 85,
    avgFoodPerDayPerPerson: 60,
    topAttractions: [
      "Nyhavn",
      "Tivoli Gardens",
      "Little Mermaid",
      "Rosenborg Castle",
      "Christiania"
    ],
    freeActivities: [
      "King's Garden",
      "Assistens Cemetery",
      "Superkilen Park",
      "Islands Brygge harbor bath"
    ],
    recommendedLength: 3,
    description: "Hygge, design a skandinávský životní styl v přístavním městě.",
    itinerary: [
      "Den 1: Nyhavn, Little Mermaid, Kastellet fortress",
      "Den 2: Tivoli Gardens, Strøget shopping, Rosenborg Castle",
      "Den 3: Christiania, Christianshavn, Danish design museums"
    ]
  },
  {
    id: "stockholm",
    city: "Stockholm",
    country: "Švédsko",
    avgFlightCosts: {
      Prague: 100,
      Vienna: 115,
      Brno: 110
    },
    avgNightCostPerPerson: 90,
    avgFoodPerDayPerPerson: 65,
    topAttractions: [
      "Gamla Stan",
      "Vasa Museum",
      "Royal Palace",
      "ABBA Museum",
      "Archipelago boat trip"
    ],
    freeActivities: [
      "Djurgården island",
      "Södermalm views",
      "Fotografiska (entrance fee)",
      "Monteliusvagen viewpoint"
    ],
    recommendedLength: 3,
    description: "Severská krása rozložená na 14 ostrovech s designem a přírodou.",
    itinerary: [
      "Den 1: Gamla Stan, Royal Palace, Nobel Museum",
      "Den 2: Vasa Museum, Djurgården, ABBA Museum",
      "Den 3: Södermalm, Fotografiska, archipelago boat trip"
    ]
  },
  {
    id: "oslo",
    city: "Oslo",
    country: "Norsko",
    avgFlightCosts: {
      Prague: 110,
      Vienna: 125,
      Brno: 120
    },
    avgNightCostPerPerson: 95,
    avgFoodPerDayPerPerson: 70,
    topAttractions: [
      "Vigeland Sculpture Park",
      "Opera House",
      "Viking Ship Museum",
      "Holmenkollen Ski Jump",
      "Munch Museum"
    ],
    freeActivities: [
      "Aker Brygge waterfront",
      "Grünerløkka district",
      "Bygdøy peninsula",
      "Ekeberg Sculpture Park"
    ],
    recommendedLength: 3,
    description: "Norské hlavní město obklopené fjordy s moderní architekturou.",
    itinerary: [
      "Den 1: Opera House, Aker Brygge, Vigeland Park",
      "Den 2: Viking Ship Museum, Holmenkollen, Grünerløkka",
      "Den 3: Munch Museum, fjord cruise nebo Bygdøy museums"
    ]
  },
  {
    id: "munich",
    city: "Mnichov",
    country: "Německo",
    avgFlightCosts: {
      Prague: 70,
      Vienna: 65,
      Brno: 75
    },
    avgNightCostPerPerson: 70,
    avgFoodPerDayPerPerson: 45,
    topAttractions: [
      "Marienplatz",
      "Neuschwanstein (day trip)",
      "English Garden",
      "Viktualienmarkt",
      "BMW Museum"
    ],
    freeActivities: [
      "English Garden surfing",
      "Olympiapark",
      "Isar river walk",
      "Schwabing district"
    ],
    recommendedLength: 3,
    description: "Bavorské město piva, záhrad a alpské blízkosti.",
    itinerary: [
      "Den 1: Marienplatz, Viktualienmarkt, Hofbräuhaus",
      "Den 2: Neuschwanstein Castle day trip",
      "Den 3: English Garden, BMW Museum, Schwabing evening"
    ]
  },
  {
    id: "zurich",
    city: "Curych",
    country: "Švýcarsko",
    avgFlightCosts: {
      Prague: 120,
      Vienna: 110,
      Brno: 125
    },
    avgNightCostPerPerson: 120,
    avgFoodPerDayPerPerson: 80,
    topAttractions: [
      "Lake Zurich",
      "Old Town",
      "Bahnhofstrasse",
      "Uetliberg mountain",
      "Rhine Falls (day trip)"
    ],
    freeActivities: [
      "Lindenhof viewpoint",
      "Lake Zurich promenade",
      "Zurich West district",
      "Botanical Garden"
    ],
    recommendedLength: 2,
    description: "Luxusní švýcarské město u jezera s alpským panoramatem.",
    itinerary: [
      "Den 1: Old Town, Bahnhofstrasse, Lake Zurich boat trip",
      "Den 2: Uetliberg mountain nebo Rhine Falls day trip"
    ]
  },
  {
    id: "brussels",
    city: "Brusel",
    country: "Belgie",
    avgFlightCosts: {
      Prague: 85,
      Vienna: 100,
      Brno: 95
    },
    avgNightCostPerPerson: 65,
    avgFoodPerDayPerPerson: 50,
    topAttractions: [
      "Grand Place",
      "Atomium",
      "Manneken Pis",
      "Royal Museums",
      "European Quarter"
    ],
    freeActivities: [
      "Parc du Cinquantenaire",
      "Sablon antique market",
      "Marolles district",
      "Delirium Café area"
    ],
    recommendedLength: 2,
    description: "Evropské hlavní město s výborným pivem, čokoládou a wafles.",
    itinerary: [
      "Den 1: Grand Place, Manneken Pis, chocolate tour, beer tasting",
      "Den 2: Atomium, European Quarter, Sablon district"
    ]
  },
  {
    id: "krakow",
    city: "Krakov",
    country: "Polsko",
    avgFlightCosts: {
      Prague: 55,
      Vienna: 70,
      Brno: 60
    },
    avgNightCostPerPerson: 35,
    avgFoodPerDayPerPerson: 20,
    topAttractions: [
      "Main Market Square",
      "Wawel Castle",
      "Jewish Quarter (Kazimierz)",
      "Cloth Hall",
      "St. Mary's Basilica"
    ],
    freeActivities: [
      "Planty Park ring",
      "Vistula River walk",
      "Podgórze district",
      "Nowa Huta communist tour"
    ],
    recommendedLength: 3,
    description: "Středověké město s výjimečně zachovalou architekturou a bohatou historií.",
    itinerary: [
      "Den 1: Main Square, Cloth Hall, St. Mary's, Wawel Castle",
      "Den 2: Kazimierz Jewish Quarter, Schindler's Factory",
      "Den 3: Auschwitz-Birkenau day trip nebo Salt Mine Wieliczka"
    ]
  },
  {
    id: "porto",
    city: "Porto",
    country: "Portugalsko",
    avgFlightCosts: {
      Prague: 125,
      Vienna: 140,
      Brno: 135
    },
    avgNightCostPerPerson: 45,
    avgFoodPerDayPerPerson: 25,
    topAttractions: [
      "Ribeira district",
      "Dom Luís I Bridge",
      "Livraria Lello",
      "Port wine cellars",
      "Clérigos Tower"
    ],
    freeActivities: [
      "Foz do Douro beach",
      "Crystal Palace Gardens",
      "Miradouro da Vitória",
      "Matosinhos beach"
    ],
    recommendedLength: 3,
    description: "Autentické portugalské město s portským vínem a azulejovými obklady.",
    itinerary: [
      "Den 1: Ribeira, Dom Luís Bridge, port wine tasting in Vila Nova de Gaia",
      "Den 2: Livraria Lello, Clérigos Tower, Crystal Palace Gardens",
      "Den 3: Foz do Douro, Matosinhos, coastal tram ride"
    ]
  }
];

// Pomocná funkce pro výpočet nákladů
export function calculateTotalCostV2(
  destination: DestinationV2,
  departureCity: 'Prague' | 'Vienna' | 'Brno',
  numberOfPeople: number,
  duration: number
): {
  flights: number;
  accommodation: number;
  food: number;
  total: number;
} {
  const flights = destination.avgFlightCosts[departureCity] * numberOfPeople;
  const accommodation = destination.avgNightCostPerPerson * duration * numberOfPeople;
  const food = destination.avgFoodPerDayPerPerson * duration * numberOfPeople;
  const total = flights + accommodation + food;

  return {
    flights,
    accommodation,
    food,
    total
  };
}

// Mock itineraries pro zobrazení (již jsou zahrnuty v datech destinací)
export const mockItinerariesV2 = destinationsV2.reduce((acc, dest) => {
  acc[dest.id] = dest.itinerary;
  return acc;
}, {} as Record<string, string[]>);