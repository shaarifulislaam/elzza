"use client";
import React, { useState } from "react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    residence: "",
    product: [],
    execution: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        product: checked
          ? [...prev.product, value]
          : prev.product.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  return (
    <>
      <div className="form-container">
        <div className="form-header">
          Wilt u een offerte aanvragen voor een van onze diensten? Vul dan
          onderstaand formulier in en we nemen zo snel mogelijk contact met u
          op!
        </div>

        <form className="form-block" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email + Phone */}
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Voer uw e-mailadres in"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Telefoonnummer</label>
              <input
                type="text"
                name="phone"
                placeholder="Voer uw telefoonnummer in"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Residence */}
          <div className="form-group">
            <label>Woonplaats</label>
            <input
              type="text"
              name="residence"
              placeholder="Voer uw woonplaats in"
              value={formData.residence}
              onChange={handleChange}
            />
          </div>

          {/* Checkbox */}
          <div className="form-group">
            <label>Maak een keuze</label>
            <div className="checkbox-group">
              {["Raamkozijnen", "Deurkozijnen", "Schuifdeuren"].map((item) => (
                <label key={item} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={item}
                    checked={formData.product.includes(item)}
                    onChange={handleChange}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Radio */}
          <div className="form-group">
            <label>Uitvoeringsmoment</label>
            <div className="radio-group">
              {[
                "Zo snel mogelijk",
                "Binnen 1 maand",
                "Tussen 3 en 6 maanden",
                "Nader te bepalen",
              ].map((item) => (
                <label key={item} className="radio-label">
                  <input
                    type="radio"
                    name="execution"
                    value={item}
                    checked={formData.execution === item}
                    onChange={handleChange}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* File Upload */}
          <div className="form-group upload-group">
            <label>Afbeelding uploaden</label>
            <div className="upload-area">
              <input type="file" name="image" accept="image/*" id="fileInput" />
              <label htmlFor="fileInput" className="upload-label">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span>Afbeelding uploaden</span>
              </label>
            </div>
          </div>

          {/* Message */}
          <div className="form-group">
            <label>Opdrachtomschrijving</label>
            <textarea
              name="message"
              placeholder="Hoe kunnen we u helpen?"
              value={formData.message}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Bericht verzenden
          </button>
        </form>
      </div>
    </>
  );
};

export default QuoteForm;
