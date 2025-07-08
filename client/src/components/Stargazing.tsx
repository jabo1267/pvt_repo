import { useState } from 'react';
import { siteData } from '@/data/siteData';
import StarModal from './StarModal';

interface StargazingProps {}

export default function Stargazing({}: StargazingProps) {
  const [selectedMessage, setSelectedMessage] = useState<string>('');
  const [showModal, setShowModal] = useState(false);

  const handleStarClick = (message: string) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const starPositions = [
    { top: '20%', left: '15%' },
    { top: '35%', left: '30%' },
    { top: '15%', left: '60%' },
    { top: '50%', left: '20%' },
    { top: '25%', left: '80%' },
    { top: '60%', left: '45%' },
    { top: '70%', left: '70%' },
    { top: '45%', left: '85%' }
  ];

  return (
    <>
      <section id="stargazing" className="py-20 relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
            alt="Starry night sky" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-dancing text-5xl text-gold mb-6">Staril clicki nokikee, secret surprise aaa</h2>
            <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
              Enthayalum ente brightest star ni thanne tto
            </p>
          </div>
          
          {/* Interactive Star Map */}
          <div className="relative h-96 max-w-4xl mx-auto">
            {starPositions.map((position, index) => (
              <div
                key={index}
                className="star absolute cursor-pointer transform transition-all duration-300 hover:scale-150"
                style={position}
                onClick={() => handleStarClick(siteData.starMessages[index])}
              >
                <span className="text-gold text-2xl">★</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StarModal 
        isOpen={showModal}
        message={selectedMessage}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}
