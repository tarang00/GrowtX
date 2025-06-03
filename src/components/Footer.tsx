
import { Link } from "react-router-dom";
import { Mail, Calendar, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/90 ios-blur border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 ios-slide-up">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-semibold ios-text-gradient">GrowtX</span>
            </div>
            <p className="text-muted-foreground">
              Empowering startups and MSMEs with comprehensive digital solutions for sustainable business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="ios-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Free Services'].map((item, i) => (
                <li key={i} className="ios-slide-up" style={{ animationDelay: `${0.2 + (i * 0.05)}s` }}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="ios-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Social Media Management', 'Business Consulting', 'AR/VR Solutions'].map((item, i) => (
                <li key={i} className="text-muted-foreground flex items-center space-x-2 ios-slide-up" style={{ animationDelay: `${0.3 + (i * 0.05)}s` }}>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="ios-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-4">
              {[
                { icon: <Mail size={16} className="text-primary" />, text: "hello@growtx.com" },
                { icon: <Calendar size={16} className="text-primary" />, text: "Mon - Fri, 9AM - 6PM" },
                { icon: <Phone size={16} className="text-primary" />, text: "+91 9209792019" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 ios-slide-up" style={{ animationDelay: `${0.4 + (i * 0.05)}s` }}>
                  <div className="p-2 bg-primary/10 rounded-full">{item.icon}</div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center ios-slide-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-muted-foreground">
            © 2024 GrowtX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
