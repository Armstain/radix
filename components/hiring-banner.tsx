'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HiringBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isVisible) {
      root.style.setProperty('--banner-height', '44px');
    } else {
      root.style.setProperty('--banner-height', '0px');
    }
    return () => root.style.setProperty('--banner-height', '0px');
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[150] w-full bg-[#F5B82A] text-[#111111]"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 md:px-12">
            <div className="flex flex-1 items-center justify-center gap-x-6">
              <p className="text-[11px] md:text-xs font-bold tracking-[2px] uppercase">
                <span className="opacity-70">Radix is growing!</span>
                <span className="mx-3 inline-block h-1 w-1 rounded-full bg-[#111111]/30 align-middle"></span>
                We're looking for talented designers and engineers to join our team
              </p>
              <Link
                href="#mission-contact"
                className="group flex items-center gap-1.5 text-[11px] md:text-xs font-black tracking-[2px] uppercase hover:underline underline-offset-4"
              >
                Apply Now
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-[#111111]/10 transition-colors"
              aria-label="Close announcement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
