// animations.js
import { gsap } from 'gsap';

const moveUp = (element) => {
  const tl = gsap.timeline();
  tl.fromTo(
    element,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  );
};

export { moveUp };
