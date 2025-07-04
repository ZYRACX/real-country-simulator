'use client';

import React from 'react';

type AnimatedCardProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  icon: React.ReactNode;
};

export default function AnimatedCard({ title, description, icon }: AnimatedCardProps) {
  return (
    <div 
      className="bg-indigo-700 rounded-2xl shadow-xl p-4 text-white"
    >
      <div className="flex items-center space-x-4">
        <div className="text-3xl">{icon}</div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
}
