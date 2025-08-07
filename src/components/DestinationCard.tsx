import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, CreditCard, Star } from "lucide-react";
import { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
  totalCost: number;
  duration: number;
  numberOfPeople: number;
  onShowItinerary?: () => void;
  showItinerary?: boolean;
  itinerary?: string[];
}

export function DestinationCard({ 
  destination, 
  totalCost, 
  duration, 
  numberOfPeople,
  onShowItinerary,
  showItinerary = false,
  itinerary = []
}: DestinationCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const pricePerPerson = Math.round(totalCost / numberOfPeople);

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-travel transition-all duration-300 animate-slide-up border-0 gradient-card">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl">{destination.name}</CardTitle>
          </div>
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            {destination.country}
          </Badge>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {destination.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{duration} {duration === 1 ? 'den' : duration < 5 ? 'dny' : 'dní'}</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-primary" />
            <span>{formatPrice(pricePerPerson)}/osoba</span>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-primary">Celková cena:</span>
            <span className="text-2xl font-bold text-primary">{formatPrice(totalCost)}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Pro {numberOfPeople} {numberOfPeople === 1 ? 'osobu' : numberOfPeople < 5 ? 'osoby' : 'osob'} na {duration} {duration === 1 ? 'den' : duration < 5 ? 'dny' : 'dní'}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-4 w-4 text-accent" />
            <span className="font-medium text-sm">Top místa k návštěvě:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {destination.highlights.map((highlight, index) => (
              <Badge key={index} variant="outline" className="text-xs border-primary/20">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>

        {onShowItinerary && (
          <Button 
            onClick={onShowItinerary}
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {showItinerary ? 'Skrýt itinerář' : 'Zobrazit navrhovaný itinerář'}
          </Button>
        )}

        {showItinerary && itinerary.length > 0 && (
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
            <h4 className="font-semibold text-primary mb-3">Navrhovaný itinerář:</h4>
            <ul className="space-y-2">
              {itinerary.map((day, index) => (
                <li key={index} className="text-sm flex items-start gap-2">
                  <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{day}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}