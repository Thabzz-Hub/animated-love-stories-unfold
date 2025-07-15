
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollObserverProps {
  children: ReactNode;
  threshold?: number;
}

export const ScrollObserver = ({ children, threshold = 0.1 }: ScrollObserverProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.opacity-0');
            animatedElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.remove('opacity-0');
              }, index * 200);
            });
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return <div ref={ref}>{children}</div>;
};
