import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ChevronRight, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'wouter';

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 overflow-hidden relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-grater-red to-red-700"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <motion.div 
          className="absolute bottom-0 right-1/4 w-40 h-40 bg-white opacity-5 rounded-full"
          animate={{ 
            y: inView ? [0, -20, 0] : 0 
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="text-white lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">
              Ready to Revolutionize Your Food Truck Business?
            </h2>
            <p className="text-white text-opacity-90 text-lg md:text-xl mb-8 max-w-xl">
              Join thousands of food truck owners who have transformed their operations with our comprehensive management platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex-1"
              >
                <Link href="/signup">
                  <a className="w-full inline-flex items-center justify-center bg-white text-grater-red font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow text-lg">
                    Get Started Free
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                </Link>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex-1"
              >
                <Link href="/demo">
                  <a className="w-full inline-flex items-center justify-center bg-transparent text-white border-2 border-white border-opacity-50 font-bold px-8 py-4 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors text-lg">
                    Request Demo
                  </a>
                </Link>
              </motion.div>
            </div>

            {/* Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-white text-opacity-90 text-sm">4.9/5 from 2,000+ reviews</span>
              </div>
              <p className="text-white italic">
                "I've increased my sales by 35% and cut administration time in half since switching to this platform."
              </p>
              <p className="text-white text-opacity-80 text-sm mt-2">
                — Sarah J., Urban Eats Food Truck
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-2 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-lg flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-500 rounded-full"></div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 pt-5">
                <div className="px-5 pb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-grater-red text-white flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h3 className="ml-3 font-bold text-lg text-grater-black">Grater Choice Dashboard</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>
                    <div className="h-6 bg-gray-200 rounded-md w-1/2"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-5 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="h-8 bg-grater-red bg-opacity-10 rounded flex items-center pl-2">
                        <div className="w-4 h-4 rounded-full bg-grater-red"></div>
                        <div className="h-3 bg-gray-200 rounded ml-2 w-16"></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                      <div className="h-8 bg-green-500 bg-opacity-10 rounded flex items-center pl-2">
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        <div className="h-3 bg-gray-200 rounded ml-2 w-16"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/5"></div>
                    </div>
                    <div className="space-y-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                          <div className="h-4 bg-gray-200 rounded ml-2 flex-grow"></div>
                          <div className="h-4 bg-gray-200 rounded w-12 ml-2"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}