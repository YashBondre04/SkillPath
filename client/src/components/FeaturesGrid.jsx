// FeaturesGrid.jsx
import React from 'react';

export default function FeaturesGrid() {
  const items = [
    { title: 'Personalized', desc: 'Roadmaps tailored to your goals and time availability.' },
    { title: 'Track Progress', desc: 'Daily tasks, streaks, and completion analytics.' },
    { title: 'Export & Share', desc: 'Export your plan as PDF or share a public link.' }
  ];

  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title">Why SkillPath AI</h2>
        <div className="features-grid">
          {items.map((f, i) => (
            <div key={i} className="feature">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
