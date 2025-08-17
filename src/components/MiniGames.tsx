import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MiniGames = () => {
  const [clickCount, setClickCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRacing, setIsRacing] = useState(false);
  const [rpsChoice, setRpsChoice] = useState("");
  const [rpsResult, setRpsResult] = useState("");
  const [mazePosition, setMazePosition] = useState({ x: 0, y: 0 });
  const [moveCount, setMoveCount] = useState(0);

  // Infinite Click Race
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRacing && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev + 1); // Timer goes UP instead of down
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRacing, timeLeft]);

  const startRace = () => {
    setIsRacing(true);
    setTimeLeft(1);
    setClickCount(0);
  };

  const handleRaceClick = () => {
    setClickCount(prev => prev + 1);
  };

  const stopRace = () => {
    setIsRacing(false);
    setTimeLeft(0);
  };

  const rockPaperScissorsResults = {
    rock: [
      "I choose DYNAMITE 🧨, so I won!",
      "I choose HAMMER 🔨, I smash your rock!",
      "I choose METEORITE ☄️, bigger rock wins!",
      "I choose VOLCANO 🌋, melts your rock!"
    ],
    paper: [
      "I choose FIRE 🔥, burns your paper to ashes!",
      "I choose SHREDDER 🗃️, your paper becomes confetti!",
      "I choose WIND 💨, blows your paper away!",
      "I choose INK 🖋️, makes your paper unreadable!"
    ],
    scissors: [
      "I choose MAGNET 🧲, pulls away your metal scissors!",
      "I choose RUST 🦠, destroys your scissors!",
      "I choose SUPER GLUE 🧴, sticks your scissors together!",
      "I choose LASER 🔦, melts your scissors!"
    ]
  };

  // Rock Paper Scissors (App Always Wins)
  const playRPS = (playerChoice: string) => {
    setRpsChoice(playerChoice);
    const choiceKey = playerChoice.toLowerCase() as keyof typeof rockPaperScissorsResults;
    const possibleResults = rockPaperScissorsResults[choiceKey];
    const result = possibleResults[Math.floor(Math.random() * possibleResults.length)];
    const emoji = playerChoice === 'rock' ? '🪨' : playerChoice === 'paper' ? '📄' : '✂️';
    setRpsResult(`You chose ${playerChoice.toUpperCase()} ${emoji}! ${result}`);
  };

  // Infinite Maze
  const moveMaze = (direction: string) => {
    setMoveCount(prev => prev + 1);
    
    // Pretend to move but stay in the same relative position
    const messages = [
      "You moved... somewhere",
      "Still lost in the maze",
      "That led to another dead end",
      "You're definitely not making progress",
      "The maze laughs at your attempt"
    ];
    
    // Random position change for illusion of movement
    setMazePosition({
      x: Math.floor(Math.random() * 5),
      y: Math.floor(Math.random() * 5)
    });
  };

  return (
    <div className="space-y-8 p-6">
      <h2 className="text-3xl font-bold text-center text-foreground mb-8">
        Mini-Games That Go Nowhere
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Click Race */}
        <Card className="p-6 space-y-4 hover:shadow-playful transition-all duration-300">
          <h3 className="text-xl font-bold text-center">🏃‍♂️ Infinite Click Race</h3>
          
          <div className="text-center space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-2xl font-bold">Clicks: {clickCount}</p>
              <p className="text-lg">Time: {timeLeft}s (and counting...)</p>
            </div>
            
            {!isRacing ? (
              <Button onClick={startRace} className="bg-gradient-primary w-full">
                Start Race! (It Never Ends)
              </Button>
            ) : (
              <div className="space-y-2">
                <Button 
                  onClick={handleRaceClick} 
                  className="bg-gradient-chaos animate-pulse-chaos w-full"
                  size="lg"
                >
                  CLICK FASTER! 🚀
                </Button>
                <Button onClick={stopRace} variant="outline" size="sm">
                  Give Up (Smart Choice)
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Rock Paper Scissors */}
        <Card className="p-6 space-y-4 hover:shadow-playful transition-all duration-300">
          <h3 className="text-xl font-bold text-center">✂️ Rigged Rock Paper Scissors</h3>
          
          <div className="space-y-4">
            <div className="flex justify-center space-x-2">
              <Button 
                onClick={() => playRPS("rock")} 
                variant="outline"
                className="text-2xl hover:bg-muted"
              >
                🪨 Rock
              </Button>
              <Button 
                onClick={() => playRPS("paper")} 
                variant="outline"
                className="text-2xl hover:bg-muted"
              >
                📄 Paper
              </Button>
              <Button 
                onClick={() => playRPS("scissors")} 
                variant="outline"
                className="text-2xl hover:bg-muted"
              >
                ✂️ Scissors
              </Button>
            </div>
            
            {rpsResult && (
              <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg text-center animate-wiggle">
                <p className="font-medium">{rpsResult}</p>
                <Badge variant="destructive" className="mt-2">
                  Nice try!!!
                </Badge>
              </div>
            )}
          </div>
        </Card>

        {/* Infinite Maze */}
        <Card className="p-6 space-y-4 hover:shadow-playful transition-all duration-300 lg:col-span-2">
          <h3 className="text-xl font-bold text-center">🌀 The Infinite Maze</h3>
          
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-lg text-center">
              <p>Current Position: ({mazePosition.x}, {mazePosition.y})</p>
              <p>Moves Made: {moveCount}</p>
              <p className="text-sm text-muted-foreground">Distance to Exit: ∞</p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
              <div></div>
              <Button onClick={() => moveMaze("up")} variant="outline">
                ⬆️ Up
              </Button>
              <div></div>
              
              <Button onClick={() => moveMaze("left")} variant="outline">
                ⬅️ Left
              </Button>
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full animate-pulse-chaos"></div>
              </div>
              <Button onClick={() => moveMaze("right")} variant="outline">
                ➡️ Right
              </Button>
              
              <div></div>
              <Button onClick={() => moveMaze("down")} variant="outline">
                ⬇️ Down
              </Button>
              <div></div>
            </div>
            
            <p className="text-xs text-center text-muted-foreground">
              Fun Fact: The exit doesn't exist! Keep trying though! 🎉
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MiniGames;