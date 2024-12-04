import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type TaskPriority = "urgent-important" | "urgent" | "important" | "neither";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: TaskPriority;
}

const priorityColors: Record<TaskPriority, string> = {
  "urgent-important": "text-red-500",
  "urgent": "text-orange-500",
  "important": "text-blue-500",
  "neither": "text-gray-500",
};

const priorityOrder: Record<TaskPriority, number> = {
  "urgent-important": 1,
  "urgent": 2,
  "important": 3,
  "neither": 4,
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Complete project documentation", completed: false, priority: "urgent-important" },
    { id: 2, title: "Review pull requests", completed: true, priority: "important" },
    { id: 3, title: "Team meeting at 2 PM", completed: false, priority: "neither" },
  ]);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: newTask.trim(),
          completed: false,
          priority: "neither",
        },
      ]);
      setNewTask("");
    }
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handlePriorityChange = (taskId: number, priority: TaskPriority) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, priority } : task
      )
    );
  };

  const sortedTasks = [...tasks].sort((a, b) => 
    priorityOrder[a.priority] - priorityOrder[b.priority]
  );

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
            
            {/* New Task Input */}
            <div className="flex gap-2 mb-6">
              <Input
                type="text"
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAddTask();
                  }
                }}
                className="flex-1"
              />
              <Button onClick={handleAddTask}>
                <Plus className="mr-2 h-4 w-4" />
                Add Task
              </Button>
            </div>

            {/* Tasks List */}
            <div className="space-y-4">
              {sortedTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 bg-feature-bg rounded-lg transition-all hover:shadow-md"
                >
                  <span className={task.completed ? "line-through text-gray-500" : ""}>
                    {task.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <Select
                      value={task.priority}
                      onValueChange={(value: TaskPriority) => 
                        handlePriorityChange(task.id, value)
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem 
                          value="urgent-important"
                          className="text-red-500"
                        >
                          Urgent & Important
                        </SelectItem>
                        <SelectItem 
                          value="urgent"
                          className="text-orange-500"
                        >
                          Urgent
                        </SelectItem>
                        <SelectItem 
                          value="important"
                          className="text-blue-500"
                        >
                          Important
                        </SelectItem>
                        <SelectItem 
                          value="neither"
                          className="text-gray-500"
                        >
                          Neither
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Button
                      variant={task.completed ? "outline" : "default"}
                      size="sm"
                      onClick={() => handleToggleComplete(task.id)}
                    >
                      {task.completed ? "Completed" : "Mark Complete"}
                    </Button>
                  </div>
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