
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Check, User, Image, Contact } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">GrowtX</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're a new agency with fresh perspectives and innovative approaches, 
              dedicated to transforming businesses through cutting-edge digital solutions.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="glass-effect hover-lift">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower startups, MSMEs, and local businesses with cutting-edge digital solutions 
                  that drive sustainable growth. We believe every business deserves access to professional 
                  services that can transform their potential into success.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover-lift">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading B2B growth partner, known for innovative solutions, 
                  exceptional service, and measurable results. We envision a future where 
                  every business can compete effectively in the digital marketplace.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    GrowtX is a new and dynamic agency founded with a simple yet powerful idea: 
                    every business deserves access to fresh, innovative digital services that can 
                    transform their growth trajectory. As a growing team of passionate professionals, 
                    we bring new perspectives to comprehensive B2B solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our journey began when we noticed that many startups and small businesses 
                    needed innovative approaches to digital challenges. With our fresh outlook and 
                    dedication to learning, we set out to provide professional services with 
                    transparent pricing and genuine care for our clients' success.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Though we're a new agency, our enthusiasm and commitment to excellence drive us 
                    to deliver exceptional results. We continue to grow, learn, and innovate to meet 
                    the evolving needs of modern businesses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Values */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                  <p className="text-muted-foreground text-sm">
                    We deliver exceptional quality in every project, exceeding expectations consistently.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <User size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                  <p className="text-muted-foreground text-sm">
                    We work as true partners, invested in your success and growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <Image size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground text-sm">
                    We embrace new technologies and creative solutions to stay ahead.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    <Contact size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                  <p className="text-muted-foreground text-sm">
                    Transparency, honesty, and ethical practices guide everything we do.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold">
                    KL
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Kuldip Lilhare</h3>
                  <p className="text-accent text-sm mb-3">CEO & Founder</p>
                  <p className="text-muted-foreground text-sm">
                    Visionary leader driving digital transformation and business growth strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold">
                    RA
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Rahul Atraye</h3>
                  <p className="text-accent text-sm mb-3">CTO</p>
                  <p className="text-muted-foreground text-sm">
                    Tech expert specializing in web development, AR/VR, and emerging technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-effect hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white font-bold">
                    TL
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Tarang Lilahre</h3>
                  <p className="text-accent text-sm mb-3">Head of Marketing</p>
                  <p className="text-muted-foreground text-sm">
                    Digital marketing strategist with expertise in social media and brand development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Stats */}
          <section>
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Growing Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">25+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">20+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-muted-foreground">Industries Served</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
