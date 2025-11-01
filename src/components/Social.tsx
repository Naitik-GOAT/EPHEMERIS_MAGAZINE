import { Instagram, Music, Image } from "lucide-react";
import { Button } from "./ui/button";

const Social = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/ephemerismagazine/",
      description: "Follow our daily moments",
    },
    {
      name: "Spotify",
      icon: Music,
      href: "https://open.spotify.com/user/31yic5wmz7qwixvxky6kxv4jcbfq?si=lxd21UCLR_GA11rsZaPG6g&nd=1&dlsi=62cb2a3f7f6d44d2",
      description: "Listen to our playlists",
    },
    {
      name: "Pinterest",
      icon: Image,
      href: "https://www.pinterest.com/ephemerismagazine/",
      description: "Explore our visual moodboards",
    },
  ];

  return (
    <section id="contact" className="py-20 vintage-paper">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Follow the Journey
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Join our community across platforms
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="p-8 bg-card border-2 border-border rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-vintage text-center space-y-4">
                    <div className="flex justify-center">
                      <Icon className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary">
                      {social.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {social.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center pt-8">
            <a href="mailto:ephemerismagazine@gmail.com">
              <Button
                size="lg"
                className="font-body bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </a>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
