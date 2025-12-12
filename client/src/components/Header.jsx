// Header.jsx
import React from 'react';
function Header({ onGenerate }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="/" className="brand">SkillPath<span className="accent">AI</span></a>

        <button
          id="navToggle"
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen(v => !v)}
        >
          <span className="hamburger" />
        </button>

        <nav id="mainNav" className="nav">
          <ul className={`nav-list ${open ? 'show' : ''}`}>
            <li><a href="#features">Features</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <button className="btn primary" onClick={onGenerate}>Generate Roadmap</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
