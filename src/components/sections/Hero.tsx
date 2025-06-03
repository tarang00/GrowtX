
import { Button } from "@/components/ui/button";
import { ArrowUp, CheckCircle, Sparkles, Check, Shield, Award, Clock, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };

  const handleViewWork = () => {
    navigate('/portfolio');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Clean Grid Background - More visible */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background"></div>
      </div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-accent/50 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto ios-fade-in">
          {/* Trust Badge - Responsive */}
          <div className="inline-flex items-center space-x-2 sm:space-x-3 ios-card px-3 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 ios-bounce">
            <Shield className="text-primary" size={14} strokeWidth={3} />
            <span className="text-xs sm:text-sm font-medium text-foreground">ISO Certified & Trusted by 500+ Businesses</span>
          </div>
          
          {/* Premium headings with luxury feel - Responsive */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 leading-tight text-foreground">
            <span className="ios-text-gradient">300% Growth Guaranteed</span>
            <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4">Or We Work for Free</span>
          </h1>
          
          {/* Premium subheading - Responsive */}
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Join 500+ successful businesses who achieved explosive growth with our proven strategies. 
            <span className="text-primary font-semibold"> Results guaranteed in 30 days or money back!</span>
          </p>
          
          {/* Trust Elements with new colors - Responsive */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-primary/20 text-primary px-2 sm:px-4 py-1 sm:py-2 rounded-full">
              <Check size={14} />
              <span className="text-xs sm:text-sm">Money Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-secondary/20 text-secondary px-2 sm:px-4 py-1 sm:py-2 rounded-full">
              <Award size={14} />
              <span className="text-xs sm:text-sm">Award Winning Team</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-accent/20 text-accent px-2 sm:px-4 py-1 sm:py-2 rounded-full">
              <CheckCircle size={14} />
              <span className="text-xs sm:text-sm">24/7 Support</span>
            </div>
          </div>
          
          {/* Premium CTA Buttons - Fixed mobile responsive design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-sm lg:text-base px-4 lg:px-6 py-4 lg:py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium ios-button ios-glow animate-pulse min-h-[56px] max-w-full break-words hyphens-auto"
              onClick={handleStartJourney}
            >
              <Sparkles size={16} className="lg:w-[18px] lg:h-[18px] flex-shrink-0 mr-2" />
              <span className="text-center leading-tight whitespace-normal">Get FREE Strategy Session</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-sm lg:text-base px-4 lg:px-6 py-4 lg:py-6 border-primary/20 bg-card/50 text-foreground ios-button backdrop-blur-md hover:bg-card/70 min-h-[56px] max-w-full"
              onClick={handleViewWork}
            >
              <span className="text-center leading-tight whitespace-normal">See Success Stories</span>
            </Button>
          </div>
          
          {/* Urgency Element - Fixed overflow */}
          <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-destructive/20 text-destructive px-3 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 max-w-full mx-auto">
            <Zap className="w-3 h-3 text-destructive flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium break-words text-center">Only 5 Spots Left This Month - Act Fast!</span>
          </div>
          
          {/* Premium stats - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-2">
            <div className="ios-card p-4 sm:p-5 ios-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center justify-center mb-2">
                <ArrowUp className="text-primary mr-2" size={18} />
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold ios-text-gradient">300%</div>
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">Average Growth</div>
            </div>
            <div className="ios-card p-4 sm:p-5 ios-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="text-primary mr-2" size={18} />
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold ios-text-gradient">500+</div>
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">Happy Clients</div>
            </div>
            <div className="ios-card p-4 sm:p-5 ios-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center justify-center mb-2">
                <Clock className="text-primary mr-2" size={18} />
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold ios-text-gradient">30 Days</div>
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">Guaranteed Results</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
