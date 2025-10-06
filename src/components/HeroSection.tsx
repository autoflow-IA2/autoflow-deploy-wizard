import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToAgents = () => {
    const agentsSection = document.querySelector('main');
    agentsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="pt-8 pb-20 px-6 text-center relative">
      <div className="max-w-5xl mx-auto">
        <div className="animate-slide-in space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-gradient-primary">Agentes de IA Especializados</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-in [animation-delay:0.2s] leading-relaxed">
            Transforme seu negócio com inteligência artificial avançada. 
            Cada agente é especialista em uma área específica para maximizar seus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in [animation-delay:0.4s]">
            <Button 
              size="lg" 
              onClick={scrollToAgents}
              className="bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300 text-base px-8 py-6 h-auto rounded-xl font-semibold"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Conhecer os Agentes
            </Button>
          </div>
        </div>
        
        <div className="mt-20 animate-bounce">
          <ArrowDown className="h-7 w-7 mx-auto text-primary/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;