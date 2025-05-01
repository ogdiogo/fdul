import { Button } from "@/components/ui/button";
import { LightbulbIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const TodaysLesson = () => {
  const [lessonStatus, setLessonStatus] = useState<'notStarted' | 'inProgress' | 'completed'>('notStarted');
  
  const handleStartLesson = () => {
    setLessonStatus('inProgress');
    
    // After 5 seconds, mark as completed
    setTimeout(() => {
      setLessonStatus('completed');
    }, 5000);
  };
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Today's Lesson</h2>
          <p className="mt-4 text-lg text-gray-600">Your daily dose of learning is ready. Just 5 minutes to improve your skills!</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-secondary">
                  <LightbulbIcon className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-bold">Effective Remote Communication</h3>
                  <p className="text-gray-500">Day 3 of 14</p>
                </div>
              </div>
              <span className="bg-green-100 text-secondary px-3 py-1 rounded-full text-sm font-medium">5 min</span>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <h4 className="font-semibold text-lg mb-2">Asking Better Questions in Virtual Meetings</h4>
              <p className="text-gray-600 mb-4">Learn how to formulate questions that drive engagement and clarity in remote team settings.</p>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className={cn(
                    "bg-primary h-2 rounded-full transition-all duration-300",
                    lessonStatus === 'inProgress' && "animate-progress",
                    lessonStatus === 'completed' && "w-full"
                  )}
                  style={{ 
                    width: lessonStatus === 'notStarted' ? '0%' : lessonStatus === 'completed' ? '100%' : undefined 
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between">
                <Button
                  onClick={handleStartLesson}
                  disabled={lessonStatus !== 'notStarted'}
                  className={cn(
                    "px-5 py-2 font-medium",
                    lessonStatus === 'completed' ? "bg-secondary hover:bg-green-600" : "bg-primary hover:bg-blue-600"
                  )}
                >
                  {lessonStatus === 'notStarted' 
                    ? 'Start Lesson' 
                    : lessonStatus === 'inProgress' 
                      ? 'In Progress...' 
                      : 'Completed!'}
                </Button>
                <Button
                  variant="outline" 
                  className="px-5 py-2 border border-gray-300 text-gray-600 rounded-md font-medium hover:bg-gray-50 transition"
                  disabled={lessonStatus === 'inProgress'}
                >
                  Skip Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaysLesson;
