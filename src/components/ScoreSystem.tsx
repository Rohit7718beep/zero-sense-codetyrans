import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ScoreSystem = () => {
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const getRandomScore = () => {
    const scores = [0, 1, 42, 69, 100, 420, 9999, -50, 3.14, 777, 1337];
    return scores[Math.floor(Math.random() * scores.length)];
  };

  const getScoreMessage = (score: number) => {
    const messages = [
      "Wow! You're incredible!",
      "That's... something.",
      "Better than expected (which was nothing)",
      "Are you even trying?",
      "Congratulations on your mediocrity!",
      "That score is suspiciously round...",
      "The system is definitely not rigged.",
      "Your grandmother could do better.",
      "Error 404: Skill not found",
      "That's a score, alright."
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const handleTap = () => {
    const newScore = getRandomScore();
    setLastScore(newScore);
    setScore(newScore);
    setClickCount(prev => prev + 1);
    
    // Randomly reset to 0 after showing a high score
    if (newScore > 1000 && Math.random() > 0.5) {
      setTimeout(() => {
        setScore(0);
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Totally Fair Scoring System
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <Card className="p-6 text-center bg-gradient-primary text-primary-foreground">
          <h3 className="text-2xl font-bold mb-2">Your Score</h3>
          <div className="text-6xl font-black animate-bounce-fun">
            {score}
          </div>
          <p className="text-sm opacity-80 mt-2">
            {getScoreMessage(lastScore)}
          </p>
        </Card>
        
        <Card className="p-6 text-center bg-gradient-secondary text-accent-foreground">
          <h3 className="text-2xl font-bold mb-2">Leaderboard</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>1st: You (Previous)</span>
              <span className="font-bold">{Math.max(lastScore - 100, 0)}</span>
            </div>
            <div className="flex justify-between items-center bg-destructive/20 px-2 py-1 rounded">
              <span>2nd: You (Current)</span>
              <span className="font-bold">{score}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>3rd: Also You</span>
              <span className="font-bold">0</span>
            </div>
          </div>
          <p className="text-xs opacity-60 mt-4">
            You're somehow losing to yourself
          </p>
        </Card>
      </div>
      
      <Button
        onClick={handleTap}
        className="bg-gradient-chaos hover:shadow-chaos transform hover:scale-110 transition-all duration-300 animate-pulse-chaos"
        size="lg"
      >
        Tap for Random Score!
      </Button>
      
      <div className="text-center space-y-2">
        <p className="text-muted-foreground">
          Taps: {clickCount} | High Score: {Math.max(...[score, lastScore, 0])}
        </p>
        <p className="text-xs text-muted-foreground">
          * Scores are completely meaningless and possibly negative
        </p>
      </div>
    </div>
  );
};

export default ScoreSystem;