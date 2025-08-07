import { Destination } from "@/data/destinations";

export interface TravelCalculation {
  destination: Destination;
  totalCost: number;
  breakdown: {
    flights: number;
    accommodation: number;
    food: number;
    total: number;
  };
  isAffordable: boolean;
  isAppropriateLength: boolean;
}

export function calculateTripCost(
  destination: Destination,
  numberOfPeople: number,
  duration: number,
  budget: number
): TravelCalculation {
  // Výpočet cen
  const flights = destination.flightPriceFromPrague * numberOfPeople;
  const accommodation = destination.accommodationPerNight * duration * numberOfPeople;
  const food = destination.foodPerDay * duration * numberOfPeople;
  const total = flights + accommodation + food;

  return {
    destination,
    totalCost: total,
    breakdown: {
      flights,
      accommodation,
      food,
      total,
    },
    isAffordable: total <= budget,
    isAppropriateLength: duration >= destination.minRecommendedDays,
  };
}

export function findSuitableDestinations(
  destinations: Destination[],
  numberOfPeople: number,
  duration: number,
  budget: number,
  sortByPrice: boolean = true
): TravelCalculation[] {
  const calculations = destinations
    .map(destination => calculateTripCost(destination, numberOfPeople, duration, budget))
    .filter(calc => calc.isAffordable && calc.isAppropriateLength);

  if (sortByPrice) {
    calculations.sort((a, b) => a.totalCost - b.totalCost);
  }

  return calculations;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}