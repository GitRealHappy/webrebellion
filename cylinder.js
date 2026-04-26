(function initCylinder() {
  const stage = document.querySelector(".cylinder-stage");
  const cylinder = document.getElementById("cylinder");
  if (!stage || !cylinder) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.innerWidth <= 720;
  const panelCount = isMobile ? 8 : 16;
  const angleStep = 360 / panelCount;

  for (let i = 0; i < panelCount; i++) {
    const panel = document.createElement("div");
    panel.className = "panel";
    panel.style.setProperty("--angle", `${i * angleStep}deg`);
    panel.innerHTML = makeMotif(i);
    cylinder.appendChild(panel);
  }

  if (reduce) {
    stage.classList.add("is-static");
    return;
  }

  let targetRot = 0;
  let currentRot = 0;
  let rafId = null;

  const onScroll = () => {
    targetRot = (window.scrollY / window.innerHeight) * 180;
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  function tick() {
    currentRot += (targetRot - currentRot) * 0.08;
    currentRot += 0.02;
    cylinder.style.setProperty("--rot", `${currentRot.toFixed(3)}deg`);
    rafId = requestAnimationFrame(tick);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
    } else if (rafId === null) {
      rafId = requestAnimationFrame(tick);
    }
  });

  rafId = requestAnimationFrame(tick);

  // ---- Motif factories: pure geometric SVG, all using viewBox 0 0 1100 280 ----

  function makeMotif(i) {
    const motifs = [coordGrid, concentricArcs, isoTess, radialFan, diagWeave, reticle];
    const seed = i * 17 + 31;
    return motifs[i % motifs.length](seed);
  }

  function svgWrap(inner) {
    return `<svg viewBox="0 0 1100 280" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
  }

  function coordGrid() {
    let g = "";
    for (let x = 0; x <= 1100; x += 40) {
      const stroke = x % 200 === 0 ? "#2A3E5C" : "#1A2438";
      g += `<line x1="${x}" y1="0" x2="${x}" y2="280" stroke="${stroke}" stroke-width="0.5"/>`;
    }
    for (let y = 0; y <= 280; y += 40) {
      const stroke = y % 200 === 0 ? "#2A3E5C" : "#1A2438";
      g += `<line x1="0" y1="${y}" x2="1100" y2="${y}" stroke="${stroke}" stroke-width="0.5"/>`;
    }
    for (let x = 200; x < 1100; x += 200) {
      g += `<text x="${x + 4}" y="14" fill="#4A5878" font-family="IBM Plex Mono, monospace" font-size="9" letter-spacing="1">${String(x).padStart(4, "0")}</text>`;
    }
    return svgWrap(g);
  }

  function concentricArcs(seed) {
    const cx = (seed * 13) % 800 + 150;
    const cy = 280;
    const radii = [40, 70, 115, 175, 250, 340, 460];
    let g = "";
    for (const r of radii) {
      g += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#2A3E5C" stroke-width="0.5"/>`;
    }
    g += `<circle cx="${cx}" cy="${cy}" r="6" fill="#5CE1FF" opacity="0.35"/>`;
    g += `<line x1="${cx - 12}" y1="${cy - 460}" x2="${cx + 12}" y2="${cy - 460}" stroke="#5CE1FF" stroke-width="0.5" opacity="0.5"/>`;
    return svgWrap(g);
  }

  function isoTess(seed) {
    let g = "";
    const w = 32;
    const h = w * Math.sqrt(3) / 2;
    const cols = Math.ceil(1100 / w) + 2;
    const rows = Math.ceil(280 / h) + 2;
    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const x = col * w + (row % 2 ? w / 2 : 0);
        const y = row * h;
        g += `<path d="M ${x} ${y} l ${w} 0 l ${-w / 2} ${h} z" fill="none" stroke="#1A2438" stroke-width="0.5"/>`;
        g += `<path d="M ${x + w} ${y} l ${-w / 2} ${h} l ${w / 2} ${h} z" fill="none" stroke="#1A2438" stroke-width="0.5"/>`;
      }
    }
    for (let n = 0; n < 7; n++) {
      const px = (seed * (n + 1) * 91) % 1000 + 50;
      const py = (seed * (n + 3) * 53) % 240 + 20;
      g += `<circle cx="${px}" cy="${py}" r="2" fill="#5CE1FF" opacity="0.4"/>`;
    }
    return svgWrap(g);
  }

  function radialFan(seed) {
    const ox = -((seed * 11) % 200) - 50;
    const oy = 340;
    let g = "";
    for (let a = -10; a < 90; a += 5) {
      const rad = (a - 45) * Math.PI / 180;
      const x = ox + Math.cos(rad) * 1800;
      const y = oy + Math.sin(rad) * 1800;
      g += `<line x1="${ox}" y1="${oy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#2A3E5C" stroke-width="0.5"/>`;
    }
    for (let a = -9; a < 90; a += 1) {
      if (a % 5 === 0) continue;
      const rad = (a - 45) * Math.PI / 180;
      const x = ox + Math.cos(rad) * 1800;
      const y = oy + Math.sin(rad) * 1800;
      g += `<line x1="${ox}" y1="${oy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#1A2438" stroke-width="0.3" opacity="0.5"/>`;
    }
    return svgWrap(g);
  }

  function diagWeave() {
    let g = '<g transform="rotate(15 550 140)">';
    for (let x = -300; x <= 1700; x += 48) {
      g += `<line x1="${x}" y1="-200" x2="${x}" y2="500" stroke="#1A2438" stroke-width="0.5" opacity="0.7"/>`;
    }
    g += "</g>";
    g += '<g transform="rotate(-15 550 140)">';
    for (let x = -300; x <= 1700; x += 48) {
      g += `<line x1="${x}" y1="-200" x2="${x}" y2="500" stroke="#2A3E5C" stroke-width="0.5" opacity="0.55"/>`;
    }
    g += "</g>";
    return svgWrap(g);
  }

  function reticle(seed) {
    const cx = (seed * 7) % 700 + 250;
    const cy = 140;
    let g = "";
    g += `<line x1="${cx - 480}" y1="${cy}" x2="${cx + 480}" y2="${cy}" stroke="#2A3E5C" stroke-width="0.5"/>`;
    g += `<line x1="${cx}" y1="0" x2="${cx}" y2="280" stroke="#2A3E5C" stroke-width="0.5"/>`;
    for (let d = -440; d <= 440; d += 40) {
      const len = Math.abs(d) % 80 === 0 ? 8 : 4;
      g += `<line x1="${cx + d}" y1="${cy - len}" x2="${cx + d}" y2="${cy + len}" stroke="#2A3E5C" stroke-width="0.5"/>`;
    }
    for (let d = -120; d <= 120; d += 40) {
      const len = 6;
      g += `<line x1="${cx - len}" y1="${cy + d}" x2="${cx + len}" y2="${cy + d}" stroke="#2A3E5C" stroke-width="0.5"/>`;
    }
    g += `<circle cx="${cx}" cy="${cy}" r="24" fill="none" stroke="#5CE1FF" stroke-width="0.5" opacity="0.45"/>`;
    g += `<circle cx="${cx}" cy="${cy}" r="3" fill="#5CE1FF" opacity="0.55"/>`;
    return svgWrap(g);
  }
})();
