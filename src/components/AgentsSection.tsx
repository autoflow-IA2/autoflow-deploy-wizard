import AgentCard from "./AgentCard";
import { 
  MessageSquare, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Calendar, 
  BarChart3 
} from "lucide-react";

const agents = [
  {
    title: "Atendimento IA",
    description: "Chatbot inteligente que resolve 90% das dúvidas dos seus clientes 24/7",
    features: [
      "Respostas instantâneas personalizadas",
      "Integração com WhatsApp e site",
      "Aprendizado contínuo",
      "Relatórios detalhados"
    ],
    icon: MessageSquare,
    gradient: "bg-gradient-card-1",
    price: "R$ 297"
  },
  {
    title: "Vendas IA",
    description: "Especialista em converter leads em vendas através de abordagens personalizadas",
    features: [
      "Qualificação automática de leads",
      "Follow-up inteligente",
      "Scripts de vendas otimizados",
      "CRM integrado"
    ],
    icon: TrendingUp,
    gradient: "bg-gradient-card-2",
    price: "R$ 497"
  },
  {
    title: "Recursos Humanos IA",
    description: "Automatiza processos de RH desde recrutamento até gestão de funcionários",
    features: [
      "Triagem automática de currículos",
      "Entrevistas por IA",
      "Onboarding personalizado",
      "Avaliações de performance"
    ],
    icon: Users,
    gradient: "bg-gradient-card-3",
    price: "R$ 397"
  },
  {
    title: "E-commerce IA", 
    description: "Otimiza sua loja online com recomendações e atendimento personalizado",
    features: [
      "Recomendações de produtos",
      "Análise de comportamento",
      "Recuperação de carrinho",
      "Suporte pós-venda"
    ],
    icon: ShoppingCart,
    gradient: "bg-gradient-card-4",
    price: "R$ 597"
  },
  {
    title: "Agendamento IA",
    description: "Gerencia agendamentos e compromissos com eficiência total",
    features: [
      "Agenda inteligente sincronizada",
      "Lembretes automáticos",
      "Reagendamento flexível",
      "Integração com calendários"
    ],
    icon: Calendar,
    gradient: "bg-gradient-card-5",
    price: "R$ 197"
  },
  {
    title: "Analytics IA",
    description: "Transforma dados em insights acionáveis para decisões estratégicas",
    features: [
      "Dashboards interativos",
      "Previsões de tendências",
      "Relatórios automatizados",
      "KPIs personalizados"
    ],
    icon: BarChart3,
    gradient: "bg-gradient-card-6",
    price: "R$ 697"
  }
];

const AgentsSection = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Nossos Agentes IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada agente é treinado especificamente para uma função, garantindo 
            máxima eficiência e resultados superiores para seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div key={agent.title} className="animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <AgentCard {...agent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;