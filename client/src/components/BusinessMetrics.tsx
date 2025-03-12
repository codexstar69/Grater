
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign, 
  ShoppingBag, 
  Award,
  Calendar
} from 'lucide-react';

const MetricCard = ({ icon: Icon, title, value, suffix, prefix, color, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-500">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-3xl font-bold text-grater-black">
              {prefix}
              {inView && <CountUp end={value} duration={2.5} separator="," />}
              {suffix}
            </p>
          </div>
        </div>
        <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 w-full h-1" 
        style={{ 
          background: `linear-gradient(90deg, transparent, ${color.replace('bg-', '')})` 
        }}
      ></div>
    </motion.div>
  );
};

export default function BusinessMetrics() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-space-grotesk text-grater-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transform Your Business with Real Data
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Food truck businesses using our platform have seen significant improvements across all key performance metrics.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <MetricCard 
            icon={TrendingUp} 
            title="Revenue Increase" 
            value={38} 
            suffix="%" 
            color="bg-green-500" 
            delay={0.1}
          />
          <MetricCard 
            icon={Users} 
            title="New Customers" 
            value={212} 
            suffix="/mo" 
            color="bg-blue-500" 
            delay={0.2}
          />
          <MetricCard 
            icon={Clock} 
            title="Time Saved" 
            value={12} 
            suffix="hrs/wk" 
            color="bg-indigo-500"
            delay={0.3}
          />
          <MetricCard 
            icon={DollarSign} 
            title="Average Order" 
            value={28} 
            prefix="$" 
            color="bg-grater-red"
            delay={0.4}
          />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
              <ShoppingBag className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold font-space-grotesk text-grater-black mb-2">Increased Sales</h3>
            <p className="text-gray-600 mb-4">Food trucks report an average of 38% increase in sales volume after implementing our platform.</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
              <motion.div 
                className="bg-amber-600 h-2.5 rounded-full" 
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Previous</span>
              <span>After implementation</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold font-space-grotesk text-grater-black mb-2">Processing Time</h3>
            <p className="text-gray-600 mb-4">Average order processing time reduced from 4 minutes to just 45 seconds.</p>
            <div className="flex items-end justify-between mt-6">
              <div className="text-center">
                <div className="relative">
                  <div className="w-16 bg-gray-200 mx-auto">
                    <motion.div 
                      className="bg-blue-600 w-16"
                      initial={{ height: 0 }}
                      whileInView={{ height: '120px' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                  <span className="block text-sm mt-2">Before</span>
                </div>
              </div>
              <div className="text-center">
                <div className="relative">
                  <div className="w-16 bg-gray-200 mx-auto">
                    <motion.div 
                      className="bg-blue-600 w-16"
                      initial={{ height: 0 }}
                      whileInView={{ height: '30px' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    ></motion.div>
                  </div>
                  <span className="block text-sm mt-2">After</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold font-space-grotesk text-grater-black mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600 mb-4">Overall customer satisfaction ratings have increased by 42% after implementation.</p>
            <div className="flex items-center justify-center mt-5">
              <svg className="w-32 h-32" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="8" />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#9333ea"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 0.92 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  style={{ 
                    transformOrigin: 'center',
                    transform: 'rotate(-90deg)',
                    strokeDasharray: '283',
                    strokeDashoffset: '283'
                  }}
                />
                <text x="50" y="55" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#232120">92%</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
