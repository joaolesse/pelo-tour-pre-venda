import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <MusicSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
