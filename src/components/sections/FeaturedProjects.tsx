
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Monitor, Search, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedProjects = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleViewAllProjects = () => {
    navigate('/portfolio');
  };

  const handleViewCaseStudy = (projectTitle: string) => {
    console.log(`Viewing case study for: ${projectTitle}`);
    navigate('/portfolio');
  };

  const projects = [
    {
      title: "E-commerce Platform Redesign",
      description: "Complete redesign and development of a multi-vendor e-commerce platform, resulting in 150% increase in conversions.",
      category: "Web Development",
      icon: <Monitor size={24} />,
      metrics: ["150% Conversion Increase", "40% Faster Loading", "Mobile-First Design"],
      image: "bg-gradient-to-br from-primary/20 to-accent/20"
    },
    {
      title: "AR Product Visualization",
      description: "Interactive AR experience allowing customers to visualize furniture in their homes before purchase.",
      category: "AR/VR Marketing",
      icon: <Search size={24} />,
      metrics: ["60% Higher Engagement", "AR Integration", "3D Product Models"],
      image: "bg-gradient-to-br from-accent/20 to-primary/20"
    },
    {
      title: "Startup Growth Strategy",
      description: "Comprehensive business consulting that helped a tech startup scale from $100K to $2M ARR in 18 months.",
      category: "Business Consulting",
      icon: <Briefcase size={24} />,
      metrics: ["2000% Revenue Growth", "Market Expansion", "Team Scaling"],
      image: "bg-gradient-to-br from-primary/15 to-accent/15"
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
            <ExternalLink className="text-primary" size={16} strokeWidth={3} />
            <span className="text-sm font-medium text-white">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-white">
            Success Stories &
            <span className="ios-text-gradient block">Case Studies</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See how we've helped businesses like yours achieve remarkable growth 
            through our innovative solutions and strategic approach.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="ios-card p-8 relative ios-slide-up hover:ios-glow transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Project Image/Visual */}
              <div className={`h-48 ${project.image} flex items-center justify-center relative overflow-hidden rounded-xl mb-6`}>
                <div className="text-white/80 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/60 backdrop-blur-sm text-primary text-xs px-3 py-1 rounded-full border border-primary/30">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Metrics */}
                <div className="space-y-2 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full ios-button border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
                  onClick={() => handleViewCaseStudy(project.title)}
                >
                  View Case Study
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center ios-slide-up" style={{animationDelay: '0.3s'}}>
          <div className="ios-card p-12 ios-glow">
            <h3 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
              Want to Be Our Next
              <span className="ios-text-gradient block">Success Story</span>?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
              Let's discuss your project and explore how we can help you achieve 
              similar outstanding results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleStartProject}
                className="bg-primary hover:bg-primary/90 text-white font-medium ios-button ios-glow"
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleViewAllProjects}
                className="border-white/20 bg-white/5 text-white ios-button backdrop-blur-md hover:bg-white/10"
              >
                View All Projects
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

export default FeaturedProjects;
