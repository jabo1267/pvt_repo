import { siteData } from '@/data/siteData';

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/main_image/tgthrS.jpg" 
          alt="Birthday celebration background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="bounce-in">
          <h1 className="font-dancing text-6xl md:text-8xl text-accent-pink mb-6 drop-shadow-lg">
            {siteData.mainTitle}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
            {siteData.introText}
          </p>
          <div className="mt-12">
            <a 
              href="#gallery" 
              className="inline-block bg-accent-pink hover:bg-accent-pink/80 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >Me Lobe You Kandamaaanam!!!</a>
          </div>
        </div>
      </div>
    </section>
  );
}
