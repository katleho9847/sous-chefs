import { Search, UserPlus, MessageCircle, Clock, Award, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import carbonaraImg from "@/assets/carbonara-recipe.jpg";
import buddhabowlImg from "@/assets/buddha-bowl.jpg";

// Mock friends cooking activity data
const friends = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "👩‍🍳",
    dishName: "Pasta Carbonara",
    cookTime: "35min",
    ladles: 12,
    fuckups: 0,
    foodImage: carbonaraImg,
    timestamp: "2 hours ago",
    location: "Home Kitchen",
    isOnline: true
  },
  {
    id: "2", 
    name: "Mike Chen",
    avatar: "👨‍🍳",
    dishName: "Street Tacos",
    cookTime: "28min",
    ladles: 8,
    fuckups: 2,
    foodImage: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
    timestamp: "5 hours ago",
    location: "Apartment",
    isOnline: true
  },
  {
    id: "3",
    name: "Emma Wilson", 
    avatar: "👩‍🦰",
    dishName: "Chocolate Soufflé",
    cookTime: "1h 15min",
    ladles: 25,
    fuckups: 1,
    foodImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    timestamp: "Yesterday",
    location: "Emma's Kitchen",
    isOnline: false
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "👨‍🍳",
    dishName: "Buddha Bowl",
    cookTime: "45min",
    ladles: 15,
    fuckups: 0,
    foodImage: buddhabowlImg,
    timestamp: "Yesterday",
    location: "Home",
    isOnline: true
  }
];

export const FriendsScreen = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-hero-gradient text-white px-4 pt-6 pb-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6 font-crimson">Cooking Feed</h1>
          
          {/* Search and add friend */}
          <div className="flex gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              <Input 
                placeholder="Search friends..."
                className="pl-10 bg-white border-border text-foreground placeholder-muted-foreground"
              />
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
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
              <div className="text-xl font-bold font-yeseva">{friends.reduce((acc, f) => acc + f.ladles, 0)}</div>
              <div className="text-xs opacity-80 font-plex-mono">Total Ladles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Feed */}
      <div className="max-w-md mx-auto px-4 py-6 space-y-4">
        {friends.map((friend) => (
          <Card key={friend.id} className="bg-card-gradient border border-border/50 shadow-card overflow-hidden">
            {/* Friend Info Header */}
            <CardContent className="p-4 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg">{friend.avatar}</span>
                  </div>
                  {friend.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground font-crimson">{friend.name}</h4>
                  <p className="text-xs text-muted-foreground font-plex-mono">
                    {friend.timestamp} • {friend.location}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>

            {/* Food Image with Overlay Stats */}
            <div className="relative">
              <img 
                src={friend.foodImage} 
                alt={friend.dishName}
                className="w-full h-64 object-cover"
              />
              
              {/* Top overlay stats */}
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-white" />
                <span className="text-xs font-medium text-white font-plex-mono">{friend.cookTime}</span>
              </div>
              
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                <Award className="w-3 h-3 text-white" />
                <span className="text-xs font-medium text-white font-plex-mono">{friend.ladles}</span>
              </div>
              
              <div className="absolute top-12 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                <Zap className="w-3 h-3 text-white" />
                <span className="text-xs font-medium text-white font-plex-mono">{friend.fuckups}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-bold text-lg font-crimson">{friend.dishName}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};