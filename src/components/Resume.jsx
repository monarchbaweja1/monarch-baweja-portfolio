import { Download } from "lucide-react";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const rows = [
  ["Education", "MBA Big Data Analytics"],
  ["Experience", "Nexval Infotech, KreativeKode"],
  ["Certifications", "Quantitative Modeling, HSBC, Financial Analysis, KPMG"],
  ["Focus Areas", "Data Analytics, Machine Learning, Business Analytics"],
];

export default function Resume() {
  return (
    <section id="resume" className="resume-section cinematic-section">
      <div className="section-header reveal-up">
        <p className="eyebrow">Resume</p>
        <h2>RESUME AT A GLANCE.</h2>
      </div>
      <div className="resume-preview reveal-up">
        {rows.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
        <a className="cinematic-button" href={asset("Monarch-Baweja-CV.pdf")}>
          <Download size={15} />
          Download Resume
        </a>
      </div>
    </section>
  );
}
