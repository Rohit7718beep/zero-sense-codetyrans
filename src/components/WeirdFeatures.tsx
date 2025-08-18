import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calculator, Flashlight, Volume2, CloudRain } from "lucide-react";

const WeirdFeatures = () => {
  const [calcInput, setCalcInput] = useState("");
  const [calcResult, setCalcResult] = useState("");
  const [isFlashlight, setIsFlashlight] = useState(false);
  const [clapResult, setClapResult] = useState("");
  const [weatherResult, setWeatherResult] = useState("");

  const handleCalculate = () => {
    setCalcResult("DON'T YOU EVEN KNOW SIMPLE MATHEMATICS?? GO ASK YOUR TEACHER");
  };

  const toggleFlashlight = () => {
    setIsFlashlight(!isFlashlight);
  };

  const detectClap = () => {
    const responses = [
      "That wasn't a clap", "Still not a clap", "Nope, definitely not a clap",
      "Are you sure you know what clapping is?", "That sounded like disappointment",
      "Error: Clap not found", "Maybe try actual clapping?", "That was... something else"
    ];
    setClapResult(responses[Math.floor(Math.random() * responses.length)]);
  };

  const checkWeather = () => {
    const responses = [
      // "It's raining spaghetti somewhere in the world 🍝",
      // "Currently snowing in your neighbor's imagination ❄️",
      // "Partly cloudy with a chance of confusion 🌤️",
      // "Temperature: Warm enough for regret 🌡️",
      // "Weather forecast: Definitely weather-related 🌪️",
      // "It's Tuesday somewhere (probably) 📅",
      // "The weather is... weathering ⛈️",
      // "Forecast: 100% chance of existing 🌈"
      "I TOLD YOU LAST TIME THAT GO AND CHECK OUTSIDE 😊😁"
    ];
    setWeatherResult(responses[Math.floor(Math.random() * responses.length)]);
  };

  return (
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-bold text-center text-foreground mb-8">
        ESSENTIAL FEATURES
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Useless Calculator */}
        <Card className="p-6 space-y-4 hover:shadow-playful transition-all duration-300">
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary animate-spin-slow" />
            <h3 className="text-xl font-bold">Calculator</h3>
          </div>
          
          <div className="space-y-3">
            <Input
              placeholder="Type any math problem..."
              value={calcInput}
              onChange={(e) => setCalcInput(e.target.value)}
              className="font-mono"
            />
            <Button onClick={handleCalculate} variant="outline" className="w-full">
              Calculate
            </Button>
            {calcResult && (
              <div className="bg-muted p-3 rounded-lg text-center animate-bounce-fun">
                <p className="text-lg font-bold">{calcInput} = {calcResult}</p>
              </div>
            )}
          </div>
        </Card>

        {/* Fake Flashlight */}
        <Card className={`p-6 space-y-4 transition-all duration-300 ${
          isFlashlight ? "fixed inset-0 bg-white z-50 flex flex-col items-center justify-center" : "hover:shadow-playful"
        }`}>
          <div className="flex items-center space-x-2">
            <Flashlight className={`h-6 w-6 ${isFlashlight ? "text-yellow-400 animate-pulse" : "text-primary"}`} />
            <h3 className="text-xl font-bold text-black">Flashlight Mode</h3>
          </div>
          
          <Button 
            onClick={toggleFlashlight} 
            variant={isFlashlight ? "destructive" : "outline"}
            className="w-full"
          >
            {isFlashlight ? "Turn Off (Please)" : "Turn On Flashlight"}
          </Button>
          
          {isFlashlight && (
            <p className="text-center text-sm animate-wiggle text-black">
                I AM NOT GONNA TURN IT ON ✨
            </p>
          )}
        </Card>

        {/* Clap Detector */}
        <Card className="p-6 space-y-4 hover:shadow-playful transition-all duration-300">
          <div className="flex items-center space-x-2">
            <Volume2 className="h-6 w-6 text-primary animate-bounce" />
            <h3 className="text-xl font-bold">Clap Detector</h3>
          </div>
          
          <Button onClick={detectClap} variant="outline" className="w-full">
            👏 Listen for Clap
          </Button>
          
          {clapResult && (
            <div className="bg-destructive/10 border border-destructive/20 p-3 rounded-lg text-center animate-wiggle">
              <p className="font-medium">{clapResult}</p>
            </div>
          )}
        </Card>

        {/* Weather Checker */}
        <Card className="p-6 space-y-4 hover:shadow-playful transition-all duration-300">
          <div className="flex items-center space-x-2">
            <CloudRain className="h-6 w-6 text-primary animate-pulse-chaos" />
            <h3 className="text-xl font-bold">Weather Checker</h3>
          </div>
          
          <Button onClick={checkWeather} variant="outline" className="w-full">
            Check Weather 
          </Button>
          
          {weatherResult && (
            <div className="bg-accent/10 border border-accent/20 p-3 rounded-lg text-center animate-bounce-fun">
              <p className="font-medium">{weatherResult}</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default WeirdFeatures;
