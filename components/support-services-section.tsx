'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Maximize, Grid, Layout, Square, Palette, Zap, Armchair } from 'lucide-react';

const categories = [
  {
    id: 'wall',
    title: 'Wall Options',
    icon: Layers,
    items: ['Wood Paneling', 'Drywall Systems', 'Aluminum Cladding', 'Glass Partitions'],
  },
  {
    id: 'ceiling',
    title: 'Ceiling Options',
    icon: Maximize,
    items: ['Decorative Wood', 'Gypsum Board', 'Metal Ceilings', 'Acoustic Panels'],
  },
  {
    id: 'flooring',
    title: 'Flooring',
    icon: Grid,
    items: ['Luxury Carpet', 'Ceramic Tiles', 'Premium Marble', 'Hardwood', 'Metal Flooring'],
  },
  {
    id: 'glass',
    title: 'Glass Works',
    icon: Layout,
    items: ['Fixed Partitions', 'Frameless Glass Doors', 'Tempered Glass', 'Frosted Designs'],
  },
  {
    id: 'aluminum',
    title: 'Aluminum Works',
    icon: Square,
    items: ['Modern Windows', 'Sliding Doors', 'Composite Panels', 'Architectural Canopies'],
  },
  {
    id: 'furniture',
    title: 'Furniture',
    icon: Armchair,
    items: ['Customized Office Furniture', 'Imported Executive Sets', 'Modular Workstations', 'Ergonomic Solutions'],
  },
  {
    id: 'electrical',
    title: 'Electrical Works',
    icon: Zap,
    items: ['Safety Wiring', 'Hidden Conduits', 'Modern Switchgear', 'Ambient Lighting'],
  },
  {
    id: 'paint',
    title: 'Paint Finishes',
    icon: Palette,
    items: ['Plastic Paint', 'Premium Duco', 'Enamel Finishes', 'Weather Coat Protection'],
  },
];

export function SupportServicesSection() {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section id="support-services" className="py-16 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4 group cursor-default max-w-fit">
            <h2 className="text-xl md:text-2xl tracking-[0.2em] font-light flex items-center gap-2">
              <span className="text-[#F5B82A] font-medium">SUPPORTING</span>
              <span className="text-gray-900 font-bold">SOLUTIONS</span>
            </h2>
            <div className="flex flex-col gap-1.5 items-start w-12">
              <div className="w-12 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-8"></div>
              <div className="w-6 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-10"></div>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Complete finishing and installation solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Tabs Menu */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-4 px-6 py-4 text-left transition-all duration-300 ${
                  activeTab === cat.id 
                  ? 'bg-white shadow-xl border-l-4 border-[#F5B82A] text-gray-900' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                }`}
              >
                <cat.icon className={`w-5 h-5 ${activeTab === cat.id ? 'text-[#F5B82A]' : ''}`} />
                <span className="font-bold uppercase tracking-widest text-xs">{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-8 bg-white p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait">
              {categories.map((cat) => (
                cat.id === activeTab && (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    <h4 className="text-4xl font-black text-gray-900 mb-10 uppercase tracking-tighter">
                      {cat.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {cat.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-2 h-2 bg-[#F5B82A] group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-600 text-lg group-hover:text-gray-900 transition-colors uppercase tracking-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Decoration */}
            <div className="absolute top-0 right-0 p-8">
               <Layers className="w-32 h-32 text-gray-50 -rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
