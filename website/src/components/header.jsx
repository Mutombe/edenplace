import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaCalendar, } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { CiStar } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { PiUserSwitchFill } from "react-icons/pi";
import { FaMap } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa6";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: PiUserSwitchFill },
    { name: "Venue Spaces", href: "#spaces", icon: FaMap },
    { name: "Gallery", href: "#gallery", icon: FaCameraRetro },
    { name: "Services", href: "#services", icon: CiStar },
    { name: "Events", href: "#events", icon: FaCalendar },
    { name: "About", href: "#about", icon: CiCircleInfo },
    { name: "Contact", href: "#contact", icon: FaPhoneAlt },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-amber-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl font-serif">E</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-900">
                Eden Place
              </h1>
              <p className="text-xs text-amber-700 font-light">
                Premium Event Space
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-amber-900 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span className="">{item.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* Contact Button */}
          <motion.a
            href="tel:+263714269900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FaPhoneAlt className="w-4 h-4" />
            <span className="font-medium">Book Now</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <LuMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-amber-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 text-amber-900 hover:text-amber-600 transition-colors duration-300 py-2 font-serif font-medium"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </motion.a>
                ))}
                <motion.a
                  href="tel:+263714269900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-full shadow-lg mt-4"
                >
                  <FaPhoneAlt className="w-4 h-4" />
                  <span className="font-medium">Book Now</span>
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
