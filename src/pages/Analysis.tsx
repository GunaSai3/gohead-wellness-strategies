const Analysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-feature-bg">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="pt-20">
          <div className="mt-6 space-y-6">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;