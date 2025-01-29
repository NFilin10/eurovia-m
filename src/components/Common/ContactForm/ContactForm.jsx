import React from 'react';
import Styles from './ContactForm.module.css'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const ContactFormSection = ({className, state, staticData}) => {

    let iconStyles = {fontSize: "30px", color:"white", backgroundColor:"red", padding: "13px"};

    return (
        <div className={Styles.contactFormWrapper} data-aos="fade-up">
            <div className={Styles[className]}>
                <div className={Styles.contactSection}>
                    <p className={Styles.secondaryHeading}>{state.textSection.secondaryHeading}</p>
                    <h1 className={Styles.mainHeading}>{state.textSection.mainHeading[0]}<br/>{state.textSection.mainHeading[1]}</h1>
                    <p className={Styles.mainText}>{state.textSection.text}</p>
                    <div className={Styles.contactData}>
                        <div className={Styles.contactElem}>
                            <FaPhone className={Styles.icon} style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>{staticData.textSection.phone}</p>
                                <span>473 4837248</span>
                            </div>
                        </div>
                        <div className={Styles.contactElem}>
                            <MdEmail className={Styles.icon} style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>{staticData.textSection.mail}</p>
                                <span>eurovia-m@hot.ee</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={Styles.formSection}>
                    <form className={Styles.form}>
                        <input className={Styles.formField} type="text" name="name" placeholder={state.formFields.name}/>
                        <input className={Styles.formField} type="email" name="email" placeholder={state.formFields.mail}/>
                        <input className={Styles.formField} type="text" name="topic" placeholder={state.formFields.subject}/>
                        <textarea className={`${Styles.formField} ${Styles.textArea}`} name="msg" placeholder={state.formFields.message}/>
                        <input className={Styles.submit} type="submit" value={state.formFields.submit}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactFormSection
