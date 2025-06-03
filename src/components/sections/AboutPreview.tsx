
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPreview = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleViewCases = () => {
    navigate('/portfolio');
  };

  const stats = [
    { icon: <Users size={24} />, number: "500+", label: "Happy Clients" },
    { icon: <Target size={24} />, number: "1000+", label: "Projects Completed" },
    { icon: <Award size={24} />, number: "98%", label: "Client Satisfaction" },
    { icon: <TrendingUp size={24} />, number: "300%", label: "Average Growth" }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* iOS-style background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-400/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
      </div>
      
      {/* Floating iOS-style elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/40 rounded-full blur-lg animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="ios-fade-in">
            <div className="inline-flex items-center space-x-3 ios-card px-6 py-3 mb-8 ios-bounce">
              <Shield className="text-green-400" size={16} strokeWidth={3} />
              <span className="text-sm font-medium text-white">ISO Certified & Award Winning</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-white">
              Why 500+ Businesses
              <span className="ios-text-gradient block">Choose GrowtX</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              We're not just another agency. We're your growth partners with a proven track record 
              of delivering 300% average growth to businesses just like yours. 
              <span className="text-primary font-semibold">Every project comes with our satisfaction guarantee.</span>
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} strokeWidth={2.5} />
                <span className="text-gray-200">100% Money Back Guarantee - We're that confident</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-primary" size={20} strokeWidth={2.5} />
                <span className="text-gray-200">ISO 9001 Certified with industry recognition</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="text-primary" size={20} strokeWidth={2.5} />
                <span className="text-gray-200">Results in 30 days or we work for free</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-green-400" size={20} strokeWidth={2.5} />
                <span className="text-gray-200">24/7 dedicated support & lifetime assistance</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={handleLearnMore}
                className="bg-primary hover:bg-primary/90 text-white font-medium ios-button ios-glow"
              >
                See Why We're #1 Choice
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleViewCases}
                className="border-white/20 bg-white/5 text-white ios-button backdrop-blur-md hover:bg-white/10"
              >
                View Success Stories
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="ios-card p-8 text-center ios-slide-up hover:ios-glow transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-semibold ios-text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
            
            {/* Trust Badge */}
            <div className="col-span-2 ios-card p-6 text-center bg-green-500/10 border border-green-500/20">
              <Shield className="text-green-400 mx-auto mb-3" size={32} />
              <div className="text-lg font-semibold text-white mb-2">100% Satisfaction Guaranteed</div>
              <div className="text-sm text-gray-300">Not happy? Full refund, no questions asked</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default AboutPreview;
