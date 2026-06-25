const stack = [
  {
    group: 'Frontend',
    icon: 'bi-window-stack',
    items: ['React', 'Next.js', 'TypeScript', 'Redux', 'Zustand', 'Tailwind CSS'],
  },
  {
    group: 'Backend',
    icon: 'bi-hdd-rack',
    items: ['Node.js', 'Express', 'JWT', 'Python', 'Flask', 'GraphQL'],
  },
  {
    group: 'Database',
    icon: 'bi-database',
    items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'SQLAlchemy', 'Supabase'],
  },
  {
    group: 'Tooling',
    icon: 'bi-tools',
    items: ['Git', 'GitHub', 'Vercel', 'Railway', 'CI/CD', 'VS Code'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-heading reveal">
          <div className="accent-bar"></div>
          <h2>Tech Stack</h2>
          <p>Technologies and tools I work with every day</p>
        </div>

        <div className="row g-4 reveal-stagger">
          {stack.map((group, idx) => (
            <div
              className="col-md-6 col-lg-3 reveal"
              key={group.group}
              style={{ '--i': idx }}
            >
              <div className="skill-group-card">
                <h4>
                  <i
                    className={`bi ${group.icon} me-2`}
                    style={{ color: 'var(--accent)' }}
                  ></i>
                  {group.group}
                </h4>
                {group.items.map((item) => (
                  <div className="skill-item" key={item}>
                    <span className="skill-dot"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
