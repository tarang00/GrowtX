import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, User, Briefcase, Search, ArrowUp, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PortfolioDetail from "@/components/PortfolioDetail";

const Portfolio = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleStartProject = () => {
    navigate('/contact');
  };

  const handleScheduleConsultation = () => {
    navigate('/contact');
  };

  const handleViewDetails = (project: any) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
  };

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    toast({
      title: "Filter Applied",
      description: `Showing projects in: ${category}`,
    });
  };

  const projects = [
    {
      title: "TechStartup Complete Digital Transformation",
      category: "Web Development + Marketing",
      description: "Built a modern, responsive website with integrated booking system, payment gateway, and launched comprehensive social media campaigns.",
      icon: <Home size={32} />,
      result: "300% increase in conversions",
      technologies: ["React", "Node.js", "Stripe", "Social Media"],
      client: "TechVision Startup"
    },
    {
      title: "E-commerce Platform Development",
      category: "Full Stack Development",
      description: "Complete e-commerce solution with custom inventory management, analytics dashboard, and automated marketing workflows.",
      icon: <User size={32} />,
      result: "150% boost in sales",
      technologies: ["Next.js", "MongoDB", "Analytics", "Automation"],
      client: "RetailPro Solutions"
    },
    {
      title: "Multi-Platform Social Media Campaign",
      category: "Digital Marketing",
      description: "Strategic social media management across multiple platforms with content creation, community engagement, and paid advertising.",
      icon: <Briefcase size={32} />,
      result: "500% engagement growth",
      technologies: ["Content Strategy", "Paid Ads", "Analytics", "Community Management"],
      client: "LocalBiz Network"
    },
    {
      title: "AR/VR Marketing Experience",
      category: "AR/VR Technology", 
      description: "Immersive augmented reality product showcase and virtual reality brand experience for enhanced customer engagement.",
      icon: <Search size={32} />,
      result: "400% engagement increase",
      technologies: ["Unity", "ARCore", "WebXR", "3D Modeling"],
      client: "InnovateVR Corp"
    },
    {
      title: "Startup Branding & Growth Strategy",
      category: "Business Consulting + Design",
      description: "Complete brand identity creation, business strategy development, and growth optimization for early-stage startup.",
      icon: <ArrowUp size={32} />,
      result: "200% revenue growth",
      technologies: ["Brand Strategy", "Design Systems", "Growth Metrics", "Consulting"],
      client: "GrowthCo Startup"
    },
    {
      title: "Corporate Website Redesign",
      category: "Web Development",
      description: "Complete website overhaul with modern design, improved UX, SEO optimization, and content management system.",
      icon: <Building size={32} />,
      result: "250% organic traffic increase",
      technologies: ["WordPress", "SEO", "UX Design", "Performance Optimization"],
      client: "Enterprise Solutions Ltd"
    }
  ];

  const categories = ["All", "Web Development", "Digital Marketing", "AR/VR Technology", "Business Consulting", "Design"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses like yours achieve remarkable growth 
              through our innovative digital solutions and strategic expertise.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={activeFilter === category ? "default" : "outline"} 
                className="hover:bg-accent/10 hover:scale-105 transition-transform"
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover-lift glass-effect group cursor-pointer h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-t-lg">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <Badge variant="secondary" className="w-fit mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium gradient-text mb-2">{project.result}</div>
                      <div className="text-xs text-muted-foreground">Client: {project.client}</div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full mt-auto hover:scale-105 transition-transform"
                      onClick={() => handleViewDetails(project)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <section className="mb-16">
            <Card className="glass-effect">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  Portfolio <span className="gradient-text">Highlights</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">200+</div>
                    <div className="text-muted-foreground">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">15+</div>
                    <div className="text-muted-foreground">Industries Served</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
                    <div className="text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section>
            <Card className="glass-effect">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Create Your <span className="gradient-text">Success Story</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and see how we can help you achieve similar results. 
                  Schedule a free consultation to get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={handleStartProject}
                    className="hover:scale-105 transition-transform"
                  >
                    Start Your Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleScheduleConsultation}
                    className="hover:scale-105 transition-transform"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* Portfolio Detail Modal */}
      <PortfolioDetail 
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        project={selectedProject}
      />
    </Layout>
  );
};

export default Portfolio;
