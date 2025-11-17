"use client";

import React, { useState } from "react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const phoneNumber = "1234567890"; // Example: '8801234567890' for Bangladesh

  // Pre-filled message (optional)
  const defaultMessage = "Hello! I would like to get in touch with you.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="whatsapp-button">
        <button
          onClick={handleWhatsAppClick}
          className="whatsapp-button__main"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            className="whatsapp-button__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>

          {/* Tooltip */}
          <span className="whatsapp-button__tooltip">
            Chat with us on WhatsApp
          </span>

          {/* Pulse animation */}
          <span className="whatsapp-button__pulse"></span>
        </button>
      </div>

      {/* Optional: Popup version */}
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="whatsapp-popup__header">
            <div className="whatsapp-popup__header-content">
              <svg
                className="whatsapp-popup__header-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <div>
                <h3 className="whatsapp-popup__title">Chat with us</h3>
                <p className="whatsapp-popup__subtitle">
                  Typically replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="whatsapp-popup__close"
            >
              ×
            </button>
          </div>
          <div className="whatsapp-popup__body">
            <p className="whatsapp-popup__message">
              Hi there! 👋 How can we help you today?
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="whatsapp-popup__start-btn"
            >
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* Toggle for popup version */}
      <button onClick={() => setIsOpen(!isOpen)} className="whatsapp-toggle">
        {isOpen ? "Hide" : "Show"} Popup
      </button>
    </>
  );
}
