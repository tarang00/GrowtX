
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Search, Briefcase, Users, Sparkles, CheckCircle, Smartphone, Globe, TrendingUp, Mail, Shield, Database, Cpu, Bot, Brain, Zap, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ServiceDetail from "@/components/ServiceDetail";

const ServicesOverview = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleViewServices = () => {
    navigate('/services');
  };

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsDetailOpen(true);
  };

  const services = [
    {
      icon: <Bot size={28} className="stroke-[2.5px]" />,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that engages customers 24/7, handles inquiries, and drives conversions through smart automation.",
      features: ["24/7 Customer Support", "Lead Generation", "Multi-Platform Integration", "Natural Language Processing"]
    },
    {
      icon: <Brain size={28} className="stroke-[2.5px]" />,
      title: "Machine Learning Solutions",
      description: "Custom ML models that analyze data patterns, predict trends, and automate decision-making for business optimization.",
      features: ["Predictive Analytics", "Data Pattern Recognition", "Automated Decision Making", "Custom Model Training"]
    },
    {
      icon: <Cpu size={28} className="stroke-[2.5px]" />,
      title: "AI Process Automation",
      description: "Streamline workflows with intelligent automation that reduces manual tasks and increases operational efficiency.",
      features: ["Workflow Optimization", "Task Automation", "Document Processing", "Quality Assurance"]
    },
    {
      icon: <Code size={28} className="stroke-[2.5px]" />,
      title: "AI-Powered Development",
      description: "Leverage AI to accelerate development cycles with code generation, testing automation, and intelligent debugging.",
      features: ["Code Generation", "Automated Testing", "Bug Detection", "Performance Optimization"]
    },
    {
      icon: <Monitor size={28} className="stroke-[2.5px]" />,
      title: "Website Development",
      description: "Professional, responsive websites that convert visitors into customers. From landing pages to complex web applications.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First"]
    },
    {
      icon: <Search size={28} className="stroke-[2.5px]" />,
      title: "AR/VR Marketing",
      description: "Cutting-edge augmented and virtual reality solutions that create immersive brand experiences and drive engagement.",
      features: ["3D Experiences", "Interactive Demos", "Brand Immersion", "Future Tech"]
    },
    {
      icon: <Briefcase size={28} className="stroke-[2.5px]" />,
      title: "Business Consulting",
      description: "Strategic guidance to scale your business, optimize operations, and achieve sustainable growth in competitive markets.",
      features: ["Growth Strategy", "Market Analysis", "Process Optimization", "ROI Focus"]
    },
    {
      icon: <Users size={28} className="stroke-[2.5px]" />,
      title: "Social Media Management",
      description: "Data-driven marketing campaigns across social media, search engines, and digital platforms to maximize your reach.",
      features: ["Social Media", "PPC Campaigns", "Content Strategy", "Analytics"]
    }
  ];

  return (
    <>
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Particles */}
          <div className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
          <div className="absolute w-1 h-1 bg-accent/50 rounded-full animate-float" style={{ top: '20%', right: '15%', animationDelay: '1s' }}></div>
          <div className="absolute w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ bottom: '30%', left: '20%', animationDelay: '2s' }}></div>
          <div className="absolute w-2 h-2 bg-accent/40 rounded-full animate-float" style={{ bottom: '15%', right: '25%', animationDelay: '0.5s' }}></div>
          
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 122, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 122, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              transform: `translateY(${scrollY * 0.5}px)`
            }}></div>
          </div>

          {/* Large Gradient Orbs */}
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
            style={{ 
              top: '10%', 
              right: '10%',
              transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`
            }}
          ></div>
          <div 
            className="absolute w-80 h-80 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl"
            style={{ 
              bottom: '10%', 
              left: '10%',
              transform: `translateY(${-scrollY * 0.2}px) rotate(${-scrollY * 0.1}deg)`
            }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* iOS-style Header */}
          <div className="text-center mb-16 ios-fade-in">
            <div className="inline-flex items-center space-x-2 ios-card rounded-full px-6 py-2 mb-6 ios-bounce backdrop-blur-xl">
              <Sparkles className="text-primary" size={16} strokeWidth={2.5} />
              <span className="text-sm font-medium text-white">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
              AI-Powered Solutions for
              <span className="ios-text-gradient block">Business Growth</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From cutting-edge AI automation to innovative AR/VR marketing, we provide 
              intelligent solutions that drive real business results.
            </p>
          </div>

          {/* iOS-style Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="ios-card hover:-translate-y-2 transition-all duration-500 ios-scale-hover ios-slide-up group relative overflow-hidden" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="text-primary group-hover:text-accent transition-colors duration-300" size={14} strokeWidth={2.5} />
                        <span className="text-xs text-gray-200 group-hover:text-white transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full ios-button border-primary/50 text-primary hover:bg-primary/10 hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    onClick={() => handleLearnMore(service)}
                  >
                    <Zap size={14} className="mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <Card className="ios-card inline-block ios-bounce relative overflow-hidden group" style={{ animationDelay: '0.4s' }}>
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent animate-pulse"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full mr-3">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    Ready to <span className="ios-text-gradient">Transform</span> Your Business?
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Let's discuss how our AI-powered services can accelerate your growth and help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    size="lg"
                    onClick={handleGetStarted}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium ios-button ios-glow rounded-xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center">
                      <Bot size={18} className="mr-2" />
                      Get Started Today
                    </span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleViewServices}
                    className="border-white/20 text-white hover:bg-white/10 hover:border-white/50 ios-button rounded-xl backdrop-blur-sm"
                  >
                    <Search size={18} className="mr-2" />
                    View All Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetail 
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        service={selectedService}
      />
    </>
  );
};

export default ServicesOverview;
