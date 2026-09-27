import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ballRef = useRef(null);

  const mouse = useRef({ x: -200, y: -200 });
  const pos = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;
    const lerpFactor = 0.15;

    const render = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * lerpFactor;
      pos.current.y += (mouse.current.y - pos.current.y) * lerpFactor;

      if (ballRef.current) {
        ballRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={ballRef}
      className="pointer-events-none fixed top-0 left-0 z-[99999] h-4 w-4 rounded-full bg-violet-500/60 border border-violet-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
      style={{ willChange: "transform", transform: "translate(-50%, -50%)" }}
    />
  );
}