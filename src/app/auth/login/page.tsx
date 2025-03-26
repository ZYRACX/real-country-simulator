'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logged in with:', credentials);
    // Add login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-900 to-teal-800 flex items-center justify-center p-6">
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome Back!</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={credentials.email} 
            onChange={handleChange} 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500"
            required
          />

          <Input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={credentials.password} 
            onChange={handleChange} 
            className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500"
            required
          />

          <Button 
            type="submit" 
            className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-500 transition"
          >
            🔐 Login
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <a href="/auth/register" className="text-green-500 hover:underline">Register here</a>
        </p>
      </motion.div>
    </div>
  );
}
