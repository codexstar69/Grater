import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, CloudLightning, CreditCard, ShoppingBag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Set Up Your Menu",
      description: "Create your digital menu with items, categories, and pricing in minutes.",
      color: "bg-gradient-to-br from-blue-400 to-indigo-600"
    },
    {
      icon: <CloudLightning className="w-6 h-6" />,
      title: "Go Live",
      description: "Publish your menu and instantly start accepting orders from customers.",
      color: "bg-gradient-to-br from-green-400 to-teal-500"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Manage Orders",
      description: "Receive orders, track preparation, and coordinate delivery or pickup.",
      color: "bg-gradient-to-br from-amber-400 to-orange-500"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Get Paid",
      description: "Accept payments through multiple secure methods and track your revenue.",
      color: "bg-gradient-to-br from-purple-400 to-fuchsia-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-grater-black mb-4">
            Discover How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our software streamlines your food truck operations from menu setup to payment
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative mb-16 last:mb-0"
            >
              <div className={`
                flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
                items-center gap-8 md:gap-16
              `}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-grater-red hidden md:block"></div>

                {/* Icon */}
                <div className="flex-shrink-0 z-10">
                  <motion.div 
                    className={`w-20 h-20 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className="w-10 h-10">
                      {step.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`
                  bg-white p-8 rounded-xl shadow-lg max-w-md
                  ${index % 2 === 0 ? 'md:text-right' : ''}
                `}>
                  <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0"></div>
                  <h3 className="text-2xl font-bold mb-3 font-space-grotesk text-grater-black">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}