'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registered:', formData);
    // Add registration logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-pink-800 flex items-center justify-center p-6">
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Create Your Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={formData.username} 
            onChange={handleChange} 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-purple-500"
            required
          />

          <Input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-purple-500"
            required
          />

          <Input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-purple-500"
            required
          />

          <Button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-purple-500 transition"
          >
            🚀 Register Now
          </Button>
          <p>
            Already have an account?
            <a href="/auth/login" className="text-purple-600 hover:underline"> Login</a>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
