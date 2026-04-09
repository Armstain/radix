'use client';

export function CategoriesSection() {
  return (
    <section id="categories" className="relative pt-20 pb-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, title: 'Dining', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80' },
            { id: 2, title: 'Residential', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80' },
            { id: 3, title: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
            { id: 4, title: 'Living Room', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80' },
            { id: 5, title: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80' },
            { id: 6, title: 'Interior', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80' },
          ].map((cat) => (
            <div key={cat.id} className="group relative w-full aspect-[4/3] overflow-hidden cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40"></div>
              
              {/* Hover Reveal Bar */}
              <div className="absolute bottom-0 left-0 w-full bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0 flex items-center justify-between">
                <span className="pl-6 font-medium text-gray-900">{cat.title}</span>
                <div className="w-12 h-12 bg-[#F5B82A] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Bouncing WELCOME Text */}
      <div className="absolute bottom-4 right-8 z-10 pointer-events-none">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#E8E8E8] uppercase tracking-tighter animate-bounce-slow text-3d">
          Welcome
        </h2>
      </div>
    </section>
  );
}
