import React from 'react';

import Styles from './Contacts.module.css'

import ContactForm from "../../Common/ContactForm/ContactForm";

function Contacts({state}){
    return (
        <div data-aos="fade-up">
            <ContactForm className="contactFormContainerPricesPg" state={state}/>
        </div>
    )
}

export default Contacts;