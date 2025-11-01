import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Feather } from "lucide-react";

const MonthlyTheme = () => {
  const currentTheme = {
    name: "Orpheus Turning",
    description: "Exploring the delicate balance between looking back and moving forward. What do we risk when we glance over our shoulder? What do we lose when we refuse to?",
  };

  const pastThemes = [
    { name: "Echoes of Yesterday", month: "February 2025" },
    { name: "Liminal Spaces", month: "January 2025" },
    { name: "Winter's Whisper", month: "December 2024" },
    { name: "The In-Between", month: "November 2024" },
  ];

  return (
    <section id="themes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Current Theme */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              This Month's Theme
            </h2>
            <Card className="p-8 md:p-12 bg-card border-2 border-accent/30 shadow-vintage">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Feather className="h-12 w-12 text-accent" />
                </div>
                <h3 className="cursive text-3xl md:text-4xl text-accent">
                  {currentTheme.name}
                </h3>
                <p className="font-body text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
                  {currentTheme.description}
                </p>
                <Button
                  size="lg"
                  className="font-body bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  Submit Your Work
                </Button>
              </div>
            </Card>
          </div>

          {/* Past Themes */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-center text-primary">
              Past Themes
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pastThemes.map((theme, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card hover:bg-accent/10 transition-all duration-300 cursor-pointer hover:scale-105 border border-border shadow-soft"
                >
                  <div className="space-y-2 text-center">
                    <p className="font-body text-sm text-muted-foreground">{theme.month}</p>
                    <p className="cursive text-xl text-foreground">{theme.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyTheme;
