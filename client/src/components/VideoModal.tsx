import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { siteData } from '@/data/siteData';

interface VideoModalProps {
  isOpen: boolean;
  answer: 'yes' | 'no';
  onClose: () => void;
}

export default function VideoModal({ isOpen, answer, onClose }: VideoModalProps) {
  const [showCloseButton, setShowCloseButton] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Show close button after 3 seconds
      const timer = setTimeout(() => {
        setShowCloseButton(true);
      }, 3000);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        clearTimeout(timer);
      };
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setShowCloseButton(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const videoSrc = answer === 'yes' ? siteData.decision.yesVideo : siteData.decision.noVideo;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative max-w-4xl w-full mx-4">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-10 transition-all duration-300"
        >
          <FaTimes className="text-xl" />
        </button>
        
        <div className="bg-deep-navy/50 p-8 rounded-lg text-center">
          <h3 className="text-2xl text-gold mb-4">
            {answer === 'yes' ? 'Nalla Answer 💕' : 'Cheetha Answer 😔'}
          </h3>
          
          {/* Video Player */}
          <div className="mb-6">
            <video 
              src={videoSrc}
              controls
              autoPlay
              className="w-full max-w-2xl mx-auto rounded-lg"
              style={{ maxHeight: '400px' }}
              onEnded={() => setShowCloseButton(true)}
              onPlay={() => setShowCloseButton(false)}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          <p className="text-off-white mb-6">
            {answer === 'yes' 
              ? "Awwww me happy, love you daaa"
              : "Pooo, ni cheethaya, hurt aayi"
            }
          </p>
          <div className="text-4xl mb-4">
            {answer === 'yes' ? '🎉🎂🎈' : '🤔💭❤️'}
          </div>
          <p className="text-lg text-accent-pink">
            {answer === 'yes' 
              ? "Happy Birthday ponnee, you me yours ttoo"
              : "Happy Birthday, hurt aayi, ennalum me lobe u too much to vazhak idal...ippo"
            }
          </p>
          
          {/* Close Button - appears after video ends or after 3 seconds */}
          {showCloseButton && (
            <div className="mt-6">
              <button
                onClick={onClose}
                className="bg-accent-pink hover:bg-accent-pink/80 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
