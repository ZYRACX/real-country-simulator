'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Gem, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GameLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const router = useRouter();

    // Function to handle navigation, using the useRouter hook.
    const navigateTo = (route: string) => {
      router.push(route);
  };  

    return (
          <div className="min-h-screen bg-gray-50 p-4">
        <header className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 text-2xl font-bold text-blue-900">
            <Gem className="text-blue-500" />
            <span>Business Tycoon</span>
          </div>
          <div className="space-x-2">
            <Button variant="secondary" className="bg-purple-500 text-white">
              <Shield className="mr-1" size={16} /> Admin Panel
            </Button>
            <Button variant="destructive">Sign Out</Button>
          </div>
        </header>
  
        <div className="grid gap-4">
          <Card className="w-40 text-center">
            <CardContent className="p-4 text-xl font-semibold flex items-center justify-center gap-2">
              <span role="img" aria-label="money-bag">💰</span> $8913.00
            </CardContent>
          </Card>
          <Tabs defaultValue="game">
            <TabsList className="flex space-x-4 bg-white rounded-lg shadow-sm">
              <TabsTrigger value="game" className="px-4 py-2" onClick={() => navigateTo('/game')}>Overview</TabsTrigger>
              <TabsTrigger value="inventory" className="px-4 py-2" onClick={() => navigateTo('/game/inventory')}>Inventory</TabsTrigger>
              <TabsTrigger value="marketplace" className="px-4 py-2" onClick={() => navigateTo('/game/marketplace')}>Marketplace</TabsTrigger>
            </TabsList>
          </Tabs>
          {children}
          </div>
          </div>
          
    );
  }