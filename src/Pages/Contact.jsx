import React from 'react'
import ContactSection from "../components/Contact/ContactSection/ContactSection";
import ContactFormSection from "../components/Common/ContactForm/ContactForm";

function Contact() {

    return (
        <div className="contactWrapper">
            <ContactSection />
            <ContactFormSection className={"contactFormContainerContactPg"}/>
        </div>
    );
}

export default Contact;