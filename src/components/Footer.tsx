const Footer = () => {
  return (
    <footer className="vintage-paper border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="cursive text-2xl md:text-3xl text-accent">
            A constellation of teen creators tracing the pulse of the world.
          </p>
          <div className="pt-4 space-y-2">
            <p className="font-body text-sm text-muted-foreground">
              © 2025 Ephemeris Magazine
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Designed with fleeting beauty.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
