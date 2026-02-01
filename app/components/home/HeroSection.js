'use client'; // CLIENT COMPONENT - Animations

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

// Lazy load Spline to avoid blocking main thread
const SplineScene = dynamic(() => import('./SplineScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent animate-pulse" />
  ),
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background - Lazy Loaded */}
      <div className="absolute inset-0 z-0">
        <SplineScene />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/60 z-10"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 container mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium">
            🚀 Welcome to the Future of Digital
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          We Build Digital
          <br />
          <span className="text-gradient">Experiences</span> That Matter
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
        >
          Transform your brand with cutting-edge web development, mobile apps, 
          and strategic digital marketing solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group px-8 py-4 bg-primary hover:bg-primary-dark rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/50 flex items-center gap-2" onClick={() => window.location.href = '/contact'}>
            Start Your Project
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button className="px-8 py-4 glass hover:bg-white/10 rounded-full transition-all hover:scale-105" onClick={() => window.location.href = '/work'}>
            View Our Work
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '150+', label: 'Projects Completed' },
            { value: '50+', label: 'Happy Clients' },
            { value: '10+', label: 'Team Members' },
            { value: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}