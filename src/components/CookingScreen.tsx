import { ArrowLeft, Mic, Volume2, MicOff, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Recipe {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  chef: string;
  rating: number;
  description: string;
}

interface CookingScreenProps {
  recipe: Recipe;
  onBack: () => void;
}

// Mock cooking steps data
const getCookingStepsForRecipe = (recipeId: string): string[] => {
  const stepsMap: Record<string, string[]> = {
    "1": [ // Carbonara
      "Bring a large pot of salted water to boil for the pasta",
      "Cut the pancetta into small cubes and cook in a large skillet until crispy",
      "Cook the spaghetti according to package directions until al dente",
      "While pasta cooks, whisk together eggs, grated cheese, and black pepper in a bowl",
      "Reserve 1 cup of pasta water, then drain the pasta",
      "Add hot pasta to the skillet with pancetta and toss",
      "Remove from heat and quickly stir in the egg mixture, adding pasta water as needed",
      "Serve immediately with extra cheese and black pepper"
    ],
    "2": [ // Buddha Bowl
      "Cook quinoa according to package directions and let cool",
      "Roast diced sweet potato at 400°F for 25 minutes until tender",
      "Drain and rinse chickpeas, then season and roast for 20 minutes",
      "Wash and dry spinach leaves thoroughly",
      "Slice avocado just before serving",
      "Whisk together tahini, lemon juice, and olive oil for dressing",
      "Assemble bowls with quinoa, roasted vegetables, spinach, and avocado",
      "Drizzle with tahini dressing and serve"
    ],
    "3": [ // Herb Roasted Chicken
      "Preheat oven to 425°F and pat chicken dry",
      "Stuff cavity with rosemary, thyme, and garlic cloves",
      "Rub skin with olive oil and season generously with salt and pepper",
      "Place on roasting pan with chopped carrots and potatoes around it",
      "Roast for 60-75 minutes until internal temperature reaches 165°F",
      "Let rest for 10 minutes before carving",
      "Serve with the roasted vegetables"
    ]
  };
  
  return stepsMap[recipeId] || [
    "Follow the recipe instructions step by step",
    "Take your time and enjoy the cooking process"
  ];
};

export const CookingScreen = ({ recipe, onBack }: CookingScreenProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  const cookingSteps = getCookingStepsForRecipe(recipe.id);

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleMic = () => setIsMicOn(!isMicOn);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* AI Avatar Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(/lovable-uploads/cea1f31e-7e26-49bd-ad14-307047fbb50d.png)`,
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Control Bar */}
      <div className="relative z-10 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/60 rounded-full p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>

            {/* Recipe Name */}
            <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
              <h1 className="text-white font-bold text-sm font-crimson">{recipe.title}</h1>
            </div>

            {/* Audio Controls */}
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="bg-black/50 backdrop-blur-sm text-white hover:bg-black/60 rounded-full p-2"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMic}
                className={`backdrop-blur-sm text-white hover:bg-black/60 rounded-full p-2 ${
                  isMicOn ? 'bg-primary/80' : 'bg-black/50'
                }`}
              >
                {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cooking Instructions */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4">
        <div className="max-w-md mx-auto">
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 text-white">
            <div className="text-center mb-4">
              <div className="text-xs text-white/60 font-plex-mono mb-1">
                Step {currentStep + 1} of {cookingSteps.length}
              </div>
              <div className="w-full bg-white/20 rounded-full h-1 mb-4">
                <div 
                  className="bg-primary h-1 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentStep + 1) / cookingSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <p className="text-lg leading-relaxed font-work-sans text-center mb-6">
              {cookingSteps[currentStep]}
            </p>

            <div className="flex gap-3">
              {currentStep > 0 && (
                <Button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  variant="outline"
                  className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Previous
                </Button>
              )}
              
              <Button
                onClick={onBack}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Finish Cooking!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};