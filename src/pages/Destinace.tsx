import { useState } from "react";
import { destinations } from "@/data/destinations";
import { MapPin, Clock, Euro, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Destinace = () => {
  const [selectedDestination, setSelectedDestination] = useState(destinations[0]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-primary flex items-center justify-center gap-2">
            <MapPin className="h-8 w-8" />
            Destinace
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Objevte detaily každé destinace a jejich oblíbená místa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Seznam destinací */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vyberte destinaci</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => setSelectedDestination(dest)}
                    className={`w-full text-left p-3 rounded-md transition-colors ${
                      selectedDestination.id === dest.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    }`}
                  >
                    <div className="font-medium">{dest.name}</div>
                    <div className="text-sm opacity-70">{dest.country}</div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Detail destinace */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  {selectedDestination.name}, {selectedDestination.country}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  {selectedDestination.description}
                </p>

                {/* Základní informace */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg">
                    <Euro className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Letenka z Prahy</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedDestination.flightPriceFromPrague.toLocaleString()} Kč
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Min. doporučeno</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedDestination.minRecommendedDays} {selectedDestination.minRecommendedDays === 1 ? 'den' : selectedDestination.minRecommendedDays < 5 ? 'dny' : 'dnů'}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg">
                    <Euro className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Ubytování/noc</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedDestination.accommodationPerNight.toLocaleString()} Kč
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Oblíbená místa */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Oblíbená místa
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedDestination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="p-3 text-sm justify-start">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Denní náklady */}
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Odhadované denní náklady na osobu:</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>Ubytování: {selectedDestination.accommodationPerNight.toLocaleString()} Kč</div>
                    <div>Strava: {selectedDestination.foodPerDay.toLocaleString()} Kč</div>
                    <div className="pt-1 border-t font-medium text-foreground">
                      Celkem: {(selectedDestination.accommodationPerNight + selectedDestination.foodPerDay).toLocaleString()} Kč/den
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinace;