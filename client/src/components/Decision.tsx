import { useState } from 'react';
import { siteData } from '@/data/siteData';
import VideoModal from './VideoModal';

interface DecisionProps {}

export default function Decision({}: DecisionProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<'yes' | 'no'>('yes');

  const handleVideoClick = (answer: 'yes' | 'no') => {
    setSelectedAnswer(answer);
    setShowVideo(true);
  };

  return (
    <>
      <section id="decision" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dancing text-5xl text-gold mb-6">Final aayit choikuvaa, ini maatan pattulaa</h2>
            <p className="text-3xl text-off-white mb-12 max-w-3xl mx-auto">
              {siteData.decision.question}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button 
                onClick={() => handleVideoClick('yes')}
                className="bg-accent-pink hover:bg-accent-pink/80 text-white px-12 py-6 rounded-full text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                YES! 🫠
              </button>
              <button 
                onClick={() => handleVideoClick('no')}
                className="bg-gray-600 hover:bg-gray-500 text-white px-12 py-6 rounded-full text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Umm... 😒
              </button>
            </div>
          </div>
        </div>
      </section>

      <VideoModal 
        isOpen={showVideo}
        answer={selectedAnswer}
        onClose={() => setShowVideo(false)}
      />
    </>
  );
}
