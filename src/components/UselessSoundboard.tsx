import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, VolumeX } from "lucide-react";

const UselessSoundboard = () => {
  const [playingSound, setPlayingSound] = useState("");

  const sounds = [
    { name: "Goat Scream", emoji: "🐐", description: "AAAAAAHHHHHHH" },
    { name: "Windows Error", emoji: "💻", description: "*Error noise*" },
    { name: "Mysterious Whisper", emoji: "👻", description: "why are you here..." },
    { name: "Dial-up Internet", emoji: "📞", description: "BEEP BOOP SCREECH" },
    { name: "Microwave Beep", emoji: "📱", description: "BEEP BEEP BEEP" },
    { name: "Cat Keyboard Walk", emoji: "🐱", description: "asdkjfhaksjdhfkjash" },
    { name: "Awkward Silence", emoji: "😐", description: "..." },
    { name: "Existential Dread", emoji: "💀", description: "What's the point?" }
  ];

  const playFakeSound = (soundName: string) => {
    setPlayingSound(soundName);
    
    // Simulate sound playing for 2 seconds
    setTimeout(() => {
      setPlayingSound("");
    }, 2000);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Volume2 className="h-8 w-8 text-primary animate-bounce" />
          <h2 className="text-3xl font-bold text-foreground">
            Professional Soundboard
          </h2>
        </div>
        <p className="text-muted-foreground">
          High-quality audio experiences (Not really, your speakers are fine)
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sounds.map((sound, index) => (
          <Card 
            key={index} 
            className={`p-4 cursor-pointer hover:shadow-playful transition-all duration-300 ${
              playingSound === sound.name 
                ? "bg-gradient-primary text-primary-foreground animate-bounce-fun" 
                : "hover:scale-105"
            }`}
            onClick={() => playFakeSound(sound.name)}
          >
            <div className="text-center space-y-2">
              <div className="text-4xl">{sound.emoji}</div>
              <h3 className="font-bold text-sm">{sound.name}</h3>
              {playingSound === sound.name ? (
                <div className="space-y-1">
                  <div className="flex justify-center">
                    <VolumeX className="h-4 w-4 animate-pulse" />
                  </div>
                  <p className="text-xs animate-pulse-chaos">
                    {sound.description}
                  </p>
                </div>
              ) : (
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="w-full text-xs hover:bg-muted"
                >
                  Play
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {playingSound && (
        <div className="text-center">
          <Card className="p-4 bg-accent/10 border border-accent/20 animate-wiggle">
            <p className="font-medium">
              🔊 Now Playing: "{playingSound}"
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              (Your imagination is doing all the work)
            </p>
          </Card>
        </div>
      )}

      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground">
          * BUY NEW SPEAKERS
        </p>
        <p className="text-xs text-muted-foreground">
          * Volume slider would be pointless anyway
        </p>
        <p className="text-xs text-muted-foreground">
          * This is peak audio engineering
        </p>
      </div>
    </div>
  );
};

export default UselessSoundboard;