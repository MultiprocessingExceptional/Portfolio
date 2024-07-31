// useAnimation.js
import { useEffect, useRef, useState } from 'react';
import { moveUp } from './components/animation.js';

const useAnimation = (isEnabled = true) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!isEnabled || !elementRef.current) return;

    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0, // trigger when 10% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.boundingClientRect.top > lastScrollTop) {
          if (entry.target.dataset.animated !== 'true') {
            moveUp(entry.target);
            entry.target.dataset.animated = 'true'; // Mark as animated
          }
        } else if (!entry.isIntersecting) {
          entry.target.dataset.animated = 'false'; // Reset animation status when out of view
        }
      });
      setLastScrollTop(window.scrollY); // Update last scroll position
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(elementRef.current);

    return () => {
      observer.unobserve(elementRef.current);
    };
  }, [lastScrollTop, isEnabled]);

  return elementRef;
};

export default useAnimation;
