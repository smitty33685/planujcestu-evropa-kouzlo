import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Kontakt = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold text-primary flex items-center justify-center gap-2">
            <Mail className="h-8 w-8" />
            Kontakt
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Máte otázky? Rádi vám pomůžeme s plánováním vaší dovolené
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Kontaktní informace */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Kontaktní údaje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">info@vyberdestinaci.cz</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Telefon</div>
                    <div className="text-muted-foreground">+420 123 456 789</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Adresa</div>
                    <div className="text-muted-foreground">
                      Václavské náměstí 1<br />
                      110 00 Praha 1
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">Otevírací doba</div>
                    <div className="text-muted-foreground">
                      Pondělí - Pátek: 9:00 - 18:00<br />
                      Sobota: 9:00 - 15:00<br />
                      Neděle: Zavřeno
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>O nás</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  VyberDestinaci.cz je váš průvodce pro objevování krásných evropských destinací. 
                  Pomáháme vám najít perfektní místo pro vaši dovolenou podle vašeho rozpočtu a preferencí. 
                  Náš tým má dlouholeté zkušenosti s cestováním po Evropě a rád se s vámi podělí o své znalosti.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Kontaktní formulář */}
          <Card>
            <CardHeader>
              <CardTitle>Napište nám</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Jméno</Label>
                    <Input id="firstName" placeholder="Vaše jméno" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Příjmení</Label>
                    <Input id="lastName" placeholder="Vaše příjmení" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="vas@email.cz" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon (volitelně)</Label>
                  <Input id="phone" type="tel" placeholder="+420 123 456 789" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Předmět</Label>
                  <Input id="subject" placeholder="Čím vám můžeme pomoci?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Zpráva</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Napište nám vaši zprávu..." 
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Odeslat zprávu
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;