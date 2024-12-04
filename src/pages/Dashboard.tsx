import { useState, useRef } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
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
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => setActiveTab("dashboard")}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => setActiveTab("analysis")}
                >
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
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab} 
            defaultValue="dashboard" 
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="dashboard" className="text-lg">Dashboard</TabsTrigger>
              <TabsTrigger value="analysis" className="text-lg">Analysis</TabsTrigger>
            </TabsList>

            {/* ... keep existing code (TabsContent for dashboard and analysis) */}
            <TabsContent value="dashboard" className="mt-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-primary mb-6">Today's Tasks</h2>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-4 bg-feature-bg rounded-lg transition-all hover:shadow-md"
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

            <TabsContent value="analysis" className="mt-6 space-y-6">
              {/* Productivity Overview Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-up">
                <h2 className="text-2xl font-bold text-primary mb-6">Productivity Analysis</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Task Completion Rate */}
                  <div className="glass p-6 rounded-xl bg-gradient-to-br from-purple-50 to-white">
                    <h3 className="font-semibold mb-4 text-lg">Task Completion Rate</h3>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-primary h-3 rounded-full transition-all duration-500" 
                        style={{ width: "70%" }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-3">70% tasks completed this week</p>
                  </div>

                  {/* Productivity Score */}
                  <div className="glass p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white">
                    <h3 className="font-semibold mb-4 text-lg">Productivity Score</h3>
                    <div className="flex items-center justify-center">
                      <div className="text-5xl font-bold text-primary">8.5</div>
                      <div className="text-2xl text-gray-400 ml-1">/10</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 text-center">Based on your recent performance</p>
                  </div>

                  {/* Weekly Progress */}
                  <div className="glass p-6 rounded-xl bg-gradient-to-br from-green-50 to-white">
                    <h3 className="font-semibold mb-4 text-lg">Weekly Progress</h3>
                    <div className="flex items-center justify-center">
                      <div className="text-4xl font-bold text-green-500">+12%</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 text-center">Improvement from last week</p>
                  </div>
                </div>

                {/* Common Blockers Section */}
                <div className="mt-8 glass p-6 rounded-xl bg-gradient-to-br from-red-50 to-white">
                  <h3 className="font-semibold mb-4 text-lg">Common Blockers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                      <div className="text-red-400 font-semibold mb-2">Social Media</div>
                      <div className="text-sm text-gray-600">2.5 hours daily average</div>
                    </div>
                    <div className="p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                      <div className="text-orange-400 font-semibold mb-2">Sleep Schedule</div>
                      <div className="text-sm text-gray-600">Irregular patterns detected</div>
                    </div>
                    <div className="p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                      <div className="text-yellow-400 font-semibold mb-2">Unplanned Meetings</div>
                      <div className="text-sm text-gray-600">4 interruptions this week</div>
                    </div>
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
