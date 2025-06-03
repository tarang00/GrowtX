
import { Sparkles, TrendingUp, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AttractiveHooks = () => {
  const navigate = useNavigate();

  const hooks = [
    {
      icon: <TrendingUp size={32} />,
      title: "300% Growth Guaranteed",
      subtitle: "Or We Work for Free",
      description: "Join 500+ businesses that saw explosive growth with our proven strategies."
    },
    {
      icon: <Zap size={32} />,
      title: "Results in 30 Days",
      subtitle: "Or Your Money Back",
      description: "See measurable improvements in your business metrics within the first month."
    },
    {
      icon: <Target size={32} />,
      title: "Free Strategy Session",
      subtitle: "Worth ₹10,000 - Limited Time",
      description: "Get a personalized growth plan tailored to your business goals."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 ios-fade-in">
          <div className="inline-flex items-center space-x-3 ios-card px-6 py-3 mb-8 ios-bounce">
            <Sparkles className="text-primary" size={16} strokeWidth={3} />
            <span className="text-sm font-medium text-foreground">Limited Time Offers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight text-foreground">
            Transform Your Business
            <span className="ios-text-gradient block">Starting Today</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {hooks.map((hook, index) => (
            <div key={index} className="ios-card p-8 text-center ios-slide-up hover:ios-glow transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/20 rounded-2xl text-primary">
                  {hook.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">{hook.title}</h3>
              <p className="text-primary font-medium mb-4">{hook.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">{hook.description}</p>
            </div>
          ))}
        </div>

        {/* Premium urgency CTA */}
        <div className="text-center ios-card p-12 ios-glow ios-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="inline-flex items-center space-x-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Only 5 Spots Left This Month</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground">
            Don't Miss Out on
            <span className="ios-text-gradient block">Explosive Growth</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join successful entrepreneurs who chose GrowtX and never looked back. 
            Your competitors are already moving ahead - will you?
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/contact')}
            className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium ios-button ios-glow animate-pulse"
          >
            <Sparkles size={20} />
            Claim Your Growth Session Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AttractiveHooks;
