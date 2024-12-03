import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const [tasks] = useState([
    { id: 1, title: "Complete project documentation", completed: false },
    { id: 2, title: "Review pull requests", completed: true },
    { id: 3, title: "Team meeting at 2 PM", completed: false },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-feature-bg">
      <div className="container mx-auto px-4">
        {/* Hamburger Menu */}
        <div className="fixed top-4 left-4 z-50">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" className="justify-start">
                  Dashboard
                </Button>
                <Button variant="ghost" className="justify-start">
                  Analysis
                </Button>
                <Button variant="ghost" className="justify-start">
                  Settings
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Main Content */}
        <div className="pt-20">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="mt-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">Today's Tasks</h2>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 bg-feature-bg rounded-lg"
                    >
                      <span className={task.completed ? "line-through text-gray-500" : ""}>
                        {task.title}
                      </span>
                      <Button
                        variant={task.completed ? "outline" : "default"}
                        size="sm"
                      >
                        {task.completed ? "Completed" : "Mark Complete"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="mt-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">Productivity Analysis</h2>
                <div className="space-y-6">
                  <div className="bg-feature-bg rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Task Completion Rate</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">70% tasks completed this week</p>
                  </div>

                  <div className="bg-feature-bg rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Productivity Score</h3>
                    <div className="text-4xl font-bold text-primary">8.5/10</div>
                    <p className="text-sm text-gray-600 mt-2">Based on your recent performance</p>
                  </div>

                  <div className="bg-feature-bg rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Common Blockers</h3>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Social media distractions</li>
                      <li>Irregular sleep schedule</li>
                      <li>Unplanned meetings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;