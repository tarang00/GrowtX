
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Calendar, Users, Target, TrendingUp, CheckCircle, Star } from "lucide-react";

interface PortfolioDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    description: string;
    result: string;
    technologies: string[];
    client: string;
    icon: React.ReactNode;
  } | null;
}

const PortfolioDetail = ({ isOpen, onClose, project }: PortfolioDetailProps) => {
  if (!project) return null;

  const getProjectDetails = (title: string) => {
    const details = {
      "TechStartup Complete Digital Transformation": {
        duration: "6 months",
        teamSize: "8 members",
        timeline: "March 2024 - September 2024",
        challenge: "TechVision Startup needed a complete digital overhaul to compete in the modern market. They had an outdated website, no social media presence, and struggled with customer acquisition.",
        solution: "We implemented a comprehensive digital transformation strategy including modern website development, integrated booking systems, payment processing, and a full social media marketing campaign.",
        process: [
          "Initial consultation and requirement analysis",
          "UI/UX design and user journey mapping", 
          "Frontend development with React and responsive design",
          "Backend integration with Node.js and database setup",
          "Payment gateway integration with Stripe",
          "Social media strategy and content creation",
          "SEO optimization and performance tuning",
          "Testing, deployment, and ongoing support"
        ],
        results: [
          "300% increase in conversion rates",
          "150% boost in organic traffic",
          "80% improvement in user engagement",
          "50% reduction in bounce rate"
        ],
        testimonial: "GrowtX transformed our entire digital presence. The results exceeded our expectations and our business has never been stronger.",
        clientInfo: "TechVision is a B2B software startup focused on automation solutions for small businesses."
      },
      "E-commerce Platform Development": {
        duration: "4 months",
        teamSize: "6 members", 
        timeline: "January 2024 - April 2024",
        challenge: "RetailPro Solutions needed a robust e-commerce platform that could handle high traffic, manage complex inventory, and provide detailed analytics for business insights.",
        solution: "We built a custom e-commerce solution using Next.js with advanced inventory management, real-time analytics dashboard, and automated marketing workflows.",
        process: [
          "Requirements gathering and technical planning",
          "Database design and architecture planning",
          "Frontend development with Next.js",
          "Backend API development with MongoDB",
          "Inventory management system integration",
          "Analytics dashboard development", 
          "Payment processing and security implementation",
          "Marketing automation setup and testing"
        ],
        results: [
          "150% increase in sales volume",
          "90% improvement in inventory accuracy",
          "60% reduction in manual processes",
          "40% increase in customer retention"
        ],
        testimonial: "The platform exceeded our expectations. The analytics alone have helped us make better business decisions.",
        clientInfo: "RetailPro Solutions is a mid-size retail company specializing in consumer electronics and accessories."
      },
      "Multi-Platform Social Media Campaign": {
        duration: "8 months",
        teamSize: "5 members",
        timeline: "February 2024 - September 2024", 
        challenge: "LocalBiz Network struggled with low social media engagement and needed a comprehensive strategy to build their online community and increase brand awareness.",
        solution: "We created a multi-platform social media strategy with custom content creation, community management, and targeted advertising campaigns across major platforms.",
        process: [
          "Social media audit and competitor analysis",
          "Content strategy development and calendar creation",
          "Visual branding and content design",
          "Community management setup and guidelines",
          "Paid advertising campaign creation",
          "Influencer partnership coordination",
          "Performance tracking and optimization",
          "Monthly reporting and strategy refinement"
        ],
        results: [
          "500% increase in engagement rates",
          "300% growth in follower count",
          "200% improvement in brand mentions",
          "150% increase in website traffic from social"
        ],
        testimonial: "Our social media presence went from practically zero to industry-leading. The engagement is incredible.",
        clientInfo: "LocalBiz Network connects local businesses with their communities through various networking events and services."
      },
      "AR/VR Marketing Experience": {
        duration: "5 months", 
        teamSize: "7 members",
        timeline: "April 2024 - August 2024",
        challenge: "InnovateVR Corp wanted to showcase their products in an immersive way that would differentiate them from competitors and provide customers with an interactive experience.",
        solution: "We developed cutting-edge AR product visualization and VR brand experiences using Unity, ARCore, and WebXR technologies.",
        process: [
          "AR/VR strategy and experience design",
          "3D modeling and asset creation", 
          "Unity development and optimization",
          "ARCore integration for mobile devices",
          "WebXR implementation for browser access",
          "User testing and experience refinement",
          "Performance optimization and deployment",
          "Training and documentation delivery"
        ],
        results: [
          "400% increase in user engagement",
          "250% improvement in product understanding", 
          "180% boost in sales conversions",
          "90% positive user feedback rating"
        ],
        testimonial: "The AR/VR experience completely transformed how customers interact with our products. It's a game-changer.",
        clientInfo: "InnovateVR Corp specializes in virtual reality solutions for training and entertainment industries."
      },
      "Startup Branding & Growth Strategy": {
        duration: "7 months",
        teamSize: "6 members",
        timeline: "January 2024 - July 2024",
        challenge: "GrowthCo Startup needed complete brand identity creation and a strategic growth plan to scale from early-stage to market leader in their niche.",
        solution: "We provided comprehensive branding services including logo design, brand guidelines, strategic consulting, and growth optimization frameworks.",
        process: [
          "Brand discovery and market research",
          "Logo design and visual identity creation",
          "Brand guidelines and style guide development",
          "Business strategy consultation and planning",
          "Growth metrics framework establishment",
          "Marketing material design and creation",
          "Digital presence optimization",
          "Ongoing strategic consulting and support"
        ],
        results: [
          "200% revenue growth in 6 months",
          "150% increase in brand recognition",
          "300% improvement in lead quality",
          "90% client satisfaction rating"
        ],
        testimonial: "GrowtX didn't just create our brand - they built our entire growth foundation. We couldn't have scaled without them.",
        clientInfo: "GrowthCo Startup provides growth consulting services to early-stage technology companies."
      },
      "Corporate Website Redesign": {
        duration: "3 months",
        teamSize: "5 members", 
        timeline: "May 2024 - July 2024",
        challenge: "Enterprise Solutions Ltd had an outdated website that didn't reflect their professional services and was performing poorly in search rankings.",
        solution: "We completely redesigned their corporate website with modern design principles, improved UX, comprehensive SEO optimization, and a user-friendly CMS.",
        process: [
          "Website audit and performance analysis",
          "User experience research and wireframing",
          "Modern design system creation",
          "WordPress development and customization",
          "Content migration and optimization",
          "SEO implementation and optimization",
          "Performance testing and optimization",
          "Training and documentation delivery"
        ],
        results: [
          "250% increase in organic traffic",
          "180% improvement in page load speed",
          "200% boost in lead generation",
          "85% reduction in bounce rate"
        ],
        testimonial: "Our new website perfectly represents our brand and the results speak for themselves. Traffic and leads have skyrocketed.",
        clientInfo: "Enterprise Solutions Ltd provides business consulting and technology solutions to Fortune 500 companies."
      }
    };
    
    return details[title as keyof typeof details] || {
      duration: "3-6 months",
      teamSize: "5-8 members",
      timeline: "2024",
      challenge: "Client needed comprehensive digital solutions to improve their business performance.",
      solution: "We provided tailored solutions to meet their specific business needs.",
      process: ["Analysis", "Planning", "Development", "Testing", "Deployment", "Support"],
      results: ["Significant improvement in key metrics", "Enhanced user experience", "Increased ROI"],
      testimonial: "Excellent work and results!",
      clientInfo: "Professional services client focused on growth and innovation."
    };
  };

  const details = getProjectDetails(project.title);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <div className="text-primary">{project.icon}</div>
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-effect">
              <CardContent className="p-4 text-center">
                <Calendar className="text-primary mx-auto mb-2" size={24} />
                <div className="text-sm text-muted-foreground">Duration</div>
                <div className="font-semibold">{details.duration}</div>
              </CardContent>
            </Card>
            <Card className="glass-effect">
              <CardContent className="p-4 text-center">
                <Users className="text-primary mx-auto mb-2" size={24} />
                <div className="text-sm text-muted-foreground">Team Size</div>
                <div className="font-semibold">{details.teamSize}</div>
              </CardContent>
            </Card>
            <Card className="glass-effect">
              <CardContent className="p-4 text-center">
                <Target className="text-primary mx-auto mb-2" size={24} />
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold">{details.timeline}</div>
              </CardContent>
            </Card>
          </div>

          {/* Client & Category Info */}
          <div className="flex flex-wrap gap-4 items-center">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {project.category}
            </Badge>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium">Client:</span> {project.client}
            </div>
          </div>

          {/* Challenge */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="text-red-500" size={20} />
                The Challenge
              </h3>
              <p className="text-muted-foreground leading-relaxed">{details.challenge}</p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} />
                Our Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed">{details.solution}</p>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Project Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="text-green-500" size={20} />
                Key Results
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.results.map((result, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-sm">{result}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold gradient-text mb-1">{project.result}</div>
                <div className="text-sm text-muted-foreground">Primary Achievement</div>
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="text-yellow-500" size={20} />
                Client Testimonial
              </h3>
              <blockquote className="italic text-muted-foreground mb-4 text-lg">
                "{details.testimonial}"
              </blockquote>
              <div className="text-sm">
                <div className="font-medium">{project.client}</div>
                <div className="text-muted-foreground">{details.clientInfo}</div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="glass-effect">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">
                Interested in Similar Results?
              </h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss how we can help your business achieve comparable success.
              </p>
              <Button size="lg" className="hover:scale-105 transition-transform">
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDetail;
