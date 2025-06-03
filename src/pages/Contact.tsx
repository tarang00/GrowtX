
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Calendar, User, Image, Clock, Phone, Building, Zap } from "lucide-react";
import { submitContactForm, type ContactFormData } from "@/lib/formHandlers";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
    scheduleCall: false,
    callDateTime: undefined,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.scheduleCall && (!formData.callDateTime?.date || !formData.callDateTime?.time)) {
      toast.error("Please select a date and time for your call.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      
      const message = formData.scheduleCall 
        ? `Message sent successfully! Your call is scheduled for ${formData.callDateTime?.date ? formData.callDateTime.date.toDateString() : ''} at ${formData.callDateTime?.time}. We'll send you a calendar invite shortly.`
        : "Message sent successfully! We'll get back to you within 24 hours.";
      
      toast.success(message);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        newsletter: false,
        scheduleCall: false,
        callDateTime: undefined,
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Social Media Management",
    "Website Development", 
    "Business Design",
    "Business Consulting",
    "AR/VR Marketing",
    "Digital Marketing",
    "Custom Solution"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000", 
    "$10,000 - $25,000",
    "$25,000+"
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="ios-text-gradient">Grow Together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with us for a free consultation 
              and let's discuss how we can help you achieve your growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="ios-card">
                <CardHeader>
                  <CardTitle className="text-white">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Email Us</div>
                      <div className="text-sm text-muted-foreground">hello@growtx.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Call Us</div>
                      <div className="text-sm text-muted-foreground">+91 9209792019</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Calendar size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Business Hours</div>
                      <div className="text-sm text-muted-foreground">Mon - Fri, 9AM - 6PM</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-primary/20">
                    <h4 className="font-medium text-white mb-3">Leadership Team</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <User size={14} className="text-primary" />
                        <span className="text-gray-200">CEO: Kuldip Lilhare</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User size={14} className="text-primary" />
                        <span className="text-gray-200">CTO: Rahul Atraye</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User size={14} className="text-primary" />
                        <span className="text-gray-200">Head of Marketing: Tarang Lilahre</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="ios-card">
                <CardHeader>
                  <CardTitle className="text-white">Why Choose GrowtX?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-gray-200">24-hour response guarantee</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-gray-200">Free consultation and strategy session</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-gray-200">Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-gray-200">Dedicated project manager</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-gray-200">Money-back guarantee</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="ios-card border-accent">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-2 flex justify-center">
                    <Image size={24} />
                  </div>
                  <div className="font-semibold mb-2 text-white">Free Services Available!</div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check out our free services program for qualified businesses.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="/free-services">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="ios-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a custom proposal.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-white">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-white">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-white">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="service" className="text-white">Service Interested In *</Label>
                        <Select 
                          value={formData.service} 
                          onValueChange={(value) => setFormData({...formData, service: value})}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, index) => (
                              <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-white">Project Budget</Label>
                        <Select 
                          value={formData.budget} 
                          onValueChange={(value) => setFormData({...formData, budget: value})}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetRanges.map((range, index) => (
                              <SelectItem key={index} value={range.toLowerCase().replace(/\s+/g, '-')}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-white">Project Details *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        rows={5}
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="scheduleCall"
                        checked={formData.scheduleCall}
                        onCheckedChange={(checked) => setFormData({...formData, scheduleCall: checked as boolean})}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="scheduleCall" className="text-sm text-white flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        Schedule a consultation call
                      </Label>
                    </div>

                    {formData.scheduleCall && (
                      <div>
                        <Label className="text-white">Select Date & Time for Call</Label>
                        <DateTimePicker
                          value={formData.callDateTime}
                          onChange={(value) => setFormData({...formData, callDateTime: value})}
                          placeholder="Choose your preferred date and time"
                          disabled={isSubmitting}
                        />
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="newsletter" className="text-sm text-white">
                        Subscribe to our newsletter for business growth tips and updates
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : (formData.scheduleCall ? 'Send Message & Schedule Call' : 'Send Message & Get Free Consultation')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently <span className="ios-text-gradient">Asked Questions</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="ios-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-white">How quickly can you start my project?</h3>
                  <p className="text-sm text-muted-foreground">
                    We can typically start within 3-5 business days after project approval. 
                    For urgent projects, we offer expedited timelines.
                  </p>
                </CardContent>
              </Card>

              <Card className="ios-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-white">Do you work with small businesses?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! We specialize in helping startups, MSMEs, and local businesses grow. 
                    We even offer free services for qualified new businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="ios-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-white">What's included in the free consultation?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our free consultation includes business analysis, strategy recommendations, 
                    project scope discussion, and a custom proposal with transparent pricing.
                  </p>
                </CardContent>
              </Card>

              <Card className="ios-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-white">Do you provide ongoing support?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! We offer various maintenance and support packages to ensure your 
                    digital assets continue performing optimally after launch.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
