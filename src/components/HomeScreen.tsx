import { useState } from "react";
import { Search, Sparkles, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "./RecipeCard";
import pastaImage from "@/assets/pasta-recipe.jpg";
import buddhaBowlImage from "@/assets/buddha-bowl.jpg";
import chickenDinnerImage from "@/assets/chicken-dinner.jpg";
import { LadleIcon } from "./LadleIcon";

// Mock recipe data
const featuredRecipes = [
  {
    id: "1",
    title: "Creamy Mushroom Pasta",
    image: pastaImage,
    cookTime: "25 min",
    servings: 4,
    rating: 4.8,
    difficulty: "Easy",
    description: "A rich and creamy pasta dish with sautéed mushrooms and fresh herbs. Perfect for a cozy dinner."
  },
  {
    id: "2",
    title: "Colorful Buddha Bowl",
    image: buddhaBowlImage,
    cookTime: "15 min",
    servings: 2,
    rating: 4.9,
    difficulty: "Easy",
    description: "A nutritious and vibrant bowl packed with fresh vegetables, quinoa, and a delicious tahini dressing."
  },
  {
    id: "3",
    title: "Herb Roasted Chicken",
    image: chickenDinnerImage,
    cookTime: "45 min",
    servings: 6,
    rating: 4.7,
    difficulty: "Medium",
    description: "Juicy roasted chicken with aromatic herbs and roasted vegetables. A perfect family dinner."
  }
];

const quickSuggestions = [
  "Pasta recipes", "Healthy bowls", "Quick dinners", "Vegetarian", "One-pot meals"
];

export const HomeScreen = ({ onProfileClick }: { onProfileClick?: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-hero-gradient text-white px-4 pt-12 pb-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1 font-crimson">Good evening, Rachel! 🌅</h1>
              <p className="text-white/80 font-work-sans">What shall we cook today?</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <LadleIcon size={24} className="text-white" />
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-white/20 p-2"
                onClick={onProfileClick}
              >
                <span className="text-2xl">👩‍🍳</span>
              </Button>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
            <Input 
              placeholder="Search recipes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/60 backdrop-blur-sm"
            />
          </div>

          {/* Quick suggestions */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {quickSuggestions.map((suggestion) => (
              <Button 
                key={suggestion}
                variant="outline" 
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 whitespace-nowrap"
                onClick={() => setSearchQuery(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* AI Suggestions */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground font-crimson">AI Recommendations</h2>
          </div>
          <div className="bg-accent/50 rounded-xl p-4 border border-primary/10">
            <p className="text-sm text-foreground mb-3 font-work-sans">
              Based on your preferences, I'd recommend trying something light and fresh for tonight!
            </p>
            <Button size="sm" className="bg-primary hover:bg-primary-dark text-primary-foreground font-plex-mono">
              Get Recipe Suggestion
            </Button>
          </div>
        </div>

        {/* Featured Recipes */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-secondary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground font-crimson">Featured Recipes</h2>
          </div>
          <div className="grid gap-4">
            {featuredRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onClick={(recipe) => console.log('Recipe clicked:', recipe.title)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};