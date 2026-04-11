'use client';

import Image from 'next/image';
import Link from 'next/link';

export function FeaturedProjectSection() {
  return (
    <section id="featured" className="reveal">
      <div className="featured-inner">
        <div className="featured-img-wrap relative">
          <Image
            className="featured-img object-cover"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&fit=crop"
            alt="Impress Newtex"
            fill
          />
        </div>
        <div className="featured-card">
          <span className="tag">Featured Project</span>
          <h3 className="featured-name">Impress<br />Newtex</h3>
          <p className="featured-desc">
            The ex-President had a vision for a facility that catered to all members, focusing on youth, clarity, and functionality. We finished the entire interior, including providing furniture to highlight its significance.
          </p>
          <Link href="#" className="featured-link">View Case Study →</Link>
        </div>
      </div>
    </section>
  );
}
