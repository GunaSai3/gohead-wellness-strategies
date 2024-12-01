import { Activity, Brain, List, Target } from "lucide-react";

const features = [
  {
    icon: List,
    title: "Priority List",
    description: "Organize tasks effectively with smart priority management",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "Focus on maintaining mental health while achieving goals",
  },
  {
    icon: Target,
    title: "Personalized Motivation",
    description: "Get tailored motivation based on your personal goals",
  },
  {
    icon: Activity,
    title: "Data Driven Strategies",
    description: "Make informed decisions with data-backed insights",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-feature-bg">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-up">
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-8">
            GoAhead
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empower your journey with smart tools for better productivity and mental wellness
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-feature-bg p-3 rounded-lg w-fit mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;