import { useState, useEffect } from 'react';

const roles = [
  'Full Stack Developer',
  'Backend Developer',
  'Node.js Engineer',
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 90);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 hero-content">
            <div className="d-flex align-items-center gap-2 mb-4">
              <span className="status-dot"></span>
              <span
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                }}
              >
                Available for freelance work
              </span>
            </div>

            <h1>Shubham Mane</h1>

            <p className="hero-subtitle mt-3">
              <span className="typed-text">
                {roles[roleIndex].substring(0, charIndex)}
              </span>
              <span className="cursor"></span>
            </p>

            <div
              className="accent-bar mt-4"
              style={{ width: '80px', height: '4px' }}
            ></div>

            <p className="hero-bio mt-4">
              I enjoy turning ideas into clean, functional web apps. Primarily
              working with React and the JavaScript ecosystem, I focus on
              building interfaces that are fast, accessible, and a pleasure to
              use.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a href="#contact" className="btn-accent">
                Contact Me
                <i className="bi bi-arrow-up-right"></i>
              </a>
              <a href="#" className="btn-outline-accent">
                Resume
                <i className="bi bi-file-earmark-text"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
