import React from 'react';

function Hero({ onGenerate, previewItems = [] }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1>Personalized learning roadmaps powered by AI</h1>
          <p className="lead">
            Tell us what you know and where you want to go — get a step-by-step plan, daily tasks, and progress tracking.
          </p>
          <div className="hero-ctas">
            <button id="heroGenerate" className="btn primary" onClick={onGenerate}>Generate Roadmap</button>
            <a href="#features" className="btn ghost">See features</a>
          </div>

          <ul className="hero-stats">
            <li><strong id="usersCount">1.2k</strong><span>users</span></li>
            <li><strong>95%</strong><span>completion rate</span></li>
            <li><strong>Deployed</strong><span>Vercel/Render</span></li>
          </ul>
        </div>

        <div className="hero-right">
          <div className="mockup-card">
            <h3>Your sample roadmap (preview)</h3>
            <ul id="roadmapPreview" className="roadmap-list">
              {previewItems.map(item => (
                <li key={item.id} className="task">{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
