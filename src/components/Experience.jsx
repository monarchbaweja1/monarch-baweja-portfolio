const experience = [
  {
    role: "Junior Software Developer",
    company: "Nexval Infotech",
    period: "Professional Experience",
    bullets: [
      "Built and supported analytics-driven software solutions.",
      "Worked with ML models for risk assessment, churn prediction, and customer segmentation.",
      "Connected technical implementation with business use cases.",
    ],
  },
  {
    role: "Research Analyst Intern",
    company: "KreativeKode",
    period: "Apr 2026 - Aug 2026",
    bullets: [
      "Working on structured research, business analysis, and data-backed reporting.",
      "Creating market and business insights aligned with analytics and AI use cases.",
      "Strengthening research, synthesis, and analytical communication skills.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="content-section cinematic-section">
      <div className="section-header reveal-up">
        <p className="eyebrow">Experience</p>
        <h2>EXPERIENCE THAT CONNECTS TECH AND BUSINESS.</h2>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <article className="timeline-item reveal-up" key={item.role}>
            <div className="timeline-marker">0{index + 1}</div>
            <div className="timeline-content">
              <p>{item.period}</p>
              <h3>{item.role} — {item.company}</h3>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
