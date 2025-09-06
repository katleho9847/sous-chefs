import { Clock, User, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Recipe {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  chef: string;
  rating: number;
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
        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 text-white fill-white" />
          <span className="text-xs font-medium text-white font-plex-mono">{recipe.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors font-crimson">
          {recipe.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 font-work-sans">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>by {recipe.chef}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};