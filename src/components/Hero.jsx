import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import DataConstellation from "./DataConstellation.jsx";
import TextReveal from "./TextReveal.jsx";

export default function Hero() {
  return (
    <section id="intro" className="hero-section cinematic-section">
      <div className="hero-copy page-load">
        <p className="eyebrow">Monarch Baweja</p>
        <h1 className="hero-title">
          <TextReveal delay={0.04}>DATA.</TextReveal>
          <TextReveal delay={0.16}>AI.</TextReveal>
          <TextReveal delay={0.28}>STRATEGY.</TextReveal>
          <TextReveal delay={0.4}>REIMAGINED.</TextReveal>
        </h1>
        <p className="hero-subtitle">
          Monarch Baweja - MBA Big Data Analytics student building data, AI, and business analytics solutions.
        </p>
        <p className="role-line">Target roles: Data Analyst | Data Scientist | Business Analyst | AI/ML Intern</p>
        <div className="button-row">
          <a className="cinematic-button" href="#projects">View Projects</a>
          <a className="cinematic-button secondary" href="/Monarch-Baweja-CV.pdf">
            <Download size={15} />
            Download Resume
          </a>
          <a className="cinematic-button secondary" href="#contact">
            <Mail size={15} />
            Contact Me
          </a>
        </div>
      </div>

      <motion.div
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="hero-photo page-load"
        initial={{ opacity: 0, scale: 0.9, y: 22 }}
        transition={{ duration: 0.85, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
      >
        <img src="/profile.jpg" alt="Monarch Baweja professional portrait" />
        <span className="photo-orbit" />
      </motion.div>

      <div className="hero-data page-load">
        <DataConstellation />
      </div>

      <div className="scroll-cue">scroll to discover</div>
    </section>
  );
}
