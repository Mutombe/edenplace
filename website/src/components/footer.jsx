import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Phone, 
  Link,
  Home,
  Mail, 
  MapPin, 
  Clock, 
  Heart, 
  Star, 
  User, 
  Sparkles, 
  Camera, 
  Calendar, 
  Award, 
  ArrowRight,
  TreePine,
  Leaf,
  Send
} from "lucide-react";

// Eden Place Logo Component (matching nav style)
const EdenPlaceLogo = ({ size = "default" }) => {
  const logoSize = size === "large" ? "w-16 h-16" : size === "small" ? "w-10 h-10" : "w-12 h-12";
    
  return (
    <motion.div
      className={`relative ${logoSize} rounded-xl flex items-center justify-center shadow-2xl overflow-hidden`}
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0" />
      <img 
        src="/logo.png" 
        alt="Eden Place Logo" 
        className="relative z-10 w-full h-full object-contain p-1"
      />
    </motion.div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const quickLinks = [
    { name: "Home", href: "#home", icon: Home, color: "from-emerald-500 to-green-600" },
    { name: "Venue Spaces", href: "#spaces", icon: MapPin, color: "from-amber-500 to-orange-600" },
    { name: "Gallery", href: "#gallery", icon: Camera, color: "from-pink-500 to-rose-600" },
    { name: "Services", href: "#services", icon: Star, color: "from-purple-500 to-indigo-600" },
    { name: "About Us", href: "#about", icon: Heart, color: "from-teal-500 to-emerald-600" },
    { name: "Contact", href: "#contact", icon: Phone, color: "from-red-500 to-pink-600" },
  ];

  const services = [
    { name: "Wedding Planning", icon: Heart, color: "from-rose-500 to-pink-600" },
    { name: "Corporate Events", icon: User, color: "from-blue-500 to-indigo-600" },
    { name: "Birthday Parties", icon: Calendar, color: "from-purple-500 to-violet-600" },
    { name: "Photography", icon: Camera, color: "from-amber-500 to-orange-600" },
    { name: "Catering Services", icon: Star, color: "from-green-500 to-emerald-600" },
    { name: "Event Styling", icon: Sparkles, color: "from-cyan-500 to-blue-600" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+263 714 269 900", href: "tel:+263714269900", label: "Call Us" },
    {
      icon: Mail,
      text: "hello@edenplace.co.zw",
      href: "mailto:hello@edenplace.co.zw",
      label: "Email Us"
    },
    {
      icon: MapPin,
      text: "Matenga Village, Gilford Farm, Hogerty Hill, Harare",
      href: "https://maps.google.com",
      label: "Visit Us"
    },
    { icon: Clock, text: "Mon-Fri: 8AM-6PM, Sat-Sun: 9AM-4PM", href: null, label: "Opening Hours" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook", 
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter", 
      color: "from-sky-500 to-cyan-600",
      hoverColor: "hover:from-sky-600 hover:to-cyan-700"
    },
  ];

  const awards = [
    "Best Event Venue 2023",
    "Excellence in Service Award",
    "Top Wedding Destination",
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-green-500/10 bg-[length:200%_200%]"
        />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0.1 
            }}
            animate={{ 
              y: ['-10%', '110%'],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: 'linear'
            }}
          >
            {i % 3 === 0 ? <TreePine className="w-8 h-8 text-emerald-300" /> : 
             i % 3 === 1 ? <Leaf className="w-6 h-6 text-green-300" /> :
             <Sparkles className="w-5 h-5 text-emerald-200" />}
          </motion.div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-4 mb-6">
              <EdenPlaceLogo />
              <div>
                <motion.h3 
                  className="text-2xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  EDEN PLACE
                </motion.h3>
                <p className="text-emerald-300 text-sm font-medium">Premium Event Space</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8">
              Creating extraordinary moments in Zimbabwe's most elegant event
              venue. Where dreams meet reality and every celebration becomes
              unforgettable.
            </p>

            {/* Awards with Enhanced Styling */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="p-2 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg"
                >
                  <Award className="w-5 h-5 text-white" />
                </motion.div>
                <span className="font-semibold text-emerald-300 text-lg">
                  Awards & Recognition
                </span>
              </div>
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-center space-x-3 text-slate-300 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer group"
                >
                  <motion.div 
                    className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full group-hover:scale-125 transition-transform duration-300"
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="group-hover:text-emerald-300 transition-colors duration-300">{award}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links with Nav-style Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg"
              >
                <Link className="w-5 h-5 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
            </div>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group flex items-center space-x-3 text-slate-300 hover:text-white p-3 rounded-xl hover:bg-gradient-to-r hover:from-white/5 hover:to-emerald-500/10 transition-all duration-300 relative overflow-hidden"
                  >
                    <motion.div
                      className={`p-2 bg-gradient-to-r ${link.color} rounded-lg shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <link.icon className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="font-medium">{link.name}</span>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg"
              >
                <Star className="w-5 h-5 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-white">Our Services</h4>
            </div>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="group flex items-center space-x-3 text-slate-300 hover:text-white p-3 rounded-xl hover:bg-gradient-to-r hover:from-white/5 hover:to-purple-500/10 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div
                      className={`p-2 bg-gradient-to-r ${service.color} rounded-lg shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <service.icon className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="font-medium">{service.name}</span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-2 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl shadow-lg"
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.div>
              <h4 className="text-xl font-bold text-white">Contact Info</h4>
            </div>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 8, scale: 1.02 }}
                      className="group flex items-start space-x-3 text-slate-300 hover:text-emerald-300 p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="p-1.5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg mt-0.5 flex-shrink-0"
                      >
                        <info.icon className="w-3.5 h-3.5 text-white" />
                      </motion.div>
                      <div>
                        <span className="text-sm leading-relaxed block">{info.text}</span>
                        <span className="text-xs text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{info.label}</span>
                      </div>
                    </motion.a>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 text-slate-300 p-3"
                    >
                      <div className="p-1.5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg mt-0.5 flex-shrink-0">
                        <info.icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <span className="text-sm leading-relaxed block">{info.text}</span>
                        <span className="text-xs text-emerald-400">{info.label}</span>
                      </div>
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>

            {/* Enhanced Social Links */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-emerald-300 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Follow Us
              </h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-12 h-12 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
                    aria-label={social.label}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    />
                    <social.icon className="w-5 h-5 text-white relative z-10" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative border-t border-emerald-800/50 bg-gradient-to-r from-slate-900/80 to-emerald-900/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-xl mr-3"
              >
                <Mail className="w-6 h-6 text-white" />
              </motion.div>
              <h4 className="text-2xl font-bold text-white">Stay Updated</h4>
            </div>
            
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for exclusive offers, event planning
              tips, and the latest updates from Eden Place
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-slate-800/50 border border-emerald-600/30 text-white placeholder-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50 focus:bg-slate-800/80 outline-none transition-all duration-300 backdrop-blur-sm"
                required
              />
              <motion.button
                onClick={handleSubscribe}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubscribed}
                className="group bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden disabled:opacity-75"
              >
                <AnimatePresence mode="wait">
                  {isSubscribed ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      className="flex items-center space-x-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        ✓
                      </motion.div>
                      <span>Subscribed!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="subscribe"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Subscribe</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.div
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Bottom Bar */}
      <div className="relative border-t border-emerald-800/50 bg-slate-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© 2025 Eden Place. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 hidden md:inline" />
              </motion.div>
              <span className="hidden md:inline">in Zimbabwe</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ scale: 1.05, color: "#34d399" }}
                  className="hover:text-emerald-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;