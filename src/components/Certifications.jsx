const certifications = [
  {
    title: "Fundamentals of Quantitative Modeling",
    issuer: "University of Pennsylvania, Coursera",
    year: "2025",
    detail: "Built foundation in model thinking, quantitative structure, and analytical interpretation.",
  },
  {
    title: "Global Banking & Markets Job Simulation",
    issuer: "HSBC, Forage",
    year: "2025",
    detail: "Worked through finance-sector business scenarios aligned with markets, banking, and analysis.",
  },
  {
    title: "Corporate Financial Statement Analysis",
    issuer: "LinkedIn Learning",
    year: "2025",
    detail: "Strengthened ability to read financial statements and convert business performance into insight.",
  },
  {
    title: "Data Analytics Consulting Virtual Internship",
    issuer: "KPMG, Forage",
    year: "2023",
    detail: "Practiced analytics consulting workflows across data cleaning, insight generation, and reporting.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="content-section cinematic-section">
      <div className="section-header reveal-up">
        <p className="eyebrow">Certifications</p>
        <h2>CREDENTIALS THAT SUPPORT THE WORK.</h2>
        <p>
          Focused certifications across quantitative modeling, banking, financial analysis, and analytics consulting.
        </p>
      </div>
      <div className="certifications-grid">
        {certifications.map((certification) => (
          <article className="certification-panel reveal-up" key={certification.title}>
            <span>{certification.year}</span>
            <h3>{certification.title}</h3>
            <p>{certification.issuer}</p>
            <strong>{certification.detail}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
