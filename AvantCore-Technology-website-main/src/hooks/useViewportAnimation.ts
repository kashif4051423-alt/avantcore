import { useRef, useState, useEffect } from 'react';

interface UseViewportAnimationProps {
  threshold?: number;
  rootMargin?: string;
}

export const useViewportAnimation = ({
  threshold = 0.3,
  rootMargin = '0px',
}: UseViewportAnimationProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Always update when visibility changes
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isInView };
};
