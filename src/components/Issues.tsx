import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen } from "lucide-react";

const Issues = () => {
  const issues = [
    {
      number: "Issue 03",
      title: "March 2025",
      description: "The latest collection of fleeting moments and eternal truths.",
    },
    {
      number: "Issue 02",
      title: "February 2025",
      description: "Echoes of yesterday captured in prose and verse.",
    },
    {
      number: "Issue 01",
      title: "January 2025",
      description: "Our inaugural issue, a constellation of teen voices.",
    },
  ];

  return (
    <section id="issues" className="py-20 vintage-paper">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Issues
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Each issue is a carefully curated journey through the minds of young writers and artists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {issues.map((issue, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-vintage group"
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <BookOpen className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-center text-primary">
                    {issue.number}
                  </h3>
                  <p className="cursive text-xl text-center text-accent">
                    {issue.title}
                  </p>
                  <p className="font-body text-sm text-center text-foreground">
                    {issue.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full font-body border-accent/50 hover:bg-accent/10 transition-all duration-300"
                  >
                    Read Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Issues;
