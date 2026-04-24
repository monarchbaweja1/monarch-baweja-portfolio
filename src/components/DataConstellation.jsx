import { useEffect, useRef, useState } from "react";

const points = [
  [18, 34, "feature_01"],
  [34, 22, "risk_score"],
  [52, 36, "cluster_a"],
  [69, 24, "churn_prob"],
  [82, 44, "segment_b"],
  [26, 68, "revenue"],
  [47, 62, "model_fit"],
  [66, 74, "insight"],
];

export default function DataConstellation() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    const move = (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 12, y: y * -10 });
    };
    const leave = () => setTilt({ x: 0, y: 0 });

    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", leave);
    return () => {
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="data-constellation" ref={ref}>
      <div
        className="data-stage"
        style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
      >
        <div className="model-plane" />
        <div className="axis axis-x" />
        <div className="axis axis-y" />
        <div className="axis axis-z" />
        <svg className="data-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polyline points="18,34 34,22 52,36 69,24 82,44" />
          <polyline points="26,68 47,62 66,74 82,44" />
          <polyline points="34,22 47,62 69,24" />
        </svg>
        {points.map(([x, y, label], index) => (
          <span
            className="data-point"
            key={label}
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${index * 0.18}s` }}
          >
            <i />
            <em>{label}</em>
          </span>
        ))}
        <div className="model-readout">
          <span>live model space</span>
          <strong>0.91</strong>
          <small>confidence</small>
        </div>
      </div>
    </div>
  );
}
