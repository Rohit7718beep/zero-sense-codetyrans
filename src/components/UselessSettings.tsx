import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings, Globe, Moon, Zap, Crown } from "lucide-react";

const UselessSettings = () => {
  const [uselessMode, setUselessMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("english");
  const [notifications, setNotifications] = useState(true);
  const [bananaMode, setBananaMode] = useState(false);

  const handleUselessModeToggle = () => {
    setUselessMode(!uselessMode);
    // This literally does nothing but the user doesn't know that
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    setBananaMode(value === "banana");
  };

  const showPremiumAlert = () => {
    alert("PLEASE DON'T WASTE YOUR MONEY AND IF YOU REALLY LIKE THIS THEN SAY THANKS TO OUR DEVELOPERS");
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const BananaText = ({ children, className = "" }: { children: string, className?: string }) => {
    if (bananaMode && !children.includes("Language") && !children.includes("banana")) {
      return <span className={className}>🍌🍌🍌</span>;
    }
    return <span className={className}>{children}</span>;
  };

  if (darkMode) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <Card className="p-8 bg-gray-900 border-gray-700">
          <div className="text-center space-y-4">
            <Moon className="h-16 w-16 text-blue-400 mx-auto animate-pulse" />
            <h2 className="text-2xl font-bold">Dark Mode Activated</h2>
            <p className="text-gray-400">THIS IS WHAT YOU SEE IN DARKNESS</p>
            <Button 
              onClick={handleDarkModeToggle}
              variant="outline"
              className="bg-white text-black hover:bg-gray-200"
            >
              Return to Light Mode
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 max-w-2xl mx-auto">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <Settings className="h-8 w-8 text-primary animate-spin-slow" />
          <BananaText className="text-3xl font-bold text-foreground">
            Totally Functional Settings
          </BananaText>
        </div>
        <BananaText className="text-muted-foreground">
          Customize your experience (or pretend to)
        </BananaText>
      </div>

      <div className="space-y-4">
        {/* Useless Mode */}
        <Card className="p-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <BananaText className="font-semibold">Enable Useless Mode</BananaText>
              </div>
              <BananaText className="text-sm text-muted-foreground">
                Makes the app even more pointless (if that's possible)
              </BananaText>
            </div>
            <Switch 
              checked={uselessMode} 
              onCheckedChange={handleUselessModeToggle}
            />
          </div>
          {uselessMode && (
            <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20 animate-pulse-chaos">
              <BananaText className="text-sm">🎉 Useless Mode activated! Nothing changed.</BananaText>
            </div>
          )}
        </Card>

        {/* Fake Dark Mode */}
        <Card className="p-6 relative">
          <div className="flex items-center justify-between space-x-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Moon className="h-5 w-5 text-primary" />
                <BananaText className="font-semibold">Dark Mode</BananaText>
              </div>
              <BananaText className="text-sm text-muted-foreground">
                Experience the complete darkness
              </BananaText>
            </div>
            <Switch 
              checked={darkMode} 
              onCheckedChange={handleDarkModeToggle}
            />
          </div>
        </Card>

        {/* Language Settings */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Language</h3>
            </div>
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="banana">🍌 Banana Language</SelectItem>
                <SelectItem value="confused">Confused Screaming</SelectItem>
                <SelectItem value="binary">01000010</SelectItem>
                <SelectItem value="ancient">Ancient Memes</SelectItem>
              </SelectContent>
            </Select>
            
            {language === "banana" && (
              <div className="p-3 bg-yellow-100 border border-yellow-300 rounded-lg animate-wiggle">
                <p className="text-sm">🍌 Banana banana banana banana!</p>
              </div>
            )}
            
            {language === "confused" && (
              <div className="p-3 bg-red-100 border border-red-300 rounded-lg animate-bounce-fun">
                <BananaText className="text-sm">AAAAAAHHHHHHH??? WHY??? WHAT???</BananaText>
              </div>
            )}
            
            {language === "binary" && (
              <div className="p-3 bg-gray-100 border border-gray-300 rounded-lg font-mono text-xs">
                <BananaText>01001000 01100101 01101100 01110000 00100000 01101101 01100101</BananaText>
              </div>
            )}
            
            {language === "ancient" && (
              <div className="p-3 bg-purple-100 border border-purple-300 rounded-lg">
                <BananaText className="text-sm">Such settings. Very wow. Much configure.</BananaText>
              </div>
            )}
          </div>
        </Card>

        {/* Premium Subscription */}
        <Card className="p-6 bg-gradient-primary text-white">
          <div className="text-center space-y-4">
            <Crown className="h-12 w-12 mx-auto text-yellow-300 animate-bounce" />
            <BananaText className="text-2xl font-bold">Premium Subscription</BananaText>
            <BananaText className="text-lg">Unlock absolutely nothing for just $999!</BananaText>
            <Button 
              onClick={showPremiumAlert}
              variant="secondary"
              size="lg"
              className="w-full animate-wiggle"
            >
              <BananaText>Buy Premium - $999.99</BananaText>
            </Button>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card className="p-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="space-y-1">
              <BananaText className="font-semibold">Pointless Notifications</BananaText>
              <BananaText className="text-sm text-muted-foreground">
                Get notified about absolutely nothing
              </BananaText>
            </div>
            <Switch 
              checked={notifications} 
              onCheckedChange={setNotifications}
            />
          </div>
        </Card>

        {/* Reset Button */}
        <Card className="p-6 bg-destructive/5 border border-destructive/20">
          <div className="text-center space-y-4">
            <BananaText className="font-semibold text-destructive">Danger Zone</BananaText>
            <BananaText className="text-sm text-muted-foreground">
              Reset all settings to their equally useless defaults
            </BananaText>
            <Button 
              variant="destructive" 
              onClick={() => {
                setUselessMode(false);
                setDarkMode(false);
                setLanguage("english");
                setNotifications(true);
                setBananaMode(false);
              }}
              className="animate-wiggle"
            >
              <BananaText>Reset Everything (It Won't Help)</BananaText>
            </Button>
          </div>
        </Card>
      </div>

      <div className="text-center text-xs text-muted-foreground space-y-1">
        <BananaText>* All settings are completely cosmetic</BananaText>
        <BananaText>* No actual functionality will be changed</BananaText>
        <BananaText>* This is the most honest settings page ever</BananaText>
      </div>
    </div>
  );
};

export default UselessSettings;