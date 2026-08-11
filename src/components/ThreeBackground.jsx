import React, { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Watercolor blob definitions ──────────────────────────────────────────
    // These simulate wet paint blobs bleeding into each other
    const BLOBS = [
      { cx: 0.10, cy: 0.15, rx: 0.40, ry: 0.32, hueBase: 210, speed: 0.00022, hRange: 40, alphaMax: 0.22 },
      { cx: 0.85, cy: 0.12, rx: 0.38, ry: 0.30, hueBase: 35,  speed: 0.00018, hRange: 30, alphaMax: 0.20 },
      { cx: 0.50, cy: 0.55, rx: 0.45, ry: 0.40, hueBase: 270, speed: 0.00028, hRange: 50, alphaMax: 0.16 },
      { cx: 0.08, cy: 0.75, rx: 0.35, ry: 0.30, hueBase: 160, speed: 0.00020, hRange: 35, alphaMax: 0.18 },
      { cx: 0.90, cy: 0.78, rx: 0.38, ry: 0.32, hueBase: 320, speed: 0.00025, hRange: 40, alphaMax: 0.20 },
      { cx: 0.50, cy: 0.05, rx: 0.50, ry: 0.28, hueBase: 190, speed: 0.00030, hRange: 45, alphaMax: 0.14 },
      { cx: 0.25, cy: 0.50, rx: 0.30, ry: 0.28, hueBase: 50,  speed: 0.00023, hRange: 30, alphaMax: 0.16 },
      { cx: 0.75, cy: 0.45, rx: 0.32, ry: 0.26, hueBase: 0,   speed: 0.00021, hRange: 35, alphaMax: 0.17 },
    ];

    // ── Floating particles ───────────────────────────────────────────────────
    const PARTICLES = Array.from({ length: 60 }, () => ({
      x:     Math.random() * window.innerWidth,
      y:     Math.random() * window.innerHeight,
      r:     Math.random() * 2.2 + 0.8,
      hue:   Math.random() * 360,
      dx:    (Math.random() - 0.5) * 0.3,
      dy:    -(Math.random() * 0.35 + 0.1),
      alpha: Math.random() * 0.45 + 0.25,
    }));

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      // 1. White base
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, W, H);

      // 2. Watercolor blobs — layered radial gradients with multiple passes
      //    to simulate ink bleeding / wet-on-wet watercolor
      ctx.save();
      ctx.filter = 'blur(45px)';
      BLOBS.forEach((b) => {
        const hue    = b.hueBase + Math.sin(t * b.speed * Math.PI * 2) * b.hRange;
        const hue2   = hue + 40;
        const px     = b.cx * W + Math.sin(t * b.speed * 3.7 + b.hueBase) * W * 0.07;
        const py     = b.cy * H + Math.cos(t * b.speed * 2.9 + b.hueBase) * H * 0.07;
        const rx     = b.rx * Math.min(W, H);
        const ry     = b.ry * Math.min(W, H);

        // Inner core — more saturated
        const g = ctx.createRadialGradient(px, py, 0, px, py, rx);
        g.addColorStop(0,   `hsla(${hue},  90%, 72%, ${b.alphaMax})`);
        g.addColorStop(0.4, `hsla(${hue2}, 80%, 70%, ${b.alphaMax * 0.65})`);
        g.addColorStop(0.75,`hsla(${hue2}, 70%, 75%, ${b.alphaMax * 0.25})`);
        g.addColorStop(1,   `hsla(${hue},  60%, 80%, 0)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.ellipse(
          px, py, rx, ry,
          Math.sin(t * b.speed * 1.5) * Math.PI * 0.25,
          0, Math.PI * 2
        );
        ctx.fill();
      });
      ctx.restore();

      // 3. Second overlay pass — lighter blobs shifted to simulate color diffusion
      ctx.save();
      ctx.filter = 'blur(70px)';
      BLOBS.forEach((b, i) => {
        const hue  = (b.hueBase + 180 + Math.cos(t * b.speed * Math.PI * 2) * 25) % 360;
        const next = BLOBS[(i + 1) % BLOBS.length];
        // Midpoint between two blobs = diffusion zone
        const px   = ((b.cx + next.cx) / 2) * W + Math.cos(t * b.speed * 2.1) * W * 0.05;
        const py   = ((b.cy + next.cy) / 2) * H + Math.sin(t * b.speed * 1.8) * H * 0.05;
        const r    = b.rx * Math.min(W, H) * 0.6;

        const g = ctx.createRadialGradient(px, py, 0, px, py, r);
        g.addColorStop(0,   `hsla(${hue}, 85%, 78%, 0.12)`);
        g.addColorStop(0.6, `hsla(${hue}, 70%, 80%, 0.06)`);
        g.addColorStop(1,   `hsla(${hue}, 60%, 85%, 0.00)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // 4. Glass refraction lines (horizontal) — very subtle
      ctx.save();
      ctx.globalAlpha = 0.018;
      for (let y = 0; y < H; y += 3) {
        const hue = ((y / H) * 180 + t * 0.08) % 360;
        ctx.fillStyle = `hsl(${hue}, 70%, 70%)`;
        ctx.fillRect(0, y, W, 1.2);
      }
      ctx.restore();

      // 5. Grid (extremely subtle)
      ctx.save();
      ctx.strokeStyle = 'rgba(100, 100, 200, 0.022)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 55) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 55) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      ctx.restore();

      // 6. Floating glowing particles
      PARTICLES.forEach((p) => {
        p.hue = (p.hue + 0.5) % 360;
        p.x  += p.dx;
        p.y  += p.dy;
        if (p.y < -10)                   { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10 || p.x > W + 10)  { p.x = Math.random() * W; }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = `hsl(${p.hue}, 85%, 60%)`;
        ctx.shadowBlur  = 10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.hue}, 80%, 65%)`;
        ctx.fill();
        ctx.restore();
      });

      // 7. Very subtle vignette to keep edges soft
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.85);
      vig.addColorStop(0,   'rgba(255,255,255,0)');
      vig.addColorStop(1,   'rgba(255,255,255,0.25)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ display: 'block' }}
    />
  );
}
