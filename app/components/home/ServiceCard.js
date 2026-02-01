'use client'; // CLIENT COMPONENT - Hover effects & animations

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Code, Smartphone, TrendingUp } from 'lucide-react';

// Map icon names to components
const iconMap = {
  Code,
  Smartphone,
  TrendingUp,
};

export default function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Get the icon component from the map
  const Icon = iconMap[service.iconName];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl glass overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-105">
        {/* Gradient glow on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${service.color} blur-xl`}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-full h-full text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300" onClick={() => window.location.href = '/contact'}>
            Learn More
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
}