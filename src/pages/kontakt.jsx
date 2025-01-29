import ContactSection from "../components/Contact/ContactSection/ContactSection";
import ContactFormSection from "../components/Common/ContactForm/ContactForm";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import state from "@/state";
import {useTranslation} from "next-i18next";

function Contact(props) {

    const { t } = useTranslation('common')


    return (
        <div>
            <ContactSection state={t('contact', {returnObjects: true})} staticData={props.state.contact.contactElements}/>
            <ContactFormSection  state={t('contactForm', {returnObjects: true})} className={"contactFormContainerContactPg"} staticData={props.state.contactForm}/>
        </div>
    );
}

export default Contact;


export const getStaticProps = async ({ locale }) => {

    return {

        props: {

            ...(await serverSideTranslations(locale, ["common"])),
            state

        },

    };

};