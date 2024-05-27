// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css'; // Importiere die CSS-Datei

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Formulardaten verarbeiten (z.B. per API senden)
    console.log('Form submitted:', form);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Nachricht:</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Absenden</button>
    </form>
  );
};

export default ContactForm;
