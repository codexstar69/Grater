
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Brands() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Simulated brand logos (in a real application, these would be actual brand images)
  const brands = [
    { name: "FoodTruck Co", color: "bg-blue-500" },
    { name: "Quick Bites", color: "bg-green-500" },
    { name: "Urban Eats", color: "bg-purple-500" },
    { name: "Street Cuisine", color: "bg-amber-500" },
    { name: "Mobile Meals", color: "bg-pink-500" },
    { name: "Flavor Wheels", color: "bg-indigo-500" },
    { name: "Gourmet Go", color: "bg-teal-500" },
    { name: "Culinary Cruisers", color: "bg-red-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-grater-black mb-4">
            Trusted by Top Food Trucks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful food truck businesses already using our platform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-full h-64 bg-grater-red rounded-full blur-3xl"></div>
          </div>

          {/* First row with parallax effect */}
          <div className="mb-8 relative">
            <motion.div
              animate={{ 
                x: inView ? [0, -20, 0] : 0
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 15,
                ease: "linear"
              }}
              className="flex space-x-8"
            >
              {brands.slice(0, 4).map((brand, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                  }}
                  className="flex-shrink-0 w-64 h-32 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="h-full flex items-center justify-center relative">
                    <div className={`absolute top-0 left-0 w-full h-1 ${brand.color}`}></div>
                    <span className="font-bold text-xl text-gray-800 font-space-grotesk">{brand.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second row with opposite direction parallax */}
          <div className="relative">
            <motion.div
              animate={{ 
                x: inView ? [0, 20, 0] : 0
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 18,
                ease: "linear"
              }}
              className="flex space-x-8"
            >
              {brands.slice(4).map((brand, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                  }}
                  className="flex-shrink-0 w-64 h-32 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="h-full flex items-center justify-center relative">
                    <div className={`absolute top-0 left-0 w-full h-1 ${brand.color}`}></div>
                    <span className="font-bold text-xl text-gray-800 font-space-grotesk">{brand.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join our growing community of successful food truck businesses
          </p>
          <button className="px-8 py-3 bg-grater-red text-white font-medium rounded-full hover:bg-red-700 transition-colors shadow-md hover:shadow-lg">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
