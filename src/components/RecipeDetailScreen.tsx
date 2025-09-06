import { ArrowLeft, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Recipe {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  chef: string;
  rating: number;
  description: string;
}

interface Ingredient {
  name: string;
  amount: string;
}

interface RecipeDetailScreenProps {
  recipe: Recipe;
  onBack: () => void;
  onConfirmIngredients: () => void;
}

// Mock ingredients data - in a real app this would come from the recipe data
const getIngredientsForRecipe = (recipeId: string): Ingredient[] => {
  const ingredientsMap: Record<string, Ingredient[]> = {
    "1": [ // Carbonara
      { name: "Spaghetti", amount: "400g" },
      { name: "Pancetta or guanciale", amount: "150g" },
      { name: "Large eggs", amount: "4" },
      { name: "Pecorino Romano cheese", amount: "100g grated" },
      { name: "Black pepper", amount: "Freshly ground" },
      { name: "Salt", amount: "For pasta water" }
    ],
    "2": [ // Buddha Bowl
      { name: "Quinoa", amount: "1 cup" },
      { name: "Sweet potato", amount: "1 large" },
      { name: "Chickpeas", amount: "1 can" },
      { name: "Spinach", amount: "2 cups fresh" },
      { name: "Avocado", amount: "1 ripe" },
      { name: "Tahini", amount: "3 tbsp" },
      { name: "Lemon juice", amount: "2 tbsp" },
      { name: "Olive oil", amount: "2 tbsp" }
    ],
    "3": [ // Herb Roasted Chicken
      { name: "Whole chicken", amount: "1.5kg" },
      { name: "Fresh rosemary", amount: "3 sprigs" },
      { name: "Fresh thyme", amount: "4 sprigs" },
      { name: "Garlic cloves", amount: "6" },
      { name: "Carrots", amount: "4 large" },
      { name: "Potatoes", amount: "6 medium" },
      { name: "Olive oil", amount: "4 tbsp" },
      { name: "Salt and pepper", amount: "To taste" }
    ]
  };
  
  return ingredientsMap[recipeId] || [];
};

export const RecipeDetailScreen = ({ recipe, onBack, onConfirmIngredients }: RecipeDetailScreenProps) => {
  const ingredients = getIngredientsForRecipe(recipe.id);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-hero-gradient text-white px-4 pt-6 pb-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-white hover:bg-white/10 p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold font-crimson">Recipe Details</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {/* Recipe Image and Info */}
        <Card className="overflow-hidden shadow-card mb-6 bg-card-gradient">
          <div className="relative">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
              <span className="text-xs font-medium text-white font-plex-mono">★ {recipe.rating}</span>
            </div>
          </div>
          
          <CardContent className="p-4">
            <h2 className="font-bold text-2xl mb-2 text-foreground font-crimson">
              {recipe.title}
            </h2>
            <p className="text-sm text-muted-foreground mb-4 font-work-sans">
              {recipe.description}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>⏱️</span>
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <span>👨‍🍳</span>
                <span>by {recipe.chef}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ingredients List */}
        <Card className="shadow-card mb-6 bg-card-gradient">
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-4 text-foreground font-crimson flex items-center gap-2">
              <span>🛒</span>
              Ingredients
            </h3>
            
            <div className="space-y-3">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="font-work-sans text-foreground">{ingredient.name}</span>
                  <Badge variant="secondary" className="font-plex-mono">
                    {ingredient.amount}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onConfirmIngredients}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-work-sans text-base h-12"
          >
            <Check className="w-5 h-5 mr-2" />
            I have all ingredients - Let's cook!
          </Button>
          
          <Button 
            onClick={onBack}
            variant="outline"
            className="w-full font-work-sans text-base h-12"
          >
            <X className="w-5 h-5 mr-2" />
            Find another recipe
          </Button>
        </div>
      </div>
    </div>
  );
};