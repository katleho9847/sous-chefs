import { Button } from "@/components/ui/button";
import carbonaraCompletion from "@/assets/carbonara-completion.jpg";
import { Instagram, Video, Users } from "lucide-react";

interface CompletionScreenProps {
  onComplete: () => void;
}

export const CompletionScreen = ({ onComplete }: CompletionScreenProps) => {
  const stats = {
    ladles: Math.floor(Math.random() * 8) + 3, // Random 3-10
    fuckups: Math.floor(Math.random() * 3), // Random 0-2
    time: `${Math.floor(Math.random() * 20) + 25}m ${Math.floor(Math.random() * 60)}s` // Random 25-45 minutes
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
        {/* Stats Overlay - Right Side Vertical */}
        <div className="absolute top-12 right-6 space-y-4">
          <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <img 
                src="/lovable-uploads/Ladle.svg" 
                alt="Ladle" 
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold">{stats.ladles}</span>
            </div>
            <p className="text-sm opacity-80">Ladles</p>
          </div>

          <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm text-center">
            <div className="text-2xl font-bold mb-1">{stats.fuckups}</div>
            <p className="text-sm opacity-80">Fuckups</p>
          </div>

          <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm text-center">
            <div className="text-2xl font-bold mb-1">{stats.time}</div>
            <p className="text-sm opacity-80">Time</p>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-4xl font-bold font-crimson text-center">
            Ready to share?
          </h1>
        </div>

        {/* Bottom Buttons */}
        <div className="space-y-4 max-w-sm mx-auto pb-8">
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold flex items-center justify-center"
            onClick={() => {
              // Mock Instagram sharing
              console.log('Sharing to Instagram');
            }}
          >
            <Instagram className="w-8 h-8 mr-3" />
            Post on Instagram
          </Button>

          <Button 
            className="w-full bg-black hover:bg-gray-900 text-white py-6 text-lg font-semibold flex items-center justify-center"
            onClick={() => {
              // Mock TikTok sharing
              console.log('Sharing to TikTok');
            }}
          >
            <Video className="w-8 h-8 mr-3" />
            Post on TikTok
          </Button>

          <Button 
            className="w-full bg-lime-500 hover:bg-lime-600 text-black py-6 text-lg font-semibold flex items-center justify-center"
            onClick={() => {
              // Mock app sharing
              console.log('Sharing within app');
            }}
          >
            <Users className="w-8 h-8 mr-3" />
            Share in App
          </Button>
        </div>
      </div>
    </div>
  );
};