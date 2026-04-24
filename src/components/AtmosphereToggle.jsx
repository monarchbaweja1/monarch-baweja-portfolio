import { useEffect, useRef } from "react";
import { Moon, Sparkles } from "lucide-react";

function playAtmosphereSound(active) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const now = context.currentTime;
  const master = context.createGain();
  const filter = context.createBiquadFilter();
  const oscillator = context.createOscillator();
  const shimmer = context.createOscillator();

  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(active ? 0.045 : 0.028, now + 0.08);
  master.gain.exponentialRampToValueAtTime(0.0001, now + (active ? 0.72 : 0.56));

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(active ? 420 : 720, now);
  filter.frequency.exponentialRampToValueAtTime(active ? 1400 : 240, now + (active ? 0.55 : 0.46));
  filter.Q.setValueAtTime(0.85, now);

  oscillator.type = "sine";
  shimmer.type = "triangle";
  oscillator.frequency.setValueAtTime(active ? 140 : 260, now);
  oscillator.frequency.exponentialRampToValueAtTime(active ? 330 : 96, now + 0.52);
  shimmer.frequency.setValueAtTime(active ? 520 : 360, now);
  shimmer.frequency.exponentialRampToValueAtTime(active ? 880 : 180, now + 0.45);

  oscillator.connect(filter);
  shimmer.connect(filter);
  filter.connect(master);
  master.connect(context.destination);
  oscillator.start(now);
  shimmer.start(now + 0.025);
  oscillator.stop(now + 0.78);
  shimmer.stop(now + 0.62);

  window.setTimeout(() => context.close(), 900);
}

export default function AtmosphereToggle({ active, onToggle }) {
  const hasInteracted = useRef(false);

  useEffect(() => {
    if (!hasInteracted.current) return;
    playAtmosphereSound(active);
  }, [active]);

  return (
    <button
      className={`atmosphere-toggle ${active ? "active" : ""}`}
      type="button"
      aria-label={active ? "Switch to calm atmosphere" : "Switch to enhanced atmosphere"}
      aria-pressed={active}
      onClick={() => {
        hasInteracted.current = true;
        onToggle((value) => !value);
      }}
    >
      <span className="toggle-icon">{active ? <Sparkles size={14} /> : <Moon size={14} />}</span>
      <span className="toggle-track">
        <span className="toggle-thumb" />
      </span>
      <span className="toggle-text">{active ? "Enhanced" : "Calm"}</span>
    </button>
  );
}
