import aboutCollage from "@/assets/about-collage.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 vintage-paper">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
                What is Ephemeris?
              </h2>
              <div className="space-y-4 font-body text-lg text-foreground leading-relaxed">
                <p>
                  Ephemeris is a teen-run literary magazine orbiting the space between the fleeting and the eternal.
                </p>
                <p>
                  Named after celestial charts, we believe stories, art, and ideas move us—slowly, powerfully—through the cosmos of change.
                </p>
                <p className="italic text-muted-foreground">
                  We document not just what is, but what could be.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in">
              <img
                src={aboutCollage}
                alt="Vintage collage of books and celestial maps"
                className="rounded-lg shadow-vintage w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
