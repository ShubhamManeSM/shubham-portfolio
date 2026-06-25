const projects = [
  {
    name: 'TrendHive',
    description:
      'A full-featured e-commerce storefront for browsing products, managing a cart & wishlist, and completing a seamless checkout experience.',
    tech: ['React', 'React Bootstrap', 'React Router', 'React Icons', 'Vite'],
    image: '/trendhive.png',
    demo: 'https://e-commerce-snowy-sigma.vercel.app/',
    code: 'https://github.com/ShubhamManeSM/e-commerce',
  },
  {
    name: 'Anvaya',
    description:
      'A CRM dashboard for sales teams to track leads, manage agents, and visualize performance with interactive charts and analytics.',
    tech: ['React', 'React Bootstrap', 'Chart.js', 'Axios', 'Vite'],
    image: '/anvaya.png',
    demo: 'https://anvaya-five.vercel.app/',
    code: 'https://github.com/ShubhamManeSM/anvaya',
  },
];

function Projects() {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container">
        <div className="section-heading reveal">
          <div className="accent-bar"></div>
          <h2>Projects</h2>
          <p>A few things I've shipped recently</p>
        </div>

        <div className="row g-4 reveal-stagger justify-content-center">
          {projects.map((project, idx) => (
            <div
              className="col-md-6 col-lg-6 reveal"
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
