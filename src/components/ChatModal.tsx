import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  agentName: string;
  agentType: string;
}

const ChatModal = ({ isOpen, onClose, agentName, agentType }: ChatModalProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Initial greeting when modal opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting: Message = {
        id: 'greeting',
        text: `Olá! Sou o assistente especializado em ${agentName}. Como posso ajudá-lo hoje?`,
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages([greeting]);
    }
  }, [isOpen, agentName, messages.length]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Call n8n webhook
      const response = await fetch('https://n8n-n8n.hhqray.easypanel.host/webhook/portifolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text.trim(),
          agentType: agentType,
          agentName: agentName,
          timestamp: new Date().toISOString(),
          sessionId: `session_${Date.now()}`
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', response.status, errorText);
        throw new Error('Erro na comunicação com o servidor');
      }

      let data;
      try {
        const responseText = await response.text();
        console.log('Raw response:', responseText);
        data = JSON.parse(responseText);
        console.log('n8n response data:', data);
      } catch (jsonError) {
        console.error('JSON parsing error:', jsonError);
        throw new Error('Resposta inválida do servidor');
      }
      
      // Parse n8n response format
      let agentMessages: string[] = [];
      
      try {
        // Check if response is an array of objects with "text" property
        if (Array.isArray(data) && data.length > 0 && data[0].text) {
          console.log('Found array with text objects:', data);
          // Create separate messages for each text piece
          agentMessages = data.map(item => item.text.trim()).filter(text => text.length > 0);
        } 
        // Check if response has output property (legacy format)
        else if (Array.isArray(data) && data[0]?.output) {
          console.log('Found array with output:', data[0].output);
          const outputString = data[0].output;
          
          // Check if it's a direct string response
          if (typeof outputString === 'string' && !outputString.includes('```json')) {
            console.log('Direct output string:', outputString);
            agentMessages = [outputString];
          } else {
            // Handle the complex JSON format (fallback)
            const jsonString = outputString.replace(/```json\n|\n```/g, '');
            console.log('Cleaned JSON string:', jsonString);
            const parsedOutput = JSON.parse(jsonString);
            console.log('Parsed output:', parsedOutput);
            agentMessages = [parsedOutput.output || 'Desculpe, não consegui processar sua mensagem.'];
          }
        } else if (data.reply) {
          // Handle direct reply format
          agentMessages = [data.reply];
        } else if (data.response) {
          // Handle response format
          agentMessages = [data.response];
        } else if (data.message) {
          // Handle message format
          agentMessages = [data.message];
        }
      } catch (parseError) {
        console.error('Error parsing n8n response:', parseError, 'Data:', data);
        // Fallback to original parsing
        agentMessages = [data.reply || data.response || data.message || 'Desculpe, não consegui processar sua mensagem.'];
      }
      
      // Add each message separately with a small delay for streaming effect
      agentMessages.forEach((text, index) => {
        setTimeout(() => {
          const agentMessage: Message = {
            id: `${Date.now()}_${index}`,
            text: text,
            sender: 'agent',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, agentMessage]);
        }, index * 500); // 500ms delay between messages
      });

    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Desculpe, houve um erro temporário. Tente novamente em alguns instantes.',
        sender: 'agent',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Erro de Conexão",
        description: "Não foi possível enviar a mensagem. Verifique sua conexão.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleClose = () => {
    setMessages([]);
    setInputValue("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl h-[600px] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4 border-b border-border/50">
          <DialogTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{agentName}</h3>
              <p className="text-sm text-muted-foreground">Assistente IA Especializado</p>
            </div>
            <div className="ml-auto">
              <Badge className="bg-success/20 text-success border-success/30 text-xs">
                <div className="w-2 h-2 bg-success rounded-full mr-1 animate-pulse" />
                Online
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'agent' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={`max-w-[70%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>

                {message.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-secondary text-secondary-foreground p-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Digitando...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-6 pt-4 border-t border-border/50">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              disabled={isLoading}
              className="flex-1"
              autoComplete="off"
            />
            <Button 
              type="submit" 
              disabled={!inputValue.trim() || isLoading}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;