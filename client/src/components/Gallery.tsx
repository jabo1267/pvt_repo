import { siteData } from '@/data/siteData';

interface GalleryProps {}

export default function Gallery({}: GalleryProps) {
  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl text-gold mb-6">The time spent with you has been some of my bestt baba</h2>
          <p className="text-xl text-off-white/80 max-w-2xl mx-auto">
            Each of these pictures are sooooo special to me(ninne poleee)
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.gallery.map((item, index) => (
            <div key={index} className="bounce-in group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={item.image} 
                  alt={`Gallery item ${index + 1}`} 
                  className="gallery-image w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{item.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
