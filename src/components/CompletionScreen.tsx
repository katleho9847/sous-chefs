import { Button } from "@/components/ui/button";
import carbonaraCompletion from "@/assets/carbonara-completion.jpg";
import { Instagram } from "lucide-react";

interface CompletionScreenProps {
  onComplete: () => void;
}

export const CompletionScreen = ({ onComplete }: CompletionScreenProps) => {
  const stats = {
    ladles: Math.floor(Math.random() * 8) + 3, // Random 3-10
    fuckups: Math.floor(Math.random() * 3), // Random 0-2
    time: `${Math.floor(Math.random() * 20) + 25}m` // Random 25-45 minutes
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${carbonaraCompletion})`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-6 text-white">
        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <h1 className="text-4xl font-bold font-crimson text-center">
            Ready to share?
          </h1>

          {/* Stats Below Title - Right Aligned to Buttons */}
          <div className="w-80 flex flex-col items-end space-y-3">
            <div className="bg-black/50 rounded-lg p-3 backdrop-blur-sm text-center w-20 h-16 flex flex-col justify-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <img 
                  src="/lovable-uploads/Ladle.svg" 
                  alt="Ladle" 
                  className="w-5 h-5"
                />
                <span className="text-lg font-bold">{stats.ladles}</span>
              </div>
              <p className="text-xs opacity-80">Ladles</p>
            </div>

            <div className="bg-black/50 rounded-lg p-3 backdrop-blur-sm text-center w-20 h-16 flex flex-col justify-center">
              <div className="text-lg font-bold mb-1">{stats.fuckups}</div>
              <p className="text-xs opacity-80">F*ups</p>
            </div>

            <div className="bg-black/50 rounded-lg p-3 backdrop-blur-sm text-center w-20 h-16 flex flex-col justify-center">
              <div className="text-lg font-bold mb-1">{stats.time}</div>
              <p className="text-xs opacity-80">Time</p>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="space-y-4 w-80 mx-auto pb-8">
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold flex items-center justify-center"
            onClick={() => {
              // Mock Instagram sharing
              console.log('Sharing to Instagram');
            }}
          >
            <Instagram className="h-8 mr-3" />
            Post on Instagram
          </Button>

          <Button 
            className="w-full bg-black hover:bg-gray-900 text-white py-6 text-lg font-semibold flex items-center justify-center"
            onClick={() => {
              // Mock TikTok sharing
              console.log('Sharing to TikTok');
            }}
          >
            <img 
              src="/lovable-uploads/d30a58d3-1b58-4826-b669-440b11117f44.png" 
              alt="TikTok" 
              className="h-8 mr-3 object-contain"
            />
            Post on TikTok
          </Button>

          <Button 
            className="w-full bg-white hover:bg-gray-100 text-lime-500 py-6 text-lg font-semibold flex items-center justify-center"
            onClick={() => {
              // Mock app sharing
              console.log('Sharing within app');
            }}
          >
            <img 
              src="/lovable-uploads/Ladle.svg" 
              alt="Ladle" 
              className="h-8 mr-3 object-contain"
            />
            Share on Ladle
          </Button>
        </div>
      </div>
    </div>
  );
};