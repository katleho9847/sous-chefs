import { Clock, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Recipe {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  servings: number;
  rating: number;
  difficulty: string;
  description: string;
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: (recipe: Recipe) => void;
}

export const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  return (
    <Card 
      className="overflow-hidden shadow-card hover:shadow-floating transition-all duration-300 cursor-pointer group bg-card-gradient"
      onClick={() => onClick?.(recipe)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 text-primary fill-primary" />
          <span className="text-xs font-medium text-secondary">{recipe.rating}</span>
        </div>
        <div className="absolute top-3 left-3 bg-secondary/90 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-xs font-medium text-secondary-foreground">{recipe.difficulty}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};