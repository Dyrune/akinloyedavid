// src/components/useInView.js
import { useState, useEffect, useRef } from "react";

const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if the animation has already run
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger if entering the viewport and not already animated
        if (entry.isIntersecting && (!options.once || !hasAnimated)) {
          setIsInView(true);
          setHasAnimated(true);
        } else if (!options.once) {
          // Allow the element to go out of view on desktop if `once` is not set
          setIsInView(false);
        }
      },
      { ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options, hasAnimated]);

  return [ref, isInView];
};

export default useInView;
