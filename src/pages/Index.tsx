import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MonthlyTheme from "@/components/MonthlyTheme";
import Issues from "@/components/Issues";
import Spotify from "@/components/Spotify";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <MonthlyTheme />
        <Issues />
        <Spotify />
        <Social />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
