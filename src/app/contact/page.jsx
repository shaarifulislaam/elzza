import ContactInfo from "@/components/ContactPage/ContactInfo";
import ContactSection from "@/components/ContactPage/ContactSection";
import React from "react";

const ContactPage = () => {
  return (
    <section className="contact-page">
      <ContactSection />
      <ContactInfo />
    </section>
  );
};

export default ContactPage;
