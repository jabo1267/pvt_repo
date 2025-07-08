import { useEffect } from 'react';

interface StarModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

export default function StarModal({ isOpen, message, onClose }: StarModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-deep-navy border border-gold/30 rounded-xl p-8 max-w-md mx-4 shadow-2xl">
        <div className="text-center">
          <div className="text-gold text-4xl mb-4">★</div>
          <p className="text-off-white text-lg font-medium mb-6">{message}</p>
          <button 
            onClick={onClose}
            className="bg-accent-pink hover:bg-accent-pink/80 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
