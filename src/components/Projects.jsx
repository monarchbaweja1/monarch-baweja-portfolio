const projects = [
  {
    title: "Financial Dashboard & Annual Report Analysis",
    problem: "Converted annual report data into structured financial insights.",
    tools: "Excel, Power BI/Tableau, Financial Analysis",
    outcome: "Built dashboard-style analysis for business decision-making.",
    did: [
      "Structured annual report figures into clean analysis tables.",
      "Created dashboard views for revenue, cost, margin, and trend interpretation.",
      "Translated financial movement into business-readable insights.",
    ],
  },
  {
    title: "Customer Churn Prediction",
    problem: "Identified customers at risk of leaving.",
    tools: "Python, Pandas, Scikit-learn, Classification",
    outcome: "Supported retention-focused decision-making.",
    did: [
      "Cleaned and explored customer-level telecom behaviour data.",
      "Built classification workflow to flag high-risk churn customers.",
      "Interpreted model output for retention-focused business actions.",
    ],
  },
  {
    title: "Risk Assessment ML Model",
    problem: "Built model support for risk identification.",
    tools: "Python, ML, Feature Engineering",
    outcome: "Helped classify risk patterns for business use cases.",
    did: [
      "Engineered risk-focused input features from structured data.",
      "Compared model behaviour and tuned for stronger classification.",
      "Connected prediction outputs with practical risk review use cases.",
    ],
  },
  {
    title: "Marketing Analytics Segmentation",
    problem: "Grouped customers based on behaviour and attributes.",
    tools: "Python/R, Clustering, Analytics",
    outcome: "Supported targeted marketing strategy.",
    did: [
      "Prepared customer attributes for behaviour-based segmentation.",
      "Applied clustering logic to form usable customer groups.",
      "Mapped segments to campaign and targeting recommendations.",
    ],
  },
  {
    title: "Tableau Road Accident Dashboard",
    problem: "Analysed urban road accident data visually.",
    tools: "Tableau, Data Visualisation, EDA",
    outcome: "Converted raw accident data into actionable dashboard insights.",
    did: [
      "Performed EDA on accident patterns across location and severity.",
      "Built visual dashboard views for fast pattern recognition.",
      "Highlighted actionable road-safety and monitoring insights.",
    ],
  },
  {
    title: "AI Portfolio Website",
    problem: "Built a personal brand website for analytics and AI roles.",
    tools: "React, Tailwind, Framer Motion",
    outcome: "Created a recruiter-facing professional portfolio.",
    did: [
      "Designed a cinematic recruiter-facing portfolio structure.",
      "Added animated neural background and interactive model visual.",
      "Deployed the site publicly through GitHub Pages.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="content-section cinematic-section">
      <div className="section-header reveal-up">
        <p className="eyebrow">Selected Projects</p>
        <h2>SELECTED WORK. REAL PROBLEM SOLVING.</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-panel reveal-up" key={project.title} tabIndex={0}>
            <div className="project-base">
              <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{project.title}</h3>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Tools</dt>
                  <dd>{project.tools}</dd>
                </div>
                <div>
                  <dt>Outcome</dt>
                  <dd>{project.outcome}</dd>
                </div>
              </dl>
              <button>View Case Study</button>
            </div>
            <div className="project-hover-card" aria-hidden="true">
              <span>What I Did</span>
              <h4>{project.title}</h4>
              <ul>
                {project.did.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
