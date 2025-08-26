import { useState, useEffect, useRef } from "react";
import { TravelForm } from "@/components/TravelForm";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations, mockItineraries } from "@/data/destinations";
import { findSuitableDestinations, TravelCalculation } from "@/utils/travelCalculator";
import { Plane, MapPin, Heart } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import Navbar from "@/components/Navbar";

interface TravelFormData {
  numberOfPeople: number;
  departure: string;
  duration: number;
  budget: number;
}

const Index = () => {
  const [searchResults, setSearchResults] = useState<TravelCalculation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoading && searchResults.length > 0 && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [isLoading, searchResults]);

  const handleSearch = async (formData: TravelFormData) => {
    setIsLoading(true);
    setHasSearched(true);
    
    // Simulace API volání
    setTimeout(() => {
      const results = findSuitableDestinations(
        destinations,
        formData.numberOfPeople,
        formData.duration,
        formData.budget
      );
      setSearchResults(results);
      setIsLoading(false);
    }, 1500);
  };

  const toggleItinerary = (destinationId: string) => {
    const newExpanded = new Set(expandedCards);
    if (expandedCards.has(destinationId)) {
      newExpanded.delete(destinationId);
    } else {
      newExpanded.add(destinationId);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero sekce */}
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-16 md:pt-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center space-y-6 md:space-y-8 px-4 max-w-4xl mx-auto">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2 md:mb-4">
              <Plane className="h-6 w-6 md:h-8 md:w-8 text-white animate-bounce-gentle" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight">
                VyberDestinaci.cz
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed px-4">
              Objevte ideální evropskou destinaci podle vašeho rozpočtu a preferencí
            </p>
          </div>
          
          <div className="animate-fade-in">
            <TravelForm onSearch={handleSearch} isLoading={isLoading} />
          </div>
        </div>
      </div>

      {/* Výsledky vyhledávání */}
      {hasSearched && (
        <div ref={resultsRef} className="container mx-auto px-4 py-16">
          {isLoading ? (
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="text-lg text-muted-foreground">Hledáme pro vás nejlepší destinace...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
                  <MapPin className="h-8 w-8" />
                  Vybrali jsme pro vás {searchResults.length} {searchResults.length === 1 ? 'destinaci' : searchResults.length < 5 ? 'destinace' : 'destinací'}
                </h2>
                <p className="text-muted-foreground">
                  Seřazeno podle ceny od nejlevnější
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 justify-center md:justify-start items-start">
                {searchResults.map((result) => (
                  <div key={result.destination.id} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0">
                    <DestinationCard
                      destination={result.destination}
                      totalCost={result.totalCost}
                      duration={Number(Object.keys(searchResults).length) >= 1 ? 3 : 3} // Default duration for display
                      numberOfPeople={2} // Default for display
                      breakdown={result.breakdown}
                      onShowItinerary={() => toggleItinerary(result.destination.id)}
                      showItinerary={expandedCards.has(result.destination.id)}
                      itinerary={mockItineraries[result.destination.id as keyof typeof mockItineraries] || []}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4 py-16">
              <Heart className="h-16 w-16 text-muted-foreground mx-auto" />
              <h3 className="text-2xl font-semibold text-muted-foreground">
                Bohužel jsme nenašli žádné vhodné destinace
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Zkuste zvýšit rozpočet nebo prodloužit délku výletu. Evropa má toho mnoho co nabídnout!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-muted/50 py-8 text-center">
        <p className="text-muted-foreground">
          © 2024 VyberDestinaci.cz - Objevte krásy Evropy
        </p>
      </footer>
    </div>
  );
};

export default Index;
