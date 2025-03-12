import React from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  MapPin, 
  ClipboardList, 
  ShoppingCart, 
  TrendingUp, 
  Bell, 
  Calendar, 
  Truck,
  Users
} from 'lucide-react';

export default function Features() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const featureCards = [
    {
      icon: <Utensils className="w-6 h-6 text-white" />,
      title: "Menu Management",
      description: "Create and update your menu with ease. Add items, set prices, organize categories, and manage modifiers all in one place.",
      color: "from-indigo-500 to-purple-600",
      delay: 0.1
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Location Tracking",
      description: "Share your real-time location with customers so they always know where to find you. Update your schedule and route automatically.",
      color: "from-green-500 to-emerald-600",
      delay: 0.2
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: "Order Management",
      description: "Streamline your order process from receipt to delivery. Manage queues, track preparation times, and notify customers of their order status.",
      color: "from-grater-red to-red-600",
      delay: 0.3
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Sales Analytics",
      description: "Gain insights into your best-selling items, peak hours, and customer preferences. Make data-driven decisions to increase revenue.",
      color: "from-blue-500 to-blue-700",
      delay: 0.4
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Customer Engagement",
      description: "Build loyalty with integrated tools for promotions, discounts, and rewards programs that keep customers coming back.",
      color: "from-amber-500 to-orange-600",
      delay: 0.5
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Inventory Management",
      description: "Track inventory levels, get low-stock alerts, and manage suppliers to ensure you never run out of essential ingredients.",
      color: "from-cyan-500 to-teal-600",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="bg-grater-red/10 text-grater-red px-4 py-1 rounded-full text-sm font-medium">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 font-space-grotesk text-grater-black">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Streamline your operations with our comprehensive suite of tools designed specifically for food truck owners. From menu management to customer engagement, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-space-grotesk text-grater-black mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <a href="#" className="text-grater-red font-medium hover:text-red-700 transition-colors flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <button className="bg-grater-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors relative z-10">
            See All Features
          </button>
        </motion.div>

        <div className="bg-gradient-to-br from-grater-red/5 to-grater-red/20 p-8 rounded-xl shadow-md mt-16">
          <h3 className="text-2xl font-bold mb-6 font-space-grotesk text-grater-black">Why Food Truck Owners Love Us</h3>

          <div className="space-y-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold text-grater-black">Lisa T.</p>
                  <p className="text-sm text-gray-500">Food Truck Owner, 2+ years</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The location tracking feature alone paid for itself in the first month. My customers always know where to find me!"</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold text-grater-black">Marcus J.</p>
                  <p className="text-sm text-gray-500">Food Truck Owner, 1+ year</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"I've increased my daily sales by 25% since using Grater Choice. The analytics help me know exactly what's selling and when."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}