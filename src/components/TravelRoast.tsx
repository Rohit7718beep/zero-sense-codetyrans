import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Plane } from "lucide-react";

const TravelRoast = () => {
  const [destination, setDestination] = useState("");
  const [roast, setRoast] = useState("");
  const [isRoasting, setIsRoasting] = useState(false);

  const roastMessages = [
    "Go on cycle to save fuel 🚴‍♂️",
    "Better go on foot, you can't afford this place 👣", 
    "Travel cancelled, your wallet fainted 💸",
    "Maybe try Google Street View instead? 🖥️",
    "Your budget says 'backyard camping' 🏕️",
    "That place is too good for you 😏",
    "Why not just stay home and pretend? 🏠",
    "Your passport is probably expired anyway 📋",
    "Travel insurance won't cover your poor life choices 📝",
    "That destination is out of your league ⭐",
    "Perhaps consider a nice vacation to your local mall? 🛍️",
    "Your savings account just laughed at you 🏦",
    "Travel agent says 'Sir, this is a Wendy's' 🍟",
    "GPS says 'Destination unreachable with your budget' 🗺️",
    "Maybe start with visiting your neighbor first? 🏘️"
  ];

  const handleRoast = () => {
    if (!destination.trim()) {
      setRoast("You can't even decide where to go? Peak indecision! 🤦‍♂️");
      return;
    }

    setIsRoasting(true);
    
    // Fake loading for dramatic effect
    setTimeout(() => {
      const randomRoast = roastMessages[Math.floor(Math.random() * roastMessages.length)];
      setRoast(`"${destination}"? ${randomRoast}`);
      setIsRoasting(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRoast();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Plane className="h-8 w-8 text-primary animate-bounce" />
          <h2 className="text-3xl font-bold text-foreground">TRAVEL COMPANION</h2>
          <MapPin className="h-8 w-8 text-primary animate-wiggle" />
        </div>
        <p className="text-muted-foreground">
          Your intelligent travel planning assistant
        </p>
      </div>

      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <label htmlFor="destination" className="text-sm font-medium text-foreground">
            Where do you want to go? (So we can manage budget)
          </label>
          <Input
            id="destination"
            placeholder="e.g., Paris, Tokyo, Mars..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onKeyPress={handleKeyPress}
            className="text-center"
          />
        </div>

        <Button 
          onClick={handleRoast}
          disabled={isRoasting}
          className="w-full bg-gradient-chaos hover:shadow-chaos transform hover:scale-105 transition-all duration-300"
          size="lg"
        >
          {isRoasting ? (
            <span className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Analyzing your poor choices...</span>
            </span>
          ) : (
            "Search 🔍"
          )}
        </Button>
      </div>

      {roast && (
        <Card className="p-6 max-w-lg mx-auto bg-destructive/5 border border-destructive/20 animate-bounce-fun">
          <div className="text-center space-y-2">
            <div className="text-4xl">🔥</div>
            <p className="text-lg font-bold text-destructive">
              {roast}
            </p>
            <p className="text-xs text-muted-foreground">
              * This app is brutally honest about your travel budget
            </p>
          </div>
        </Card>
      )}

      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground">
          Disclaimer: This app has no chill and zero travel experience
        </p>
        <p className="text-xs text-muted-foreground">
          Results are 100% biased and absolutely real
        </p>
      </div>
    </div>
  );
};

export default TravelRoast;