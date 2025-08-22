import React, { useState } from "react";
import { 
  Utensils, 
  Music, 
  Flower2, 
  Camera, 
  Car, 
  Shield, 
  Clock, 
  Star, 
  Award, 
  Sparkles, 
  Heart, 
  Users, 
  Phone,
  ChevronDown,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const [activePackage, setActivePackage] = useState(1);

  const services = [
    {
      icon: Utensils,
      title: "Premium Catering",
      description: "Exquisite culinary experiences crafted by our award-winning chefs",
      features: [
        "Custom Menus",
        "Dietary Accommodations", 
        "Live Cooking Stations",
        "Premium Bar Service",
      ],
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: Music,
      title: "Audio Visual",
      description: "State-of-the-art sound and lighting systems for unforgettable experiences",
      features: [
        "Professional Sound",
        "LED Lighting",
        "Projection Systems",
        "Live Streaming",
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Flower2,
      title: "Event Styling",
      description: "Transform your vision into reality with our expert design team",
      features: [
        "Floral Arrangements",
        "Themed Décor",
        "Lighting Design",
        "Custom Installations",
      ],
      color: "from-emerald-600 to-teal-500",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capture every precious moment with our professional photography services",
      features: [
        "Event Photography",
        "Videography",
        "Drone Footage",
        "Same-Day Editing",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Luxury transportation services for you and your guests",
      features: [
        "Luxury Vehicles",
        "Group Transport",
        "Airport Transfers",
        "Valet Parking",
      ],
      color: "from-green-600 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Event Security",
      description: "Professional security services to ensure your event runs smoothly",
      features: [
        "Trained Personnel",
        "Access Control", 
        "Crowd Management",
        "24/7 Monitoring",
      ],
      color: "from-emerald-500 to-green-600",
    },
  ];

  const packages = [
    {
      name: "Essential",
      price: "$1,500",
      duration: "Half Day",
      icon: Clock,
      features: [
        "Venue Access (4 hours)",
        "Basic Sound System",
        "Standard Lighting",
        "Event Coordinator",
        "Basic Setup/Cleanup",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$3,500", 
      duration: "Full Day",
      icon: Star,
      features: [
        "Venue Access (8 hours)",
        "Premium AV Equipment",
        "Professional Lighting",
        "Dedicated Event Manager",
        "Catering Kitchen Access",
        "Complimentary Décor Package",
        "Photography Session (2 hours)",
      ],
      popular: true,
    },
    {
      name: "Luxury",
      price: "$6,500",
      duration: "Weekend",
      icon: Award,
      features: [
        "Venue Access (2 days)",
        "Full AV Production",
        "Custom Lighting Design",
        "Personal Event Concierge",
        "Premium Catering Service",
        "Complete Styling Package",
        "Professional Photography/Video",
        "Transportation Service",
        "Bridal Suite Access",
      ],
      popular: false,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with Blend Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700"></div>
        <div 
          className="absolute inset-0 opacity-70 bg-cover bg-center bg-no-repeat mix-blend-soft-light"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2098&q=80")`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Sparkles className="w-10 h-10 text-green-300" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-green-300">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive event services designed to make your special day absolutely perfect
            </p>

            {/* Decorative Elements */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-green-400"></div>
              <Flower2 className="w-6 h-6 text-green-400" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-green-400"></div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:border-green-400/50"
              >
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-green-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3 text-sm text-green-200"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Packages Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Heart className="w-8 h-8 text-green-300" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Event <span className="text-green-300">Packages</span>
            </h2>
            
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Choose from our carefully curated packages or let us create a custom solution for you
            </p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-500 ${
                  pkg.popular ? "scale-105 lg:scale-110" : ""
                }`}
                onMouseEnter={() => setActivePackage(index)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-500 ${
                  pkg.popular 
                    ? "border-green-400/50 bg-white/15" 
                    : "border-white/20 hover:border-green-400/30 hover:bg-white/15"
                } group-hover:scale-105`}>
                  
                  {/* Glow Effect */}
                  {pkg.popular && (
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-3xl"></div>
                  )}

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${
                        pkg.popular ? "from-green-500 to-emerald-600" : "from-green-600 to-emerald-700"
                      } rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {pkg.name}
                      </h3>
                      
                      <div className="text-4xl font-bold text-green-300 mb-2">
                        {pkg.price}
                      </div>
                      
                      <p className="text-green-200">{pkg.duration}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-green-100 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-green-400/50"
                    }`}>
                      Choose Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a <span className="text-green-300">Custom Package?</span>
              </h3>
              
              <p className="text-green-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's create something extraordinary together. Our team will work with you to design the perfect event tailored to your vision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                  <Users className="w-5 h-5" />
                  <span>Let's Plan Together</span>
                </button>
                
                <button className="inline-flex items-center space-x-3 bg-white/10 text-white px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 hover:border-green-400/50 transition-all duration-300 font-semibold">
                  <Phone className="w-5 h-5" />
                  <span>Call Us Today</span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center justify-center space-x-8 text-green-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm">Events Hosted</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4.9★</div>
                    <div className="text-sm">Client Rating</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-6 h-6 bg-emerald-400/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-300/40 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-emerald-300/30 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Services;