'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCard({ title, description, icon }) {
  return (
    <motion.div 
      className="bg-indigo-700 rounded-2xl shadow-xl p-4 text-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="flex items-center space-x-4">
        <div className="text-3xl">{icon}</div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <p className="mt-2 text-sm">{description}</p>
    </motion.div>
  );
}
