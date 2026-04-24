const projects = [
  {
    title: "Financial Dashboard & Annual Report Analysis",
    problem: "Converted annual report data into structured financial insights.",
    tools: "Excel, Power BI/Tableau, Financial Analysis",
    outcome: "Built dashboard-style analysis for business decision-making.",
  },
  {
    title: "Customer Churn Prediction",
    problem: "Identified customers at risk of leaving.",
    tools: "Python, Pandas, Scikit-learn, Classification",
    outcome: "Supported retention-focused decision-making.",
  },
  {
    title: "Risk Assessment ML Model",
    problem: "Built model support for risk identification.",
    tools: "Python, ML, Feature Engineering",
    outcome: "Helped classify risk patterns for business use cases.",
  },
  {
    title: "Marketing Analytics Segmentation",
    problem: "Grouped customers based on behaviour and attributes.",
    tools: "Python/R, Clustering, Analytics",
    outcome: "Supported targeted marketing strategy.",
  },
  {
    title: "Tableau Road Accident Dashboard",
    problem: "Analysed urban road accident data visually.",
    tools: "Tableau, Data Visualisation, EDA",
    outcome: "Converted raw accident data into actionable dashboard insights.",
  },
  {
    title: "AI Portfolio Website",
    problem: "Built a personal brand website for analytics and AI roles.",
    tools: "React, Tailwind, Framer Motion",
    outcome: "Created a recruiter-facing professional portfolio.",
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
          <article className="project-panel reveal-up" key={project.title}>
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
          </article>
        ))}
      </div>
    </section>
  );
}
