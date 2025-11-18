import React from "react";

const ContactInfo = () => {
  const contactData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "E-mail",
      description: "Wij zullen binnen 2 werkdagen antwoorden.",
      contact: "info@elza.nl",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Telefoon",
      description:
        "Wij zijn bereikbaar van maandag tot en met vrijdag van 9.00 tot 17.00 uur.",
      contact: "+31 (22) 222 222",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Hoofdkantoor",
      description: "Bezoek ons op ons kantoor",
      contact: "Ampèrestraat 54 1446 TS Purmerend",
    },
  ];

  return (
    <section className="contact-info-section">
      <div className="el-container">
        <div className="contact-info-container">
          {contactData.map((item, index) => (
            <div key={index} className="contact-info-card">
              <div className="contact-info-icon">{item.icon}</div>
              <h3 className="contact-info-title">{item.title}</h3>
              <p className="contact-info-description">{item.description}</p>
              <p className="contact-info-contact">{item.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
