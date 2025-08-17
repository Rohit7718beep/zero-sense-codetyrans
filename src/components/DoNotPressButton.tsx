import { useState } from "react";
import { Button } from "@/components/ui/button";

const DoNotPressButton = () => {
  const [pressed, setPressed] = useState(false);
  const [color, setColor] = useState("bg-destructive");
  const [message, setMessage] = useState("DO NOT PRESS");

  const colors = [
    "bg-primary", 
    "bg-accent", 
    "bg-secondary", 
    "bg-destructive",
    "bg-gradient-chaos",
    "bg-gradient-primary"
  ];

  const messages = [
    "Why did you press me?",
    "I specifically told you NOT to press!",
    "Are you even listening?",
    "Stop it! Stop pressing me!",
    "This is exactly what I didn't want!",
    "You're terrible at following instructions!",
    "DO NOT PRESS (obviously you won't listen)"
  ];

  const handlePress = () => {
    setPressed(true);
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    const newMessage = messages[Math.floor(Math.random() * messages.length)];
    setColor(newColor);
    setMessage(newMessage);
    
    setTimeout(() => {
      setPressed(false);
      setMessage("DO NOT PRESS");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        EXPLORE
      </h2>
      
      <div className="relative">
        <Button
          onClick={handlePress}
          className={`text-4xl font-bold px-12 py-8 transform transition-all duration-300 ${
            pressed ? "animate-bounce-fun" : "hover:scale-105"
          } ${color} hover:shadow-chaos`}
          size="lg"
        >
          {pressed ? message : "GET STARTED"}
        </Button>
        
        {pressed && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-bounce-fun">
            <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-playful">
              <p className="text-sm font-medium text-card-foreground whitespace-nowrap">
                😤 You did it anyway!
              </p>
            </div>
          </div>
        )}
      </div>
      
      <p className="text-muted-foreground text-center max-w-md">
        This is a simple test of your ability to follow basic instructions. 
        Spoiler alert: you're going to fail.
      </p>
    </div>
  );
};

export default DoNotPressButton;