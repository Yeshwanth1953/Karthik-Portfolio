import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 70;
const CONNECTION_DISTANCE = 150;
const PARTICLE_SPEED = 0.4;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouse.current = { x: null, y: null };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:      randomBetween(0, canvas.width),
      y:      randomBetween(0, canvas.height),
      vx:     randomBetween(-PARTICLE_SPEED, PARTICLE_SPEED),
      vy:     randomBetween(-PARTICLE_SPEED, PARTICLE_SPEED),
      r:      randomBetween(1.5, 3),
      bright: Math.random() > 0.75,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = particles.current;

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx   = pts[i].x - pts[j].x;
          const dy   = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(34,197,94,${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      const mx = mouse.current.x;
      const my = mouse.current.y;
      if (mx !== null) {
        pts.forEach((p) => {
          const dx   = p.x - mx;
          const dy   = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.55;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(34,197,94,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
        ctx.beginPath();
        ctx.arc(mx, my, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34,197,94,0.55)";
        ctx.fill();
      }

      pts.forEach((p) => {
        if (p.bright) {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
          grd.addColorStop(0, "rgba(34,197,94,0.35)");
          grd.addColorStop(1, "rgba(34,197,94,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(34,197,94,0.9)";
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(34,197,94,0.38)";
          ctx.fill();
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,          /* ✅ FIXED: -1 puts it behind ALL page content */
        pointerEvents: "none",
      }}
    />
  );
}