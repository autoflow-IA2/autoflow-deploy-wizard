import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SpecializedAgentProps {
  title: string;
  description: string;
  icon: LucideIcon;
  borderGradient: string;
  iconColor: string;
  onStartChat: () => void;
}

const SpecializedAgent = ({ 
  title, 
  description, 
  icon: Icon, 
  borderGradient, 
  iconColor,
  onStartChat 
}: SpecializedAgentProps) => {
  return (
    <Card className="relative bg-card border-0 overflow-hidden group hover:scale-105 transition-all duration-300">
      {/* Gradient Border */}
      <div className={`absolute inset-0 ${borderGradient} p-[2px] rounded-lg`}>
        <div className="bg-card rounded-[6px] h-full w-full" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Online Badge */}
        <div className="flex justify-end mb-4">
          <Badge className="bg-success/20 text-success border-success/30 text-xs">
            <div className="w-2 h-2 bg-success rounded-full mr-1 animate-pulse" />
            Online
          </Badge>
        </div>
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center">
            <Icon className={`w-8 h-8 ${iconColor}`} />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-center mb-3 text-foreground">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed min-h-[60px]">
          {description}
        </p>
        
        {/* Action Button */}
        <Button 
          onClick={onStartChat}
          className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
          size="lg"
        >
          🔮 Iniciar Conversa
        </Button>
      </div>
    </Card>
  );
};

export default SpecializedAgent;