import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Loader2, Plane } from "lucide-react";

const FakeLoading = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Start loading immediately
  const [progress, setProgress] = useState(0);

  const loadingMessages = [
    "Planning your perfect trip... ✈️",
    "Searching for best deals... 💰",
    "Checking flight availability... 🛫",
    "Finding luxury hotels... 🏨",
    "Calculating travel time... ⏰",
    "Loading destination photos... 📸",
    "Comparing hotel prices... 🏩",
    "Booking your dream vacation... 🌴",
    "Preparing travel itinerary... 📋",
    "Finalizing your adventure... 🗺️"
  ];

  useEffect(() => {
    // Start infinite loading immediately when component mounts
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % loadingMessages.length);
    }, 3000);
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 12;
        if (newProgress >= 95) {
          return Math.random() * 20; // Reset to random low value to continue infinite loading
        }
        return Math.min(newProgress, 95);
      });
    }, 2000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      <div className="text-center space-y-4">
        <Plane className="h-16 w-16 text-primary mx-auto animate-bounce" />
        <h2 className="text-3xl font-bold text-foreground">
          Trip Planner Loading...
        </h2>
        <p className="text-muted-foreground max-w-md">
          Planning the perfect vacation just for you...
        </p>
      </div>

      <div className="w-full max-w-md space-y-4">
        <Progress value={progress} className="h-3" />
        
        <div className="text-center space-y-2">
          <p className="font-medium text-lg animate-pulse-chaos">
            {loadingMessages[currentMessage]}
          </p>
          <p className="text-sm text-muted-foreground">
            {Math.round(progress)}% complete (loading...........)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <Button 
          onClick={() => {
            setProgress(Math.random() * 100);
            setCurrentMessage(Math.floor(Math.random() * loadingMessages.length));
          }}
          variant="secondary"
        >
          Speed Up ⚡
        </Button>
        <Button 
          onClick={() => {
            setProgress(0);
            setCurrentMessage(0);
          }}
          variant="outline"
        >
          Restart Journey 🔄
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center max-w-sm">
        * wait for it's response 
        * you may have to wait for lifetime
      </p>
    </div>
  );
};

export default FakeLoading;