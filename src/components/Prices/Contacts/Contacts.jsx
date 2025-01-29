import React from 'react';

import Styles from './Contacts.module.css'

import ContactForm from "../../Common/ContactForm/ContactForm";

function Contacts({state, staticData}){
    return (
        <div data-aos="fade-up">
            <ContactForm className="contactFormContainerPricesPg" state={state} staticData={staticData} />
        </div>
    )
}

export default Contacts;