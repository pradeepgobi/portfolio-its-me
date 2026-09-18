import React, { useEffect, useRef } from 'react';

/**
 * Premium Light-Blue Cybersecurity Background Canvas
 * 
 * Accurately synthesizes user's visual requirements:
 * 1. REALISTIC CURVED WORLD MAP & NETWORKING (2nd Image):
 *    - Uses /curved_world_map_clean.png extracted directly from 2nd image artwork
 *    - Accurate curved continental coastlines, city cluster glows, and sweeping transcontinental networking arcs
 *    - Left text area behind "Hi, I'm PRADEEP.G" is kept crystal clear and readable
 *    - Live pulsing sonar radar beacons on key global hubs (Europe, India, East Asia, Japan, Australia, US)
 *    - Animated glowing cyan data packets traveling along the curved networking arcs
 * 
 * 2. BIOMETRIC FINGERPRINT SCANNER IN TRUE CENTER (User Request):
 *    - Centered horizontally at W * 0.50 directly between navbar and hero cards
 *    - Authentic /biometric_fingerprint.jpg with transparent multiply mode & procedural fallback
 *    - Rotating radar ring with degree tick marks
 *    - 4 corner brackets [  ]
 *    - Animated sweeping cyan-white laser scan beam
 *    - Telemetry status: [ BIOMETRIC SCANNER ] // ID: VERIFIED // MATCH: 99.8%
 * 
 * 3. 3D METALLIC CYBER SHIELD WITH PADLOCK (3rd Image User Upload):
 *    - Replaces the old "lock loading" spinner on the left
 *    - Uses /cyber_shield_lock.png with floating hover animation and soft glow
 *    - Displayed with security disciplines list: NETWORK, SECURITY, ETHICAL HACKING, etc.
 * 
 * 4. COLOR PALETTE AS MAIN (#3368A0 ? #66A3BF ? #C8DFDB ? #F2EFE7):
 *    - Main light-blue gradient base (#75BBD6 -> #66A3BF -> #4E93B3)
 *    - Luminous sweeping wave ("megam / shinning" in #C8DFDB & white)
 *    - All cards, buttons, fonts, and layout remain 100% untouched
 */
export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    // 1. Load authentic biometric fingerprint image
    const fpImg = new Image();
    fpImg.src = '/biometric_fingerprint.jpg';
    let fpLoaded = false;
    fpImg.onload = () => { fpLoaded = true; };

    // 2. Load 3rd image 3D metallic cyber shield (replaces left lock loading)
    const shieldImg = new Image();
    shieldImg.src = '/cyber_shield_lock.png';
    let shieldLoaded = false;
    shieldImg.onload = () => { shieldLoaded = true; };

    // 3. Load realistic curved world map overlay (extracted from 2nd image)
    const mapImg = new Image();
    mapImg.src = '/curved_world_map_clean.png';
    let mapLoaded = false;
    mapImg.onload = () => { mapLoaded = true; };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Global Cyber Hubs matching positions in the curved map artwork
    const cyberHubs = [
      { nx: 0.280, ny: 0.320, label: 'US_WEST_SOC' },
      { nx: 0.358, ny: 0.317, label: 'US_EAST_HQ' },
      { nx: 0.407, ny: 0.508, label: 'SA_NODE' },
      { nx: 0.529, ny: 0.299, label: 'EU_CENTRAL' },
      { nx: 0.563, ny: 0.665, label: 'AF_CAPE' },
      { nx: 0.620, ny: 0.251, label: 'EURASIA_HUB' },
      { nx: 0.697, ny: 0.406, label: 'IN_CYBER_HQ' }, // India
      { nx: 0.780, ny: 0.330, label: 'JP_TOKYO' },
      { nx: 0.819, ny: 0.677, label: 'AU_GATEWAY' },
    ];

    // Transcontinental curved networking arcs connecting the hubs
    const arcs = [
      { s: 0, e: 1, h: 20, label: 'CONUS' },
      { s: 1, e: 3, h: 48, label: 'ATLANTIC_TRANSIT' },
      { s: 1, e: 2, h: 30, label: 'PAN_AMERICA' },
      { s: 3, e: 6, h: 42, label: 'EUR_ASIA_SEC' },
      { s: 3, e: 4, h: 36, label: 'AFRICA_BACKBONE' },
      { s: 6, e: 7, h: 28, label: 'APAC_LINK' },
      { s: 7, e: 8, h: 44, label: 'PACIFIC_LINE' },
      { s: 2, e: 4, h: 28, label: 'S_ATLANTIC' },
      { s: 4, e: 6, h: 38, label: 'INDIAN_OCEAN' },
      { s: 6, e: 8, h: 34, label: 'INDO_PACIFIC' },
      { s: 3, e: 5, h: 24, label: 'NORTHERN_ROUTE' },
      { s: 5, e: 7, h: 26, label: 'SIBERIA_LINK' },
    ];

    // Ambient floating micro-particles
    const particles = Array.from({ length: 22 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: Math.random() * 1.5 + 0.8,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      const W = window.innerWidth;
      const H = window.innerHeight;
      t++;

      ctx.clearRect(0, 0, W, H);

      /* ?????????????????????????????????????????????????????????????????????
         1. BASE COLOR PALETTE BACKGROUND (#66A3BF LIGHT-BLUE)
      ????????????????????????????????????????????????????????????????????? */
      const baseGrad = ctx.createLinearGradient(0, 0, W * 0.85, H);
      baseGrad.addColorStop(0, '#75BBD6');
      baseGrad.addColorStop(0.45, '#66A3BF');
      baseGrad.addColorStop(1, '#4E93B3');
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, W, H);

      /* ?????????????????????????????????????????????????????????????????????
         2. LUMINOUS SWEEPING WAVE ("megam / shinning" in #C8DFDB & white)
      ????????????????????????????????????????????????????????????????????? */
      ctx.save();
      const waveGrad1 = ctx.createLinearGradient(0, H * 0.85, W, H * 0.15);
      waveGrad1.addColorStop(0, 'rgba(255, 255, 255, 0.02)');
      waveGrad1.addColorStop(0.35, 'rgba(200, 223, 219, 0.36)');
      waveGrad1.addColorStop(0.65, 'rgba(255, 255, 255, 0.28)');
      waveGrad1.addColorStop(1, 'rgba(200, 223, 219, 0.10)');

      ctx.fillStyle = waveGrad1;
      ctx.beginPath();
      ctx.moveTo(-W * 0.05, H * 0.88);
      ctx.bezierCurveTo(
        W * 0.22, H * 0.80 + Math.sin(t * 0.01) * 10,
        W * 0.40, H * 0.48 + Math.cos(t * 0.008) * 12,
        W * 0.70, H * 0.36 + Math.sin(t * 0.012) * 8
      );
      ctx.bezierCurveTo(W * 0.88, H * 0.28, W * 0.98, H * 0.15, W * 1.10, H * 0.06);
      ctx.lineTo(W * 1.10, H * 0.32);
      ctx.bezierCurveTo(W * 0.88, H * 0.44, W * 0.65, H * 0.62, W * 0.36, H * 0.74);
      ctx.bezierCurveTo(W * 0.18, H * 0.86, W * 0.05, H * 0.96, -W * 0.05, H * 1.05);
      ctx.closePath();
      ctx.fill();

      // Secondary soft luminous wave
      const waveGrad2 = ctx.createLinearGradient(W * 0.25, H, W, H * 0.22);
      waveGrad2.addColorStop(0, 'rgba(242, 239, 231, 0.00)');
      waveGrad2.addColorStop(0.5, 'rgba(242, 239, 231, 0.14)');
      waveGrad2.addColorStop(1, 'rgba(200, 223, 219, 0.20)');
      ctx.fillStyle = waveGrad2;
      ctx.beginPath();
      ctx.moveTo(W * 0.08, H);
      ctx.bezierCurveTo(W * 0.34, H * 0.78, W * 0.65, H * 0.72, W * 1.05, H * 0.42);
      ctx.lineTo(W * 1.05, H);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      /* ═════════════════════════════════════════════════════════════════════
         3. REALISTIC CURVED WORLD MAP & CONNECTED CYBER NETWORK
      ═════════════════════════════════════════════════════════════════════ */
      const mapReady = mapLoaded || (mapImg.complete && mapImg.naturalWidth > 0);
      const mW = W;
      const mH = Math.max(420, H * 0.82);
      const mY = Math.max(45, H * 0.08);

      if (mapReady) {
        ctx.save();
        ctx.globalAlpha = 0.85;
        ctx.drawImage(mapImg, 0, mY, mW, mH);
        ctx.restore();
      }

      // ── A. VISIBLE INTERCONNECTED NETWORK ARCS & FLOWING DATA PACKETS ──
      arcs.forEach((arc, i) => {
        const startHub = cyberHubs[arc.s];
        const endHub = cyberHubs[arc.e];
        if (!startHub || !endHub) return;

        const sx = startHub.nx * mW;
        const sy = mY + startHub.ny * mH;
        const ex = endHub.nx * mW;
        const ey = mY + endHub.ny * mH;
        const mx = (sx + ex) / 2;
        const my = (sy + ey) / 2 - arc.h;

        ctx.save();

        // 1. Permanent glowing connected arc line (proves background is connected!)
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.quadraticCurveTo(mx, my, ex, ey);
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.32)';
        ctx.lineWidth = 1.4;
        ctx.stroke();

        // 2. High-speed electrical data transmission pulses along the curve
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.quadraticCurveTo(mx, my, ex, ey);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.70)';
        ctx.lineWidth = 1.6;
        ctx.setLineDash([5, 11]);
        ctx.lineDashOffset = -t * 0.85 - i * 4;
        ctx.shadowColor = '#00E5FF';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();

        // 3. Glowing photon packets with comet tails streaming across the network
        for (let p = 0; p < 2; p++) {
          const prog = ((t * 0.0055) + i * 0.15 + p * 0.50) % 1;
          const px = (1 - prog) * (1 - prog) * sx + 2 * (1 - prog) * prog * mx + prog * prog * ex;
          const py = (1 - prog) * (1 - prog) * sy + 2 * (1 - prog) * prog * my + prog * prog * ey;

          // Trailing comet tail
          const prevProg = Math.max(0, prog - 0.042);
          const tx = (1 - prevProg) * (1 - prevProg) * sx + 2 * (1 - prevProg) * prevProg * mx + prevProg * prevProg * ex;
          const ty = (1 - prevProg) * (1 - prevProg) * sy + 2 * (1 - prevProg) * prevProg * my + prevProg * prevProg * ey;

          ctx.save();
          const tailGrad = ctx.createLinearGradient(tx, ty, px, py);
          tailGrad.addColorStop(0, 'rgba(0, 229, 255, 0)');
          tailGrad.addColorStop(1, 'rgba(0, 229, 255, 0.85)');
          ctx.strokeStyle = tailGrad;
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(px, py);
          ctx.stroke();

          // Bright packet head
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#00E5FF';
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(px, py, 2.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // ── B. ACTIVE GLOBAL CYBER HUBS WITH EXPANDING SONAR RADAR RIPPLES ──
      cyberHubs.forEach((hub, i) => {
        const hx = hub.nx * mW;
        const hy = mY + hub.ny * mH;

        ctx.save();
        // 2 concentric expanding radar sonar waves
        for (let r = 0; r < 2; r++) {
          const pingR = ((t * 0.40 + i * 12 + r * 18) % 36) + 3;
          const pingAlpha = Math.max(0, 1 - pingR / 36) * 0.70;
          ctx.strokeStyle = `rgba(0, 229, 255, ${pingAlpha})`;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.arc(hx, hy, pingR, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Cyan glow halo
        ctx.fillStyle = 'rgba(0, 229, 255, 0.28)';
        ctx.beginPath();
        ctx.arc(hx, hy, 7, 0, Math.PI * 2);
        ctx.fill();

        // White core beacon
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#00E5FF';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(hx, hy, 3.4, 0, Math.PI * 2);
        ctx.fill();

        // Technical telemetry tags
        ctx.shadowBlur = 0;
        ctx.font = '8px "Courier New", monospace';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.90)';
        ctx.fillText(hub.label, hx + 8, hy - 2);
        ctx.fillStyle = 'rgba(0, 229, 255, 0.85)';
        ctx.fillText('● ONLINE', hx + 8, hy + 7);
        ctx.restore();
      });

      /* ═════════════════════════════════════════════════════════════════════
         4. BIOMETRIC FINGERPRINT SCANNER (Between 'break' text and </> badge)
      ═════════════════════════════════════════════════════════════════════ */
      const isDesktop = W > 960;
      const containerLeft = Math.max(28, (W - 1240) / 2 + 28);
      // Positioned exactly in the center gap between the left description ('break') and right </> badge
      const bioX = isDesktop ? Math.round(containerLeft + 548) : Math.round(W * 0.50);
      const innerTop = 76 + Math.max(0, (H - 100 - 520) / 2);
      const bioY = isDesktop ? Math.round(innerTop + 235) : 130;
      const bioR = isDesktop ? Math.min(34, Math.max(28, W * 0.024)) : Math.min(34, Math.max(26, W * 0.03));

      ctx.save();

      // Radial cyan scanner glow backing
      const bioGlow = ctx.createRadialGradient(bioX, bioY, 0, bioX, bioY, bioR * 1.3);
      bioGlow.addColorStop(0, 'rgba(0, 229, 255, 0.22)');
      bioGlow.addColorStop(0.6, 'rgba(255, 255, 255, 0.08)');
      bioGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = bioGlow;
      ctx.beginPath();
      ctx.arc(bioX, bioY, bioR * 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Render authentic uploaded fingerprint
      const isFpReady = fpLoaded || (fpImg.complete && fpImg.naturalWidth > 0);
      if (isFpReady) {
        ctx.save();
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = 0.88;
        ctx.drawImage(fpImg, bioX - bioR * 0.88, bioY - bioR * 0.88, bioR * 1.76, bioR * 1.76);
        ctx.restore();
      } else {
        ctx.save();
        for (let r = 8; r <= bioR * 0.72; r += 5) {
          ctx.strokeStyle = r % 10 === 0 ? 'rgba(0, 229, 255, 0.70)' : 'rgba(168, 85, 247, 0.65)';
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.ellipse(bioX, bioY + (bioR * 0.72 - r) * 0.15, r * 0.72, r, 0, -Math.PI * 0.88, Math.PI * 0.88);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Rotating Outer Radar Reticle Ring
      ctx.save();
      ctx.translate(bioX, bioY);
      ctx.rotate(t * 0.012);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 1.3;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(0, 0, bioR, 0, Math.PI * 2);
      ctx.stroke();

      // Degree Ticks
      ctx.setLineDash([]);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.60)';
      ctx.lineWidth = 1.2;
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * (bioR - 4), Math.sin(a) * (bioR - 4));
        ctx.lineTo(Math.cos(a) * (bioR + 4), Math.sin(a) * (bioR + 4));
        ctx.stroke();
      }
      ctx.restore();

      // 4 Corner Targeting Brackets
      ctx.save();
      ctx.translate(bioX, bioY);
      const bSize = bioR * 0.32;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.lineWidth = 1.8;
      [
        [-bioR, -bioR, 1, 1],
        [bioR, -bioR, -1, 1],
        [-bioR, bioR, 1, -1],
        [bioR, bioR, -1, -1],
      ].forEach(([bx, by, sx, sy]) => {
        ctx.beginPath();
        ctx.moveTo(bx, by + sy * bSize);
        ctx.lineTo(bx, by);
        ctx.lineTo(bx + sx * bSize, by);
        ctx.stroke();
      });

      // Animated Sweeping Laser Scan Beam
      const scanY = Math.sin(t * 0.038) * (bioR * 0.82);
      const laserGrad = ctx.createLinearGradient(-bioR * 0.82, scanY, bioR * 0.82, scanY);
      laserGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
      laserGrad.addColorStop(0.2, 'rgba(0, 229, 255, 0.7)');
      laserGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
      laserGrad.addColorStop(0.8, 'rgba(0, 229, 255, 0.7)');
      laserGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = laserGrad;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(-bioR * 0.82, scanY);
      ctx.lineTo(bioR * 0.82, scanY);
      ctx.stroke();

      // HUD Telemetry Header & Subtext
      ctx.font = '8px "Courier New", monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.textAlign = 'center';
      ctx.fillText('[ BIOMETRIC SCANNER ]', 0, -bioR - 10);
      ctx.fillStyle = 'rgba(37, 79, 122, 0.80)';
      ctx.fillText('ID: VERIFIED // MATCH: 99.8%', 0, bioR + 15);
      ctx.restore();
      ctx.restore();

      /* ?????????????????????????????????????????????????????????????????????
         5. 3D METALLIC CYBER SHIELD WITH PADLOCK (3rd Image User Upload)
            Replaces the old "lock loading" spinner on the left!
      ????????????????????????????????????????????????????????????????????? */
      const isShieldReady = shieldLoaded || (shieldImg.complete && shieldImg.naturalWidth > 0);
      const shieldX = Math.max(75, W * 0.08);
      const shieldY = Math.min(H - 190, H * 0.58);
      const shieldSize = Math.min(130, Math.max(95, W * 0.10));
      const floatY = Math.sin(t * 0.032) * 5;

      if (isShieldReady) {
        ctx.save();
        ctx.shadowColor = 'rgba(0, 229, 255, 0.35)';
        ctx.shadowBlur = 16;
        ctx.drawImage(
          shieldImg,
          shieldX - shieldSize / 2,
          shieldY - shieldSize / 2 + floatY,
          shieldSize,
          shieldSize
        );
        ctx.restore();
      }

      // Security Disciplines list beside the 3D shield
      ctx.save();
      ctx.textAlign = 'left';
      ctx.font = '7.5px monospace';
      ctx.fillStyle = 'rgba(37, 79, 122, 0.70)';
      const disciplines = [
        'NETWORK',
        'SECURITY',
        'ETHICAL HACKING',
        'DIGITAL FORENSICS',
        'THREAT INTELLIGENCE'
      ];
      disciplines.forEach((d, idx) => {
        ctx.fillText(d, shieldX + shieldSize * 0.56, shieldY - shieldSize * 0.30 + idx * 12 + floatY * 0.5);
      });
      ctx.restore();

      /* ?????????????????????????????????????????????????????????????????????
         6. TOP-LEFT: TERMINAL TELEMETRY & CYBER MOTTO
      ????????????????????????????????????????????????????????????????????? */
      ctx.save();
      ctx.font = '10.5px "Courier New", monospace';
      ctx.fillStyle = 'rgba(37, 79, 122, 0.45)';
      ctx.fillText('$ whoami', 32, 108);
      ctx.fillText('$ nmap -sV target', 32, 124);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.70)';
      ctx.fillText('> ACCESS: VERIFIED', 32, 140);
      ctx.fillText('> THREAT LEVEL: LOW', 32, 156);

      // Cyber motto text (LEARN ATTACK SECURE GROW)
      ctx.font = '9px monospace';
      ctx.fillStyle = 'rgba(37, 79, 122, 0.55)';
      ['LEARN', 'ATTACK', 'SECURE', 'GROW'].forEach((word, idx) => {
        ctx.fillText(word, 32, 185 + idx * 13);
      });
      ctx.restore();

      /* ?????????????????????????????????????????????????????????????????????
         7. AMBIENT FLOATING MICRO-PARTICLES
      ????????????????????????????????????????????????????????????????????? */
      ctx.save();
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        p.pulse += 0.025;

        // Skip left text area
        if (p.x > 80 && p.x < W * 0.44 && p.y > 140 && p.y < 480) return;

        const glow = 0.20 + 0.16 * Math.sin(p.pulse);
        ctx.globalAlpha = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
      });
      ctx.restore();

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
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
