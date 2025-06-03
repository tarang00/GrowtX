import Layout from "@/components/Layout";
import BlogDetail from "@/components/BlogDetail";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Briefcase, Home, User, Image, Book, Contact, Check, Mail, ArrowUp } from "lucide-react";
import { useState, useMemo } from "react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all-categories");

  const handleReadMore = (post: any) => {
    setSelectedPost(post);
    setIsDetailOpen(true);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category.toLowerCase().replace(/\s+/g, '-'));
  };

  const featuredPost = {
    title: "10 Digital Marketing Strategies That Drive Business Growth in 2024",
    excerpt: "Discover the latest digital marketing trends and proven strategies that successful businesses are using to accelerate their growth and stay ahead of the competition.",
    author: "Sarah Johnson",
    date: "November 15, 2024",
    readTime: "8 min read",
    category: "Digital Marketing",
    icon: <Briefcase size={32} />,
    content: {
      introduction: "In today's rapidly evolving digital landscape, businesses need to stay ahead of the curve with innovative marketing strategies. This comprehensive guide explores the top 10 digital marketing strategies that are driving significant business growth in 2024, backed by real data and proven results.",
      sections: [
        {
          title: "1. AI-Powered Personalization",
          content: "Artificial intelligence is revolutionizing how businesses personalize customer experiences. From dynamic content recommendations to personalized email campaigns, AI enables businesses to deliver highly relevant content at scale. Companies using AI-powered personalization see up to 40% increase in conversion rates."
        },
        {
          title: "2. Video-First Content Strategy",
          content: "Video content continues to dominate digital marketing in 2024. Short-form videos, live streaming, and interactive video content are driving higher engagement rates than traditional content formats. Businesses that prioritize video content see 49% faster revenue growth compared to those that don't."
        },
        {
          title: "3. Voice Search Optimization",
          content: "With the rise of smart speakers and voice assistants, optimizing for voice search has become crucial. Businesses need to focus on conversational keywords and local SEO to capture voice search traffic effectively."
        }
      ],
      conclusion: "Implementing these digital marketing strategies requires a strategic approach and consistent execution. Start with one or two strategies that align with your business goals and gradually expand your digital marketing efforts. Remember, the key to success is measuring results and continuously optimizing your campaigns.",
      tags: ["Digital Marketing", "Business Growth", "AI", "Video Marketing", "SEO", "Content Strategy"]
    }
  };

  const blogPosts = [
    {
      title: "Complete Guide to Building a Professional Website for Small Businesses",
      excerpt: "Learn the essential elements every small business website needs to attract customers and drive conversions.",
      author: "Michael Chen",
      date: "November 12, 2024", 
      readTime: "6 min read",
      category: "Web Development",
      icon: <Home size={32} />,
      content: {
        introduction: "A professional website is the foundation of any successful small business in today's digital age. This comprehensive guide walks you through every essential element needed to create a website that not only looks professional but also converts visitors into customers.",
        sections: [
          {
            title: "Essential Website Elements",
            content: "Every small business website needs clear navigation, compelling headlines, professional design, fast loading speeds, and mobile responsiveness. These fundamental elements create the foundation for a successful online presence."
          },
          {
            title: "User Experience Design",
            content: "Focus on creating intuitive user journeys, clear call-to-action buttons, and easy-to-find contact information. Good UX design can increase conversion rates by up to 200%."
          },
          {
            title: "SEO Fundamentals",
            content: "Implement basic SEO practices including keyword optimization, meta descriptions, and local SEO to help potential customers find your business online."
          }
        ],
        conclusion: "Building a professional website is an investment in your business's future. Focus on user experience, clear messaging, and mobile optimization to create a website that drives real business results.",
        tags: ["Web Development", "Small Business", "UX Design", "SEO", "Mobile Optimization"]
      }
    },
    {
      title: "Social Media Marketing: How to Build a Strong Brand Presence",
      excerpt: "Master the art of social media marketing with proven strategies to engage your audience and build brand loyalty.",
      author: "Emily Rodriguez",
      date: "November 10, 2024",
      readTime: "5 min read", 
      category: "Social Media",
      icon: <User size={32} />,
      content: {
        introduction: "Social media marketing has evolved far beyond simple posting. In 2024, successful brands are building authentic communities, creating valuable content, and leveraging advanced targeting to reach their ideal customers.",
        sections: [
          {
            title: "Platform-Specific Strategies",
            content: "Each social media platform requires a unique approach. Instagram focuses on visual storytelling, LinkedIn on professional networking, and TikTok on entertaining short-form content. Tailor your strategy to each platform's strengths."
          },
          {
            title: "Community Building",
            content: "Focus on building genuine relationships with your audience. Respond to comments, share user-generated content, and create conversations around your brand values."
          },
          {
            title: "Content Planning",
            content: "Develop a content calendar that balances promotional content with valuable, educational posts. The 80/20 rule works well: 80% valuable content, 20% promotional."
          }
        ],
        conclusion: "Success in social media marketing comes from consistency, authenticity, and providing real value to your audience. Focus on building relationships rather than just selling products.",
        tags: ["Social Media", "Brand Building", "Content Marketing", "Community Management", "Digital Strategy"]
      }
    },
    {
      title: "The Future of Business: AR/VR Marketing Trends and Opportunities",
      excerpt: "Explore how augmented and virtual reality are revolutionizing marketing and creating new business opportunities.",
      author: "David Kumar",
      date: "November 8, 2024",
      readTime: "7 min read",
      category: "AR/VR Technology",
      icon: <Search size={32} />,
      content: {
        introduction: "Augmented Reality (AR) and Virtual Reality (VR) are no longer futuristic concepts – they're transforming how businesses engage with customers today. From virtual product demonstrations to immersive brand experiences, AR/VR technologies are creating unprecedented marketing opportunities.",
        sections: [
          {
            title: "AR in Retail and E-commerce",
            content: "AR technology allows customers to visualize products in their own environment before purchasing. Furniture retailers, fashion brands, and home improvement companies are using AR to reduce return rates and increase customer confidence. Studies show AR experiences can increase conversion rates by up to 94%."
          },
          {
            title: "VR for Immersive Brand Experiences",
            content: "VR creates completely immersive environments where brands can tell their stories in unprecedented ways. Real estate companies offer virtual property tours, travel agencies provide destination previews, and automotive brands let customers experience cars before visiting dealerships."
          },
          {
            title: "Implementation Strategies",
            content: "Start with simple AR filters on social media platforms, then graduate to more complex applications. Consider your audience's device capabilities and ensure seamless user experiences across different platforms."
          },
          {
            title: "ROI and Measurement",
            content: "Track engagement metrics, time spent in AR/VR experiences, and conversion rates. Many businesses see 70% higher engagement rates with AR/VR content compared to traditional marketing materials."
          }
        ],
        conclusion: "AR and VR technologies are becoming more accessible and affordable, making now the perfect time for businesses to explore these innovative marketing channels. Start small, focus on user experience, and measure results to build a successful AR/VR marketing strategy.",
        tags: ["AR/VR Technology", "Digital Innovation", "Customer Experience", "Marketing Technology", "Future Trends"]
      }
    },
    {
      title: "Brand Design Psychology: Colors, Fonts, and Consumer Behavior",
      excerpt: "Understand how design elements influence customer perceptions and purchasing decisions.",
      author: "Lisa Thompson",
      date: "November 5, 2024",
      readTime: "4 min read",
      category: "Design",
      icon: <Image size={32} />,
      content: {
        introduction: "Design psychology is the science behind how visual elements influence human behavior and decision-making. Understanding the psychological impact of colors, fonts, and design choices can significantly improve your brand's ability to connect with customers and drive conversions.",
        sections: [
          {
            title: "Color Psychology in Branding",
            content: "Colors evoke specific emotions and associations. Red creates urgency and excitement, blue builds trust and reliability, green suggests growth and health, while black conveys luxury and sophistication. Choose colors that align with your brand personality and target audience expectations."
          },
          {
            title: "Typography and Brand Perception",
            content: "Font choices communicate personality traits. Serif fonts suggest tradition and reliability, sans-serif fonts appear modern and clean, script fonts feel personal and creative, while bold fonts convey strength and confidence. Consistency in typography builds brand recognition and trust."
          },
          {
            title: "Visual Hierarchy and User Behavior",
            content: "Strategic use of size, contrast, and spacing guides users' attention and influences their actions. The Z-pattern reading flow helps structure content for maximum impact, while white space improves comprehension and reduces cognitive load."
          },
          {
            title: "Cultural Considerations",
            content: "Design meanings vary across cultures. Colors, symbols, and layouts that work in one market may have different interpretations elsewhere. Research your target markets to ensure your design choices resonate positively with local audiences."
          }
        ],
        conclusion: "Effective brand design goes beyond aesthetics – it's about creating psychological connections with your audience. By understanding how design elements influence perception and behavior, you can create more compelling and effective brand experiences.",
        tags: ["Design Psychology", "Brand Identity", "Color Theory", "Typography", "User Experience", "Consumer Behavior"]
      }
    },
    {
      title: "Business Consulting 101: When and Why Your Startup Needs Expert Guidance",
      excerpt: "Discover the key signs that indicate your business could benefit from professional consulting services.",
      author: "Ahmed Hassan",
      date: "November 3, 2024",
      readTime: "6 min read",
      category: "Business Strategy",
      icon: <Briefcase size={32} />,
      content: {
        introduction: "Many startup founders believe they can handle everything themselves, but there comes a time when external expertise becomes crucial for growth. Understanding when to seek business consulting can be the difference between scaling successfully and struggling with preventable challenges.",
        sections: [
          {
            title: "Signs You Need Business Consulting",
            content: "Consider consulting when you're experiencing rapid growth without proper systems, facing operational inefficiencies, struggling with strategic decisions, or preparing for major transitions like funding rounds or expansions. Revenue plateaus, team management challenges, and market uncertainties are also clear indicators."
          },
          {
            title: "Types of Business Consulting",
            content: "Strategy consulting helps with long-term planning and market positioning. Operations consulting optimizes processes and efficiency. Financial consulting assists with funding, budgeting, and financial planning. Technology consulting guides digital transformation and system implementations."
          },
          {
            title: "Choosing the Right Consultant",
            content: "Look for consultants with relevant industry experience, proven track records, and clear methodologies. Check references, understand their approach to problem-solving, and ensure cultural fit with your organization. Consider whether you need specialized expertise or general business guidance."
          },
          {
            title: "Maximizing Consulting ROI",
            content: "Set clear objectives and success metrics before engaging consultants. Provide complete access to information and stakeholders. Be prepared to implement recommendations and invest in necessary changes. Regular check-ins and feedback loops ensure projects stay on track."
          }
        ],
        conclusion: "Business consulting is an investment in your company's future. The right consultant can accelerate growth, avoid costly mistakes, and provide objective perspectives that internal teams might miss. Don't wait until problems become critical – proactive consulting often yields the best results.",
        tags: ["Business Consulting", "Startup Growth", "Strategic Planning", "Business Operations", "Expert Guidance"]
      }
    },
    {
      title: "E-commerce Optimization: Converting Visitors into Loyal Customers",
      excerpt: "Learn proven techniques to optimize your online store for better conversions and customer retention.",
      author: "Jessica Park",
      date: "October 30, 2024",
      readTime: "5 min read",
      category: "E-commerce",
      icon: <User size={32} />,
      content: {
        introduction: "E-commerce success isn't just about driving traffic to your website – it's about converting visitors into customers and turning those customers into loyal brand advocates. This guide covers proven optimization strategies that can significantly improve your online store's performance.",
        sections: [
          {
            title: "Website Performance and User Experience",
            content: "Page speed is crucial – a one-second delay can reduce conversions by 7%. Optimize images, use content delivery networks, and minimize code. Ensure mobile responsiveness as over 50% of e-commerce traffic comes from mobile devices. Simplify navigation and make the search function prominent and effective."
          },
          {
            title: "Product Page Optimization",
            content: "Use high-quality images from multiple angles, include zoom functionality, and add 360-degree views when possible. Write compelling product descriptions that focus on benefits, not just features. Include customer reviews and ratings, size guides, and clear pricing information. Add urgency elements like stock levels or limited-time offers."
          },
          {
            title: "Checkout Process Optimization",
            content: "Reduce cart abandonment by simplifying the checkout process. Offer guest checkout options, display security badges, and be transparent about shipping costs early. Provide multiple payment options and save customer information for faster future purchases. Send abandonment emails to recover lost sales."
          },
          {
            title: "Customer Retention Strategies",
            content: "Implement loyalty programs, personalized email campaigns, and retargeting ads. Provide excellent customer service with live chat support and easy return policies. Use post-purchase emails to gather feedback and encourage repeat purchases. Create exclusive offers for returning customers."
          }
        ],
        conclusion: "E-commerce optimization is an ongoing process that requires continuous testing and refinement. Focus on user experience, build trust through transparency, and always prioritize customer satisfaction. Small improvements in conversion rates can lead to significant revenue increases over time.",
        tags: ["E-commerce", "Conversion Optimization", "User Experience", "Customer Retention", "Online Sales"]
      }
    },
    {
      title: "SEO in 2024: Essential Strategies for Better Search Rankings", 
      excerpt: "Stay ahead with the latest SEO best practices and algorithm updates that impact your website's visibility.",
      author: "Robert Wilson",
      date: "October 28, 2024",
      readTime: "8 min read",
      category: "SEO",
      icon: <Search size={32} />,
      content: {
        introduction: "Search Engine Optimization continues to evolve rapidly in 2024, with new algorithm updates, AI integration, and changing user behaviors. This comprehensive guide covers the essential SEO strategies you need to implement to maintain and improve your search rankings.",
        sections: [
          {
            title: "Core Web Vitals and Technical SEO",
            content: "Google's Core Web Vitals remain crucial ranking factors. Focus on Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Optimize server response times, compress images, and implement lazy loading. Ensure your site is mobile-first indexed and has proper schema markup."
          },
          {
            title: "Content Quality and E-A-T",
            content: "Expertise, Authoritativeness, and Trustworthiness (E-A-T) are more important than ever. Create comprehensive, well-researched content that demonstrates subject matter expertise. Include author bios, cite credible sources, and regularly update content to maintain accuracy and relevance."
          },
          {
            title: "AI and Search Generative Experience",
            content: "With AI-powered search results becoming more prominent, optimize for featured snippets and direct answers. Structure content with clear headings, use question-based keywords, and provide concise, accurate answers to common queries. Focus on conversational search patterns and long-tail keywords."
          },
          {
            title: "Local SEO and Voice Search",
            content: "Optimize Google Business Profile with accurate information, regular updates, and customer reviews. Create location-specific content and landing pages. For voice search, target conversational queries and ensure your content answers specific questions clearly and concisely."
          }
        ],
        conclusion: "SEO success in 2024 requires a holistic approach that combines technical excellence, high-quality content, and user-focused optimization. Stay updated with algorithm changes, monitor your performance regularly, and adapt your strategy based on data and results.",
        tags: ["SEO", "Search Rankings", "Technical SEO", "Content Strategy", "Algorithm Updates", "Digital Marketing"]
      }
    },
    {
      title: "Content Marketing That Converts: Creating Valuable Content for Your Audience",
      excerpt: "Master the art of creating content that not only engages but also drives meaningful business results.",
      author: "Maria Gonzalez",
      date: "October 25, 2024",
      readTime: "6 min read",
      category: "Content Marketing",
      icon: <Book size={32} />,
      content: {
        introduction: "Content marketing has evolved from simple blog posts to sophisticated, multi-channel strategies that drive real business results. This guide explores how to create content that not only attracts and engages your audience but also converts them into loyal customers.",
        sections: [
          {
            title: "Understanding Your Audience",
            content: "Effective content marketing starts with deep audience research. Create detailed buyer personas based on demographics, pain points, goals, and content preferences. Use analytics tools, surveys, and social listening to understand what topics resonate with your audience and which formats they prefer."
          },
          {
            title: "Content Strategy and Planning",
            content: "Develop a content strategy that aligns with your business goals and customer journey. Map content to different stages of the buyer's journey – awareness, consideration, and decision. Create an editorial calendar that balances educational, entertaining, and promotional content while maintaining consistency."
          },
          {
            title: "Content Formats That Convert",
            content: "Diversify your content portfolio with various formats: in-depth guides establish authority, video content drives engagement, infographics simplify complex information, case studies provide social proof, and interactive content increases participation. Repurpose content across multiple channels for maximum reach."
          },
          {
            title: "Distribution and Promotion",
            content: "Great content needs strategic distribution. Use SEO best practices for organic discovery, leverage social media for amplification, implement email marketing for direct reach, and consider paid promotion for high-value content. Build relationships with influencers and industry publications for guest posting opportunities."
          },
          {
            title: "Measuring Content Performance",
            content: "Track metrics that matter: engagement rates, time on page, conversion rates, and lead generation. Use tools like Google Analytics, social media insights, and marketing automation platforms to measure ROI. Regularly analyze performance data to optimize future content creation and distribution strategies."
          }
        ],
        conclusion: "Successful content marketing requires understanding your audience, creating valuable content consistently, and measuring results to continuously improve. Focus on providing genuine value, and the conversions will follow naturally as you build trust and authority in your industry.",
        tags: ["Content Marketing", "Digital Strategy", "Audience Engagement", "Content Creation", "Marketing ROI"]
      }
    },
    {
      title: "Startup Funding Guide: How Professional Branding Attracts Investors",
      excerpt: "Learn how strong branding and professional presentation can significantly improve your chances of securing funding.",
      author: "Arjun Kumar",
      date: "October 22, 2024",
      readTime: "7 min read",
      category: "Startup Growth",
      icon: <ArrowUp size={32} />,
      content: {
        introduction: "In the competitive world of startup funding, investors see hundreds of pitches every month. While a great product and solid business model are essential, professional branding can be the differentiator that makes investors take notice and builds the credibility needed to secure funding.",
        sections: [
          {
            title: "The Psychology of Investor Decision-Making",
            content: "Investors make decisions based on both logic and emotion. Professional branding creates positive first impressions, builds trust, and demonstrates that founders understand the importance of market perception. A polished brand suggests attention to detail and professionalism that extends to business operations."
          },
          {
            title: "Essential Brand Elements for Startups",
            content: "Develop a compelling brand story that clearly communicates your mission and vision. Create a professional logo and visual identity that works across all platforms. Design consistent marketing materials including pitch decks, websites, and social media presence. Ensure your brand reflects your company values and target market."
          },
          {
            title: "Building Credibility Through Brand Consistency",
            content: "Consistent branding across all touchpoints builds trust and recognition. From your website design to email signatures, every interaction should reinforce your brand identity. Professional photography, well-designed graphics, and consistent messaging demonstrate that you're serious about building a lasting business."
          },
          {
            title: "Presenting Your Brand to Investors",
            content: "Your pitch deck should reflect your brand identity while clearly communicating your business opportunity. Use professional design principles, maintain visual consistency, and ensure your presentation materials are polished and error-free. Practice your pitch to embody your brand personality and values."
          },
          {
            title: "Digital Presence and Social Proof",
            content: "Maintain professional social media profiles and a well-designed website. Showcase customer testimonials, press coverage, and team credentials. Document your journey and milestones to build a narrative of growth and progress that investors can follow and believe in."
          }
        ],
        conclusion: "Professional branding isn't just about looking good – it's about building credibility, trust, and investor confidence. Invest in your brand early, maintain consistency across all touchpoints, and let your professional presentation reflect the quality and potential of your business opportunity.",
        tags: ["Startup Funding", "Brand Strategy", "Investor Relations", "Business Growth", "Professional Branding"]
      }
    }
  ];

  const categories = [
    "All Categories",
    "Digital Marketing", 
    "Web Development",
    "Social Media",
    "Business Strategy",
    "Design",
    "AR/VR Technology",
    "E-commerce",
    "SEO",
    "Content Marketing",
    "Startup Growth"
  ];

  // Filter posts based on search term and selected category
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "all-categories") {
      const categoryName = selectedCategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      filtered = filtered.filter(post => post.category === categoryName);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  // Get post count for each category
  const getCategoryCount = (categoryName: string) => {
    if (categoryName === "All Categories") return blogPosts.length;
    return blogPosts.filter(post => post.category === categoryName).length;
  };

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GrowtX <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Expert insights, industry trends, and actionable strategies to help your business grow. 
              Stay updated with the latest in digital marketing, web development, and business growth.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category, index) => (
                  <SelectItem key={index} value={category.toLowerCase().replace(/\s+/g, '-')}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Show search results info */}
          {(searchTerm || selectedCategory !== "all-categories") && (
            <div className="mb-8 text-muted-foreground">
              Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== "all-categories" && ` in ${selectedCategory.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`}
            </div>
          )}

          {/* Featured Post - Fixed responsive design */}
          {(!searchTerm && selectedCategory === "all-categories") && (
            <Card className="glass-effect hover-lift mb-16 cursor-pointer" onClick={() => handleReadMore(featuredPost)}>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
                    <div className="text-primary">{featuredPost.icon}</div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="text-sm text-accent font-medium mb-2">Featured Post</div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base">{featuredPost.excerpt}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span>{featuredPost.author}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{featuredPost.date}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="w-fit">
                        <span className="text-xs sm:text-sm bg-accent/10 text-accent px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>
                    <Button onClick={(e) => { e.stopPropagation(); handleReadMore(featuredPost); }} size="sm" className="text-sm">
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="glass-effect hover-lift h-full cursor-pointer" onClick={() => handleReadMore(post)}>
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-t-lg">
                      <div className="text-primary">{post.icon}</div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="w-fit mb-3">
                        <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full whitespace-nowrap">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 flex-grow">{post.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                        <span>{post.author}</span>
                        <div className="flex items-center space-x-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-4">No articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all-categories"); }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Newsletter Subscription */}
          <section className="mb-16">
            <Card className="glass-effect">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Stay <span className="gradient-text">Updated</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter and get the latest business growth tips, 
                  industry insights, and exclusive content delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button>Subscribe</Button>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Join 5,000+ business owners who read our weekly newsletter
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Categories Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Explore by <span className="gradient-text">Category</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.slice(1).map((category, index) => (
                <Card 
                  key={index} 
                  className="glass-effect hover-lift cursor-pointer text-center"
                  onClick={() => handleCategoryFilter(category)}
                >
                  <CardContent className="p-4">
                    <div className="font-medium text-sm">{category}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {getCategoryCount(category)} articles
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Load More */}
          {!searchTerm && selectedCategory === "all-categories" && (
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Blog Detail Modal */}
      <BlogDetail 
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        post={selectedPost}
      />
    </Layout>
  );
};

export default Blog;
