
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp, CheckCircle, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/lib/formHandlers";

const CallToAction = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleScheduleCall = () => {
    navigate('/contact');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: 'general-inquiry',
        budget: '',
        message: formData.message,
        newsletter: false,
        scheduleCall: false,
      });

      toast.success("Thank you for your interest. We'll get back to you within 24 hours.");

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      </div>
      
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-bounce"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-2 mb-6">
              <ArrowUp className="text-accent" size={16} />
              <span className="text-sm font-medium">Ready to Grow?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Your
              <span className="gradient-text block">Growth Journey Today</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join hundreds of successful businesses that have transformed their digital presence 
              and achieved remarkable growth with GrowtX. Let's discuss your project and explore 
              how we can help you reach your goals.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent" size={20} />
                <span>Free consultation and project assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent" size={20} />
                <span>Custom strategy tailored to your business</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent" size={20} />
                <span>Proven results with measurable ROI</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-accent" size={20} />
                <span>Ongoing support and maintenance</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="flex-1 hover:scale-105 transition-transform"
                onClick={handleGetStarted}
              >
                Get Started Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex-1 hover:scale-105 transition-transform"
                onClick={handleScheduleCall}
              >
                Schedule a Call
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="flex items-center space-x-2 mb-6">
                <Mail className="text-accent" size={24} />
                <h3 className="text-xl font-bold">Get a Free Quote</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Tell us about your project and we'll get back to you within 24 hours 
                with a detailed proposal and timeline.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input 
                  placeholder="Your Name *" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <Input 
                  placeholder="Email Address *" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
                <Input 
                  placeholder="Company Name" 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <Input 
                  placeholder="Phone Number" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <textarea 
                  className="w-full p-3 bg-input border border-border rounded-md resize-none"
                  rows={4}
                  placeholder="Tell us about your project... *"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
                <Button 
                  className="w-full hover:scale-105 transition-transform" 
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
