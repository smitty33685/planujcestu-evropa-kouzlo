import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Calendar, CreditCard } from "lucide-react";

interface TravelFormData {
  numberOfPeople: number;
  departure: string;
  duration: number;
  budget: number;
}

interface TravelFormProps {
  onSearch: (data: TravelFormData) => void;
  isLoading?: boolean;
}

const cities = [
  { value: "prague", label: "Praha" },
  { value: "brno", label: "Brno" },
  { value: "ostrava", label: "Ostrava" },
  { value: "bratislava", label: "Bratislava" },
];

export function TravelForm({ onSearch, isLoading }: TravelFormProps) {
  const [formData, setFormData] = useState<TravelFormData>({
    numberOfPeople: 2,
    departure: "prague",
    duration: 3,
    budget: 20000,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-travel border-0 gradient-card">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl md:text-2xl text-gradient">
          Naplánujte svůj dokonalý výlet
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm md:text-base">
          Zadejte své preference a najděte ideální evropskou destinaci
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-2">
              <Label htmlFor="people" className="flex items-center gap-2 text-sm md:text-base">
                <Users className="h-4 w-4 text-primary" />
                Počet cestujících
              </Label>
              <Input
                id="people"
                type="number"
                min="1"
                max="10"
                value={formData.numberOfPeople}
                onChange={(e) => setFormData({ ...formData, numberOfPeople: parseInt(e.target.value) || 1 })}
                className="focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="departure" className="flex items-center gap-2 text-sm md:text-base">
                <MapPin className="h-4 w-4 text-primary" />
                Město odjezdu
              </Label>
              <Select
                value={formData.departure}
                onValueChange={(value) => setFormData({ ...formData, departure: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Vyberte město" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.value} value={city.value}>
                      {city.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="flex items-center gap-2 text-sm md:text-base">
                <Calendar className="h-4 w-4 text-primary" />
                Délka výletu (dny)
              </Label>
              <Input
                id="duration"
                type="number"
                min="1"
                max="14"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) || 1 })}
                className="focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="flex items-center gap-2 text-sm md:text-base">
                <CreditCard className="h-4 w-4 text-primary" />
                Rozpočet (CZK)
              </Label>
              <Input
                id="budget"
                type="number"
                min="5000"
                step="1000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) || 5000 })}
                className="focus:ring-primary"
                placeholder="např. 20000"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-opacity py-4 md:py-6 text-base md:text-lg font-semibold"
            disabled={isLoading}
          >
            {isLoading ? "Hledáme destinace..." : "Najít ideální destinace"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}