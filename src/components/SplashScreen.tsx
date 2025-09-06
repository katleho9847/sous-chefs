import { useState, useEffect } from "react";
import { ChefHat, Utensils, Heart } from "lucide-react";
import cookingHero from "@/assets/cooking-hero.jpg";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [showGreeting, setShowGreeting] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowGreeting(true), 500);
    const timer2 = setTimeout(() => setShowSubtext(true), 1200);
    const timer3 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-hero-gradient flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background cooking animation */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={cookingHero} 
          alt="Cooking ingredients"
          className="w-full h-full object-cover animate-cooking"
        />
      </div>

      {/* Main chef hat icon */}
      <div className="relative z-10 mb-8">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce-in">
          <ChefHat className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Floating cooking icons */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <Utensils className="w-8 h-8 text-white/60" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-6 h-6 text-white/60" />
      </div>

      {/* Greeting text */}
      <div className="relative z-10 text-center px-8">
        {showGreeting && (
          <h1 className="text-4xl font-bold mb-4 animate-fade-in font-yeseva">
            Hello Rachel! 👋
          </h1>
        )}
        
        {showSubtext && (
          <p className="text-xl opacity-90 animate-fade-in font-work-sans">
            Let's cook something amazing together
          </p>
        )}
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="w-full h-full bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};