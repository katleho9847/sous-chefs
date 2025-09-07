import { useState, useEffect } from "react";
import cookingHero from "@/assets/cooking-hero.jpg";
import { LadleIcon } from "./LadleIcon";

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

      {/* Main ladle logo */}
      <div className="relative z-10 mb-8">
        <img 
          src="/lovable-uploads/c0d29651-775e-4fbd-a8ca-39072b446b12.png" 
          alt="Ladle Logo" 
          className="w-32 h-32 mx-auto animate-bounce-in"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
        />
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
            Let's get cooking
          </p>
        )}
      </div>
    </div>
  );
};