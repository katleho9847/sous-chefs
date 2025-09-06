import { useState, useEffect } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { HomeScreen } from "@/components/HomeScreen";
import { RecipesScreen } from "@/components/RecipesScreen";
import { ProfileScreen } from "@/components/ProfileScreen";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const renderScreen = () => {
    switch (activeTab) {
      case "recipes":
        return <RecipesScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
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
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
};

export default Index;
