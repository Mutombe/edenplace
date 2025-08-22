import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Award, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Trophy, 
  Eye, 
  Heart, 
  Star, 
  Target, 
  Sparkles, 
  Camera,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Leaf
} from "lucide-react";

// Counter Hook for animated numbers
const useCounter = (end, duration = 2000, trigger = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, trigger]);

  return count;
};

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, threshold: 0.3 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    {
      icon: Calendar,
      number: 500,
      label: "Events Hosted",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      description: "Memorable celebrations",
      backgroundImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Users,
      number: 50000,
      label: "Happy Guests",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      description: "Satisfied customers",
      backgroundImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Award,
      number: 15,
      label: "Awards Won",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      description: "Industry recognition",
      backgroundImage: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Clock,
      number: 5,
      label: "Years Experience",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      description: "Proven expertise",
      backgroundImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our hearts into every event, ensuring each celebration is as unique as our clients.",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      backgroundImage: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We maintain the highest standards in service, quality, and attention to detail.",
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50",
      backgroundImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Shield,
      title: "Trust",
      description: "We work closely with our clients to bring their vision to life, every step of the way.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      backgroundImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We continuously evolve our offerings to provide cutting-edge event experiences.",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      backgroundImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years in luxury event planning, Sarah founded Eden Place to create unforgettable experiences.",
      specialties: ["Event Design", "Client Relations", "Strategic Planning"],
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Michael ensures every event runs flawlessly with his meticulous attention to detail and logistics expertise.",
      specialties: ["Logistics", "Vendor Management", "Quality Control"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Elena transforms spaces into magical environments with her innovative design concepts and artistic vision.",
      specialties: ["Space Design", "Floral Arrangements", "Lighting Design"],
      color: "from-purple-500 to-pink-600"
    },
  ];

  const achievements = [
    "Featured in Harare Wedding Magazine",
    "Best Event Venue 2023 - Zimbabwe Tourism Awards",
    "Eco-Friendly Venue Certification",
    "Excellence in Service Award",
    "Top Rated Venue on WeddingWire"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-500/20 blur-3xl"
          animate={{ 
            x: mousePosition.x * 0.02 - 200, 
            y: mousePosition.y * 0.02 - 200 
          }}
          transition={{ type: "spring", stiffness: 50, damping: 50 }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/15 to-cyan-500/15 blur-2xl"
          animate={{ 
            x: mousePosition.x * -0.01, 
            y: mousePosition.y * 0.01 
          }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
        />
      </div>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Where dreams meet reality and every celebration becomes a cherished memory
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Eden Place Interior"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <div className="text-center text-white">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm font-medium">Years</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-emerald-100 rounded-xl"
              >
                <MapPin className="w-6 h-6 text-emerald-600" />
              </motion.div>
              <span className="text-emerald-700 font-medium text-lg">
                Hogerty Hill, Harare, Zimbabwe
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Our Story
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Nestled in the scenic hills of Harare, Eden Place was born from a 
                vision to create Zimbabwe's premier event destination. Our journey 
                began with a simple belief: every celebration deserves a setting 
                as special as the moment itself.
              </p>

              <p className="text-lg">
                From intimate gatherings to grand celebrations, we've had the 
                privilege of hosting over 500 unforgettable events. Our commitment 
                to excellence and attention to detail has made us the preferred 
                choice for discerning clients across Zimbabwe and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-8 h-8 text-emerald-600" />
                  <h3 className="font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Creating extraordinary experiences that exceed expectations
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Eye className="w-8 h-8 text-blue-600" />
                  <h3 className="font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Zimbabwe's leading premium event destination
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-32"
        >
          {stats.map((stat, index) => {
            const count = useCounter(stat.number, 2000, statsInView);
            const displayValue = stat.number >= 1000 ? `${(count / 1000).toFixed(count >= 1000 ? 0 : 1)}K` : count.toString();
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative text-center rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${stat.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})` }}
                />
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`relative z-10 w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                    className="text-4xl font-bold text-gray-800 mb-2"
                  >
                    {displayValue}{stat.number >= 15 ? "+" : stat.number >= 1000 ? "+" : "+"}
                  </motion.div>
                  <div className="text-gray-700 font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl shadow-xl"
            >
              <Trophy className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our Values
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at Eden Place
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative text-center rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${value.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${value.color.split(' ')[1]}, ${value.color.split(' ')[3]})` }}
              />
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                className={`relative z-10 w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl shadow-xl"
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Meet Our Team
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate professionals behind every extraordinary event
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              onHoverStart={() => setActiveTeamMember(index)}
              onHoverEnd={() => setActiveTeamMember(null)}
              className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${member.color.split(' ')[1]}, ${member.color.split(' ')[3]})` }}
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-6 mx-auto w-32 h-32"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover shadow-lg"
                  />
                  <motion.div
                    className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                  >
                    <Star className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <AnimatePresence>
                  {activeTeamMember === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-2"
                    >
                      {member.specialties.map((specialty, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm text-gray-600">{specialty}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl p-12 text-center text-white shadow-2xl mb-20"
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-white/20 rounded-2xl"
            >
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Recognition & Awards
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
              >
                <CheckCircle className="w-5 h-5 text-emerald-200 flex-shrink-0" />
                <span className="text-white/90 text-sm">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life at Eden Place
          </p>
          <motion.a
            href="tel:+263714269900"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 font-bold text-lg group"
          >
            <Sparkles className="w-6 h-6" />
            <span>Book Your Event</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;