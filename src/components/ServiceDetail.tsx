
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Users, Target, TrendingUp, CheckCircle, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceDetailProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
  } | null;
}

const ServiceDetail = ({ isOpen, onClose, service }: ServiceDetailProps) => {
  const navigate = useNavigate();

  if (!service) return null;

  const getServiceDetails = (title: string) => {
    const details = {
      "Social Media Management": {
        overview: "Transform your social media presence with our comprehensive management service. We handle everything from strategy development to daily posting, community engagement, and performance analysis.",
        duration: "Ongoing monthly service",
        deliverables: ["Content Calendar", "Daily Posts", "Community Management", "Monthly Reports", "Strategy Sessions"],
        process: [
          "Initial brand audit and competitor analysis",
          "Content strategy development and approval",
          "Content creation and visual design",
          "Posting schedule setup and automation",
          "Daily community management and engagement",
          "Performance tracking and analytics",
          "Monthly strategy review and optimization",
          "Quarterly goal setting and planning"
        ],
        benefits: [
          "Increased brand awareness and visibility",
          "Higher engagement rates and follower growth",
          "Improved customer relationships and loyalty",
          "Professional brand consistency across platforms",
          "Time savings for business owners",
          "Data-driven insights and improvements"
        ],
        includes: [
          "Up to 30 posts per month across platforms",
          "Custom graphics and visual content",
          "Story and reel creation",
          "Community management (comments, DMs)",
          "Monthly analytics report",
          "Strategy consultation calls"
        ],
        timeline: "Results typically visible within 30-60 days",
        testimonial: "Our social media engagement increased by 400% and we gained 2,000 new followers in just 3 months!"
      },
      "Website Development": {
        overview: "Get a professional, responsive website that converts visitors into customers. Built with modern technologies and optimized for search engines and performance.",
        duration: "2-6 weeks development",
        deliverables: ["Custom Website", "Mobile Optimization", "SEO Setup", "Analytics Integration", "Training Documentation"],
        process: [
          "Discovery call and requirement gathering",
          "Wireframing and design mockups",
          "Content planning and structure",
          "Frontend development and coding",
          "Backend integration and functionality",
          "SEO optimization and meta setup",
          "Testing across devices and browsers",
          "Launch and post-launch support"
        ],
        benefits: [
          "Professional online presence",
          "24/7 business representation",
          "Lead generation and conversion",
          "Improved search engine visibility",
          "Mobile-friendly user experience",
          "Fast loading speeds and performance"
        ],
        includes: [
          "Custom responsive design",
          "Content Management System",
          "Contact forms and lead capture",
          "Basic SEO optimization",
          "Google Analytics setup",
          "3 months of support and updates"
        ],
        timeline: "Website live within 2-6 weeks",
        testimonial: "Our new website generated 200% more leads in the first month. The design perfectly represents our brand!"
      },
      "Mobile App Development": {
        overview: "Create powerful mobile applications that engage users and drive business growth. We develop native and cross-platform apps with seamless user experiences.",
        duration: "3-6 months development",
        deliverables: ["iOS App", "Android App", "App Store Submission", "Documentation", "Training"],
        process: [
          "App concept and feature planning",
          "UI/UX design and prototyping",
          "Development and coding",
          "Testing and quality assurance",
          "App store optimization",
          "Launch and deployment",
          "Post-launch support",
          "Updates and maintenance"
        ],
        benefits: [
          "Direct customer engagement",
          "Increased brand loyalty",
          "Enhanced user experience",
          "Additional revenue streams",
          "Competitive advantage",
          "Valuable user data insights"
        ],
        includes: [
          "Native iOS and Android development",
          "Custom UI/UX design",
          "Backend integration",
          "Push notifications",
          "App store submission",
          "6 months of support"
        ],
        timeline: "App ready for launch in 3-6 months",
        testimonial: "Our mobile app increased customer engagement by 250% and opened new revenue opportunities!"
      }
    };
    
    return details[title as keyof typeof details] || {
      overview: "Professional service tailored to your business needs with comprehensive solutions and expert guidance.",
      duration: "Varies by project scope",
      deliverables: ["Custom Solutions", "Professional Results", "Ongoing Support", "Documentation", "Training"],
      process: ["Consultation and Planning", "Strategy Development", "Implementation", "Testing and Quality Assurance", "Delivery and Launch", "Support and Optimization"],
      benefits: ["Business Growth", "Professional Results", "Expert Guidance", "Improved Efficiency", "Competitive Advantage", "Long-term Success"],
      includes: ["Professional service delivery", "Expert consultation", "Quality assurance", "Documentation", "Training and support"],
      timeline: "Timeline varies by project scope and requirements",
      testimonial: "Excellent service delivery with outstanding results that exceeded our expectations!"
    };
  };

  const details = getServiceDetails(service.title);

  const handleGetStarted = () => {
    navigate('/contact');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-3">
            <div className="text-primary">{service.icon}</div>
            {service.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Service Overview */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="text-primary" size={20} />
                Service Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
            </CardContent>
          </Card>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="glass-effect">
              <CardContent className="p-4 text-center">
                <Clock className="text-primary mx-auto mb-2" size={24} />
                <div className="text-sm text-muted-foreground">Duration</div>
                <div className="font-semibold">{details.duration}</div>
              </CardContent>
            </Card>
            <Card className="glass-effect">
              <CardContent className="p-4 text-center">
                <TrendingUp className="text-primary mx-auto mb-2" size={24} />
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold">{details.timeline}</div>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Process */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Our Process</h3>
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

          {/* Benefits */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="text-green-500" size={20} />
                Key Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Deliverables */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Deliverables</h3>
              <div className="flex flex-wrap gap-2">
                {details.deliverables.map((deliverable, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {deliverable}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="text-yellow-500" size={20} />
                Client Success Story
              </h3>
              <blockquote className="italic text-muted-foreground text-lg">
                "{details.testimonial}"
              </blockquote>
              <div className="mt-3 text-sm text-muted-foreground">
                - Satisfied Client
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="glass-effect">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss how {service.title.toLowerCase()} can help grow your business.
              </p>
              <Button size="lg" onClick={handleGetStarted} className="hover:scale-105 transition-transform">
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetail;
