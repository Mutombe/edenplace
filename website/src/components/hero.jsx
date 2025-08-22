import React, { useState, useEffect } from "react";
import { Calendar, Phone, MapPin, Star, ChevronDown, Award, Info, Camera, TreePine, Leaf, Target, Users, Heart, Shield } from "lucide-react";
import Gallery from "./gallery";
import VenueSpaces from "./venue";
import About from './about';
import Services from './services';
import Contact from './contact';

// Eden Place Logo Component
const EdenPlaceLogo = ({ size = "default" }) => {
  const logoSize = size === "large" ? "w-20 h-20" : size === "small" ? "w-12 h-12" : "w-16 h-16";

  return (
    <div className={`relative ${logoSize} rounded-xl flex items-center justify-center shadow-2xl overflow-hidden`}>
      <div className="absolute inset-0" />
      <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
        {/* Corrected tag and attribute */}
        <img src="/logo.png" alt="Eden Place Logo" className="w-full h-full object-contain filter brightness-75" />
      </div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Background image rotation
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-700 pt-16"
      >
        {/* Enhanced Background with Multiple Layers */}
        <div className="absolute inset-0">
          {/* Rotating Background Images */}
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ${
                index === currentImageIndex ? 'opacity-70' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
          
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-green-900/70 to-emerald-800/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-green-900/30" />

          {/* Nature-Inspired Floating Elements */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-pulse opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  backgroundColor: `rgba(16, 185, 129, ${Math.random() * 0.4 + 0.2})`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${Math.random() * 3 + 3}s`,
                }}
              />
            ))}
          </div>

          {/* Organic Leaf Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute opacity-10 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 6 + 6}s`,
                }}
              >
                <TreePine className="w-4 h-4 md:w-6 md:h-6 text-emerald-400 transform rotate-12" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Container */}
        <div
          className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          {/* Eden Place Logo & Brand Identity */}
          <div
            className={`flex flex-col items-center mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-6">
              <EdenPlaceLogo size="large" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
                EDEN PLACE
              </h1>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-px bg-emerald-400 w-12 sm:w-20"></div>
                <Leaf className="w-6 h-6 text-emerald-400" />
                <div className="h-px bg-emerald-400 w-12 sm:w-20"></div>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl text-emerald-100 font-medium tracking-wide">
                Your Favourite Functions Venue
              </p>
            </div>
          </div>

          {/* Enhanced Tagline */}
          <div
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-emerald-50 mb-4 font-light max-w-4xl mx-auto leading-relaxed px-2">
              Where nature meets elegance in the heart of
              <span className="text-emerald-300 font-medium"> Harare, Zimbabwe</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-emerald-200 max-w-3xl mx-auto px-2 leading-relaxed">
              Creating extraordinary moments in our premium event spaces surrounded by natural beauty
            </p>
          </div>

          {/* Location Badge with Enhanced Design */}
          <div
            className={`flex justify-center mb-10 sm:mb-14 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="group flex items-center space-x-3 bg-white/10 backdrop-blur-lg rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-emerald-300/30 hover:bg-white/20 hover:border-emerald-300/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 group-hover:animate-pulse" />
              <span className="text-white text-sm sm:text-base lg:text-lg font-semibold">Hogerty Hill, Harare</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-14 sm:mb-18 px-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#contact"
              className="group w-full sm:w-auto flex items-center justify-center space-x-4 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-600 hover:via-green-600 hover:to-emerald-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 font-bold text-base sm:text-lg border-2 border-transparent hover:border-emerald-200/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Calendar className="w-6 h-6 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">Book Your Event</span>
            </a>

            <a
              href="tel:+263714269900"
              className="group w-full sm:w-auto flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-lg text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full border-2 border-emerald-300/40 hover:bg-white/20 hover:scale-105 hover:border-emerald-300/60 transition-all duration-300 font-semibold text-base sm:text-lg shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Phone className="w-6 h-6 group-hover:animate-pulse relative z-10" />
              <div className="text-center relative z-10">
                <div className="text-sm sm:text-base">Call Now</div>
                <div className="text-xs sm:text-sm opacity-90">+263 714 269 900</div>
              </div>
            </a>
          </div>

          {/* Enhanced Features Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-16 sm:mb-20 px-2 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              {
                icon: Heart,
                title: "Wedding Paradise",
                desc: "Magical ceremonies in nature",
                color: "from-pink-500 to-rose-500",
                delay: "0ms",
              },
              {
                icon: Users,
                title: "Corporate Excellence",
                desc: "Professional event solutions",
                color: "from-blue-500 to-indigo-500",
                delay: "150ms",
              },
              {
                icon: Target,
                title: "Team Activities",
                desc: "Archery & outdoor adventures",
                color: "from-orange-500 to-red-500",
                delay: "300ms",
              },
              {
                icon: Shield,
                title: "Premium Service",
                desc: "Exceptional hospitality always",
                color: "from-emerald-500 to-green-500",
                delay: "450ms",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 hover:border-emerald-300/40 hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl relative overflow-hidden"
                style={{ transitionDelay: feature.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`p-4 sm:p-5 bg-gradient-to-br ${feature.color} rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-3 group-hover:text-emerald-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed group-hover:text-emerald-100 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Availability Notice */}
          <div
            className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-amber-300/30 text-center">
              <div className="flex items-center justify-center mb-4">
                <Info className="w-6 h-6 text-amber-400 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Important Notice</h3>
              </div>
              <p className="text-lg sm:text-xl font-bold text-amber-100 mb-2">
                26 JULY & 12 AUGUST 2025 - FULLY BOOKED
              </p>
              <p className="text-sm sm:text-base text-amber-200/90 leading-relaxed">
                Please note that we are fully booked on these dates and not taking bookings or activities for that date.
              </p>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div
            className={`flex flex-col items-center transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-emerald-300/80 text-xs sm:text-sm mb-4 font-semibold tracking-widest uppercase">
              Discover Eden Place
            </p>
            <div className="animate-bounce">
              <div className="p-3 bg-white/10 backdrop-blur-lg rounded-full border border-emerald-300/30 hover:bg-white/20 hover:border-emerald-300/50 hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl">
                <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(5deg); }
            50% { transform: translateY(-5px) rotate(-5deg); }
            75% { transform: translateY(-15px) rotate(3deg); }
          }
          
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          
          /* Enhanced mobile experience */
          @media (max-width: 640px) {
            .animate-bounce {
              animation-duration: 2s;
            }
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: rgba(16, 185, 129, 0.1);
          }
          
          ::-webkit-scrollbar-thumb {
            background: rgba(16, 185, 129, 0.6);
            border-radius: 3px;
          }
          
          /* Improve touch targets on mobile */
          @media (max-width: 768px) {
            button, a {
              min-height: 48px;
            }
          }
          
          /* Custom gradient animation */
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </section>
    </>
  );
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <VenueSpaces />
      <Gallery />
    </div>
  );
};

export default HomePage;