import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCalendar, } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { CiStar, CiHeart } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { PiUserSwitchFill } from "react-icons/pi";
import { FaMap } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import { CiMusicNote1 } from "react-icons/ci";
import { FaUtensils } from "react-icons/fa";
import { IoFlowerOutline } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { FaCarRear } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      icon: FaUtensils,
      title: "Premium Catering",
      description:
        "Exquisite culinary experiences crafted by our award-winning chefs",
      features: [
        "Custom Menus",
        "Dietary Accommodations",
        "Live Cooking Stations",
        "Premium Bar Service",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: CiMusicNote1,
      title: "Audio Visual",
      description:
        "State-of-the-art sound and lighting systems for unforgettable experiences",
      features: [
        "Professional Sound",
        "LED Lighting",
        "Projection Systems",
        "Live Streaming",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: IoFlowerOutline,
      title: "Event Styling",
      description:
        "Transform your vision into reality with our expert design team",
      features: [
        "Floral Arrangements",
        "Themed Décor",
        "Lighting Design",
        "Custom Installations",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaCameraRetro,
      title: "Photography",
      description:
        "Capture every precious moment with our professional photography services",
      features: [
        "Event Photography",
        "Videography",
        "Drone Footage",
        "Same-Day Editing",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaCarRear,
      title: "Transportation",
      description: "Luxury transportation services for you and your guests",
      features: [
        "Luxury Vehicles",
        "Group Transport",
        "Airport Transfers",
        "Valet Parking",
      ],
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: FaShieldAlt,
      title: "Event Security",
      description:
        "Professional security services to ensure your event runs smoothly",
      features: [
        "Trained Personnel",
        "Access Control",
        "Crowd Management",
        "24/7 Monitoring",
      ],
      color: "from-amber-500 to-yellow-500",
    },
  ];

  const packages = [
    {
      name: "Essential",
      price: "$1,500",
      duration: "Half Day",
      icon: CiClock1,
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
      icon: CiStar,
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
      icon: FaAward,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 to-gray-100"
    >
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
            <IoSparklesSharp className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl md:text-5xl  font-bold text-amber-900">
              Our Services
            </h2>
          </div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive event services designed to make your special day
            absolutely perfect
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl  font-bold text-amber-900 mb-4">
                {service.title}
              </h3>

              <p className="text-amber-700 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-2 text-sm text-amber-800"
                  >
                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <CiHeart className="w-8 h-8 text-amber-600" />
            <h3 className="text-3xl md:text-4xl  font-bold text-amber-900">
              Event Packages
            </h3>
          </div>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Choose from our carefully curated packages or let us create a custom
            solution for you
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                pkg.popular ? "ring-4 ring-amber-400 ring-opacity-50" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <pkg.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl  font-bold text-amber-900 mb-2">
                  {pkg.name}
                </h4>
                <div className="text-4xl font-bold text-amber-600 mb-1">
                  {pkg.price}
                </div>
                <p className="text-amber-700">{pkg.duration}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-amber-800 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl  font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                }`}
              >
                Choose Package
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-amber-700 mb-6 text-lg">
            Need a custom package tailored to your specific needs?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300  font-semibold"
          >
            <PiUserSwitchFill className="w-5 h-5" />
            <span>Let's Plan Together</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
