import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaCalendar, } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { CiHeart, CiStar } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { PiUserSwitchFill } from "react-icons/pi";
import { FaMap } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Events", icon: FaCameraRetro },
    { id: "weddings", name: "Weddings", icon: CiHeart },
    { id: "corporate", name: "Corporate", icon: CiShare2 },
    { id: "social", name: "Social Events", icon: CiSaveDown2 },
  ];

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "weddings",
      title: "Elegant Wedding Reception",
      description: "A magical evening in our Grand Ballroom",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "weddings",
      title: "Garden Ceremony",
      description: "Intimate outdoor wedding in our Garden Pavilion",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "corporate",
      title: "Executive Conference",
      description: "Professional meeting in our Executive Boardroom",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "social",
      title: "Birthday Celebration",
      description: "Memorable birthday party setup",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "corporate",
      title: "Product Launch",
      description: "Successful product launch event",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "weddings",
      title: "Reception Details",
      description: "Beautiful table setting and décor",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "social",
      title: "Anniversary Dinner",
      description: "Elegant anniversary celebration",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "corporate",
      title: "Team Building Event",
      description: "Corporate team building activities",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      category: "social",
      title: "Graduation Party",
      description: "Celebration of achievements",
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
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
            <FaCameraRetro className="w-8 h-8 text-amber-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
              Event Gallery
            </h2>
          </div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Witness the magic of unforgettable moments captured at Eden Place
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-serif font-semibold mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-amber-200">
                      {image.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-2">
                      <FaCameraRetro className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300"
                >
                  <IoMdClose className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>

                {/* Image */}
                <img
                  src={filteredImages[selectedImage]?.src}
                  alt={filteredImages[selectedImage]?.title}
                  className="w-full h-full object-contain rounded-lg"
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                  <h3 className="text-2xl font-bold mb-2">
                    {filteredImages[selectedImage]?.title}
                  </h3>
                  <p className="text-amber-200">
                    {filteredImages[selectedImage]?.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
