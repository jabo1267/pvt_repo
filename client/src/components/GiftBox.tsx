import { motion } from 'framer-motion';
import { FaGift } from 'react-icons/fa';

interface GiftBoxProps {
  onUnwrap: () => void;
}

export default function GiftBox({ onUnwrap }: GiftBoxProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-deep-navy flex items-center justify-center flex-col cursor-pointer z-[100]"
      onClick={onUnwrap}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <FaGift className="text-accent-pink text-[10rem] mb-6" />
        <p className="text-gold text-2xl font-montserrat animate-pulse">
          Click me to unwrap your surprise!
        </p>
      </motion.div>
    </motion.div>
  );
}