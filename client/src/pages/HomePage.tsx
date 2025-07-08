import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FallingHearts from '@/components/FallingHearts';
import MuteButton from '@/components/MuteButton';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import FropsTracker from '@/components/FropsTracker';
import Stargazing from '@/components/Stargazing';
import Decision from '@/components/Decision';
import GiftBox from '@/components/GiftBox';
import ReasonsList from '@/components/ReasonsList';
import FrogPacman from '@/components/FrogPacman';

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  const [isUnwrapped, setIsUnwrapped] = useState(false);

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.slice(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    
    // Intersection Observer for bounce-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-bounce-in');
        }
      });
    }, {
      threshold: 0.1
    });

    const bounceElements = document.querySelectorAll('.bounce-in');
    bounceElements.forEach(el => observer.observe(el));

    return () => {
      document.removeEventListener('click', handleNavClick);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isUnwrapped && <GiftBox onUnwrap={() => setIsUnwrapped(true)} />}
      </AnimatePresence>
      {isUnwrapped && (
        <motion.div
          className="bg-deep-navy text-off-white min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FallingHearts />
          <MuteButton />
          
          {/* Fixed Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-navy/90 backdrop-blur-sm border-b border-accent-pink/20">
            <div className="container mx-auto px-4 py-3">
              <div className="flex justify-between items-center">
                <h1 className="font-dancing text-2xl text-accent-pink">Pattikutti's World</h1>
                <div className="flex space-x-6">
                  <a href="#hero" className="hover:text-accent-pink transition-colors">Home</a>
                  <a href="#reasons" className="hover:text-accent-pink transition-colors">Reasons</a>
                  <a href="#gallery" className="hover:text-accent-pink transition-colors">Gallery</a>
                  <a href="#stargazing" className="hover:text-accent-pink transition-colors">Stars</a>
                  <a href="#frops" className="hover:text-accent-pink transition-colors">Frops</a>
                  <a href="#decision" className="hover:text-accent-pink transition-colors">Decision</a>
                </div>
              </div>
            </div>
          </nav>

          <Header />
          <ReasonsList />
          <Gallery />
          <FropsTracker />
          <Stargazing />
          <Decision />
        </motion.div>
      )}
      <FrogPacman />
    </>
  );
}
