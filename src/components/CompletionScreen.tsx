import { Button } from "@/components/ui/button";
import carbonaraCompletion from "@/assets/carbonara-completion.jpg";
import { Instagram, Share2, Users } from "lucide-react";

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
        {/* Stats Overlay */}
        <div className="flex justify-between items-start pt-12">
          <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1">
              <img 
                src="/lovable-uploads/c0d29651-775e-4fbd-a8ca-39072b446b12.png" 
                alt="Ladle" 
                className="w-6 h-6"
              />
              <span className="text-2xl font-bold">{stats.ladles}</span>
            </div>
            <p className="text-sm opacity-80">Ladles</p>
          </div>

          <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold mb-1">{stats.fuckups}</div>
            <p className="text-sm opacity-80">Fuckups</p>
          </div>

          <div className="bg-black/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold mb-1">{stats.time}</div>
            <p className="text-sm opacity-80">Time</p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold font-crimson">
            Ready to share?
          </h1>

          {/* Sharing Options */}
          <div className="space-y-4">
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold"
              onClick={() => {
                // Mock Instagram sharing
                console.log('Sharing to Instagram');
              }}
            >
              <Instagram className="w-6 h-6 mr-3" />
              Post on Instagram
            </Button>

            <Button 
              className="w-full bg-black hover:bg-gray-900 text-white py-6 text-lg font-semibold"
              onClick={() => {
                // Mock TikTok sharing
                console.log('Sharing to TikTok');
              }}
            >
              <Share2 className="w-6 h-6 mr-3" />
              Post on TikTok
            </Button>

            <Button 
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10 py-6 text-lg font-semibold backdrop-blur-sm"
              onClick={() => {
                // Mock app sharing
                console.log('Sharing within app');
              }}
            >
              <Users className="w-6 h-6 mr-3" />
              Share in App
            </Button>
          </div>

          <Button 
            variant="ghost"
            className="text-white/70 hover:text-white"
            onClick={onComplete}
          >
            Continue Cooking
          </Button>
        </div>
      </div>
    </div>
  );
};