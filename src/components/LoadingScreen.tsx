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
        {/* Loading Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center animate-cooking">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
              />
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-3xl font-bold text-foreground mb-4 font-crimson">
          Getting ready...
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