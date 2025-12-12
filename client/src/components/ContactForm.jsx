// ContactForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    // demo action; later call API
    alert('Thanks! Message sent (demo).');
    reset();
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Get in touch</h2>
          <p>Questions? Want to demo your roadmap? Drop a message.</p>
        </div>

        <form id="contactForm" className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>Name</span>
            <input id="nameInput" type="text" {...register('name', { required: true })} />
          </label>
          <label>
            <span>Email</span>
            <input id="emailInput" type="email" {...register('email', { required: true })} />
          </label>
          <label>
            <span>Message</span>
            <textarea id="messageInput" rows="4" {...register('message', { required: true })} />
          </label>
          <div className="form-actions">
            <button type="submit" className="btn primary">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
