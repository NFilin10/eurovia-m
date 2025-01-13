import React from 'react'
import ContactSection from "../components/Contact/ContactSection/ContactSection";
import ContactForm from "../components/Contact/ContactForm/ContactForm";

function Contact() {

    return (
        <div className="contactWrapper">
            <ContactSection />
            <ContactForm/>
        </div>
    );
}

export default Contact;