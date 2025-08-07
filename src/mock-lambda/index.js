// Mock AWS Lambda function pro NaplánujCestu.cz
// Tento soubor slouží jako referencia - nasaďte na AWS Lambda samostatně

const destinations = [
  {
    city: "Barcelona",
    country: "Spain",
    avgFlightCosts: {
      Prague: 90,
      Vienna: 110,
      Berlin: 85,
    },
    avgNightCostPerPerson: 50,
    avgFoodPerDayPerPerson: 30,
    freeActivities: [
      "Park Güell (outside)",
      "Barceloneta beach",
      "Gothic Quarter walking tour",
    ],
    recommendedLength: 4,
  },
  {
    city: "Paříž",
    country: "France",
    avgFlightCosts: {
      Prague: 120,
      Vienna: 140,
      Berlin: 110,
    },
    avgNightCostPerPerson: 80,
    avgFoodPerDayPerPerson: 45,
    freeActivities: [
      "Seine river walk",
      "Montmartre streets",
      "Trocadéro gardens",
    ],
    recommendedLength: 3,
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    avgFlightCosts: {
      Prague: 95,
      Vienna: 115,
      Berlin: 70,
    },
    avgNightCostPerPerson: 70,
    avgFoodPerDayPerPerson: 40,
    freeActivities: [
      "Vondelpark",
      "Canal walking tour",
      "Jordaan district",
    ],
    recommendedLength: 2,
  },
  {
    city: "Berlin",
    country: "Germany",
    avgFlightCosts: {
      Prague: 60,
      Vienna: 80,
      Berlin: 0,
    },
    avgNightCostPerPerson: 45,
    avgFoodPerDayPerPerson: 25,
    freeActivities: [
      "Brandenburg Gate",
      "East Side Gallery",
      "Tiergarten park",
    ],
    recommendedLength: 3,
  },
  {
    city: "London",
    country: "United Kingdom",
    avgFlightCosts: {
      Prague: 130,
      Vienna: 150,
      Berlin: 120,
    },
    avgNightCostPerPerson: 90,
    avgFoodPerDayPerPerson: 50,
    freeActivities: [
      "Hyde Park",
      "British Museum (free entry)",
      "Camden Market",
    ],
    recommendedLength: 3,
  },
  {
    city: "Rome",
    country: "Italy",
    avgFlightCosts: {
      Prague: 110,
      Vienna: 130,
      Berlin: 100,
    },
    avgNightCostPerPerson: 60,
    avgFoodPerDayPerPerson: 35,
    freeActivities: [
      "Pantheon",
      "Trevi Fountain",
      "Spanish Steps",
    ],
    recommendedLength: 4,
  },
  {
    city: "Madrid",
    country: "Spain",
    avgFlightCosts: {
      Prague: 115,
      Vienna: 135,
      Berlin: 105,
    },
    avgNightCostPerPerson: 55,
    avgFoodPerDayPerPerson: 30,
    freeActivities: [
      "Retiro Park",
      "Plaza Mayor",
      "Gran Vía walk",
    ],
    recommendedLength: 3,
  },
  {
    city: "Vienna",
    country: "Austria",
    avgFlightCosts: {
      Prague: 70,
      Vienna: 0,
      Berlin: 90,
    },
    avgNightCostPerPerson: 65,
    avgFoodPerDayPerPerson: 35,
    freeActivities: [
      "Schönbrunn gardens",
      "Naschmarkt",
      "Danube Island",
    ],
    recommendedLength: 2,
  },
  {
    city: "Budapest",
    country: "Hungary",
    avgFlightCosts: {
      Prague: 55,
      Vienna: 75,
      Berlin: 85,
    },
    avgNightCostPerPerson: 40,
    avgFoodPerDayPerPerson: 20,
    freeActivities: [
      "Buda Castle grounds",
      "Danube promenade",
      "Central Market Hall",
    ],
    recommendedLength: 2,
  },
  {
    city: "Lisbon",
    country: "Portugal",
    avgFlightCosts: {
      Prague: 140,
      Vienna: 160,
      Berlin: 130,
    },
    avgNightCostPerPerson: 50,
    avgFoodPerDayPerPerson: 25,
    freeActivities: [
      "Miradouro da Senhora do Monte",
      "Alfama district",
      "Cais do Sodré riverside",
    ],
    recommendedLength: 4,
  }
];

function calculateTotalCost(destination, days, people, departureCity = "Prague") {
  const flightCost = (destination.avgFlightCosts[departureCity] || destination.avgFlightCosts.Prague) * people;
  const accommodationCost = destination.avgNightCostPerPerson * days * people;
  const foodCost = destination.avgFoodPerDayPerPerson * days * people;
  
  return flightCost + accommodationCost + foodCost;
}

function generateItinerary(destination, days) {
  const itineraries = {
    "Paříž": {
      2: "Den 1: Eiffelova věž, Louvre. Den 2: Montmartre, Notre-Dame.",
      3: "Den 1: Eiffelova věž, Louvre. Den 2: Montmartre, Notre-Dame. Den 3: Versailles.",
      4: "Den 1: Eiffelova věž, Louvre. Den 2: Montmartre, Notre-Dame. Den 3: Versailles. Den 4: Champs-Élysées, Arc de Triomphe."
    },
    "Barcelona": {
      2: "Den 1: Sagrada Familia, Park Güell. Den 2: Las Ramblas, Gotická čtvrť.",
      3: "Den 1: Sagrada Familia, Park Güell. Den 2: Las Ramblas, Gotická čtvrť. Den 3: Pláže, Barceloneta.",
      4: "Den 1: Sagrada Familia, Park Güell. Den 2: Las Ramblas, Gotická čtvrť. Den 3: Pláže, Barceloneta. Den 4: Casa Batlló, Camp Nou."
    }
    // Přidejte další destinace podle potřeby
  };
  
  const baseItinerary = itineraries[destination.city]?.[days] || `${days}denní výlet do ${destination.city}`;
  const freeActivitiesText = destination.freeActivities.length > 0 
    ? `\n\nZdarma aktivity: ${destination.freeActivities.join(', ')}`
    : '';
  
  return baseItinerary + freeActivitiesText;
}

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body);
    const { budget, people, days, departureCity = "Praha" } = body;

    // Validace vstupů
    if (!budget || !people || !days) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: "Chybí povinné parametry: budget, people, days"
        })
      };
    }

    // Najít vhodné destinace
    const suitableDestinations = destinations
      .filter(destination => {
        // Kontrola minimální délky výletu
        if (days < destination.recommendedLength) return false;
        
        // Výpočet celkových nákladů
        const totalCost = calculateTotalCost(destination, days, people, departureCity);
        
        // Kontrola rozpočtu
        return totalCost <= budget;
      })
      .map(destination => {
        const totalCost = calculateTotalCost(destination, days, people, departureCity);
        const itinerary = generateItinerary(destination, days);
        const flightCost = (destination.avgFlightCosts[departureCity] || destination.avgFlightCosts.Prague) * people;
        
        return {
          name: destination.city,
          country: destination.country,
          totalCost,
          breakdown: {
            flights: flightCost,
            accommodation: destination.avgNightCostPerPerson * days * people,
            food: destination.avgFoodPerDayPerPerson * days * people
          },
          freeActivities: destination.freeActivities,
          itinerary
        };
      })
      .sort((a, b) => a.totalCost - b.totalCost); // Seřadit podle ceny

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        destinations: suitableDestinations,
        searchParams: {
          budget,
          people,
          days,
          departureCity
        }
      })
    };

  } catch (error) {
    console.error('Lambda error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: "Interní chyba serveru"
      })
    };
  }
};

// Pro lokální testování
if (require.main === module) {
  const testEvent = {
    httpMethod: 'POST',
    body: JSON.stringify({
      budget: 15000,
      people: 2,
      days: 3,
      departureCity: "Praha"
    })
  };
  
  exports.handler(testEvent, {}).then(result => {
    console.log('Test result:', JSON.parse(result.body));
  });
}