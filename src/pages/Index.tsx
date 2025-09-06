import { useState, useEffect } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { HomeScreen } from "@/components/HomeScreen";
import { RecipesScreen } from "@/components/RecipesScreen";
import { ProfileScreen } from "@/components/ProfileScreen";
import { FriendsScreen } from "@/components/FriendsScreen";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const [showProfile, setShowProfile] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleProfileClose = () => {
    setShowProfile(false);
  };

  const renderScreen = () => {
    if (showProfile) {
      return <ProfileScreen onClose={handleProfileClose} />;
    }
    
    switch (activeTab) {
      case "favourites":
        return <RecipesScreen />;
      case "friends":
        return <FriendsScreen />;
      default:
        return <HomeScreen onProfileClick={handleProfileClick} />;
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
