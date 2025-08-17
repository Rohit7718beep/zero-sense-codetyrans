import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Cloud } from "lucide-react";

const WeatherMap = () => {
  const [location, setLocation] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleLocationSubmit = () => {
    if (location.trim()) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLocationSubmit();
    }
  };

  return (
    <div className="space-y-6 p-6 max-w-2xl mx-auto">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Cloud className="h-8 w-8 text-primary animate-pulse" />
          <h2 className="text-3xl font-bold text-foreground">Weather Forecast</h2>
          <MapPin className="h-8 w-8 text-accent animate-bounce" />
        </div>
        <p className="text-muted-foreground">
          Get the most accurate weather information
        </p>
      </div>

      {/* Fake Map */}
      <Card className="p-6 bg-gradient-secondary">
        <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-chaos opacity-20"></div>
          <div className="text-white text-2xl font-bold z-10 animate-pulse">
            🗺️ Interactive Weather Map 🌍
          </div>
          <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </Card>

      <div className="space-y-4">
        <div>
          <label htmlFor="location" className="text-sm font-medium text-foreground mb-2 block">
            Enter Your Location
          </label>
          <div className="flex space-x-2">
            <Input
              id="location"
              placeholder="e.g., New York, London, Mars..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleLocationSubmit} variant="outline">
              Get Weather
            </Button>
          </div>
        </div>

        {showMessage && (
          <Card className="p-6 bg-accent/10 border border-accent/20 animate-bounce-fun">
            <div className="text-center space-y-2">
              <div className="text-4xl">☀️</div>
              <p className="text-xl font-bold text-accent">
                GO OUTSIDE AND CHECK YOURSELF :)
              </p>
              <p className="text-sm text-muted-foreground">
                The most reliable weather forecast method ever!
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WeatherMap;