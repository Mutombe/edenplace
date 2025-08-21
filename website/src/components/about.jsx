import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCalendar, FaMap, FaCameraRetro,FaRegClock, FaTrophy, FaEye} from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { PiUserSwitchFill } from "react-icons/pi";
import { BiTargetLock } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { IoSparklesSharp } from "react-icons/io5";


const About = () => {
  const stats = [
    {
      icon: FaCalendar,
      number: "500+",
      label: "Events Hosted",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: PiUserSwitchFill,
      number: "50,000+",
      label: "Happy Guests",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaAward,
      number: "15+",
      label: "Awards Won",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaRegClock,
      number: "5+",
      label: "Years Experience",
      color: "from-orange-500 to-red-500",
    },
  ];

  const values = [
    {
      icon: CiHeart,
      title: "Passion",
      description:
        "We pour our hearts into every event, ensuring each celebration is as unique as our clients.",
    },
    {
      icon: CiStar,
      title: "Excellence",
      description:
        "We maintain the highest standards in service, quality, and attention to detail.",
    },
    {
      icon: PiUserSwitchFill,
      title: "Partnership",
      description:
        "We work closely with our clients to bring their vision to life, every step of the way.",
    },
    {
      icon: IoSparklesSharp,
      title: "Innovation",
      description:
        "We continuously evolve our offerings to provide cutting-edge event experiences.",
    },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Creative Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years in luxury event planning, Sarah founded Eden Place to create unforgettable experiences.",
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Michael ensures every event runs flawlessly with his meticulous attention to detail and logistics expertise.",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Elena transforms spaces into magical environments with her innovative design concepts and artistic vision.",
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
    <section id="about" className="py-20 bg-white">
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
            <CiHeart className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
              About Eden Place
            </h2>
          </div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Where dreams meet reality and every celebration becomes a cherished
            memory
          </p>
        </motion.div>

        {/* Hero Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Eden Place Interior"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaMap className="w-6 h-6 text-amber-600" />
              <span className="text-amber-700 font-serif">
                Hogerty Hill, Harare, Zimbabwe
              </span>
            </div>

            <h3 className="text-3xl font-bold text-amber-900 mb-6">
              Our Story
            </h3>

            <p className="text-amber-700 leading-relaxed mb-6">
              Nestled in the scenic hills of Harare, Eden Place was born from a
              vision to create Zimbabwe's premier event destination. Our journey
              began with a simple belief: every celebration deserves a setting
              as special as the moment itself.
            </p>

            <p className="text-amber-700 leading-relaxed mb-6">
              From intimate gatherings to grand celebrations, we've had the
              privilege of hosting over 500 unforgettable events. Our commitment
              to excellence and attention to detail has made us the preferred
              choice for discerning clients across Zimbabwe and beyond.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-2xl p-4 text-center">
                <BiTargetLock className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h4 className=" font-semibold text-amber-900 mb-1">
                  Our Mission
                </h4>
                <p className="text-sm text-amber-700">
                  Creating extraordinary experiences
                </p>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4 text-center">
                <FaEye className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h4 className="font-semibold text-amber-900 mb-1">
                  Our Vision
                </h4>
                <p className="text-sm text-amber-700">
                  Zimbabwe's leading event venue
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-amber-900 mb-2">
                {stat.number}
              </div>
              <div className="text-amber-700">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FaTrophy className="w-8 h-8 text-amber-600" />
            <h3 className="text-3xl md:text-4xl font-bold text-amber-900">
              Our Values
            </h3>
          </div>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            The principles that guide everything we do at Eden Place
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-amber-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-amber-900 mb-4">
                {value.title}
              </h4>
              <p className="text-amber-700 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <PiUserSwitchFill className="w-8 h-8 text-amber-600" />
            <h3 className="text-3xl md:text-4xl font-bold text-amber-900">
              Meet Our Team
            </h3>
          </div>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            The passionate professionals behind every extraordinary event
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 text-center"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                  <CiStar className="w-4 h-4 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-amber-900 mb-2">
                {member.name}
              </h4>
              <p className="text-amber-600 font-medium mb-4">{member.role}</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
