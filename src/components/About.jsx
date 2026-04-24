const blocks = [
  [
    "What I Do",
    "I turn data into structured insights through analysis, models, dashboards, and storytelling that business teams can use.",
  ],
  [
    "What I Am Looking For",
    "I am focused on Data Analyst, Data Scientist, Business Analyst, and AI/ML internship opportunities where analytics creates visible business impact.",
  ],
  [
    "What Makes Me Different",
    "I combine software development exposure with business analytics thinking, so I can understand implementation details and the decision context behind them.",
  ],
];

export default function About() {
  return (
    <section id="about" className="content-section cinematic-section">
      <div className="section-header reveal-up">
        <p className="eyebrow">About</p>
        <h2>FIRST, A SOLID FOUNDATION.</h2>
        <p>
          I am an MBA Big Data Analytics student with experience across software development, machine learning,
          analytics, and business problem-solving. My work connects technical execution with business impact through
          data-driven thinking, analytical models, and clear storytelling.
        </p>
      </div>
      <div className="about-grid">
        {blocks.map(([title, text]) => (
          <article className="cinematic-panel reveal-up" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
