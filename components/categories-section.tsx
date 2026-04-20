'use client';

import Image from "next/image";

export function CategoriesSection() {
  return (
    <section id="categories" className="relative pt-20 pb-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, title: 'Dining', image: '/assets/kfc_gulshan/3986b67e-88d6-4896-8570-1d47f922fce6.jpg' },
            { id: 2, title: 'Residential', image: '/assets/family_house_noakhali/28bc0e89-cf1a-478e-a784-e2d2002cf9b9.jpg' },
            { id: 3, title: 'Commercial', image: '/assets/incepta_factory/343a6ed0-0c85-479f-9623-76a04b495453.jpg' },
            { id: 4, title: 'Living Room', image: '/assets/muktadie_incepta/21a317a0-eeef-434c-a822-b947e97d87e2.jpg' },
            { id: 5, title: 'Bedroom', image: '/assets/fakhruddin_textile/6868edc1-ed84-4d92-8410-ff6e2a358cd6.jpg' },
            { id: 6, title: 'Interior', image: '/assets/fakhruddin_textile/e69176cd-7a36-4fe1-8d46-b755d87c9d9b.jpg' },
          ].map((cat) => (
            <div key={cat.id} className="group relative w-full aspect-[4/3] overflow-hidden cursor-pointer">
              <Image width={200} height={100} src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
