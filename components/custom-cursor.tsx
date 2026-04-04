'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const observerRef = useRef<MutationObserver | null>(null);

  const moveCursor = useCallback((e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    document.addEventListener('mousemove', moveCursor, { passive: true });

    const handleMutation = () => {
      const hoverElements = document.querySelectorAll('a, button, .project-row, .service-card');
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovered(true));
        el.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    handleMutation();

    observerRef.current = new MutationObserver(handleMutation);
    observerRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      observerRef.current?.disconnect();
    };
  }, [moveCursor]);

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className={isHovered ? 'hovered' : ''}
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  );
}
