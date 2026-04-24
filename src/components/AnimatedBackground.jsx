import { useEffect, useRef } from "react";

export default function AnimatedBackground({ enhanced = false }) {
  const canvasRef = useRef(null);
  const enhancedRef = useRef(enhanced);

  useEffect(() => {
    enhancedRef.current = enhanced;
  }, [enhanced]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pointer = { x: -9999, y: -9999, active: false };
    let width = 0;
    let height = 0;
    let raf = 0;
    let nodes = [];
    let intensity = enhancedRef.current ? 1 : 0;

    const dprValue = () => Math.min(window.devicePixelRatio || 1, 2);

    const createNode = (zone, index) => {
      const dpr = dprValue();
      const edgeX = zone === "left" ? width * 0.16 : zone === "right" ? width * 0.86 : width * 0.5;
      const spread = zone === "center" ? width * 0.56 : width * 0.22;
      const x = edgeX + (Math.random() - 0.5) * spread;
      const y = Math.random() * height;

      return {
        baseX: x,
        baseY: y,
        x,
        y,
        r: (Math.random() * 1.9 + 1.15) * dpr,
        depth: zone === "center" ? 0.26 + Math.random() * 0.3 : 0.68 + Math.random() * 0.42,
        phase: index * 0.37 + Math.random() * 5,
        hue: Math.random() > 0.82 ? "gold" : "blue",
        vx: (Math.random() - 0.5) * 0.075 * dpr,
        vy: (Math.random() - 0.5) * 0.075 * dpr,
      };
    };

    const resize = () => {
      const dpr = dprValue();
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      const leftCount = window.innerWidth < 768 ? 30 : 56;
      const rightCount = window.innerWidth < 768 ? 14 : 26;
      const centerCount = window.innerWidth < 768 ? 8 : 16;

      nodes = [
        ...Array.from({ length: leftCount }, (_, index) => createNode("left", index)),
        ...Array.from({ length: rightCount }, (_, index) => createNode("right", index + leftCount)),
        ...Array.from({ length: centerCount }, (_, index) => createNode("center", index + leftCount + rightCount)),
      ];
    };

    const drawConnections = (dpr) => {
      nodes.forEach((node, index) => {
        for (let next = index + 1; next < nodes.length; next += 1) {
          const other = nodes[next];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 164 * dpr;

          if (distance < maxDistance) {
            const opacity = (0.1 + intensity * 0.28) * (1 - distance / maxDistance) * Math.min(node.depth, other.depth);
            ctx.strokeStyle = `rgba(64, 159, 205, ${opacity})`;
            ctx.lineWidth = (0.45 + intensity * 0.55) * dpr;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });
    };

    const drawPointerLinks = (dpr) => {
      if (!pointer.active) return;

      nodes.forEach((node) => {
        const dx = node.x - pointer.x;
        const dy = node.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 230 * dpr;

        if (distance < maxDistance) {
          ctx.strokeStyle = `rgba(200, 181, 116, ${(0.16 + intensity * 0.28) * (1 - distance / maxDistance)})`;
          ctx.lineWidth = (0.65 + intensity * 0.6) * dpr;
          ctx.beginPath();
          ctx.moveTo(pointer.x, pointer.y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      });
    };

    const drawNodes = () => {
      nodes.forEach((node) => {
        const color = node.hue === "gold" ? [200, 181, 116] : [56, 126, 158];
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.r * (5.5 + intensity * 7));
        glow.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${(0.28 + intensity * 0.52) * node.depth})`);
        glow.addColorStop(0.42, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${(0.09 + intensity * 0.28) * node.depth})`);
        glow.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${(0.46 + intensity * 0.54) * node.depth})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * (0.85 + intensity * 0.35), 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const draw = (time) => {
      const dpr = dprValue();
      const target = enhancedRef.current ? 1 : 0;
      intensity += (target - intensity) * 0.045;
      canvas.style.filter = `brightness(${0.82 + intensity * 0.45}) contrast(${1 + intensity * 0.32}) saturate(${0.92 + intensity * 0.22})`;
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        const driftX = Math.sin(time * 0.00018 + node.phase) * 15 * node.depth * dpr;
        const driftY = Math.cos(time * 0.00015 + node.phase) * 20 * node.depth * dpr;
        const dx = node.x - pointer.x;
        const dy = node.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const push = pointer.active && distance < 180 * dpr ? (1 - distance / (180 * dpr)) * 42 * dpr : 0;
        const angle = Math.atan2(dy, dx);

        node.baseX += node.vx;
        node.baseY += node.vy;
        if (node.baseX < -30 * dpr) node.baseX = width + 30 * dpr;
        if (node.baseX > width + 30 * dpr) node.baseX = -30 * dpr;
        if (node.baseY < -30 * dpr) node.baseY = height + 30 * dpr;
        if (node.baseY > height + 30 * dpr) node.baseY = -30 * dpr;

        node.x = node.baseX + driftX + Math.cos(angle) * push;
        node.y = node.baseY + driftY + Math.sin(angle) * push;
      });

      drawConnections(dpr);
      drawPointerLinks(dpr);
      drawNodes();
      raf = requestAnimationFrame(draw);
    };

    const pointerMove = (event) => {
      const dpr = dprValue();
      pointer.x = event.clientX * dpr;
      pointer.y = event.clientY * dpr;
      pointer.active = true;
    };

    const pointerLeave = () => {
      pointer.active = false;
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", pointerMove);
    window.addEventListener("pointerleave", pointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("pointerleave", pointerLeave);
    };
  }, []);

  return (
    <div className={`animated-background ${enhanced ? "enhanced" : ""}`} aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="bg-organic bg-organic-one" />
      <div className="bg-organic bg-organic-two" />
      <div className="network-vignette" />
      <div className="grain" />
    </div>
  );
}
