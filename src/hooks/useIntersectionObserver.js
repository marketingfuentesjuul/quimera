import { useEffect, useState, useRef } from 'react';

/**
 * Hook to observe when an element enters the viewport.
 * Returns a ref, a boolean hasIntersected (stays true once viewed), and isIntersecting.
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  const { threshold = 0.15, rootMargin, root } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        setHasIntersected(true);
      }
    }, {
      threshold,
      rootMargin,
      root
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, root]);

  return [ref, hasIntersected, isIntersecting];
}
