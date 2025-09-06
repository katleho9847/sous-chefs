import { Search, UserPlus, MessageCircle, Crown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Mock friends data
const friends = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "👩‍🍳",
    status: "Cooking pasta carbonara",
    recipesShared: 23,
    isOnline: true,
    isBestFriend: true
  },
  {
    id: "2", 
    name: "Mike Chen",
    avatar: "👨‍🍳",
    status: "Just made amazing tacos! 🌮",
    recipesShared: 15,
    isOnline: true,
    isBestFriend: false
  },
  {
    id: "3",
    name: "Emma Wilson", 
    avatar: "👩‍🦰",
    status: "Trying new dessert recipe",
    recipesShared: 31,
    isOnline: false,
    isBestFriend: true
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "👨‍🍳",
    status: "Meal prep Sunday! 💪",
    recipesShared: 8,
    isOnline: true,
    isBestFriend: false
  }
];

export const FriendsScreen = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-accent text-accent-foreground px-4 pt-12 pb-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6 font-crimson">Cooking Friends</h1>
          
          {/* Search and add friend */}
          <div className="flex gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-accent-foreground/60" />
              <Input 
                placeholder="Search friends..."
                className="pl-10 bg-white/10 border-white/20 text-accent-foreground placeholder-accent-foreground/60"
              />
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white/10 border-white/20 text-accent-foreground hover:bg-white/20"
            >
              <UserPlus className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="text-xl font-bold font-yeseva">{friends.length}</div>
              <div className="text-xs opacity-80 font-plex-mono">Friends</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold font-yeseva">{friends.filter(f => f.isOnline).length}</div>
              <div className="text-xs opacity-80 font-plex-mono">Online</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold font-yeseva">{friends.reduce((acc, f) => acc + f.recipesShared, 0)}</div>
              <div className="text-xs opacity-80 font-plex-mono">Recipes Shared</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Best Friends */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 font-crimson">Best Cooking Buddies</h3>
          <div className="space-y-3">
            {friends.filter(friend => friend.isBestFriend).map((friend) => (
              <Card key={friend.id} className="bg-card-gradient border border-border/50 shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">{friend.avatar}</span>
                        </div>
                        {friend.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
                        )}
                        <Crown className="absolute -top-2 -right-2 w-4 h-4 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground font-crimson">{friend.name}</h4>
                        <p className="text-sm text-muted-foreground font-work-sans">{friend.status}</p>
                        <p className="text-xs text-primary font-plex-mono">{friend.recipesShared} recipes shared</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Friends */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 font-crimson">All Friends</h3>
          <div className="space-y-3">
            {friends.filter(friend => !friend.isBestFriend).map((friend) => (
              <Card key={friend.id} className="bg-card-gradient border border-border/50 shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <span className="text-lg">{friend.avatar}</span>
                        </div>
                        {friend.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground font-crimson">{friend.name}</h4>
                        <p className="text-sm text-muted-foreground font-work-sans">{friend.status}</p>
                        <p className="text-xs text-muted-foreground font-plex-mono">{friend.recipesShared} recipes shared</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};