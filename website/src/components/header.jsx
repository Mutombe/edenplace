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
  Leaf
} from "lucide-react";

// Eden Place Logo Component - No changes needed
const EdenPlaceLogo = ({ isScrolled, size = "default" }) => {
  const logoSize = size === "large" ? "w-16 h-16" : size === "small" ? "w-10 h-10" : "w-12 h-12";
    
  return (
    <motion.div
      className={`relative ${logoSize} rounded-xl bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 flex items-center justify-center shadow-2xl overflow-hidden`}
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-700/20" />
      <img 
        src="/logo.png" 
        alt="Eden Place Logo" 
        className="relative z-10 w-full h-full object-contain p-1"
      />
    </motion.div>
  );
};

// Enhanced and Mobile-Responsive Header Component
const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // ✅ FIX 1: Body Scroll Lock
  // This effect prevents the page from scrolling in the background when the mobile menu is open.
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to ensure scroll is re-enabled when the component unmounts
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
    { name: "Home", path: "/", icon: Home, color: "from-emerald-500 to-green-600", description: "Welcome" },
    { name: "Venue", path: "/spaces", icon: Building2, color: "from-amber-500 to-orange-600", description: "Our Spaces" },
    { name: "Gallery", path: "/gallery", icon: Camera, color: "from-pink-500 to-rose-600", description: "Visual Tour" },
    { name: "Services", path: "/services", icon: Settings, color: "from-purple-500 to-indigo-600", description: "What We Offer" },
    { name: "Events", path: "/events", icon: Calendar, color: "from-blue-500 to-cyan-600", description: "Upcoming" },
    { name: "About", path: "/about", icon: Info, color: "from-teal-500 to-emerald-600", description: "Our Story" },
    { name: "Contact", path: "/contact", icon: Mail, color: "from-red-500 to-pink-600", description: "Get In Touch" },
  ];

  const isActive = (path) => activeSection === path;

  const handleNavClick = (path, name) => {
    setActiveSection(path);
    setIsMenuOpen(false); // Ensure menu closes on navigation
  };

  return (
    <>
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-2xl shadow-emerald-500/10 border-b border-emerald-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
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

            {/* Advanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
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
                    {item.description}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-slate-800" />
                  </motion.div>
                </motion.div>
              ))}
            </nav>

            {/* ✅ FIX 2: Breakpoint Consistency */}
            {/* Changed from 'md:flex' to 'lg:flex' to align with the main navigation's appearance. */}
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
              // ✅ FIX 3: Accessibility & Styling
              // Added aria-label & aria-expanded for screen readers.
              // Changed style condition to 'isScrolled || isMenuOpen' so the icon is visible when the menu is open.
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

        {/* Advanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-emerald-100/50 shadow-2xl"
            >
              <motion.div 
                className="max-w-7xl mx-auto px-4 py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center mb-8">
                  <EdenPlaceLogo size="large" />
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-emerald-800 font-serif">EDEN PLACE</h2>
                    <p className="text-sm text-emerald-600 font-medium">Your Favourite Functions Venue</p>
                  </div>
                </div>
                <nav className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.path, item.name)}
                        className={`w-full group flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                          isActive(item.path)
                            ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-xl"
                            : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                        }`}
                      >
                        {!isActive(item.path) && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                            style={{ background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})` }}
                          />
                        )}
                        <motion.div 
                          className={`relative p-3 rounded-xl transition-all duration-300 ${
                            isActive(item.path) 
                              ? "bg-white/20" 
                              : `bg-gradient-to-br ${item.color} text-white group-hover:scale-110`
                          }`}
                          whileHover={{ rotate: 10 }}
                        >
                          <item.icon className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1 text-left">
                          <div className="font-bold text-lg">{item.name}</div>
                          <div className="text-sm opacity-70">{item.description}</div>
                        </div>
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </button>
                    </motion.div>
                  ))}
                  <motion.a
                    href="tel:+263714269900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 + 0.3 }}
                    className="flex items-center justify-center space-x-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-5 rounded-2xl shadow-2xl mt-8 font-bold text-lg relative overflow-hidden group"
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="relative z-10">
                      <Phone className="w-6 h-6" />
                    </motion.div>
                    <div className="relative z-10">
                      <div>Book Your Event Now</div>
                      <div className="text-sm opacity-90 font-normal">+263 714 269 900</div>
                    </div>
                  </motion.a>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default ModernHeader;