// RoadmapPreview.jsx
import React from 'react';

export default function RoadmapPreview({ items = [] }) {
  return (
    <section id="roadmap" className="section light">
      <div className="container">
        <h2 className="section-title">Roadmap Preview & Posts</h2>

        <div className="posts-grid">
          <div className="post">
            <h4>Sample Roadmap</h4>
            <ul className="roadmap-list">
              {items.map(item => (
                <li key={item.id} className="task">{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
