import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

interface Heart {
  id: number;
}

export default function FrogPacman() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has scrolled to bottom section
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = documentHeight - 200; // Show when 200px from bottom
      
      setIsVisible(scrollPosition >= threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Add a new heart every 2 seconds when visible
    const interval = setInterval(() => {
      const id = Date.now();
      setHearts(prev => [...prev, { id }]);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleHeartEaten = (id: number) => {
    setHearts(prev => prev.filter(heart => heart.id !== id));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Frog Container - Fixed at bottom */}
      <div className="fixed bottom-5 left-8 z-50">
        <div className="relative w-24 h-24">
          {/* Main frog body - Always green */}
          <div className="w-24 h-24 bg-green-500 rounded-full shadow-lg border-4 border-green-600 relative overflow-hidden">
            {/* Mouth opening - triangle that animates in/out */}
            <div 
              className="absolute top-6 right-0 w-0 h-0 border-solid border-transparent"
              style={{
                borderTopWidth: '24px',
                borderBottomWidth: '24px',
                borderRightWidth: '30px',
                borderRightColor: '#0a192f',
                animation: 'eating 0.8s infinite',
                transformOrigin: 'left center'
              }}
            />
          </div>
          
          {/* Frog ears */}
          <div className="absolute -top-2 left-2 w-6 h-6 bg-green-500 rounded-full border-2 border-green-600 shadow-md"></div>
          <div className="absolute -top-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-green-600 shadow-md"></div>
          
          {/* Eyes */}
          <div className="absolute top-1 left-4 w-5 h-5 bg-white rounded-full border-2 border-green-600">
            <div className="w-2 h-2 bg-black rounded-full mt-1 ml-1"></div>
          </div>
          <div className="absolute top-1 right-4 w-5 h-5 bg-white rounded-full border-2 border-green-600">
            <div className="w-2 h-2 bg-black rounded-full mt-1 ml-1"></div>
          </div>
          
          {/* Red blush on cheeks */}
          <div className="absolute top-8 left-1 w-4 h-4 bg-red-400 rounded-full opacity-60"></div>
          <div className="absolute top-8 right-1 w-4 h-4 bg-red-400 rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Hearts - Aligned with frog's mouth */}
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            className="fixed right-0 z-40 text-accent-pink text-2xl"
            initial={{ x: 0 }}
            animate={{ x: -window.innerWidth + 140 }} // Stop at frog's mouth
            transition={{ duration: 3, ease: 'linear' }}
            onAnimationComplete={() => handleHeartEaten(heart.id)}
            style={{ bottom: '65px' }} // Align with frog's mouth height
          >
            <FaHeart />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
}