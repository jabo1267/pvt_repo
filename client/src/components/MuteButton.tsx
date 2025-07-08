import { useState, useEffect, useRef } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { siteData } from '@/data/siteData';

interface MuteButtonProps {}

export default function MuteButton({}: MuteButtonProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Handle audio load
    const handleAudioLoad = () => {
      setAudioLoaded(true);
      // Try to autoplay when audio loads
      if (!isMuted) {
        audio.volume = 0.5;
        audio.play().catch(e => {
          console.log('Autoplay prevented:', e);
          setIsMuted(true);
        });
      }
    };

    // Handle first user interaction
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        if (!isMuted && audioLoaded) {
          audio.play().catch(e => console.log('Audio play failed:', e));
        }
      }
    };

    audio.addEventListener('canplaythrough', handleAudioLoad);
    document.addEventListener('click', handleFirstInteraction, { once: true });
    
    return () => {
      audio.removeEventListener('canplaythrough', handleAudioLoad);
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, [hasInteracted, isMuted, audioLoaded]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio || !audioLoaded) return;

    if (isMuted) {
      audio.play().catch(e => console.log('Audio play failed:', e));
      setIsMuted(false);
    } else {
      audio.pause();
      setIsMuted(true);
    }
  };

  return (
    <>
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 bg-accent-pink hover:bg-accent-pink/80 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
        title={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? (
          <FaVolumeMute className="text-xl" />
        ) : (
          <FaVolumeUp className="text-xl" />
        )}
      </button>
      
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        onError={(e) => console.log('Audio error:', e)}
        onLoadStart={() => console.log('Audio load started')}
        onCanPlay={() => console.log('Audio can play')}
      >
        <source src={siteData.song} type="audio/mpeg" />
        <source src={siteData.song} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
