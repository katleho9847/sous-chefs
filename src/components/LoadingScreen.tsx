import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before completing
          return 100;
        }
        return prev + 2; // Increase by 2% each interval
      });
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-32 right-16 w-14 h-14 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-12 w-12 h-12 bg-primary rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-md mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/c0d29651-775e-4fbd-a8ca-39072b446b12.png" 
            alt="Ladle Logo" 
            className="w-32 h-32 mx-auto animate-bounce-in"
            style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))' }}
          />
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-bold text-primary mb-4 font-crimson">
          Are you ready to cook?
        </h2>
        <p className="text-muted-foreground mb-8 font-work-sans">
          Preparing your cooking experience
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-3 mb-4 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress Text */}
        <p className="text-sm text-muted-foreground font-plex-mono">
          {progress}%
        </p>
      </div>
    </div>
  );
};