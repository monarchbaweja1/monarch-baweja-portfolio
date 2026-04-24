const skills = [
  ["Data Science", ["Python", "Pandas", "NumPy", "EDA", "Statistics"]],
  ["Machine Learning", ["Classification", "Regression", "Clustering", "Risk Models", "Churn Prediction"]],
  ["Business Analytics", ["Dashboarding", "Financial Analysis", "Marketing Analytics", "Business Research"]],
  ["Visualisation", ["Tableau", "Power BI", "Excel"]],
  ["Development", ["React", "Tailwind", "GitHub", "SQL"]],
];

export default function Skills() {
  return (
    <section id="skills" className="content-section cinematic-section">
      <div className="section-header reveal-up">
        <p className="eyebrow">Skills</p>
        <h2>TOOLS. MODELS. INSIGHTS.</h2>
      </div>
      <div className="skills-grid">
        {skills.map(([title, list]) => (
          <article className="skill-group reveal-up" key={title}>
            <h3>{title}</h3>
            <div>
              {list.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
