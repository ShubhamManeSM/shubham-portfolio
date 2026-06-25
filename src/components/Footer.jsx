function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2">
          <p>© {new Date().getFullYear()} Shubham Mane. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', fontFamily: 'monospace' }}>
            Designed & built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
