"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="contact-section">
      <div className="el-container">
        <div className="contact-container">
          <h1 className="contact-title">Wij Staan Voor Je Klaar</h1>
          <p className="contact-subtitle">
            Heb je een vraag, feedback of een idee voor samenwerking? Ons team
            luistert graag en helpt je verder.
          </p>

          <div className="contact-content">
            <div className="form-wrapper">
              <h2 className="form-title">Laten we met ons praten</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Voer uw naam in"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Voer uw e-mailadres in"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Voer uw telefoonnummer in"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hoe kunnen we u helpen?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Bericht verzenden
                </button>
              </form>
            </div>

            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.927075296612!2d4.9965387!3d52.516658799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c601c22fec83f9%3A0x85ae15551df1c38c!2sElzza%20Kozijnen!5e0!3m2!1sen!2sbd!4v1763398930971!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
