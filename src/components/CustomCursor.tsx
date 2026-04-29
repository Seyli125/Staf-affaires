"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const rendered = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const moving = useRef(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    dot.style.opacity = "1";

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rendered.current.x = lerp(rendered.current.x, pos.current.x, 0.28);
        rendered.current.y = lerp(rendered.current.y, pos.current.y, 0.28);
      dot.style.transform = `translate3d(${rendered.current.x}px, ${rendered.current.y}px, 0)`;

      // Stop RAF when cursor has caught up (within 0.5px)
      const dx = Math.abs(rendered.current.x - pos.current.x);
      const dy = Math.abs(rendered.current.y - pos.current.y);
      if (dx < 0.5 && dy < 0.5) {
        moving.current = false;
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (!moving.current) {
        moving.current = true;
        raf.current = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      startLoop();
    };

    document.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -4,
        borderRadius: "50%",
        backgroundColor: "#ff6b4a",
        opacity: 0,
        willChange: "transform",
      }}
    />
  );
}
