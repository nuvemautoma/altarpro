import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Snowflake component
const Snowflake = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="fixed pointer-events-none text-white opacity-80 animate-snowfall z-50"
    style={style}
  >
    ❄
  </div>
);

export const SnowfallEffect = () => {
  const [snowflakes, setSnowflakes] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes: React.CSSProperties[] = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          fontSize: `${Math.random() * 15 + 10}px`,
          opacity: Math.random() * 0.6 + 0.4,
        });
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {snowflakes.map((style, index) => (
        <Snowflake key={index} style={style} />
      ))}
    </div>
  );
};

export const ChristmasMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Jingle Bells instrumental - royalty free
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3";

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("scroll", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="auto"
      />
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 bg-christmas-red text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce-subtle"
        aria-label={isPlaying ? "Pausar música" : "Tocar música de Natal"}
      >
        {isPlaying ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>
      {!isPlaying && hasInteracted && (
        <div className="fixed bottom-16 right-4 z-50 bg-card text-foreground px-3 py-2 rounded-lg shadow-lg text-sm animate-fade-in">
          🎄 Toque para ouvir música de Natal!
        </div>
      )}
    </>
  );
};

export const ChristmasDecorations = () => {
  return (
    <>
      {/* Christmas lights at the top */}
      <div className="fixed top-0 left-0 right-0 z-30 h-8 flex justify-around items-center pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full animate-christmas-lights"
            style={{
              backgroundColor: i % 4 === 0 ? '#ef4444' : i % 4 === 1 ? '#22c55e' : i % 4 === 2 ? '#fbbf24' : '#3b82f6',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Corner decorations */}
      <div className="fixed top-8 left-4 z-30 text-4xl animate-float pointer-events-none">🎄</div>
      <div className="fixed top-8 right-4 z-30 text-4xl animate-float pointer-events-none" style={{ animationDelay: '0.5s' }}>🎅</div>
      <div className="fixed bottom-20 left-4 z-30 text-3xl animate-bounce-subtle pointer-events-none">🎁</div>
    </>
  );
};
