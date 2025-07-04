'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const AnimatedCard = dynamic(() => import('@/components/AnimatedCard'), { ssr: false });

export default function RealCountrySim() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          🌍 Real Country Sim (RCS)
        </h1>

        <p className="text-lg mb-6">
          Shape Nations. Define Futures. Lead with Vision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white rounded-2xl shadow-xl p-4">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">🏛️ Dynamic Policies</h2>
              <p>Control every aspect of your nation's political landscape with smart decision-making.</p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-xl p-4">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">🌐 Explore & Expand</h2>
              <p>Discover new territories, conquer lands, and grow your empire to new heights.</p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-xl p-4">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">⚔️ Command Mighty Armies</h2>
              <p>Build and lead powerful military forces to secure your nation's future.</p>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-xl p-4">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-2">🤝 Trade & Diplomacy</h2>
              <p>Forge alliances and engage in strategic trade to boost your economy and influence.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Button asChild className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-2xl shadow-lg hover:bg-yellow-400 transition">
            <Link href={"/auth/register"}>
              🚀 Join the Game Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
