import ContactSection from "../components/Contact/ContactSection/ContactSection";
import ContactFormSection from "../components/Common/ContactForm/ContactForm";

function Contact({state}) {

    return (
        <div>
            <ContactSection state={state.contact}/>
            <ContactFormSection className={"contactFormContainerContactPg"} state={state.contactForm}/>
        </div>
    );
}

export default Contact;