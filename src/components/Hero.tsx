import { Button } from "./ui/button";
import heroCollage from "@/assets/hero-collage.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${heroCollage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center z-10 relative">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <p className="cursive text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed text-shadow-soft">
            This is a journal of becoming, of brief moments that linger,
          </p>
          <p className="cursive text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed text-shadow-soft">
            of youth documenting the world not just as it is, but as it could be.
          </p>
          <div className="pt-8">
            <Button
              size="lg"
              className="font-body text-base px-8 py-6 bg-cream/90 text-primary hover:bg-cream hover:scale-105 transition-all duration-300 shadow-vintage"
              onClick={() => document.getElementById("issues")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore the Current Issue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
