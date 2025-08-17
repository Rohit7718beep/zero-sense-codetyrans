import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import DoNotPressButton from "@/components/DoNotPressButton";
import FakeLoading from "@/components/FakeLoading";
import WeatherMap from "@/components/WeatherMap";
import WeirdFeatures from "@/components/WeirdFeatures";
import TravelRoast from "@/components/TravelRoast";
import MiniGames from "@/components/MiniGames";
import UselessSoundboard from "@/components/UselessSoundboard";
import UselessSettings from "@/components/UselessSettings";
import { X } from "lucide-react";

const Index = () => {
  const [exitAttempts, setExitAttempts] = useState(0);
  const [showExitDialog, setShowExitDialog] = useState(false);

  const handleExit = () => {
    setExitAttempts(prev => prev + 1);
    setShowExitDialog(true);
    
    if (exitAttempts >= 9) {
      setShowExitDialog(false);
      alert("Fine, you can go... but I'll miss you 😢");
      // Don't actually close - this is the web!
    }
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <div className="relative p-4 bg-card/50 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-pulse-chaos">
              ZERO SENSE™
            </h1>
            <p className="text-sm text-muted-foreground">
              The most pointless app you'll ever use (and love)
            </p>
          </div>
          
          <Button
            variant="destructive"
            size="sm"
            onClick={handleExit}
            className="animate-wiggle"
          >
            <X className="h-4 w-4 mr-1" />
            Exit {exitAttempts > 0 && `(${10 - exitAttempts} more times)`}
          </Button>
        </div>
      </div>

      {/* Exit Dialog */}
      {showExitDialog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg p-6 max-w-md animate-bounce-fun">
            <h3 className="font-bold text-lg mb-2">Are you sure? 🥺</h3>
            <p className="text-muted-foreground mb-4">
              The app will miss you... Click {10 - exitAttempts} more times to actually exit.
            </p>
            <div className="flex space-x-2">
              <Button onClick={() => setShowExitDialog(false)} className="flex-1">
                Stay (Good choice!)
              </Button>
              <Button variant="outline" onClick={() => setShowExitDialog(false)} className="flex-1">
                I changed my mind
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        <Tabs defaultValue="button" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8 bg-card/50 backdrop-blur">
            <TabsTrigger value="button" className="text-xs">🔴 Button</TabsTrigger>
            <TabsTrigger value="loading" className="text-xs">🗺️ Trip Planner</TabsTrigger>
            <TabsTrigger value="weather" className="text-xs">🌤️ Weather</TabsTrigger>
            <TabsTrigger value="features" className="text-xs">🛠️ Features</TabsTrigger>
            <TabsTrigger value="travel" className="text-xs">✈️ Travel</TabsTrigger>
            <TabsTrigger value="games" className="text-xs">🎮 Games</TabsTrigger>
            <TabsTrigger value="sounds" className="text-xs">🔊 Sounds</TabsTrigger>
            <TabsTrigger value="settings" className="text-xs">⚙️ Settings</TabsTrigger>
          </TabsList>

          <div className="min-h-[500px] bg-card/30 backdrop-blur rounded-lg border border-border p-6">
            <TabsContent value="button" className="mt-0">
              <DoNotPressButton />
            </TabsContent>
            
            <TabsContent value="loading" className="mt-0">
              <FakeLoading />
            </TabsContent>
            
            <TabsContent value="weather" className="mt-0">
              <WeatherMap />
            </TabsContent>
            
            <TabsContent value="features" className="mt-0">
              <WeirdFeatures />
            </TabsContent>
            
            <TabsContent value="travel" className="mt-0">
              <TravelRoast />
            </TabsContent>
            
            <TabsContent value="games" className="mt-0">
              <MiniGames />
            </TabsContent>
            
            <TabsContent value="sounds" className="mt-0">
              <UselessSoundboard />
            </TabsContent>
            
            <TabsContent value="settings" className="mt-0">
              <UselessSettings />
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="text-center p-6 text-xs text-muted-foreground">
        <p>© 2025 ZERO SENSE ™ - Making the world more pointless, one click at a time</p>
        <p className="mt-1">No productivity was harmed in the making of this app</p>
      </div>
    </div>
  );
};

export default Index;
