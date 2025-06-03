
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { submitFreeServiceForm, type FreeServiceFormData } from "@/lib/formHandlers";

const FreeServices = () => {
  const [formData, setFormData] = useState<FreeServiceFormData>({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    description: "",
    eligibilityChecks: {
      verifiedBusiness: false,
      portfolioDisplay: false,
      socialFollow: false,
      testimonial: false,
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const allChecked = Object.values(formData.eligibilityChecks).every(Boolean);
    if (!allChecked) {
      toast.error("Please confirm all eligibility requirements");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitFreeServiceForm(formData);
      toast.success("Application submitted successfully! We'll contact you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        businessName: "",
        phone: "",
        email: "",
        description: "",
        eligibilityChecks: {
          verifiedBusiness: false,
          portfolioDisplay: false,
          socialFollow: false,
          testimonial: false,
        }
      });
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (key: keyof typeof formData.eligibilityChecks) => {
    setFormData(prev => ({
      ...prev,
      eligibilityChecks: {
        ...prev.eligibilityChecks,
        [key]: !prev.eligibilityChecks[key]
      }
    }));
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Free Services</span> 🎁
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Limited slots available! Get professional services worth $2000+ absolutely free. 
              Perfect for startups and small businesses ready to make their mark.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">What You Get (100% Free)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Landing Page Website</h3>
                      <p className="text-muted-foreground">Fully functional, responsive website with modern design</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">1-Month Social Media Management</h3>
                      <p className="text-muted-foreground">Professional posts, engagement, and growth strategy</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Logo or Flyer Design</h3>
                      <p className="text-muted-foreground">Professional branding material of your choice</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Free Business Consultation</h3>
                      <p className="text-muted-foreground">1-hour strategic session with our experts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-accent">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Eligibility Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-accent">📋</span>
                    <span className="text-muted-foreground">Must be a verified business/startup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent">🎯</span>
                    <span className="text-muted-foreground">Allow us to showcase project in our portfolio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent">📱</span>
                    <span className="text-muted-foreground">Follow us on Instagram or LinkedIn</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-accent">⭐</span>
                    <span className="text-muted-foreground">Provide a testimonial after project completion</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Application Form */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl">Apply Now</CardTitle>
                <p className="text-muted-foreground">Fill out the form below to claim your free services</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input
                        id="businessName"
                        value={formData.businessName}
                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
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

                  <div>
                    <Label htmlFor="description">Business Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your business, goals, and what you hope to achieve..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      required
                      rows={4}
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Eligibility Checkboxes */}
                  <div className="space-y-4 border-t border-border pt-6">
                    <h3 className="font-semibold">Confirm Eligibility (All required)</h3>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="verifiedBusiness"
                        checked={formData.eligibilityChecks.verifiedBusiness}
                        onCheckedChange={() => handleCheckboxChange('verifiedBusiness')}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="verifiedBusiness" className="text-sm">
                        I confirm that this is a verified business/startup
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="portfolioDisplay"
                        checked={formData.eligibilityChecks.portfolioDisplay}
                        onCheckedChange={() => handleCheckboxChange('portfolioDisplay')}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="portfolioDisplay" className="text-sm">
                        I allow GrowtX to display this project in their portfolio
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="socialFollow"
                        checked={formData.eligibilityChecks.socialFollow}
                        onCheckedChange={() => handleCheckboxChange('socialFollow')}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="socialFollow" className="text-sm">
                        I will follow GrowtX on Instagram or LinkedIn
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="testimonial"
                        checked={formData.eligibilityChecks.testimonial}
                        onCheckedChange={() => handleCheckboxChange('testimonial')}
                        disabled={isSubmitting}
                      />
                      <Label htmlFor="testimonial" className="text-sm">
                        I will provide a testimonial after project completion
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full min-h-[48px] text-sm px-4 py-3 leading-tight text-center" 
                    disabled={isSubmitting}
                  >
                    <span className="break-words">
                      {isSubmitting ? 'Submitting...' : '🔥 Claim My Free Services'}
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 glass-effect rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">⏰ Limited Time Offer</h2>
            <p className="text-muted-foreground mb-6">
              Only 10 slots available per month. Don't miss this opportunity to kickstart your business growth!
            </p>
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <div>🎯 No Hidden Costs</div>
              <div>⚡ Quick Turnaround</div>
              <div>🏆 Professional Quality</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FreeServices;
