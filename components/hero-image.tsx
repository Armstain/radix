'use client';

import Image from 'next/image';
import { useState } from 'react';

export function HeroImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      className={`hero-img ${loaded ? 'loaded' : ''}`}
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85&fit=crop"
      alt="Interior by RADIX Studio"
      width={900}
      height={600}
      priority
      onLoad={() => setLoaded(true)}
    />
  );
}
