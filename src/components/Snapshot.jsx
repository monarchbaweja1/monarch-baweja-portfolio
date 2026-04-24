const items = [
  ["MBA", "MBA Big Data Analytics", "Focused on analytics, AI, and business decision-making."],
  ["EXP", "Software Development Experience", "Practical exposure to building and supporting analytics-driven solutions."],
  ["ML", "Machine Learning + Analytics Projects", "Risk, churn, segmentation, dashboards, and applied model workflows."],
  ["BIZ", "Business + Technical Skillset", "Connects technical execution with clear business relevance."],
];

export default function Snapshot() {
  return (
    <section id="snapshot" className="snapshot-section cinematic-section">
      <div className="section-header reveal-up">
        <p className="eyebrow">Quick Snapshot</p>
        <h2>Recruiter scan in ten seconds.</h2>
      </div>
      <div className="snapshot-grid">
        {items.map(([code, title, text]) => (
          <article className="snapshot-block reveal-up" key={title}>
            <span>{code}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="workflow-strip reveal-up">
        {["Collect", "Clean", "Model", "Explain", "Decide"].map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </section>
  );
}
