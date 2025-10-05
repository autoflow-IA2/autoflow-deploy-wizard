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
    <Card className="relative bg-card border border-border overflow-hidden group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
      {/* Content */}
      <div className="relative z-10 p-6">
        {/* Online Badge */}
        <div className="flex justify-end mb-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-medium">
            <div className="w-2 h-2 bg-primary rounded-full mr-1.5 animate-pulse" />
            Online
          </Badge>
        </div>
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
            <Icon className="w-8 h-8 text-primary" />
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
          className="w-full bg-primary hover:bg-primary/90 shadow-glow hover:shadow-elevated transition-all duration-300"
          size="lg"
        >
          🔮 Iniciar Conversa
        </Button>
      </div>
    </Card>
  );
};

export default SpecializedAgent;