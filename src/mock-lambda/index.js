// Mock AWS Lambda function pro NaplánujCestu.cz
// Tento soubor slouží jako referencia - nasaďte na AWS Lambda samostatně

const destinations = [
  {
    name: "Paříž",
    country: "Francie",
    flightPrice: 4500,
    accommodationPerNight: 1800,
    foodPerDay: 1200,
    minDays: 3
  },
  {
    name: "Barcelona",
    country: "Španělsko", 
    flightPrice: 3800,
    accommodationPerNight: 1400,
    foodPerDay: 1000,
    minDays: 3
  },
  {
    name: "Amsterdam",
    country: "Nizozemsko",
    flightPrice: 3200,
    accommodationPerNight: 2200,
    foodPerDay: 1400,
    minDays: 2
  },
  {
    name: "Berlín",
    country: "Německo",
    flightPrice: 2800,
    accommodationPerNight: 1200,
    foodPerDay: 900,
    minDays: 3
  },
  {
    name: "Londýn",
    country: "Velká Británie",
    flightPrice: 4200,
    accommodationPerNight: 2800,
    foodPerDay: 1600,
    minDays: 3
  },
  {
    name: "Řím",
    country: "Itálie",
    flightPrice: 3600,
    accommodationPerNight: 1600,
    foodPerDay: 1100,
    minDays: 4
  },
  {
    name: "Madrid",
    country: "Španělsko",
    flightPrice: 4000,
    accommodationPerNight: 1500,
    foodPerDay: 1000,
    minDays: 3
  },
  {
    name: "Vídeň",
    country: "Rakousko",
    flightPrice: 2400,
    accommodationPerNight: 1800,
    foodPerDay: 1200,
    minDays: 2
  },
  {
    name: "Budapešť",
    country: "Maďarsko",
    flightPrice: 2200,
    accommodationPerNight: 1000,
    foodPerDay: 800,
    minDays: 2
  },
  {
    name: "Lisabon",
    country: "Portugalsko",
    flightPrice: 4800,
    accommodationPerNight: 1400,
    foodPerDay: 900,
    minDays: 4
  }
];

function calculateTotalCost(destination, days, people) {
  const flightCost = destination.flightPrice * people;
  const accommodationCost = destination.accommodationPerNight * days * people;
  const foodCost = destination.foodPerDay * days * people;
  
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
  
  return itineraries[destination.name]?.[days] || `${days}denní výlet do ${destination.name}`;
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
        if (days < destination.minDays) return false;
        
        // Výpočet celkových nákladů
        const totalCost = calculateTotalCost(destination, days, people);
        
        // Kontrola rozpočtu
        return totalCost <= budget;
      })
      .map(destination => {
        const totalCost = calculateTotalCost(destination, days, people);
        const itinerary = generateItinerary(destination, days);
        
        return {
          name: destination.name,
          country: destination.country,
          totalCost,
          breakdown: {
            flights: destination.flightPrice * people,
            accommodation: destination.accommodationPerNight * days * people,
            food: destination.foodPerDay * days * people
          },
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