const contacts = [
  {
    icon: 'bi-envelope-fill',
    label: 'Email',
    value: 'shubhammane7096@gmail.com',
    href: 'mailto:shubhammane7096@gmail.com',
  },
  {
    icon: 'bi-github',
    label: 'GitHub',
    value: '@ShubhamMane',
    href: 'https://github.com/ShubhamManeSM',
  },
  {
    icon: 'bi-linkedin',
    label: 'LinkedIn',
    value: 'Connect',
    href: 'https://www.linkedin.com/in/shubham-mane-262342206/',
  },
  {
    icon: 'bi-twitter-x',
    label: 'Twitter',
    value: 'Follow',
    href: 'https://x.com/ShubhamManeSM',
  },
];

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-heading reveal">
          <div className="accent-bar"></div>
          <h2>Let's build something together</h2>
          <p>
            Have a project in mind or just want to say hello? My inbox is always
            open.
          </p>
        </div>

        <div className="row g-4 reveal-stagger">
          {contacts.map((c, idx) => (
            <div
              className="col-md-6 col-lg-3 reveal"
              key={c.label}
              style={{ '--i': idx }}
            >
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <span className="icon-box">
                  <i className={`bi ${c.icon}`}></i>
                </span>
                <div className="contact-info">
                  <p className="contact-label mb-0">{c.label}</p>
                  <p className="contact-value mb-0">{c.value}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
