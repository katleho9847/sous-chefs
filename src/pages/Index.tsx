import { useState, useEffect } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { HomeScreen } from "@/components/HomeScreen";
import { RecipesScreen } from "@/components/RecipesScreen";
import { ProfileScreen } from "@/components/ProfileScreen";
import { FriendsScreen } from "@/components/FriendsScreen";
import { RecipeDetailScreen } from "@/components/RecipeDetailScreen";
import { LoadingScreen } from "@/components/LoadingScreen";
import { BottomNavigation } from "@/components/BottomNavigation";

interface Recipe {
  id: string;
  title: string;
  image: string;
  cookTime: string;
  chef: string;
  rating: number;
  description: string;
}

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [showProfile, setShowProfile] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showCooking, setShowCooking] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleProfileClose = () => {
    setShowProfile(false);
  };

  const handleRecipeClick = (recipe: Recipe) => {
    console.log('handleRecipeClick called with:', recipe);
    setSelectedRecipe(recipe);
    console.log('selectedRecipe state should now be:', recipe);
  };

  const handleRecipeBack = () => {
    setSelectedRecipe(null);
  };

  const handleConfirmIngredients = () => {
    setShowCooking(true);
  };

  const handleLoadingComplete = () => {
    setShowCooking(false);
    setSelectedRecipe(null);
    setActiveTab("home");
  };

  const renderScreen = () => {
    console.log('renderScreen called, selectedRecipe:', selectedRecipe);
    
    if (selectedRecipe && showCooking) {
      return (
        <LoadingScreen 
          onComplete={handleLoadingComplete}
        />
      );
    }
    
    if (selectedRecipe) {
      console.log('Rendering RecipeDetailScreen for:', selectedRecipe.title);
      return (
        <RecipeDetailScreen 
          recipe={selectedRecipe}
          onBack={handleRecipeBack}
          onConfirmIngredients={handleConfirmIngredients}
        />
      );
    }
    
    if (showProfile) {
      return <ProfileScreen onClose={handleProfileClose} />;
    }
    
    switch (activeTab) {
      case "favourites":
        return <RecipesScreen onRecipeClick={handleRecipeClick} />;
      case "friends":
        return <FriendsScreen />;
      default:
        return <HomeScreen onProfileClick={handleProfileClick} onRecipeClick={handleRecipeClick} />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="animate-slide-up">
        {renderScreen()}
      </div>
      {!selectedRecipe && !showCooking && (
        <BottomNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      )}
    </div>
  );
};

export default Index;
