import { useEffect, useRef, useState } from "react";

const ITERATIONS = 1;

export const useObserver = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < ITERATIONS) {
      const options = {
        root: null,
        rootMargin: "0px",
        treshold: 1.0
      };
      const ref = containerRef.current;

      // Create the observer
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        setCount((state) => (state += 1));
        setIsVisible(entry.isIntersecting);
      }, options);

      // Tell the observer which elements to track
      if (ref) {
        observer.observe(ref);
      }

      return () => {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, isVisible]);

  return [containerRef, isVisible];
};
