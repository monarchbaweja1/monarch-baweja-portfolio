import { motion } from "framer-motion";

export default function TextReveal({ children, className = "", delay = 0 }) {
  return (
    <span className={`mask-line ${className}`}>
      <motion.span
        animate={{ y: "0%" }}
        initial={{ y: "112%" }}
        transition={{ duration: 0.78, delay, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}
