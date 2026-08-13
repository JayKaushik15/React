import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Tracks the cursor and returns smoothed motion values you can bind
 * to a motion.div's `style={{ x, y }}`. `strength` controls how many
 * pixels of movement the element gets at the edge of the viewport.
 */
export function useMouseParallax(strength = 16) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 50, damping: 20, mass: 0.6 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const handleMove = (e) => {
      const relX = (e.clientX / window.innerWidth - 0.5) * 2;
      const relY = (e.clientY / window.innerHeight - 0.5) * 2;
      x.set(relX * strength);
      y.set(relY * strength);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [strength, x, y]);

  return { x: springX, y: springY };
}
