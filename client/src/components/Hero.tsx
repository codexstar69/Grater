
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CheckCircleIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-grater-black via-grater-black to-gray-900 text-white py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-grater-red/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-grater-red/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl"></div>
        
        {/* Animated floating elements */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-grater-red/30 blur-xl"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-blue-500/20 blur-xl"
          animate={{ 
            y: [0, 40, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-1 rounded-full bg-grater-red/10 text-grater-red text-sm font-medium mb-4"
              >
                Simplify Your Food Truck Management
              </motion.span>

              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Run Your Food Truck
                <motion.span 
                  className="block mt-2 text-grater-red"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Like a Pro
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                An all-in-one platform built exclusively for food truck owners. Manage menus, track locations, process orders, and analyze performance – all from a single dashboard.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Button size="lg" className="bg-grater-red hover:bg-red-600 text-white rounded-lg px-8 font-medium">
                  Start Free Trial
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-lg px-8 font-medium">
                  Watch Demo
                </Button>
              </motion.div>

              <motion.div 
                className="pt-8 mt-4 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <p className="text-gray-400 text-sm mb-4">Trusted by 1,000+ Food Truck Owners</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {['No credit card required', '14-day free trial', 'Cancel anytime'].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center text-gray-300 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                    >
                      <CheckCircleIcon className="h-4 w-4 text-grater-red mr-2" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative">
              {/* Phone mockup with app screenshot */}
              <div className="relative mx-auto w-full max-w-md">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 overflow-hidden rounded-[2.5rem] border-8 border-gray-800 shadow-xl"
                >
                  <div className="absolute top-0 left-1/2 -ml-4 h-6 w-8 rounded-b-lg bg-gray-800"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80" 
                    alt="Food Truck Management App" 
                    className="h-full w-full object-cover bg-gray-200"
                  />
                </motion.div>

                {/* Floating UI elements */}
                <motion.div 
                  className="absolute -right-16 top-12 bg-white rounded-lg shadow-xl p-4 w-44 z-20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-grater-red"></div>
                    <p className="text-xs font-medium text-grater-black">Live Orders</p>
                  </div>
                  <p className="text-sm text-gray-600">25 orders processed today</p>
                </motion.div>
                
                <motion.div 
                  className="absolute -left-20 bottom-20 bg-white rounded-lg shadow-xl p-4 w-40 z-20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-medium text-grater-black">Today's Revenue</p>
                  </div>
                  <p className="text-lg font-bold text-grater-red">$1,245.00</p>
                  <div className="flex items-center mt-1">
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                    <span className="text-xs text-green-500 ml-1">+12.5%</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
