import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCalendar, FaMap, FaCameraRetro,FaRegClock, FaTrophy, FaEye} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiUserSwitchFill } from "react-icons/pi";
import { BiTargetLock } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoSparklesSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SiGooglemessages } from "react-icons/si";
import { IoSendSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Thank you! We\'ll be in touch within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guestCount: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: 'Call Us',
      details: '+263 714 269 900',
      subtitle: 'Available 24/7 for inquiries',
      action: 'tel:+263714269900',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: CiMail,
      title: 'Email Us',
      details: 'hello@edenplace.co.zw',
      subtitle: 'We respond within 2 hours',
      action: 'mailto:hello@edenplace.co.zw',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaMap,
      title: 'Visit Us',
      details: 'Matenga Village, Gilford Farm',
      subtitle: 'Hogerty Hill, Harare, Zimbabwe',
      action: 'https://maps.google.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaRegClock,
      title: 'Office Hours',
      details: 'Mon - Fri: 8AM - 6PM',
      subtitle: 'Sat - Sun: 9AM - 4PM',
      action: null,
      color: 'from-orange-500 to-red-500',
    },
  ];

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Conference',
    'Product Launch',
    'Graduation',
    'Other',
  ];

  const socialLinks = [
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaFacebookSquare, href: '#', label: 'Facebook' },
    { icon: FaXTwitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <SiGooglemessages className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-900">
              Get In Touch
            </h2>
          </div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Ready to plan your dream event? Let's start the conversation and bring your vision to life
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">
                {info.title}
              </h3>
              <p className="text-amber-800 font-medium mb-1">{info.details}</p>
              <p className="text-amber-600 text-sm">{info.subtitle}</p>
              {info.action && (
                <motion.a
                  href={info.action}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-3 text-amber-600 hover:text-amber-700 font-medium text-sm"
                >
                  Contact Now →
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center space-x-3 mb-8">
              <FaCalendar className="w-6 h-6 text-amber-600" />
              <h3 className="text-2xl font-bold text-amber-900">
                Plan Your Event
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-800 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-amber-800 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-800 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                    placeholder="+263 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-amber-800 font-medium mb-2">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-amber-800 font-medium mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-amber-800 font-medium mb-2">
                    Expected Guests
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none"
                    placeholder="Number of guests"
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-800 font-medium mb-2">
                  Tell us about your event
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none resize-none"
                  placeholder="Share your vision, special requirements, or any questions you have..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-serif font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <IoSendSharp className="w-5 h-5" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <FaMap className="w-6 h-6 text-amber-600" />
                <h3 className="text-2xl font-bold text-amber-900">
                  Find Us
                </h3>
              </div>
              <div className="bg-amber-100 rounded-2xl h-64 flex items-center justify-center mb-6">
                <div className="text-center text-amber-700">
                  <FaMap className="w-12 h-12 mx-auto mb-4" />
                  <p className="font-semibold">Interactive Map</p>
                  <p className="text-sm">Matenga Village, Gilford Farm</p>
                  <p className="text-sm">Hogerty Hill, Harare, Zimbabwe</p>
                </div>
              </div>
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaMap className="w-4 h-4" />
                <span>Get Directions</span>
              </motion.a>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Need Immediate Assistance?
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <FaPhoneAlt className="w-5 h-5" />
                  <span>+263 714 269 900</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CiMail className="w-5 h-5" />
                  <span>hello@edenplace.co.zw</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaRegClock className="w-5 h-5" />
                  <span>Available 24/7 for emergencies</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="tel:+263714269900"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-amber-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                <span>Call Now</span>
              </motion.a>
            </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;