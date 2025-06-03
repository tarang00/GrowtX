
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Home, Image, Briefcase, Search, Book, Check, Smartphone, Globe, TrendingUp, Mail, Shield, Database, Headphones, Cpu, BarChart, Bot, Brain, Zap, Code, IndianRupee } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceDetail from "@/components/ServiceDetail";

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsDetailOpen(true);
  };

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  const services = [
    {
      title: "AI Chatbots",
      description: "Intelligent conversational AI that engages customers 24/7, handles inquiries, and drives conversions through smart automation.",
      icon: <Bot size={48} />,
      features: ["24/7 Customer Support", "Lead Generation", "Multi-Platform Integration", "Natural Language Processing", "Sentiment Analysis"]
    },
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models that analyze data patterns, predict trends, and automate decision-making for business optimization.",
      icon: <Brain size={48} />,
      features: ["Predictive Analytics", "Data Pattern Recognition", "Automated Decision Making", "Custom Model Training", "Real-time Insights"]
    },
    {
      title: "AI Process Automation",
      description: "Streamline workflows with intelligent automation that reduces manual tasks and increases operational efficiency.",
      icon: <Cpu size={48} />,
      features: ["Workflow Optimization", "Task Automation", "Document Processing", "Quality Assurance", "Error Reduction"]
    },
    {
      title: "AI-Powered Development",
      description: "Leverage AI to accelerate development cycles with code generation, testing automation, and intelligent debugging.",
      icon: <Code size={48} />,
      features: ["Code Generation", "Automated Testing", "Bug Detection", "Performance Optimization", "Smart Refactoring"]
    },
    {
      title: "Social Media Management",
      description: "Comprehensive social media strategy, content creation, and community management to boost your online presence and engagement.",
      icon: <User size={48} />,
      features: ["Content Strategy", "Post Scheduling", "Community Management", "Analytics & Reporting", "Paid Advertising"]
    },
    {
      title: "Website Development", 
      description: "Custom, responsive websites built with modern technologies that convert visitors into customers and grow your business.",
      icon: <Home size={48} />,
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "CMS Integration", "Maintenance & Support"]
    },
    {
      title: "Business Design",
      description: "Professional branding materials including logos, flyers, business cards, and marketing collateral that make you stand out.",
      icon: <Image size={48} />,
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Print Design", "Digital Assets"]
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance and actionable insights to accelerate your business growth and optimize operations for better results.",
      icon: <Briefcase size={48} />,
      features: ["Growth Strategy", "Market Analysis", "Process Optimization", "Performance Metrics", "1-on-1 Mentoring"]
    },
    {
      title: "AR/VR Marketing",
      description: "Cutting-edge augmented and virtual reality solutions that create immersive brand experiences and engage customers.",
      icon: <Search size={48} />,
      features: ["AR Filters", "VR Experiences", "360° Content", "Interactive Demos", "Custom Development"]
    },
    {
      title: "Content Marketing",
      description: "Strategic content creation including blogs, videos, and marketing materials that drive engagement and conversions.",
      icon: <Book size={48} />,
      features: ["Blog Writing", "Video Production", "Email Campaigns", "Lead Magnets", "Content Strategy"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
      icon: <Smartphone size={48} />,
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization", "Maintenance"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, PPC, and online advertising to maximize your reach.",
      icon: <Globe size={48} />,
      features: ["SEO Optimization", "PPC Campaigns", "Social Advertising", "Lead Generation", "Conversion Optimization"]
    },
    {
      title: "Sales Automation",
      description: "Streamline your sales processes with automated workflows, CRM integration, and lead nurturing systems.",
      icon: <TrendingUp size={48} />,
      features: ["CRM Setup", "Lead Scoring", "Workflow Automation", "Pipeline Management", "Sales Analytics"]
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads, retain customers, and drive conversions through personalized messaging.",
      icon: <Mail size={48} />,
      features: ["Campaign Design", "List Management", "Automation", "A/B Testing", "Performance Tracking"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business with comprehensive cybersecurity measures, risk assessments, and security protocol implementation.",
      icon: <Shield size={48} />,
      features: ["Security Audits", "Risk Assessment", "Data Protection", "Compliance", "Employee Training"]
    },
    {
      title: "Data Analytics",
      description: "Transform your business data into actionable insights with advanced analytics, reporting, and business intelligence solutions.",
      icon: <Database size={48} />,
      features: ["Data Analysis", "Custom Dashboards", "Business Intelligence", "Predictive Analytics", "Reporting Automation"]
    },
    {
      title: "Customer Support Solutions",
      description: "Enhance customer satisfaction with professional support systems, helpdesk setup, and customer service optimization.",
      icon: <Headphones size={48} />,
      features: ["Help Desk Setup", "Live Chat Integration", "Ticketing System", "Knowledge Base", "Support Training"]
    },
    {
      title: "Business Intelligence",
      description: "Make data-driven decisions with comprehensive business intelligence solutions, KPI tracking, and performance analytics.",
      icon: <BarChart size={48} />,
      features: ["KPI Dashboards", "Performance Analytics", "Data Visualization", "Reporting", "Strategic Insights"]
    }
  ];

  const packages = [
    {
      name: "AI Starter Package",
      description: "Perfect for businesses exploring AI solutions",
      price: "₹25,000",
      duration: "/month",
      features: [
        "Basic AI Chatbot Setup",
        "Simple Process Automation", 
        "Basic Analytics Dashboard",
        "Email Support",
        "Monthly Performance Report"
      ],
      popular: false
    },
    {
      name: "AI Growth Package", 
      description: "Comprehensive AI solutions for growing businesses",
      price: "₹75,000",
      duration: "/month",
      features: [
        "Advanced AI Chatbot with ML",
        "Multi-Process Automation",
        "Predictive Analytics",
        "Custom AI Model Training",
        "Priority Support",
        "Weekly Strategy Calls"
      ],
      popular: true
    },
    {
      name: "AI Enterprise Package",
      description: "Full-scale AI transformation for enterprises",
      price: "₹1,50,000",
      duration: "/month",
      features: [
        "Enterprise AI Platform",
        "Custom ML Solutions",
        "Advanced Automation Suite", 
        "AI-Powered Development Tools",
        "24/7 Premium Support",
        "Dedicated AI Consultant",
        "Custom Integrations"
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">AI-Powered Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive B2B solutions powered by artificial intelligence, designed to help startups, MSMEs, and local businesses 
              thrive in today's competitive digital landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift glass-effect group cursor-pointer h-full">
                <CardHeader>
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check size={16} className="text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full hover:scale-105 transition-transform"
                    onClick={() => handleLearnMore(service)}
                  >
                    <Zap size={16} className="mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Packages */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                AI Service <span className="gradient-text">Packages</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the perfect AI package for your business needs or let us create a custom solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`hover-lift glass-effect relative ${pkg.popular ? 'border-accent' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <p className="text-muted-foreground">{pkg.description}</p>
                    <div className="flex items-center justify-center mt-4">
                      <IndianRupee size={24} className="text-primary" />
                      <span className="text-3xl font-bold text-primary">{pkg.price.replace('₹', '')}</span>
                      <span className="text-muted-foreground ml-1">{pkg.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Check size={16} className="text-accent" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full hover:scale-105 transition-transform" 
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={handleGetStarted}
                    >
                      <Bot size={16} className="mr-2" />
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <Card className="glass-effect">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to <span className="gradient-text">Embrace AI</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss your specific needs and create a custom AI solution that drives real results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={handleScheduleConsultation}
                    className="hover:scale-105 transition-transform"
                  >
                    <Brain size={20} className="mr-2" />
                    Schedule AI Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleViewPortfolio}
                    className="hover:scale-105 transition-transform"
                  >
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetail 
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        service={selectedService}
      />
    </Layout>
  );
};

export default Services;
