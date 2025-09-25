import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgentsSection from "@/components/AgentsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      <main>
        <HeroSection />
        <AgentsSection />
      </main>
    </div>
  );
};

export default Index;
