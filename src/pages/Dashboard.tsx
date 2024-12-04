import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
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
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  className="justify-start"
                  onClick={() => navigate("/analysis")}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;