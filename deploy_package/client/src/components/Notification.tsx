import { Button } from "@/components/ui/button";
import { Bell, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NotificationProps {
  onClose: () => void;
}

const Notification = ({ onClose }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay for animation
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleDismiss = () => {
    handleClose();
  };

  return (
    <div 
      className={`fixed bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 w-80 transform transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-amber-100 rounded-md p-2">
          <Bell className="h-6 w-6 text-accent" />
        </div>
        <div className="ml-3 w-0 flex-1">
          <p className="font-medium text-gray-900">Time for your daily lesson!</p>
          <p className="mt-1 text-sm text-gray-500">5 minutes of learning will keep your skills growing.</p>
          <div className="mt-2 flex space-x-3">
            <Button 
              className="bg-primary text-white text-sm px-3 py-1.5 rounded font-medium hover:bg-blue-600 transition"
              size="sm"
            >
              Start Now
            </Button>
            <Button 
              variant="outline"
              className="bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded font-medium hover:bg-gray-300 transition"
              size="sm"
              onClick={handleDismiss}
            >
              Later
            </Button>
          </div>
        </div>
        <div className="flex-shrink-0 flex">
          <button 
            onClick={handleClose}
            className="inline-flex text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
