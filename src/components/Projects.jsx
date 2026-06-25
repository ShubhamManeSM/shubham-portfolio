const projects = [
  {
    name: 'TrendHive',
    description:
      'A modern e-commerce platform with real-time inventory management, secure payment processing, and personalized recommendations.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://picsum.photos/seed/ecommerce/600/400',
    demo: 'https://e-commerce-snowy-sigma.vercel.app/',
    code: 'https://github.com/ShubhamManeSM/e-commerce',
  },
  {
    name: 'Anvaya',
    description:
      'An intuitive CRM system designed for lead management with pipeline visualization, automated follow-ups, and detailed analytics.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'React DnD'],
    image: 'https://picsum.photos/seed/tasks/600/400',
    demo: 'https://anvaya-five.vercel.app/',
    code: 'https://github.com/ShubhamManeSM/anvaya',
  },
  {
    name: 'Mitra',
    description:
      'A collaborative project management tool inspired by Asana, featuring kanban boards, timeline views, and automated workflow.',
    tech: ['React Native', 'GraphQL', 'PostgreSQL', 'Chart.js'],
    image: 'https://picsum.photos/seed/fitness/600/400',
    demo: '#',
    code: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container">
        <div className="section-heading reveal">
          <div className="accent-bar"></div>
          <h2>Projects</h2>
          <p>Building solutions that solve real-world problems</p>
        </div>

        <div className="row g-4 reveal-stagger">
          {projects.map((project, idx) => (
            <div
              className="col-md-6 col-lg-4 reveal"
              key={project.name}
              style={{ '--i': idx }}
            >
              <div className="project-card">
                <div className="card-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{project.name}</h4>
                  <p className="card-text mt-2">{project.description}</p>
                  <div className="mt-3">
                    {project.tech.map((t) => (
                      <span className="tech-badge" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex gap-2 mt-auto pt-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-demo"
                    >
                      <i className="bi bi-eye"></i> Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-code"
                    >
                      <i className="bi bi-code-slash"></i> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
