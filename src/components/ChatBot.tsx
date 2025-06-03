import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm GrowtX AI Assistant. How can I help you grow your business today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive B2B services including Social Media Management, Website Development, Mobile App Development, Business Consulting, AR/VR Marketing, Digital Marketing, Sales Automation, Email Marketing, Cybersecurity Solutions, Data Analytics, Customer Support, AI & Machine Learning, and Business Intelligence. Which service interests you most?";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('budget')) {
      return "Our pricing varies based on your specific needs and project scope. We offer flexible packages and custom solutions. I'd recommend scheduling a free consultation to discuss a tailored quote for your project.";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('call')) {
      return "You can reach us at hello@growtx.com or call us at +1 (555) 123-4567. Our business hours are Monday to Friday, 9AM - 6PM. Would you like me to help you schedule a consultation?";
    }
    
    if (message.includes('website') || message.includes('web development')) {
      return "Our web development team creates responsive, modern websites that convert visitors into customers. We've helped businesses increase their conversions by up to 300%. Would you like to see our portfolio?";
    }
    
    if (message.includes('mobile app') || message.includes('app development')) {
      return "We develop native iOS and Android apps as well as cross-platform solutions. Our mobile apps help businesses engage customers directly and create new revenue streams. Interested in learning more about mobile app development?";
    }
    
    if (message.includes('social media')) {
      return "Our social media management services help businesses boost engagement and reach their target audience. We handle content creation, posting schedules, and community management. Interested in learning more?";
    }
    
    if (message.includes('digital marketing') || message.includes('marketing')) {
      return "We provide comprehensive digital marketing services including SEO, PPC, social advertising, and lead generation. Our strategies are designed to maximize your online presence and drive conversions. Would you like to know more?";
    }
    
    if (message.includes('consultation') || message.includes('meeting')) {
      return "Great! We offer free consultations where we analyze your business needs and provide strategic recommendations. You can schedule one through our contact page or I can direct you there. Shall I help you get started?";
    }
    
    if (message.includes('free') || message.includes('free services')) {
      return "Yes! We offer free services for qualified new businesses including basic website setup, social media audit, and business consultation. Check out our Free Services page for more details and eligibility requirements.";
    }
    
    if (message.includes('portfolio') || message.includes('examples') || message.includes('work')) {
      return "We've worked with various startups and MSMEs across different industries. Our portfolio showcases successful projects in web development, mobile apps, social media campaigns, and business transformations. Would you like me to direct you to our portfolio page?";
    }
    
    if (message.includes('ai') || message.includes('machine learning') || message.includes('automation')) {
      return "We offer AI and Machine Learning solutions to automate processes, gain insights, and improve business efficiency. This includes chatbot development, predictive modeling, and process automation. How can AI help your business?";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to GrowtX. I'm here to help you learn about our services and how we can help grow your business. What would you like to know about?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else I can help you with regarding our services or your business growth needs?";
    }
    
    // Default response
    return "That's a great question! I'd recommend speaking with one of our specialists who can provide detailed information tailored to your specific needs. Would you like me to help you schedule a free consultation, or do you have any other questions about our services?";
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Chat Bot Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        size="lg"
      >
        <MessageCircle size={24} />
      </Button>

      {/* Chat Bot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]">
          <Card className="h-full ios-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-white" />
                  </div>
                  <CardTitle className="text-white">GrowtX AI Assistant</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={16} />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="flex flex-col h-[calc(100%-80px)] p-4">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === 'user' 
                          ? 'bg-primary' 
                          : 'bg-gradient-to-br from-primary to-accent'
                      }`}>
                        {message.sender === 'user' ? 
                          <User size={12} className="text-white" /> : 
                          <Bot size={12} className="text-white" />
                        }
                      </div>
                      <div className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-card/80 text-white border border-white/10'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <Bot size={12} className="text-white" />
                      </div>
                      <div className="bg-card/80 border border-white/10 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-input border-white/20 text-white placeholder:text-gray-400"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Send size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;
