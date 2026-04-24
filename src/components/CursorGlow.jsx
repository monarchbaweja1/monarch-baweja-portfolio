import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const cursor = ref.current;
    const move = (event) => {
      gsap.to(cursor, {
        x: event.clientX - 120,
        y: event.clientY - 120,
        duration: 0.65,
        ease: "power3.out",
      });
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
