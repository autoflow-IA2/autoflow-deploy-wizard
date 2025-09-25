import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface AgentCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
  price: string;
}

const AgentCard = ({ title, description, features, icon: Icon, gradient, price }: AgentCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 animate-bounce-in">
      <div className={`absolute inset-0 ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
      
      <CardHeader className="relative z-10 pb-4">
        <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        
        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-colors duration-300">
          {title}
        </CardTitle>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-6">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${gradient}`} />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gradient-primary">{price}</span>
            <span className="text-sm text-muted-foreground">por mês</span>
          </div>
          
          <Button 
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group-hover:scale-105"
            size="lg"
          >
            Começar Agora
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentCard;