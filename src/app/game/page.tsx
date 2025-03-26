import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, LogOut, Gem, Pickaxe } from "lucide-react";

export default function Overview() {
  return (
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Pickaxe /> Mining System
            </h2>
            <p className="text-gray-600 mt-2">
              Mine 100 resources every 10 minutes. Rarer resources have a lower chance of being found.
            </p>
            <div className="flex justify-end mt-4">
              <Button className="bg-blue-500 text-white">Mine 100x</Button>
            </div>
          </CardContent>
        </Card>

  );
}
