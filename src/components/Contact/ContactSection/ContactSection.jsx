import React from 'react'
import Styles from './ContactSection.module.css'


function ContactSection({state}) {

    const iconElements = state.contactElements.map(element =>
        <div className={Styles.iconElement}>
            {element.icon}
            <h1>{element.heading}</h1>
            <p>{element.text}</p>
        </div>
    )

    return (
        <div className={Styles.contactSectionWrapper}>
            <div className={Styles.heading}>
                <h1>{state.mainHeading}</h1>
                <h2>{state.secondaryHeading}</h2>
            </div>

            <div className={Styles.mainSection}>
                <div className={Styles.contactIcons}>
                    {iconElements}
                </div>
                <div className={Styles.map}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.8163325824592!2d24.71359817735978!3d59.369404207812025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929549e90fbb15%3A0x400f1edc6b616ee2!2sEurovia-M%20O%C3%9C!5e0!3m2!1sru!2see!4v1736785830834!5m2!1sru!2see"
                        width="600"
                        height="450"
                        style={{border: 0}}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                </div>
            </div>
        </div>
    );
}

export default ContactSection;