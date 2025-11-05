"use client";
import { useEffect, useRef } from "react";

export default function PaintCursor() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  // Cursor positions
  const posRef = useRef({ x: 0, y: 0 });
  const lerpPosRef = useRef({ x: 0, y: 0 });
  const prevRef = useRef(null);

  const ctxRef = useRef(null);
  const gradRef = useRef(null);

  // Tunable parameters
  const FADE = 0.1; // Higher = faster disappearing trail
  const MIN_W = 50; // Minimum stroke width
  const MAX_W = 90; // Maximum stroke width
  const SPEED_FOR_MAX = 40;
  const SMOOTHING = 0.18; // How "laggy" the follow is (0.1–0.2 feels nice)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const setSize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Build a single gradient for the whole canvas
      const angle = (266.37 * Math.PI) / 180;
      const x1 = 0;
      const y1 = 0;
      const x2 = Math.cos(angle) * window.innerWidth;
      const y2 = Math.sin(angle) * window.innerHeight;

      const grad = ctx.createLinearGradient(x1, y1, x2, y2);
      grad.addColorStop(0, "#623a23"); // brownish
      grad.addColorStop(1, "#e8d7be"); // beige-gold
      gradRef.current = grad;
    };

    setSize();
    window.addEventListener("resize", setSize);

    const onMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (!prevRef.current) prevRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      // Fade previous strokes
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = `rgba(0,0,0,${FADE})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      // Smooth follow (lerp)
      lerpPosRef.current.x +=
        (posRef.current.x - lerpPosRef.current.x) * SMOOTHING;
      lerpPosRef.current.y +=
        (posRef.current.y - lerpPosRef.current.y) * SMOOTHING;

      const x = lerpPosRef.current.x;
      const y = lerpPosRef.current.y;

      if (prevRef.current) {
        const dx = x - prevRef.current.x;
        const dy = y - prevRef.current.y;
        const speed = Math.hypot(dx, dy);
        const t = Math.min(1, speed / SPEED_FOR_MAX);
        const width = MIN_W + (MAX_W - MIN_W) * t;

        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.strokeStyle = gradRef.current;
        ctx.lineWidth = width;

        ctx.beginPath();
        ctx.moveTo(prevRef.current.x, prevRef.current.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      prevRef.current = { x, y };
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
