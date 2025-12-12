// Testimonials.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';

async function fetchPosts() {
  const res = await fetch('/posts.json'); // place posts.json in client/public
  return res.json();
}

export default function Testimonials() {
  const { data = [], isLoading } = useQuery(['posts'], fetchPosts, { staleTime: 1000 * 60 * 5 });

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title">What users say</h2>
        <div id="testimonialsGrid" className="testimonials-grid">
          {isLoading ? <div>Loading...</div> : data.map((t, i) => (
            <div key={i} className="testimonial">
              <strong>{t.title}</strong>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
