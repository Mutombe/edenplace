import React, { useState, useEffect } from "react";
import { Calendar, Phone, MapPin, Star, ChevronDown, Award, Info, Camera } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900"
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Main Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80')`,
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-amber-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: `rgba(251, 191, 36, ${Math.random() * 0.3 + 0.1})`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 4 + 4}s`,
              }}
            >
              <div className="w-6 h-6 md:w-8 md:h-8 border border-amber-400 rotate-45 transform" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div
        className={`pt-24 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        
        {/* Enhanced Subtitle */}
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 delay-400 pt-24 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-100 mb-3 sm:mb-4 font-light max-w-4xl mx-auto leading-relaxed px-2">
            Where extraordinary moments become
            <span className="text-amber-300 font-medium"> timeless memories</span>
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-200 max-w-2xl mx-auto px-2">
            Premium event space in the heart of Harare, Zimbabwe
          </p>
        </div>

        {/* Location Badge with Animation */}
        <div
          className={`flex justify-center mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="group flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:animate-pulse" />
            <span className="text-white text-sm sm:text-base font-medium">Hogerty Hill, Harare</span>
          </div>
        </div>

        {/* Enhanced CTA Buttons - Mobile First */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-12 sm:mb-16 px-4 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300 font-semibold text-base sm:text-lg border-2 border-transparent hover:border-amber-300"
          >
            <Calendar className="w-5 h-5 group-hover:animate-pulse" />
            <span>Book Your Event</span>
          </a>

          <a
            href="tel:+263714269900"
            className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/30 hover:bg-white/20 hover:scale-105 hover:border-white/50 transition-all duration-300 font-semibold text-base sm:text-lg"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            <span className="text-sm sm:text-base">+263 714 269 900</span>
          </a>
        </div>

        {/* Enhanced Features Grid - Mobile Optimized */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16 px-2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            {
              icon: Calendar,
              title: "Premium Events",
              desc: "Weddings & Corporate Functions",
              delay: "0ms",
            },
            {
              icon: MapPin,
              title: "Perfect Location",
              desc: "Scenic Hogerty Hill Views",
              delay: "150ms",
            },
            {
              icon: Star,
              title: "Luxury Service",
              desc: "Exceptional Experience Always",
              delay: "300ms",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 hover:border-white/40 hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              style={{ transitionDelay: feature.delay }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 sm:p-4 bg-amber-400/20 rounded-full mb-3 sm:mb-4 group-hover:bg-amber-400/30 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 group-hover:animate-pulse" />
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2 group-hover:text-amber-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-amber-100/80 text-xs sm:text-sm leading-relaxed group-hover:text-amber-100 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className={`flex flex-col items-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-amber-200/80 text-xs sm:text-sm mb-3 sm:mb-4 font-medium tracking-wide">
            DISCOVER MORE
          </p>
          <div className="animate-bounce">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer">
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Mobile-Specific Enhancements */}
      <style jsx>{`
        @media (max-width: 640px) {
          .animate-bounce {
            animation-duration: 2s;
          }
        }
        
        /* Custom scrollbar for better mobile experience */
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.5);
          border-radius: 2px;
        }
        
        /* Improve touch targets on mobile */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;