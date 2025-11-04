import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SpecializedAgent from "@/components/SpecializedAgent";
import ChatModal from "@/components/ChatModal";
import { 
  Stethoscope, 
  Sparkles, 
  Dumbbell, 
  Heart, 
  Bot, 
  Scale 
} from "lucide-react";

const agents = [
  {
    id: 'odontologia',
    title: 'Clínica Odontológica',
    description: 'Especialista em agendamento de consultas, tratamentos dentários e orientação sobre saúde bucal.',
    icon: Stethoscope,
    borderGradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    iconColor: 'text-white'
  },
  {
    id: 'estetica',
    title: 'Clínica de Estética',
    description: 'Especialista em procedimentos estéticos, cuidados com a pele e orientação da beleza personalizada.',
    icon: Sparkles,
    borderGradient: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    iconColor: 'text-yellow-400'
  },
  {
    id: 'academia',
    title: 'Academia',
    description: 'Personal trainer virtual para treinos personalizados, orientações nutricionais e motivação fitness.',
    icon: Dumbbell,
    borderGradient: 'bg-gradient-to-r from-green-500 to-emerald-500',
    iconColor: 'text-yellow-400'
  },
  {
    id: 'terapeuta',
    title: 'Terapeuta',
    description: 'Especialista em apoio emocional que oferece orientações para bem-estar mental e qualidade de vida.',
    icon: Heart,
    borderGradient: 'bg-gradient-to-r from-pink-500 to-rose-500',
    iconColor: 'text-pink-400'
  },
  {
    id: 'outros',
    title: 'Outros',
    description: 'Assistente virtual versátil pronto para ajudar com diversas tarefas e responder suas perguntas.',
    icon: Bot,
    borderGradient: 'bg-gradient-to-r from-orange-500 to-red-500',
    iconColor: 'text-yellow-400'
  },
  {
    id: 'advogado',
    title: 'Advogado',
    description: 'Especialista em consultoria jurídica, orientações legais e suporte em questões jurídicas diversas.',
    icon: Scale,
    borderGradient: 'bg-gradient-to-r from-yellow-500 to-amber-500',
    iconColor: 'text-yellow-400'
  }
];

const Index = () => {
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleStartChat = (agent: typeof agents[0]) => {
    setSelectedAgent(agent);
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setSelectedAgent(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedBackground />
      <Header />
      
      <HeroSection />
      
      <main className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Agents Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Agentes Inteligentes
            </h2>
          </div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {agents.map((agent, index) => (
              <div 
                key={agent.id} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <SpecializedAgent
                  title={agent.title}
                  description={agent.description}
                  icon={agent.icon}
                  borderGradient={agent.borderGradient}
                  iconColor={agent.iconColor}
                  onStartChat={() => handleStartChat(agent)}
                />
              </div>
            ))}
          </div>
          
          {/* Footer */}
          <div className="text-center mt-24 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2024 AutoFlow - Transformando negócios com IA
            </p>
          </div>
        </div>
      </main>

      {/* Chat Modal */}
      {selectedAgent && (
        <ChatModal
          isOpen={isChatOpen}
          onClose={handleCloseChat}
          agentName={selectedAgent.title}
          agentType={selectedAgent.id}
        />
      )}
    </div>
  );
};

export default Index;
