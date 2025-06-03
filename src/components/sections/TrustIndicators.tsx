
import { Shield, Award, Users, Clock, CheckCircle, Star } from "lucide-react";

const TrustIndicators = () => {
  const trustBadges = [
    {
      icon: <Shield size={24} />,
      title: "100% Secure",
      subtitle: "SSL Encrypted"
    },
    {
      icon: <Award size={24} />,
      title: "Award Winning",
      subtitle: "Industry Recognition"
    },
    {
      icon: <Users size={24} />,
      title: "500+ Clients",
      subtitle: "Trusted Worldwide"
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Support",
      subtitle: "Always Available"
    }
  ];

  const clientLogos = [
    "TechCorp", "InnovateX", "DigitalPro", "GrowthCo", "StartupHub", "BusinessPlus"
  ];

  return (
    <section className="py-12 sm:py-16 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Trust Badges - Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {trustBadges.map((badge, index) => (
            <div key={index} className="ios-card p-4 sm:p-6 text-center ios-slide-up hover:ios-glow transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="p-2 sm:p-3 bg-primary/20 rounded-lg text-primary">
                  {badge.icon}
                </div>
              </div>
              <div className="font-semibold text-white mb-1 text-sm sm:text-base">{badge.title}</div>
              <div className="text-xs sm:text-sm text-gray-300">{badge.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Client Logos with Infinite Scroll - Responsive */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Trusted by leading companies worldwide</p>
          
          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll">
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-4 sm:mx-8">
                  <div className="ios-card p-3 sm:p-4 text-center opacity-70 hover:opacity-100 transition-opacity duration-300 min-w-[100px] sm:min-w-[120px]">
                    <div className="text-white font-semibold text-xs sm:text-sm">{logo}</div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-4 sm:mx-8">
                  <div className="ios-card p-3 sm:p-4 text-center opacity-70 hover:opacity-100 transition-opacity duration-300 min-w-[100px] sm:min-w-[120px]">
                    <div className="text-white font-semibold text-xs sm:text-sm">{logo}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Guarantee - Responsive */}
        <div className="text-center ios-card p-6 sm:p-8 ios-glow">
          <CheckCircle className="text-green-400 mx-auto mb-3 sm:mb-4" size={40} />
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
            100% Satisfaction Guarantee
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We're so confident in our services that we offer a full satisfaction guarantee. 
            If you're not completely happy, we'll make it right or refund your investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
