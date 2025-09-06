import { Search, Filter, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "./RecipeCard";
import pastaImage from "@/assets/pasta-recipe.jpg";
import buddhaBowlImage from "@/assets/buddha-bowl.jpg";
import chickenDinnerImage from "@/assets/chicken-dinner.jpg";

// Mock recipe data - expanded list
const allRecipes = [
  {
    id: "1",
    title: "Creamy Mushroom Pasta",
    image: pastaImage,
    cookTime: "25 min",
    servings: 4,
    rating: 4.8,
    difficulty: "Easy",
    description: "A rich and creamy pasta dish with sautéed mushrooms and fresh herbs."
  },
  {
    id: "2",
    title: "Colorful Buddha Bowl",
    image: buddhaBowlImage,
    cookTime: "15 min",
    servings: 2,
    rating: 4.9,
    difficulty: "Easy",
    description: "A nutritious bowl packed with fresh vegetables and quinoa."
  },
  {
    id: "3",
    title: "Herb Roasted Chicken",
    image: chickenDinnerImage,
    cookTime: "45 min",
    servings: 6,
    rating: 4.7,
    difficulty: "Medium",
    description: "Juicy roasted chicken with aromatic herbs and vegetables."
  },
];

export const RecipesScreen = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-secondary text-secondary-foreground px-4 pt-12 pb-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6 font-poppins">My Recipe Collection</h1>
          
          {/* Search and filter */}
          <div className="flex gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-foreground/60" />
              <Input 
                placeholder="Search your recipes..."
                className="pl-10 bg-white/10 border-white/20 text-secondary-foreground placeholder-secondary-foreground/60"
              />
            </div>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white/10 border-white/20 text-secondary-foreground hover:bg-white/20"
            >
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["All", "Quick", "Healthy", "Comfort", "Desserts"].map((filter) => (
              <Button 
                key={filter}
                variant={filter === "All" ? "default" : "outline"}
                size="sm"
                className={filter === "All" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-white/10 border-white/20 text-secondary-foreground hover:bg-white/20"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-card-gradient rounded-xl p-4 text-center border border-border/50">
            <div className="text-2xl font-bold text-primary mb-1 font-poppins">{allRecipes.length}</div>
            <div className="text-xs text-muted-foreground font-oswald">Saved Recipes</div>
          </div>
          <div className="bg-card-gradient rounded-xl p-4 text-center border border-border/50">
            <div className="text-2xl font-bold text-secondary mb-1 font-poppins">12</div>
            <div className="text-xs text-muted-foreground font-oswald">Cooked This Week</div>
          </div>
          <div className="bg-card-gradient rounded-xl p-4 text-center border border-border/50">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Clock className="w-4 h-4 text-primary" />
              <div className="text-lg font-bold text-foreground font-poppins">28m</div>
            </div>
            <div className="text-xs text-muted-foreground font-oswald">Avg Cook Time</div>
          </div>
        </div>

        {/* Recipe List */}
        <div className="space-y-4">
          {allRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onClick={(recipe) => console.log('Recipe clicked:', recipe.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};