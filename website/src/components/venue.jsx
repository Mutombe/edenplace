import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCalendar,FaArrowRight  } from "react-icons/fa6";
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
import { IoWifiOutline } from "react-icons/io5";


const VenueSpaces = () => {
  const spaces = [
    {
      id: 1,
      name: "Grand Ballroom",
      capacity: "200-300 guests",
      area: "500 sqm",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Crystal Chandeliers",
        "Dance Floor",
        "Stage Area",
        "Premium Sound System",
      ],
      amenities: [
        { icon: PiUserSwitchFill, text: "300 Capacity" },
        { icon: CiMusicNote1, text: "Sound System" },
        { icon: FaCameraRetro, text: "Photo Booth Area" },
        { icon: FaUtensils, text: "Catering Ready" },
      ],
      description:
        "Our flagship space featuring soaring ceilings, elegant décor, and panoramic views.",
      price: "From $2,500",
    },
    {
      id: 2,
      name: "Garden Pavilion",
      capacity: "100-150 guests",
      area: "300 sqm",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Open-Air Design",
        "Garden Views",
        "Natural Lighting",
        "Weather Protection",
      ],
      amenities: [
        { icon: PiUserSwitchFill, text: "150 Capacity" },
        { icon: FaMap, text: "Garden Setting" },
        { icon: FaCameraRetro, text: "Scenic Backdrop" },
        { icon: IoWifiOutline, text: "Full WiFi" },
      ],
      description:
        "Perfect for intimate gatherings with lush garden surroundings and natural beauty.",
      price: "From $1,800",
    },
    {
      id: 3,
      name: "Executive Boardroom",
      capacity: "20-50 guests",
      area: "100 sqm",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Modern AV Equipment",
        "Climate Control",
        "Executive Seating",
        "Presentation Screen",
      ],
      amenities: [
        { icon: PiUserSwitchFill, text: "50 Capacity" },
        { icon: IoWifiOutline, text: "High-Speed WiFi" },
        { icon: FaCameraRetro, text: "Video Conferencing" },
        { icon: FaCarRear, text: "VIP Parking" },
      ],
      description:
        "Sophisticated space designed for corporate meetings and business events.",
      price: "From $800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
      id="spaces"
      className="py-20 bg-gradient-to-br from-amber-50 to-orange-50"
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
            <FaMap className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl md:text-5xl  font-bold text-amber-900">
              Venue Spaces
            </h2>
          </div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Discover our thoughtfully designed spaces, each crafted to create
            the perfect atmosphere for your special occasion
          </p>
        </motion.div>

        {/* Spaces Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {spaces.map((space) => (
            <motion.div
              key={space.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {space.price}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl  font-bold mb-1">
                    {space.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <PiUserSwitchFill className="w-4 h-4" />
                      <span>{space.capacity}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaMap className="w-4 h-4" />
                      <span>{space.area}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-amber-700 mb-6 leading-relaxed">
                  {space.description}
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {space.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-amber-800"
                    >
                      <amenity.icon className="w-4 h-4 text-amber-600" />
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className=" font-semibold text-amber-900 mb-3 flex items-center">
                    <CiStar className="w-4 h-4 mr-2 text-amber-600" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {space.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-xl  font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Details</span>
                  <FaArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
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
            Need help choosing the perfect space for your event?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300  font-semibold border-2 border-amber-200"
          >
            <FaPhoneAlt className="w-5 h-5" />
            <span>Speak with Our Team</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSpaces;
