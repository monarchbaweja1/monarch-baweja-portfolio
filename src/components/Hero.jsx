import { motion } from "framer-motion";
import { Code2, Download, ExternalLink, Mail } from "lucide-react";
import DataConstellation from "./DataConstellation.jsx";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export default function Hero() {
  return (
    <section id="intro" className="hero-section cinematic-section">
      <div className="hero-editorial-card page-load">
        <div className="hero-copy">
          <p className="eyebrow">Monarch Baweja</p>
          <h1 className="hero-title editorial-title">
            <span>Inside My</span>
            <span>Data Core</span>
          </h1>
          <div className="hero-subtitle editorial-copy">
            <p>
              I'm a <mark>MBA Big Data Analytics student</mark> with a passion for converting raw data into clear,
              business-ready intelligence. I work across analytics, dashboards, machine learning, and structured
              problem solving.
            </p>
            <p>
              I enjoy solving real-world business problems and <mark>turning complex datasets</mark> into clean,
              decision-focused insights for teams and recruiters.
            </p>
          </div>
          <p className="role-line">Target roles: Data Analyst | Data Scientist | Business Analyst | AI/ML Intern</p>
          <div className="button-row">
            <a className="cinematic-button" href="#projects">View Projects</a>
            <a className="cinematic-button secondary" href={asset("Monarch-Baweja-CV.pdf")}>
              <Download size={15} />
              Download Resume
            </a>
            <a className="cinematic-button secondary" href="#contact">
              <Mail size={15} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-profile-stack">
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="hero-photo"
            initial={{ opacity: 0, scale: 0.9, y: 22 }}
            transition={{ duration: 0.85, delay: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            <img src={asset("profile.jpg")} alt="Monarch Baweja professional portrait" />
          </motion.div>
          <div className="profile-follow">
            <span>Connect:</span>
            <a href="mailto:monarch.baweja25b@gim.ac.in" aria-label="Email Monarch Baweja"><Mail size={18} /></a>
            <a href="https://www.linkedin.com/in/monarchbaweja" aria-label="Open LinkedIn" target="_blank" rel="noreferrer">
              <ExternalLink size={18} />
            </a>
            <a href="https://github.com/" aria-label="Open GitHub" target="_blank" rel="noreferrer"><Code2 size={18} /></a>
          </div>
        </div>
      </div>

      <div className="hero-data page-load">
        <DataConstellation />
      </div>

      <div className="scroll-cue">scroll to discover</div>
    </section>
  );
}
