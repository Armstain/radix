'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const portfolioItems = [
  // MAHEEN LABEL - INTERIOR
  {
    id: 1,
    title: 'Maheen Interior Work 1',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - INTERIOR WORK/Picsart_26-05-04_10-20-17-591.jpg',
  },
  {
    id: 2,
    title: 'Maheen Interior Work 2',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - INTERIOR WORK/Picsart_26-05-04_10-21-38-568.jpg',
  },
  {
    id: 3,
    title: 'Maheen Interior Work 3',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - INTERIOR WORK/Picsart_26-05-04_10-22-21-464.jpg',
  },
  {
    id: 4,
    title: 'Maheen Interior Work 4',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - INTERIOR WORK/Picsart_26-05-04_10-23-23-657.jpg',
  },
  {
    id: 5,
    title: 'Maheen Interior Work 5',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - INTERIOR WORK/Picsart_26-05-04_10-31-03-056.jpg',
  },
  {
    id: 6,
    title: 'Maheen Interior Work 6',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - INTERIOR WORK/Picsart_26-05-04_10-52-22-861.jpg',
  },
  {
    id: 7,
    title: 'MD Executive Suite 1',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - MD Sir\'s Room/Picsart_26-05-04_10-16-18-170.jpg',
  },
  {
    id: 8,
    title: 'MD Executive Suite 2',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - MD Sir\'s Room/Picsart_26-05-04_10-17-09-744.jpg',
  },
  {
    id: 9,
    title: 'MD Executive Suite 3',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - MD Sir\'s Room/Picsart_26-05-04_10-18-48-084.jpg',
  },
  {
    id: 10,
    title: 'Conference & Meeting Room 1',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - Meeting Room/Picsart_26-05-04_10-29-23-694.jpg',
  },
  {
    id: 11,
    title: 'Conference & Meeting Room 2',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - Meeting Room/Picsart_26-05-04_10-43-17-361.jpg',
  },
  {
    id: 12,
    title: 'Conference & Meeting Room 3',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML - Meeting Room/Picsart_26-05-04_10-43-57-250.jpg',
  },
  {
    id: 13,
    title: 'Corporate Reception 1',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML- Receiption/Picsart_26-05-04_10-24-05-955.jpg',
  },
  {
    id: 14,
    title: 'Corporate Reception 2',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML- Receiption/Picsart_26-05-04_10-28-04-694.jpg',
  },
  {
    id: 15,
    title: 'Modern Office Workstation 1',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML- Workstation/Picsart_26-05-04_10-45-06-721.jpg',
  },
  {
    id: 16,
    title: 'Modern Office Workstation 2',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML- Workstation/Picsart_26-05-04_10-47-30-398.jpg',
  },
  {
    id: 17,
    title: 'Modern Office Workstation 3',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML- Workstation/Picsart_26-05-04_10-50-05-785.jpg',
  },
  {
    id: 18,
    title: 'Modern Office Workstation 4',
    category: 'Interior',
    image: '/assets/MAHEEN LABEL/INTERIOR/ML- Workstation/Picsart_26-05-04_10-51-39-067.jpg',
  },

  // FAKHRUDDIN TEXTILE - INTERIOR
  {
    id: 19,
    title: 'Fakhruddin Textile Executive Suite',
    category: 'Interior',
    image: '/assets/fakhruddin_textile/6868edc1-ed84-4d92-8410-ff6e2a358cd6.jpg',
  },
  {
    id: 20,
    title: 'Fakhruddin Textile Lounge Area',
    category: 'Interior',
    image: '/assets/fakhruddin_textile/6903825b-b2e0-4881-9e61-a8f106238652.jpg',
  },
  {
    id: 21,
    title: 'Fakhruddin Textile Corporate Office',
    category: 'Interior',
    image: '/assets/fakhruddin_textile/ceded936-535f-47a3-ab64-e7eb44127ce1.jpg',
  },
  {
    id: 22,
    title: 'Fakhruddin Textile Meeting Space',
    category: 'Interior',
    image: '/assets/fakhruddin_textile/e69176cd-7a36-4fe1-8d46-b755d87c9d9b.jpg',
  },

  // HEAD OFFICE TEJGAON - INTERIOR
  {
    id: 23,
    title: 'Tejgaon Head Office Main Reception',
    category: 'Interior',
    image: '/assets/head_office_tejgaon/494ae9d1-7d9f-4d7b-ae71-1c81208b5f9c.jpg',
  },
  {
    id: 24,
    title: 'Tejgaon Head Office Workstation Room',
    category: 'Interior',
    image: '/assets/head_office_tejgaon/51d3e989-8843-4f75-b5df-3522efe0eeae.jpg',
  },
  {
    id: 25,
    title: 'Tejgaon Head Office Executive Lounge',
    category: 'Interior',
    image: '/assets/head_office_tejgaon/58496ca8-ed44-4d79-bda8-25082c0e7027.jpg',
  },
  {
    id: 26,
    title: 'Tejgaon Head Office Boardroom Setup',
    category: 'Interior',
    image: '/assets/head_office_tejgaon/6c69894a-2696-413f-bbac-758d0aaff071.jpg',
  },
  {
    id: 27,
    title: 'Tejgaon Head Office CEO Suite',
    category: 'Interior',
    image: '/assets/head_office_tejgaon/6e21d77e-a1a5-482a-b571-5bea12d71a79.jpg',
  },
  {
    id: 28,
    title: 'Tejgaon Head Office Waiting Lounge',
    category: 'Interior',
    image: '/assets/head_office_tejgaon/a77491c4-8269-4466-97ab-47140bdba71f.jpg',
  },
  {
    id: 29,
    title: 'Tejgaon Head Office Glass Partitioning',
    category: 'Interior',
    image: '/assets/head_office_tejgaon/be90f2b5-a8e8-4f0a-a5eb-31648aef51c4.jpg',
  },
  {
    id: 30,
    title: 'Tejgaon Head Office Modern Corridor',
    category: 'Interior',
    image: '/assets/head_office_tejgaon/f8ce72d9-d8aa-42bd-9202-9522e97afedd.jpg',
  },

  // KFC GULSHAN - INTERIOR
  {
    id: 31,
    title: 'Gulshan KFC Dining Hall',
    category: 'Interior',
    image: '/assets/kfc_gulshan/3986b67e-88d6-4896-8570-1d47f922fce6.jpg',
  },
  {
    id: 32,
    title: 'Gulshan KFC Service Counter',
    category: 'Interior',
    image: '/assets/kfc_gulshan/d617bf81-e6d3-4e30-ba09-e03bcc25b7ee.jpg',
  },
  {
    id: 33,
    title: 'Gulshan KFC Modern Booths',
    category: 'Interior',
    image: '/assets/kfc_gulshan/f426824a-0e09-4d99-9e53-d50e30b3b653.jpg',
  },

  // MUKTADIE INCEPTA - INTERIOR
  {
    id: 34,
    title: 'Muktadie Incepta Living Area',
    category: 'Interior',
    image: '/assets/muktadie_incepta/21a317a0-eeef-434c-a822-b947e97d87e2.jpg',
  },
  {
    id: 35,
    title: 'Muktadie Incepta Bedroom Interior',
    category: 'Interior',
    image: '/assets/muktadie_incepta/32ec4bd6-76c7-45d8-8afd-c276c264f580.jpg',
  },
  {
    id: 36,
    title: 'Muktadie Incepta Dining Lounge',
    category: 'Interior',
    image: '/assets/muktadie_incepta/39e5c829-b7c1-4c92-bf86-711bf06f558b.jpg',
  },
  {
    id: 37,
    title: 'Muktadie Incepta Modern Kitchen',
    category: 'Interior',
    image: '/assets/muktadie_incepta/42b69540-212f-415b-89ff-7cca759ebba4.jpg',
  },
  {
    id: 38,
    title: 'Muktadie Incepta Family Lounge',
    category: 'Interior',
    image: '/assets/muktadie_incepta/75ade89e-bd9f-4eea-9162-82b5bb3f6d8a.jpg',
  },
  {
    id: 39,
    title: 'Muktadie Incepta Accent Wall',
    category: 'Interior',
    image: '/assets/muktadie_incepta/7e6261b4-7bd4-483a-968e-5d1ff8f3678e.jpg',
  },
  {
    id: 40,
    title: 'Muktadie Incepta Decorative Lighting',
    category: 'Interior',
    image: '/assets/muktadie_incepta/982a0f52-216f-4796-a14a-cd987fa2a545.jpg',
  },
  {
    id: 41,
    title: 'Muktadie Incepta Master Bedroom',
    category: 'Interior',
    image: '/assets/muktadie_incepta/bf04a043-eb1a-4ceb-8287-928018fa86e5.jpg',
  },

  // FAMILY HOUSE NOAKHALI - RESIDENTIAL
  {
    id: 42,
    title: 'Noakhali Residence Front Elevation',
    category: 'Residential',
    image: '/assets/family_house_noakhali/28bc0e89-cf1a-478e-a784-e2d2002cf9b9.jpg',
  },
  {
    id: 43,
    title: 'Noakhali Residence Side Elevation',
    category: 'Residential',
    image: '/assets/family_house_noakhali/58ffee97-c6d0-4d80-89c1-dd30935a5303.jpg',
  },
  {
    id: 44,
    title: 'Noakhali Residence Modern Gate',
    category: 'Residential',
    image: '/assets/family_house_noakhali/5ddd38ea-c15a-4594-a41f-387239647397.jpg',
  },
  {
    id: 45,
    title: 'Noakhali Residence Landscape Garden',
    category: 'Residential',
    image: '/assets/family_house_noakhali/653bfdb1-b184-412c-93f2-ef30a68fd2cc.jpg',
  },
  {
    id: 46,
    title: 'Noakhali Residence Exterior Dusk',
    category: 'Residential',
    image: '/assets/family_house_noakhali/af1c4b4c-d75d-4251-9bc7-eaa2611af345.jpg',
  },
  {
    id: 47,
    title: 'Noakhali Residence Grand Entrance',
    category: 'Residential',
    image: '/assets/family_house_noakhali/ebe86f1f-8ef2-4029-b531-4f1cf1f3dd3d.jpg',
  },

  // MAHEEN LABEL - RESIDENTIAL
  {
    id: 48,
    title: 'Maheen Apartment Building 1',
    category: 'Residential',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - APARTMENT BUILDING/Picsart_26-05-04_11-00-54-649.jpg',
  },
  {
    id: 49,
    title: 'Maheen Apartment Building 2',
    category: 'Residential',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - APARTMENT BUILDING/Picsart_26-05-04_11-03-41-696.jpg',
  },
  {
    id: 50,
    title: 'Maheen Apartment Building 3',
    category: 'Residential',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - APARTMENT BUILDING/Picsart_26-05-04_11-04-49-932.jpg',
  },
  {
    id: 51,
    title: 'Maheen Apartment Building 4',
    category: 'Residential',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - APARTMENT BUILDING/Picsart_26-05-04_11-06-08-362.jpg',
  },

  // INCEPTA FACTORY - CONSTRUCTION
  {
    id: 52,
    title: 'Incepta Factory Main Plant',
    category: 'Construction',
    image: '/assets/incepta_factory/343a6ed0-0c85-479f-9623-76a04b495453.jpg',
  },
  {
    id: 53,
    title: 'Incepta Factory Chemical Unit',
    category: 'Construction',
    image: '/assets/incepta_factory/93e98b69-ad5e-48ea-b927-8fde0565db19.jpg',
  },
  {
    id: 54,
    title: 'Incepta Factory Processing Block',
    category: 'Construction',
    image: '/assets/incepta_factory/be2db04a-75ba-41a0-8813-a8bb59297c12.jpg',
  },
  {
    id: 55,
    title: 'Incepta Factory Storage Facility',
    category: 'Construction',
    image: '/assets/incepta_factory/d437e894-48a9-4c87-bc2e-9466114112c5.jpg',
  },
  {
    id: 56,
    title: 'Incepta Factory Structural Columns',
    category: 'Construction',
    image: '/assets/incepta_factory/de0473e8-eb15-4dc7-adc3-b19a06024333.jpg',
  },
  {
    id: 57,
    title: 'Incepta Factory Overhead View',
    category: 'Construction',
    image: '/assets/incepta_factory/ea897df4-d201-41a8-a92a-97be1aa9f33b.jpg',
  },

  // IMPRESS NEWTEX - CONSTRUCTION
  {
    id: 58,
    title: 'Impress Newtex Factory Exterior',
    category: 'Construction',
    image: '/assets/impress_newtex/4b783e21-86fb-460c-ad42-b6c57caad8f7.jpg',
  },
  {
    id: 59,
    title: 'Impress Newtex Spinning Unit',
    category: 'Construction',
    image: '/assets/impress_newtex/602d78c8-e538-4e05-80a1-9effb6e9ff61.jpg',
  },
  {
    id: 60,
    title: 'Impress Newtex Warehouse Structure',
    category: 'Construction',
    image: '/assets/impress_newtex/7bb40eb8-be68-4314-8092-81ba155c0163.jpg',
  },
  {
    id: 61,
    title: 'Impress Newtex Structural Shed',
    category: 'Construction',
    image: '/assets/impress_newtex/9e75c350-c4eb-4c4a-b451-b358ddfa20c2.jpg',
  },
  {
    id: 62,
    title: 'Impress Newtex Foundation Work',
    category: 'Construction',
    image: '/assets/impress_newtex/a563c9a7-abef-4c3b-867c-1b4b7a3f458c.jpg',
  },
  {
    id: 63,
    title: 'Impress Newtex Fabrication Stage',
    category: 'Construction',
    image: '/assets/impress_newtex/d77f2afc-d5da-4f44-b532-28cbe9527cf1.jpg',
  },
  {
    id: 64,
    title: 'Impress Newtex Completed Yard',
    category: 'Construction',
    image: '/assets/impress_newtex/e2c31473-37a5-4da0-828f-7e971f0dac5e.jpg',
  },
  {
    id: 65,
    title: 'Impress Newtex Main Entrance',
    category: 'Construction',
    image: '/assets/impress_newtex/impress_newtex.jpg',
  },

  // SONIA GARMENTS - CONSTRUCTION
  {
    id: 66,
    title: 'Sonia Garments Main Facade',
    category: 'Construction',
    image: '/assets/sonia_garments/23d98de6-0e9f-4faf-90e9-9584e1822fd6.jpg',
  },
  {
    id: 67,
    title: 'Sonia Garments Utility Room',
    category: 'Construction',
    image: '/assets/sonia_garments/73cecce1-3360-40b9-9b60-dcfaed5a43a4.jpg',
  },
  {
    id: 68,
    title: 'Sonia Garments Overhead Structural Steel',
    category: 'Construction',
    image: '/assets/sonia_garments/9c20755a-dcff-4fa3-b66e-1cc6686a0ec1.jpg',
  },
  {
    id: 69,
    title: 'Sonia Garments Spinning Area',
    category: 'Construction',
    image: '/assets/sonia_garments/d57f62f6-c8a4-401e-9876-b66e73ba7c2c.jpg',
  },
  {
    id: 70,
    title: 'Sonia Garments Processing Plant',
    category: 'Construction',
    image: '/assets/sonia_garments/e577149e-058d-4312-874b-7b7e28a38501.jpg',
  },

  // MAHEEN LABEL - CONSTRUCTION & INFRASTRUCTURE
  {
    id: 71,
    title: 'Maheen Industrial Shade 1',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - NEW SHADE/Picsart_26-05-04_10-54-01-115.jpg',
  },
  {
    id: 72,
    title: 'Maheen Industrial Shade 2',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - NEW SHADE/Picsart_26-05-04_10-55-44-958.jpg',
  },
  {
    id: 73,
    title: 'Maheen Industrial Shade 3',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - NEW SHADE/Picsart_26-05-04_10-56-35-981.jpg',
  },
  {
    id: 74,
    title: 'Maheen Industrial Shade 4',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - NEW SHADE/Picsart_26-05-04_11-06-55-716.jpg',
  },
  {
    id: 75,
    title: 'Maheen Commercial Building 1',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - COMMERCIAL BUILDING/Picsart_26-05-04_10-06-47-989.jpg',
  },
  {
    id: 76,
    title: 'Maheen Commercial Building 2',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - COMMERCIAL BUILDING/Picsart_26-05-04_10-14-22-332.jpg',
  },
  {
    id: 77,
    title: 'Maheen Factory Main Building',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML - Main Building/Picsart_26-05-04_10-59-01-351.jpg',
  },
  {
    id: 78,
    title: 'Fire Reservoir Infrastructure 1',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML -FIRE RESERVOIR TANK/-1_orig.jpeg',
  },
  {
    id: 79,
    title: 'Fire Reservoir Infrastructure 2',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML -FIRE RESERVOIR TANK/IMG_20260502_160419 (1).jpg',
  },
  {
    id: 80,
    title: 'Fire Reservoir Infrastructure 3',
    category: 'Construction',
    image: '/assets/MAHEEN LABEL/CONSTRUCTION/ML -FIRE RESERVOIR TANK/Picsart_26-05-04_10-08-53-936.jpg',
  }
];

export function CategoriesSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  const displayedItems = filteredItems.slice(0, visibleCount);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(6); // Reset grid size on tab change
  };

  return (
    <section id="categories" className="relative pt-16 pb-16 bg-white overflow-hidden">
      {/* Header & Tabs */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
          <div>
            <div className="flex items-center gap-4 group cursor-default mb-4">
              <h2 className="text-sm font-mono tracking-[0.25em] text-[#F5B82A] uppercase flex items-center gap-2">
                <span className="font-bold">OUR</span>
                <span className="text-gray-900 font-light">PORTFOLIO</span>
              </h2>
              <div className="flex flex-col gap-1 w-8">
                <div className="w-8 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-5"></div>
                <div className="w-4 h-[1px] bg-[#F5B82A] transition-all duration-500 ease-in-out group-hover:w-6"></div>
              </div>
            </div>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 tracking-tight leading-none">
              Featured <span className="font-bold">Projects</span>
            </h3>
          </div>

          {/* Dynamic Interactive Tabs */}
          <div className="flex flex-wrap gap-2 bg-gray-100/80 p-1.5 rounded-xl border border-gray-200/50 self-start lg:self-end">
            {['All', 'Interior', 'Residential', 'Construction'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 rounded-lg select-none ${
                  activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeCategoryTab"
                    className="absolute inset-0 bg-[#111111] rounded-lg z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Filterable Cards */}
      <div className="container mx-auto px-6">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                key={item.id}
                className="group relative w-full aspect-[4/3] overflow-hidden cursor-pointer rounded-lg shadow-sm border border-gray-100"
              >
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* Hover Reveal Bar */}
                <div className="absolute bottom-0 left-0 w-full bg-white translate-y-full transition-transform duration-500 group-hover:translate-y-0 flex items-center justify-between z-10 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
                  <span className="pl-6 font-medium text-sm text-gray-900 tracking-tight">{item.title}</span>
                  <div className="w-12 h-12 bg-[#F5B82A] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Premium Load More Button */}
        {filteredItems.length > visibleCount && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="group relative px-8 py-3.5 text-xs font-bold tracking-[0.2em] uppercase border border-gray-900 overflow-hidden rounded-lg transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-gray-900 translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-0"></span>
              <span className="relative z-10 text-gray-900 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                Load More Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-y-1">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>

      {/* 3D Bouncing WELCOME Text */}
      <div className="absolute bottom-4 right-8 z-10 pointer-events-none">
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#E8E8E8]/40 uppercase tracking-tighter animate-bounce-slow text-3d">
          Welcome
        </h2>
      </div>
    </section>
  );
}
