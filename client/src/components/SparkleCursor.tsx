import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MousePosition {
  x: number;
  y: number;
}

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default function SparkleCursor() {
  const { x, y } = useMousePosition();
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => [
        ...prev.slice(-10), // Keep only last 10 sparkles
        { id: Date.now(), x: x - 5, y: y - 5 }
      ]);
    }, 50);

    return () => clearInterval(interval);
  }, [x, y]);

  return (
    <>
      {sparkles.map((sparkle, index) => (
        <motion.div
          key={sparkle.id}
          className="fixed pointer-events-none z-[999] w-3 h-3 bg-white rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            boxShadow: '0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ff69b4'
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, delay: index * 0.02 }}
        />
      ))}
    </>
  );
}