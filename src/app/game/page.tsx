import { getServerSession, authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  Shield,
  Gem,
  Pickaxe,
  Currency,
  Box,
  GlobeIcon,
  Fish,
  Text,
} from "lucide-react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ActivityItem from "@/components/ActivityItem";
import GlobalChat from "@/components/GlobalChat"; // You will need to implement this component

export default async function Overview() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* LEFT COLUMN */}
      <div>
        {/* Status Section */}
        <div id="section-1">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Shield /> Status
              </h2>
              <p className="text-gray-600 mt-2">
                <Gem className="inline-block mr-1" /> Level 10 <br />
                <Gem className="inline-block mr-1" /> Experience 1000/2000 <br />
                <Currency className="inline-block mr-1" /> Balance 1000 Dollars <br />
                <Box className="inline-block mr-1" /> Inventory 50/100 <br />
              </p>
              <div className="flex justify-end mt-4">
                <Button className="bg-blue-500 text-white">Show full Status</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activities Section */}
        <div id="section-2" className="mt-4">
          <Card className="grid grid-cols-2">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <GlobeIcon /> Activities
              </h2>

              <ActivityItem
                icon={<Pickaxe />}
                tooltip={<>
                  Upgrade your pickaxe to mine more efficiently! <br />
                  Requirements to upgrade: <br />
                  - Level 10 <br />
                  - 500 Dollars <br />
                  - 10 Iron <br />
                  - 10 Wood <br />
                  <Button>Upgrade</Button>
                </>}
                label="Start Mining"
              />

              <ActivityItem
                icon={<Fish />}
                tooltip={<>
                  Upgrade this for more efficient Fishing! <br />
                  Requirements to upgrade: <br />
                  - Level 12 <br />
                  - 300 Dollars <br />
                  - 10 Iron <br />
                  - 10 Wood <br />
                  <Button>Upgrade</Button>
                </>}
                label="Start Fishing"
              />

              <ActivityItem
                icon={<GlobeIcon />}
                tooltip={<>
                  Upgrade your pickaxe to mine more efficiently! <br />
                  Requirements to upgrade: <br />
                  - Level 10 <br />
                  - 500 Dollars <br />
                  - 10 Iron <br />
                  - 10 Wood <br />
                  <Button>Upgrade</Button>
                </>}
                label="Start Exploring"
              />
            </CardContent>

            <CardContent className="p-4 pt-11">
              {Array(3).fill(0).map((_, index) => (
                <ActivityItem
                  key={index}
                  icon={<Pickaxe />}
                  tooltip="Coming soon..."
                  label="Coming Soon"
                  disabled
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CENTER COLUMN */}
      <div>
        <Card className='pl-6 pt-4 pb-2'>
          <h2 className="text-xl font-bold flex items-center ">
            <Box /> Inventory
          </h2>
          <ul className='list-disc'>
            <li>Iron - 100</li>
            <li>Copper - 2000</li>
            <li>Stone - 1000000</li>
            <li>Silver - 1300</li>
            <li>Gold - 534</li>
            <li>Uranium - 57</li>
          </ul>
        </Card>
        <Card className='p-2 mt-3'>
          <h2 className="text-xl font-bold flex items-center ">
            <Box /> Tasks
          </h2>

          <ScrollArea.Root className="w-full h-64 overflow-hidden rounded-md border">
            <ScrollArea.Viewport className="h-full w-full p-2">
              {["Do mining 10 times", "Do exploring 10 times", "Do Fishing 10 times", "Craft any 10 items"].map(task => (
                <Card key={task} className="mb-2">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">{task}</h3>
                  </CardContent>
                </Card>
              ))}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              orientation="vertical"
              className="flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out hover:bg-gray-200"
            >
              <ScrollArea.Thumb className="flex-1 rounded-full bg-gray-400" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Card>
      </div>

      {/* RIGHT COLUMN */}
      <div>
        <Card className="p-4">
          <CardContent>
            <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
              <Text /> Global Chat
            </h2>
            <GlobalChat /> {/* This is a component you need to build */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

