import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function App() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize No button position to center-right
  useEffect(() => {
    if (containerRef.current && noButtonRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const button = noButtonRef.current.getBoundingClientRect();
      setNoButtonPosition({
        x: container.width / 2 + 60,
        y: container.height / 2 - button.height / 2,
      });
    }
  }, []);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe bounds with padding
    const padding = 20;
    const maxX = container.width - button.width - padding;
    const maxY = container.height - button.height - padding;

    // Generate random position within bounds
    const newX = Math.random() * maxX + padding;
    const newY = Math.random() * maxY + padding;

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setAnswered(true);
  };

  if (answered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50 p-4">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
          <div className="space-y-4">
            <div className="flex justify-center gap-2">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
              <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse delay-100" />
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse delay-200" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-rose-600 tracking-tight">
              Good choice
            </h1>
            <p className="text-xl md:text-2xl text-pink-600 font-medium">
              I knew you'd say yes! 💕
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200 bg-white">
            <img
              src="/assets/generated/good-choice-meme.dim_900x600.png"
              alt="Good choice meme"
              className="w-full h-auto"
            />
          </div>

          <div className="flex justify-center gap-2 pt-4">
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
          </div>
        </div>

        <footer className="mt-12 text-center text-sm text-pink-400">
          <p>
            Built with <Heart className="inline w-4 h-4 fill-rose-400 text-rose-400" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-500 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <p className="mt-1">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-rose-50 p-4 overflow-hidden">
      <div className="max-w-3xl w-full text-center space-y-12 animate-in fade-in duration-500">
        <div className="space-y-6">
          <div className="flex justify-center gap-3">
            <Heart className="w-12 h-12 text-rose-400 fill-rose-400 animate-bounce" />
            <Heart className="w-16 h-16 text-pink-500 fill-pink-500 animate-bounce delay-100" />
            <Heart className="w-12 h-12 text-rose-400 fill-rose-400 animate-bounce delay-200" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-rose-600 tracking-tight leading-tight">
            Will you be my Valentine?
          </h1>

          <p className="text-lg md:text-xl text-pink-500 font-medium max-w-xl mx-auto">
            I've been thinking about this for a while... 💝
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative h-64 md:h-80 w-full flex items-center justify-center"
        >
          {/* Yes Button - Static position */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-32">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-2xl md:text-3xl px-12 py-8 rounded-full shadow-2xl hover:shadow-pink-300 transition-all duration-300 hover:scale-110 border-4 border-white"
            >
              Yes! 💕
            </Button>
          </div>

          {/* No Button - Dynamic position with evasive behavior */}
          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onTouchStart={(e) => {
              e.preventDefault();
              moveNoButton();
            }}
            onPointerEnter={moveNoButton}
            style={{
              position: 'absolute',
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: 'all 0.3s ease-out',
            }}
            className="bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 font-bold text-2xl md:text-3xl px-12 py-8 rounded-full shadow-xl border-4 border-white cursor-pointer touch-none"
          >
            No
          </button>
        </div>

        <div className="flex justify-center gap-2 opacity-50">
          <Heart className="w-5 h-5 text-pink-300 fill-pink-300" />
          <Heart className="w-5 h-5 text-rose-300 fill-rose-300" />
          <Heart className="w-5 h-5 text-pink-300 fill-pink-300" />
        </div>
      </div>

      <footer className="mt-12 text-center text-sm text-pink-400">
        <p>
          Built with <Heart className="inline w-4 h-4 fill-rose-400 text-rose-400" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== 'undefined' ? window.location.hostname : 'valentine-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-500 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
        <p className="mt-1">© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
