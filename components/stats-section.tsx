'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface StatData {
  target: number;
  suffix: string;
  label: string;
}

const statsData: StatData[] = [
  { target: 26, suffix: '+', label: 'Years of Experience' },
  { target: 70, suffix: '+', label: 'Happy Clients' },
  { target: 100, suffix: '%', label: 'Client Retention' },
  { target: 100, suffix: '+', label: 'Projects Completed' },
];

function animateCount(element: HTMLElement, target: number, suffix: string, duration = 1400) {
  let start = 0;
  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${Math.floor(ease * target)}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          const statElements = ref.current?.querySelectorAll('.stat-num');
          if (statElements) {
            statsData.forEach((stat, i) => {
              const el = statElements[i] as HTMLElement;
              if (el) animateCount(el, stat.target, stat.suffix);
            });
          }
          setHasAnimated(true);
        }
      });
    },
    [hasAnimated]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section id="stats" ref={ref} className="reveal py-[100px] px-[60px] bg-bg-base">
      <div className="stats-grid grid grid-cols-1 md:grid-cols-4 gap-0 border border-secondary-text/20">
        {statsData.map((stat) => (
          <div key={stat.label} className="stat-block p-[52px_40px] border-r border-secondary-text/20 last:border-r-0 relative">
            <span className="stat-num text-[clamp(44px,4vw,64px)] font-extrabold text-brand-cobalt block leading-none mb-2.5">0{stat.suffix}</span>
            <span className="stat-label text-secondary-text italic text-[14px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
