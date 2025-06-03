import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { submitCareerForm, type CareerFormData } from "@/lib/formHandlers";

const Careers = () => {
  const [applicationData, setApplicationData] = useState<CareerFormData>({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    portfolio: "",
    coverLetter: "",
    availability: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resume) {
      toast.error("Please upload your resume/CV");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataWithResume = {
        ...applicationData,
        resumeFileName: resume.name
      };
      
      await submitCareerForm(formDataWithResume);
      toast.success("Application submitted successfully! We'll review your application and get back to you within 5-7 business days.");
      
      // Reset form
      setApplicationData({ 
        name: "", 
        email: "", 
        phone: "",
        position: "", 
        experience: "",
        education: "",
        portfolio: "",
        coverLetter: "",
        availability: ""
      });
      setResume(null);
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResume(file);
      toast.success("Resume uploaded successfully!");
    }
  };

  const internshipCategories = [
    {
      category: "Development & Engineering",
      roles: [
        "Software Developer",
        "Mobile App Developer (iOS/Android)",
        "Full Stack Developer",
        "Data Engineer",
        "Cloud Engineer",
        "DevOps Engineer",
        "Artificial Intelligence (AI) Engineer",
        "Solutions Architect"
      ]
    },
    {
      category: "Data & Analytics",
      roles: [
        "Data Analyst",
        "Data Scientist",
        "Research Analyst",
        "Business Analyst"
      ]
    },
    {
      category: "Design & User Experience",
      roles: [
        "UI/UX Designer"
      ]
    },
    {
      category: "Quality & Testing",
      roles: [
        "Quality Assurance (QA) Engineer",
        "Software Tester"
      ]
    },
    {
      category: "Project Management",
      roles: [
        "Project Manager",
        "Product Manager",
        "Scrum Master"
      ]
    },
    {
      category: "IT Operations & Support",
      roles: [
        "Network Administrator",
        "Systems Administrator",
        "Technical Support Engineer",
        "Cybersecurity Specialist"
      ]
    },
    {
      category: "Marketing & Sales",
      roles: [
        "Digital Marketing Specialist",
        "Digital Marketing",
        "SEO",
        "Social Media Marketing",
        "Sales and Marketing"
      ]
    },
    {
      category: "Business & Consulting",
      roles: [
        "IT Consultant",
        "CRM Specialist",
        "HR and Recruitment"
      ]
    }
  ];

  const allRoles = internshipCategories.flatMap(cat => cat.roles);

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              3-Month <span className="gradient-text">Internship Program</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Join our comprehensive internship program and gain real-world experience in the IT industry. 
              Work with expert teams on live projects and build your career in technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-sm py-2 px-4">
                📍 Work From Home
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                ⏰ 3 Months Duration
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                🎓 Certificate Provided
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                💼 29 Available Roles
              </Badge>
            </div>
          </div>

          {/* Program Overview */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">29</div>
                  <div className="text-lg font-semibold mb-2">Available Roles</div>
                  <p className="text-sm text-muted-foreground">Across 8 different categories</p>
                </CardContent>
              </Card>
              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-lg font-semibold mb-2">Remote Work</div>
                  <p className="text-sm text-muted-foreground">Work from anywhere</p>
                </CardContent>
              </Card>
              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-lg font-semibold mb-2">Months Program</div>
                  <p className="text-sm text-muted-foreground">Intensive hands-on experience</p>
                </CardContent>
              </Card>
              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">Live</div>
                  <div className="text-lg font-semibold mb-2">Projects</div>
                  <p className="text-sm text-muted-foreground">Real client work experience</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Available Positions by Category */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Available Internship Positions</span>
            </h2>
            
            <div className="space-y-8">
              {internshipCategories.map((category, index) => (
                <Card key={index} className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-xl gradient-text">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.roles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                          onClick={() => {
                            setApplicationData({...applicationData, position: role});
                            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{role}</span>
                            <Button size="sm" variant="ghost" className="text-primary">
                              Apply
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Responsibilities */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Key <span className="gradient-text">Responsibilities</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <h3 className="font-semibold mb-2">Live Project Collaboration</h3>
                      <p className="text-sm text-muted-foreground">Work with cross-functional teams to deliver real solutions for actual clients</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🛠️</div>
                    <div>
                      <h3 className="font-semibold mb-2">Industry Tools & Technologies</h3>
                      <p className="text-sm text-muted-foreground">Learn and apply industry-standard tools, platforms, and methodologies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">💡</div>
                    <div>
                      <h3 className="font-semibold mb-2">Software Development Lifecycle</h3>
                      <p className="text-sm text-muted-foreground">Assist in designing, developing, testing, and deploying software solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📊</div>
                    <div>
                      <h3 className="font-semibold mb-2">Data-Driven Decision Making</h3>
                      <p className="text-sm text-muted-foreground">Contribute to market research, business analysis, and strategic planning</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What We Offer */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What We <span className="gradient-text">Offer</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="glass-effect text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="font-semibold mb-2">Team Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Work in a collaborative environment to build your future career</p>
                </CardContent>
              </Card>
              <Card className="glass-effect text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-semibold mb-2">Hands-on Experience</h3>
                  <p className="text-sm text-muted-foreground">Real projects in your chosen field with practical application</p>
                </CardContent>
              </Card>
              <Card className="glass-effect text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="font-semibold mb-2">Mentorship & Training</h3>
                  <p className="text-sm text-muted-foreground">Learn from experienced professionals and industry experts</p>
                </CardContent>
              </Card>
              <Card className="glass-effect text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">📜</div>
                  <h3 className="font-semibold mb-2">Certificate & Opportunities</h3>
                  <p className="text-sm text-muted-foreground">Completion certificate and potential full-time job offers</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Application Form */}
          <section id="application-form">
            <Card className="max-w-4xl mx-auto glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Apply for 3-Month Internship</CardTitle>
                <p className="text-center text-muted-foreground">
                  Join our comprehensive internship program. All fields marked with * are required.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={applicationData.name}
                          onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={applicationData.email}
                          onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={applicationData.phone}
                          onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="position">Position Applied For *</Label>
                        <Select 
                          value={applicationData.position} 
                          onValueChange={(value) => setApplicationData({...applicationData, position: value})}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            {allRoles.map((role, idx) => (
                              <SelectItem key={idx} value={role}>{role}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Education & Experience */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Education & Experience</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="education">Current Education *</Label>
                        <Input
                          id="education"
                          placeholder="e.g., B.Tech Computer Science, 3rd Year"
                          value={applicationData.education}
                          onChange={(e) => setApplicationData({...applicationData, education: e.target.value})}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="experience">Relevant Experience</Label>
                        <Input
                          id="experience"
                          placeholder="Previous internships, projects, etc."
                          value={applicationData.experience}
                          onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="portfolio">Portfolio/GitHub URL</Label>
                        <Input
                          id="portfolio"
                          type="url"
                          placeholder="https://github.com/yourusername or portfolio link"
                          value={applicationData.portfolio}
                          onChange={(e) => setApplicationData({...applicationData, portfolio: e.target.value})}
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <Label htmlFor="availability">Availability *</Label>
                        <Select 
                          value={applicationData.availability} 
                          onValueChange={(value) => setApplicationData({...applicationData, availability: value})}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="When can you start?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="within-2-weeks">Within 2 weeks</SelectItem>
                            <SelectItem value="within-1-month">Within 1 month</SelectItem>
                            <SelectItem value="after-semester">After current semester</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <Label htmlFor="resume">Upload Resume/CV * (PDF format preferred)</Label>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      required
                      className="cursor-pointer"
                      disabled={isSubmitting}
                    />
                    {resume && (
                      <p className="text-sm text-green-600 mt-1">
                        ✓ {resume.name} uploaded successfully
                      </p>
                    )}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell us why you're interested in this position, what you hope to learn, and what you can contribute to our team..."
                      value={applicationData.coverLetter}
                      onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                      required
                      rows={6}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> This is an unpaid internship program focused on providing valuable learning experience. 
                      We review all applications carefully and contact shortlisted candidates within 5-7 business days.
                    </p>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
