import { useState, useEffect, useRef } from 'react';

/**
 * Hook to detect when element enters viewport for scroll-triggered animations.
 * @param {Object} options - { rootMargin: string, threshold: number }
 * @returns [ref, isInView]
 */
export function useInView(options = {}) {
  const { rootMargin = '0px 0px -80px 0px', threshold = 0.1 } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, isInView];
}
