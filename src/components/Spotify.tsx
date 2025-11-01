import { Music2 } from "lucide-react";

const Spotify = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Music2 className="h-12 w-12 text-accent" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
              Ephemeris Playlist
            </h2>
            <p className="cursive text-xl text-muted-foreground">
              Listen to the soundtrack of fleeting moments.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-vintage">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/1vVLauo0szXIrB3FUyHr6U?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotify;
