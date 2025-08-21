import React from "react";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaMap } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { PiUserSwitchFill } from "react-icons/pi";
import { IoSparklesSharp } from "react-icons/io5";

import {
  FaCalendar,
  FaCameraRetro,
  FaAward,
  FaRegClock,
  FaXTwitter
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home", icon: PiUserSwitchFill },
    { name: "Venue Spaces", href: "#spaces", icon: FaMap },
    { name: "Gallery", href: "#gallery", icon: FaCameraRetro },
    { name: "Services", href: "#services", icon: CiStar },
    { name: "About Us", href: "#about", icon: CiHeart },
    { name: "Contact", href: "#contact", icon: FaPhoneAlt },
  ];

  const services = [
    { name: "Wedding Planning", icon: CiHeart },
    { name: "Corporate Events", icon: PiUserSwitchFill },
    { name: "Birthday Parties", icon: FaCalendar },
    { name: "Photography", icon: FaCameraRetro },
    { name: "Catering Services", icon: CiStar },
    { name: "Event Styling", icon: IoSparklesSharp },
  ];

  const contactInfo = [
    { icon: FaPhoneAlt, text: "+263 714 269 900", href: "tel:+263714269900" },
    {
      icon: CiMail,
      text: "hello@edenplace.co.zw",
      href: "mailto:hello@edenplace.co.zw",
    },
    {
      icon: FaMap,
      text: "Matenga Village, Gilford Farm, Hogerty Hill, Harare",
      href: "https://maps.google.com",
    },
    { icon: FaRegClock, text: "Mon-Fri: 8AM-6PM, Sat-Sun: 9AM-4PM", href: null },
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: FaFacebookSquare,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-400",
    },
    { icon: FaXTwitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
  ];

  const awards = [
    "Best Event Venue 2023",
    "Excellence in Service Award",
    "Top Wedding Destination",
  ];

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">
                  E
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Eden Place</h3>
                <p className="text-amber-200 text-sm">Premium Event Space</p>
              </div>
            </div>

            <p className="text-amber-100 leading-relaxed mb-6">
              Creating extraordinary moments in Zimbabwe's most elegant event
              venue. Where dreams meet reality and every celebration becomes
              unforgettable.
            </p>

            {/* Awards */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-3">
                <FaAward className="w-5 h-5 text-amber-400" />
                <span className="font-semibold text-amber-200">
                  Awards & Recognition
                </span>
              </div>
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm text-amber-100"
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <PiUserSwitchFill className="w-5 h-5 mr-2 text-amber-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-amber-100 hover:text-amber-300 transition-colors duration-300 group"
                  >
                    <link.icon className="w-4 h-4 text-amber-400 group-hover:text-amber-300" />
                    <span>{link.name}</span>
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
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <CiStar className="w-5 h-5 mr-2 text-amber-400" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-amber-100 hover:text-amber-300 transition-colors duration-300 group cursor-pointer"
                  >
                    <service.icon className="w-4 h-4 text-amber-400 group-hover:text-amber-300" />
                    <span>{service.name}</span>
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
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <FaPhoneAlt className="w-5 h-5 mr-2 text-amber-400" />
              Contact Info
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3 text-amber-100 hover:text-amber-300 transition-colors duration-300 group"
                    >
                      <info.icon className="w-4 h-4 text-amber-400 group-hover:text-amber-300 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">
                        {info.text}
                      </span>
                    </motion.a>
                  ) : (
                    <div className="flex items-start space-x-3 text-amber-100">
                      <info.icon className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">
                        {info.text}
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-amber-200">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-amber-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4 flex items-center justify-center">
              <CiMail className="w-5 h-5 mr-2 text-amber-400" />
              Stay Updated
            </h4>
            <p className="text-amber-200 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, event planning
              tips, and the latest updates from Eden Place
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-amber-800 border border-amber-600 text-white placeholder-amber-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <CiMail className="w-4 h-4" />
                <span>Subscribe</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-amber-200 text-sm">
              <span>© 2024 Eden Place. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Made with</span>
              <CiHeart className="w-4 h-4 text-red-400 hidden md:inline" />
              <span className="hidden md:inline">in Zimbabwe</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-amber-200">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
