import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Phone, 
  MapPin, 
  Star, 
  ChevronDown, 
  Award, 
  Info, 
  Camera,
  Menu,
  X,
  Home,
  Building2,
  Users,
  Settings,
  Mail,
  ArrowRight,
  Sparkles,
  Play,
  TreePine,
  Leaf,
  Clock
} from "lucide-react";

// Eden Place Logo Component
const EdenPlaceLogo = ({ isScrolled, size = "default" }) => {
  const logoSize = size === "large" ? "w-16 h-16" : size === "small" ? "w-10 h-10" : "w-12 h-12";
    
  return (
    <motion.div
      className={`relative ${logoSize} rounded-xl flex items-center justify-center shadow-2xl overflow-hidden`}
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`absolute inset-0 ${isScrolled ? "bg-gradient-to-br from-emerald-500 to-green-700" : ""}`} />
      <img 
        src="/logo.png" 
        alt="Eden Place Logo" 
        className="relative z-10 w-full h-full object-contain p-1"
      />
    </motion.div>
  );
};

// Event Topbar Component
const EventTopbar = ({ isScrolled }) => {
  const currentEvent = {
    name: "Outdoor Movie Night",
    movie: "My Oxford Year",
    time: "7:00PM",
    date: "Friday 29 August",
    daysLeft: 9
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 pb-1 ${
        isScrolled 
          ? "bg-emerald-600/95 backdrop-blur-lg" 
          : "bg-emerald-700/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-white">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-1 bg-white/20 rounded-full"
            >
              <Play className="w-3 h-3 fill-current" />
            </motion.div>
            <div className="text-sm font-medium">
              <span className="hidden sm:inline">{currentEvent.name}: </span>
              <span className="font-bold">{currentEvent.movie}</span>
              <span className="hidden sm:inline"> • {currentEvent.time}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3" />
            <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">
              {currentEvent.daysLeft} days to go!
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced and Mobile-Responsive Header Component
const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navItems = [
    { name: "Gallery", path: "/gallery", icon: Camera, color: "from-pink-500 to-rose-600", description: "Visual Tour" },
    { name: "Services", path: "/services", icon: Settings, color: "from-purple-500 to-indigo-600", description: "What We Offer" },
    { name: "Events", path: "/events", icon: Calendar, color: "from-blue-500 to-cyan-600", description: "Upcoming" },
    { name: "About", path: "/about", icon: Info, color: "from-teal-500 to-emerald-600", description: "Our Story" },
    { name: "Contact", path: "/contact", icon: Mail, color: "from-red-500 to-pink-600", description: "Get In Touch" },
  ];

  const quickNavItems = [
    { name: "Home", path: "/", icon: Home, color: "from-emerald-500 to-green-600" },
    { name: "Venue", path: "/spaces", icon: Building2, color: "from-amber-500 to-orange-600" },
  ];

  const isActive = (path) => activeSection === path;

  const handleNavClick = (path, name) => {
    setActiveSection(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Event Topbar */}
      <EventTopbar isScrolled={isScrolled} />

      {/* Floating background effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 blur-3xl"
          animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
          transition={{ type: "spring", stiffness: 50, damping: 50 }}
        />
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-700 py-4 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-2xl shadow-emerald-500/10 border-b border-emerald-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Enhanced Eden Place Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-4 cursor-pointer group"
              onClick={() => handleNavClick("/", "Home")}
            >
              <EdenPlaceLogo isScrolled={isScrolled} />
              <div className="hidden sm:block">
                <motion.h1 
                  className={`text-2xl font-bold transition-all duration-500 ${
                    isScrolled ? "text-emerald-800" : "text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  EDEN PLACE
                </motion.h1>
                <motion.p 
                  className={`text-xs font-medium tracking-wide transition-all duration-500 ${
                    isScrolled ? "text-emerald-600" : "text-emerald-200"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Your Favourite Functions Venue
                </motion.p>
              </div>
            </motion.div>

            {/* Mobile Quick Nav (Home & Venue) - Between Logo and Menu */}
            <div className="flex lg:hidden items-center space-x-2">
              {quickNavItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.path, item.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg"
                      : isScrolled
                      ? "text-slate-700 hover:bg-emerald-50"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className={`w-5 h-5 pl-1 ${isActive(item.path)? "text-white" : isScrolled  ? "text-green-600" : "text-white"}`} />
                  <span className="text-sm font-medium hidden sm:inline">{item.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Advanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[...quickNavItems, ...navItems].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="relative group"
                >
                  <button
                    onClick={() => handleNavClick(item.path, item.name)}
                    className={`relative flex flex-col items-center space-y-1 px-4 py-3 rounded-2xl transition-all duration-300 overflow-hidden ${
                      isActive(item.path)
                        ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-xl shadow-emerald-500/30"
                        : isScrolled
                        ? "text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/80"
                        : "text-white hover:text-emerald-200 hover:bg-white/10"
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative z-10 p-1.5 rounded-lg transition-all duration-300 ${
                        isActive(item.path) ? "bg-white/20" : "group-hover:bg-white/20"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                    </motion.div>
                    <div className="relative z-10 text-center">
                      <span className="font-semibold text-xs">{item.name}</span>
                      <div className={`text-[10px] opacity-70 transition-opacity duration-300 ${
                        isActive(item.path) ? "opacity-90" : "group-hover:opacity-100"
                      }`}>
                        {item.description}
                      </div>
                    </div>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl -z-10"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {item.description || item.name}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-slate-800" />
                  </motion.div>
                </motion.div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <motion.a
                href="tel:+263714269900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 font-semibold overflow-hidden"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div whileHover={{ rotate: 15 }} className="relative z-10">
                  <Phone className="w-4 h-4" />
                </motion.div>
                <div className="relative z-10 flex flex-col">
                  <span className="text-sm font-bold">Book Now</span>
                  <span className="text-xs opacity-90">+263 714 269 900</span>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1 right-1 w-2 h-2 bg-white/30 rounded-full"
                />
              </motion.a>
            </div>

            {/* Advanced Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              className={`lg:hidden relative p-3 rounded-2xl transition-all duration-300 overflow-hidden ${
                isScrolled || isMenuOpen
                  ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with Background Image */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="lg:hidden fixed top-0 left-0 right-0 bottom-0 overflow-y-auto"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(16, 185, 129, 0.8)), url('/archery.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <motion.div 
                className="pt-32 pb-8 px-6 min-h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-center mb-12">
                  <EdenPlaceLogo size="large" />
                  <div className="ml-6 text-center">
                    <h2 className="text-3xl font-bold text-white">EDEN PLACE</h2>
                    <p className="text-emerald-200 font-medium text-lg">Your Favourite Functions</p>
                    <div className="flex items-center justify-center mt-2 text-emerald-300">
                      <Sparkles className="w-4 h-4 mr-2" />
                      <span className="text-sm">Where Memories Begin</span>
                      <Sparkles className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <nav className="space-y-4 mb-12">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.path, item.name)}
                        className={`w-full group flex items-center space-x-6 px-8 py-6 rounded-3xl transition-all duration-500 relative overflow-hidden backdrop-blur-sm border ${
                          isActive(item.path)
                            ? "bg-gradient-to-r from-emerald-500/90 to-green-600/90 text-white shadow-2xl shadow-emerald-500/30 border-emerald-400"
                            : "text-white hover:bg-white/10 border-white/20 hover:border-emerald-400/50"
                        }`}
                      >
                        {!isActive(item.path) && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                            style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` }}
                          />
                        )}
                        
                        <motion.div 
                          className={`relative p-4 rounded-2xl transition-all duration-300 ${
                            isActive(item.path) 
                              ? "bg-white/20 shadow-lg" 
                              : `bg-gradient-to-br ${item.color} shadow-xl group-hover:scale-110 group-hover:rotate-6`
                          }`}
                          whileHover={{ rotate: 12, scale: 1.1 }}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <div className="flex-1 text-left">
                          <div className="font-bold text-2xl mb-1">{item.name}</div>
                          <div className="text-lg opacity-80">{item.description}</div>
                        </div>
                        
                        <motion.div
                          className="opacity-50 group-hover:opacity-100 transition-all duration-300"
                          whileHover={{ x: 8 }}
                        >
                          <ArrowRight className="w-6 h-6" />
                        </motion.div>
                      </button>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Contact CTA */}
                                  <motion.a
                  href="tel:+263714269900"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 + 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 sm:px-8 py-6 sm:py-8 rounded-2xl sm:rounded-3xl shadow-2xl font-bold relative overflow-hidden group backdrop-blur-sm w-full max-w-sm sm:max-w-none mx-auto"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.2 }} 
                    className="relative z-10 p-3 bg-white/20 rounded-2xl flex-shrink-0"
                  >
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                  </motion.div>
                  
                  <div className="relative z-10 text-center sm:text-left flex-grow">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                      Book Now
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg opacity-90 font-normal break-all sm:break-normal">
                      +263 714 269 900
                    </div>
                    <div className="text-xs sm:text-sm opacity-75 mt-1">
                      Available 24/7
                    </div>
                  </div>
                  
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-white/40 rounded-full"
                  />
                </motion.a>

                {/* Decorative Elements */}
                <div className="flex justify-center space-x-6 mt-8 opacity-60">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                  >
                    <TreePine className="w-6 h-6 text-emerald-300" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <Leaf className="w-6 h-6 text-green-300" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    <Sparkles className="w-6 h-6 text-emerald-200" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default ModernHeader;