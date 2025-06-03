
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, User, Building, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TestimonialsPreview = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };

  const handleReadAllTestimonials = () => {
    navigate('/testimonials');
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechVision Startup",
      role: "CEO",
      content: "GrowtX delivered exactly what they promised - 300% growth in 6 months! The ROI has been incredible and their support is unmatched.",
      rating: 5,
      icon: <User size={20} />,
      verified: true
    },
    {
      name: "Michael Chen",
      company: "LocalBiz Solutions", 
      role: "Founder",
      content: "I was skeptical about the guarantee, but they exceeded expectations. Revenue increased 250% and I got my investment back 10x over.",
      rating: 5,
      icon: <Building size={20} />,
      verified: true
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      role: "Marketing Director", 
      content: "Best decision we made! Professional team, guaranteed results, and they actually delivered on every promise. Highly recommend!",
      rating: 5,
      icon: <User size={20} />,
      verified: true
    }
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
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/40 rounded-full blur-lg animate-ping"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 ios-fade-in">
          <div className="inline-flex items-center space-x-3 ios-card px-6 py-3 mb-8 ios-bounce">
            <Shield className="text-green-400" size={16} strokeWidth={3} />
            <span className="text-sm font-medium text-white">Verified Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-white">
            Real Results from
            <span className="ios-text-gradient block">Real Businesses</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what business owners say about achieving 
            <span className="text-primary font-semibold"> guaranteed 300% growth</span> with GrowtX.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="ios-card p-8 relative ios-slide-up hover:ios-glow transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="absolute top-4 left-4 flex items-center space-x-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                  <CheckCircle size={12} />
                  <span>Verified</span>
                </div>
              )}
              <div className="absolute top-4 right-4 text-primary/30">
                <Quote size={24} />
              </div>
              <div className="flex mb-4 mt-8">
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

        {/* CTA */}
        <div className="text-center ios-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="ios-card p-12 ios-glow">
            <h3 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
              Ready to Be Our
              <span className="ios-text-gradient block">Next Success Story?</span>
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 500+ satisfied clients who chose GrowtX and achieved guaranteed results. 
              <span className="text-primary font-semibold">What are you waiting for?</span>
            </p>
            
            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <CheckCircle size={16} />
                <span className="text-sm">300% Growth Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
                <Shield size={16} />
                <span className="text-sm">Money Back Promise</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleStartJourney}
                className="bg-primary hover:bg-primary/90 text-white font-medium ios-button ios-glow animate-pulse"
              >
                Get Your FREE Strategy Session
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleReadAllTestimonials}
                className="border-white/20 bg-white/5 text-white ios-button backdrop-blur-md hover:bg-white/10"
              >
                Read All Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default TestimonialsPreview;
