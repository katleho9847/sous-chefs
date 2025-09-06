import { Settings, Heart, Trophy, Clock, ChefHat, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ProfileScreen = () => {
  const achievements = [
    { icon: ChefHat, title: "Master Chef", description: "Cooked 50+ recipes", earned: true },
    { icon: Heart, title: "Healthy Eater", description: "Made 20 healthy meals", earned: true },
    { icon: Clock, title: "Speed Cook", description: "5 meals under 15 mins", earned: false },
    { icon: Trophy, title: "Recipe Master", description: "Created 10 recipes", earned: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-warm-gradient text-white px-4 pt-12 pb-8">
        <div className="max-w-md mx-auto text-center">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl">👩‍🍳</span>
            </div>
            <Button 
              size="sm" 
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary hover:bg-primary-dark p-0"
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>
          
          <h1 className="text-2xl font-bold mb-2 font-yeseva">Rachel Thompson</h1>
          <p className="text-white/80 mb-4 font-work-sans">Cooking enthusiast since 2024</p>
          
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-xl font-bold font-yeseva">47</div>
              <div className="text-xs text-white/80 font-plex-mono">Recipes Cooked</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold font-yeseva">12</div>
              <div className="text-xs text-white/80 font-plex-mono">Favorites</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold font-yeseva">3</div>
              <div className="text-xs text-white/80 font-plex-mono">Created</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Cooking Streak */}
        <Card className="bg-card-gradient border border-border/50 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground font-crimson">Cooking Streak 🔥</h3>
              <span className="text-2xl font-bold text-primary font-yeseva">7 days</span>
            </div>
            <div className="flex gap-1">
              {[1,2,3,4,5,6,7].map((day) => (
                <div 
                  key={day}
                  className="flex-1 h-2 bg-primary rounded-full"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2 font-work-sans">
              Keep it up! You're on fire this week! 🎉
            </p>
          </CardContent>
        </Card>

        {/* Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 font-crimson">Achievements</h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={achievement.title}
                  className={`border border-border/50 ${
                    achievement.earned 
                      ? 'bg-primary/5 border-primary/20' 
                      : 'bg-card-gradient opacity-60'
                  }`}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                      achievement.earned 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className={`font-medium text-sm mb-1 font-plex-mono ${
                      achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-work-sans">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Settings */}
        <Card className="bg-card-gradient border border-border/50 shadow-card">
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-4 font-crimson">Settings</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-3" />
                App Preferences
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Heart className="w-4 h-4 mr-3" />
                Dietary Preferences
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <ChefHat className="w-4 h-4 mr-3" />
                Cooking Skills Level
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};