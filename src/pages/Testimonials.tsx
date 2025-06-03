
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, User, Building, Quote, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Testimonials = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleStartJourney = () => {
    navigate('/contact');
  };

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Subscribed Successfully!",
      description: "Thank you for subscribing to our newsletter. You'll receive our latest updates and insights.",
    });
    setEmail('');
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechVision Startup",
      role: "CEO",
      content: "GrowtX transformed our digital presence completely. Our website conversions increased by 300% and our social media engagement skyrocketed!",
      rating: 5,
      icon: <User size={20} />
    },
    {
      name: "Michael Chen",
      company: "LocalBiz Solutions", 
      role: "Founder",
      content: "The team at GrowtX understands small business needs. Their consulting helped us streamline operations and boost revenue by 150%.",
      rating: 5,
      icon: <Building size={20} />
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Marketing Director", 
      content: "Professional, reliable, and results-driven. GrowtX delivered exactly what they promised and exceeded our expectations.",
      rating: 5,
      icon: <User size={20} />
    },
    {
      name: "David Kumar",
      company: "InnovateTech",
      role: "CTO",
      content: "Their AR/VR marketing solutions gave us a competitive edge. Customer engagement increased by 400% within the first quarter.",
      rating: 5,
      icon: <Building size={20} />
    },
    {
      name: "Lisa Thompson",
      company: "EcoGreen Solutions",
      role: "Founder",
      content: "The website development was flawless, and their ongoing support has been exceptional. Highly recommend GrowtX!",
      rating: 5,
      icon: <User size={20} />
    },
    {
      name: "Ahmed Hassan",
      company: "Digital Dynamics",
      role: "CEO",
      content: "GrowtX's business consulting transformed our strategy. We saw 200% growth in our target metrics within 6 months.",
      rating: 5,
      icon: <Building size={20} />
    }
  ];

  return (
    <Layout>
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* iOS-style background with subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-400/10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
        </div>
        
        {/* Floating iOS-style elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/40 rounded-full blur-lg animate-ping"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          {/* Header */}
          <div className="text-center mb-16 ios-fade-in">
            <div className="inline-flex items-center space-x-3 ios-card px-6 py-3 mb-8 ios-bounce">
              <Quote className="text-primary" size={16} strokeWidth={3} />
              <span className="text-sm font-medium text-white">Client Testimonials</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight text-white">
              Client
              <span className="ios-text-gradient block">Testimonials</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what business owners and entrepreneurs 
              say about their experience working with GrowtX.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="ios-card p-8 relative ios-slide-up hover:ios-glow transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute top-4 right-4 text-primary/30">
                  <Quote size={24} />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/20 rounded-full text-primary">{testimonial.icon}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm ios-text-gradient">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="text-center mb-16 ios-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="ios-card p-12 ios-glow">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
                Join Our
                <span className="ios-text-gradient block">Success Stories</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your business like these satisfied clients? 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={handleStartJourney}
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white font-medium ios-button ios-glow"
                >
                  <Sparkles size={18} />
                  Start Your Journey
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleScheduleConsultation}
                  className="text-lg px-8 py-6 border-white/20 bg-white/5 text-white ios-button backdrop-blur-md hover:bg-white/10"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="ios-slide-up" style={{animationDelay: '0.8s'}}>
            <div className="ios-card p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
                Stay
                <span className="ios-text-gradient block">Connected</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Subscribe to our newsletter for more success stories, business tips, 
                and exclusive insights from our growing community.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 bg-black/50 border-white/20 text-white placeholder:text-gray-400 ios-button backdrop-blur-md"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 text-white font-medium ios-button ios-glow"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </section>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>
    </Layout>
  );
};

export default Testimonials;
