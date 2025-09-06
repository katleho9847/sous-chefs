import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "./RecipeCard";
import pastaImage from "@/assets/pasta-recipe.jpg";
import buddhaBowlImage from "@/assets/buddha-bowl.jpg";
import chickenDinnerImage from "@/assets/chicken-dinner.jpg";
import { LadleIcon } from "./LadleIcon";

// Mock recipe data
const trendingRecipes = [{
  id: "1",
  title: "Creamy Mushroom Pasta",
  image: pastaImage,
  cookTime: "25 min",
  chef: "Gordon R",
  rating: 4.8,
  description: "A rich and creamy pasta dish with sautéed mushrooms and fresh herbs. Perfect for a cozy dinner."
}, {
  id: "2",
  title: "Colorful Buddha Bowl",
  image: buddhaBowlImage,
  cookTime: "15 min",
  chef: "Jamie O",
  rating: 4.9,
  description: "A nutritious and vibrant bowl packed with fresh vegetables, quinoa, and a delicious tahini dressing."
}, {
  id: "3",
  title: "Herb Roasted Chicken",
  image: chickenDinnerImage,
  cookTime: "45 min",
  chef: "Marco P",
  rating: 4.7,
  description: "Juicy roasted chicken with aromatic herbs and roasted vegetables. A perfect family dinner."
}];
const forYouRecipes = [{
  id: "4",
  title: "Mediterranean Quinoa Salad",
  image: buddhaBowlImage,
  cookTime: "20 min",
  chef: "Yotam O",
  rating: 4.6,
  description: "Fresh and healthy quinoa salad with Mediterranean flavors and herbs."
}, {
  id: "5",
  title: "Classic Margherita Pizza",
  image: pastaImage,
  cookTime: "35 min",
  chef: "Antonio C",
  rating: 4.9,
  description: "Authentic Italian pizza with fresh basil, mozzarella, and tomato sauce."
}];
const quickSuggestions = ["Pasta recipes", "Healthy bowls", "Quick dinners", "Vegetarian", "One-pot meals"];
export const HomeScreen = ({
  onProfileClick
}: {
  onProfileClick?: () => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  return <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-hero-gradient text-white px-4 pt-12 pb-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1 font-crimson">Rachel, what are we cooking?</h1>
            </div>
            
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search recipes, ingredients..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 bg-white border-border text-foreground placeholder-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Trending Recipes */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🔥</span>
            <h2 className="text-lg font-semibold text-foreground font-crimson">Trending recipes</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {trendingRecipes.map(recipe => <div key={recipe.id} className="flex-shrink-0 w-72"><RecipeCard recipe={recipe} onClick={recipe => console.log('Recipe clicked:', recipe.title)} /></div>)}
          </div>
        </div>

        {/* Recipes for You */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">👨‍🍳</span>
            <h2 className="text-lg font-semibold text-foreground font-crimson">Recipes for you</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {forYouRecipes.map(recipe => <div key={recipe.id} className="flex-shrink-0 w-72"><RecipeCard recipe={recipe} onClick={recipe => console.log('Recipe clicked:', recipe.title)} /></div>)}
          </div>
        </div>
      </div>
    </div>;
};