
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavigation = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "/about",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Portfolio", href: "/portfolio" },
      ]
    },
    { 
      name: "Services", 
      href: "/services",
      items: [
        { name: "Our Services", href: "/services" },
        { name: "Free Services", href: "/free-services" },
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'ios-blur bg-black/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* iOS-style logo */}
          <Link to="/" className="flex items-center space-x-3 ios-bounce">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-semibold ios-text-gradient">GrowtX</span>
          </Link>

          {/* Desktop Navigation with iOS styling */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          item.items.some(subItem => isActive(subItem.href))
                            ? "text-primary bg-primary/10 animate-glow-blue"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}>
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-48 gap-1 p-2 ios-card ios-blur">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className={`block px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ios-ripple ${
                                  isActive(subItem.href)
                                    ? "text-primary bg-primary/10 shadow-inner"
                                    : "text-card-foreground hover:text-primary hover:bg-primary/5"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ios-ripple ${
                          isActive(item.href)
                            ? "text-primary bg-primary/10 animate-pulse-blue"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button asChild className="ml-4 ios-button ios-glow bg-primary text-white font-medium rounded-full px-5">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* iOS-style mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors ios-ripple w-10 h-10 flex items-center justify-center"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* iOS-style Mobile Navigation with animation */}
        {isOpen && (
          <div className="md:hidden py-4 ios-card mt-2 rounded-2xl ios-fade-in">
            <div className="flex flex-col space-y-1.5 p-2">
              {mainNavigation.map((item) => (
                <div key={item.name} className="ios-slide-up" style={{animationDelay: '0.05s'}}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 block ios-ripple ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 ios-glow"
                        : "text-card-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.items && (
                    <div className="ml-4 mt-1 space-y-1.5">
                      {item.items.map((subItem, idx) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 block ios-ripple ios-slide-up`}
                          style={{animationDelay: `${0.1 + (idx * 0.05)}s`}}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="mt-4 w-full ios-button ios-glow bg-primary text-white font-medium rounded-xl">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
