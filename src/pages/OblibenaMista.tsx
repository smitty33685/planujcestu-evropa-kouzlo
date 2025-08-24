import { useState } from "react";
import { destinations } from "@/data/destinations";
import { MapPin, Filter, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const OblibenaMista = () => {
  const [selectedCity, setSelectedCity] = useState<string>("all");

  // Získat všechna oblíbená místa ze všech destinací
  const getAllPlaces = () => {
    const allPlaces: { place: string; city: string; country: string; cityId: string }[] = [];
    
    destinations.forEach(dest => {
      dest.highlights.forEach(highlight => {
        allPlaces.push({
          place: highlight,
          city: dest.name,
          country: dest.country,
          cityId: dest.id
        });
      });
    });
    
    return allPlaces;
  };

  const allPlaces = getAllPlaces();
  
  // Filtrovat místa podle vybraného města
  const filteredPlaces = selectedCity === "all" 
    ? allPlaces 
    : allPlaces.filter(place => place.cityId === selectedCity);

  // Seskupit místa podle města pro lepší zobrazení
  const groupedPlaces = filteredPlaces.reduce((acc, place) => {
    const key = `${place.city}, ${place.country}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(place);
    return acc;
  }, {} as Record<string, typeof allPlaces>);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-primary flex items-center justify-center gap-2">
            <Star className="h-8 w-8" />
            Oblíbená místa
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Top místa k návštěvě v evropských destinacích
          </p>
        </div>

        {/* Filtr podle města */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-4 w-4" />
            <label className="text-sm font-medium">Filtrovat podle destinace:</label>
          </div>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger>
              <SelectValue placeholder="Vyberte destinaci" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Všechny destinace</SelectItem>
              {destinations.map(dest => (
                <SelectItem key={dest.id} value={dest.id}>
                  {dest.name}, {dest.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Seznam oblíbených míst */}
        <div className="space-y-6">
          {Object.entries(groupedPlaces).map(([cityName, places]) => (
            <Card key={cityName}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {cityName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {places.map((place, index) => (
                    <Badge 
                      key={`${place.cityId}-${index}`} 
                      variant="outline" 
                      className="p-3 text-sm justify-start hover:bg-accent/50 cursor-pointer transition-colors"
                    >
                      <Star className="h-3 w-3 mr-2 text-primary" />
                      {place.place}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <Star className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              Žádná místa nenalezena
            </h3>
            <p className="text-muted-foreground">
              Zkuste vybrat jinou destinaci.
            </p>
          </div>
        )}

        {/* Statistiky */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-lg">Statistiky</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Celkem destinací:</span>
                  <span className="font-medium">{destinations.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Celkem míst:</span>
                  <span className="font-medium">{allPlaces.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Zobrazených míst:</span>
                  <span className="font-medium">{filteredPlaces.length}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OblibenaMista;