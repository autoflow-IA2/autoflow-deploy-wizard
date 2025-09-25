import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-8 text-center relative">
      <div className="max-w-6xl mx-auto">
        <div className="animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-hero leading-tight">
            6 Agentes IA
            <br />
            <span className="text-gradient-primary">Especializados</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-in [animation-delay:0.2s]">
            Transforme seu negócio com inteligência artificial avançada. 
            Cada agente é especialista em uma área específica para maximizar seus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in [animation-delay:0.4s]">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 h-auto"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Conhecer os Agentes
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-4 h-auto"
            >
              Ver Demonstração
            </Button>
          </div>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-8 w-8 mx-auto text-primary/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;