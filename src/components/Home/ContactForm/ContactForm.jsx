import React from 'react';
import Styles from './ContactForm.module.css'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";



const ContactForm = () => {

    let iconStyles = {fontSize: "30px", color:"white", backgroundColor:"red", padding: "13px"};

    return (
        <div className={Styles.contactFormWrapper}>
            <div className={Styles.contactFormContainer}>
                <div className={Styles.left}>
                    <p className={Styles.heading}>Contact us</p>
                    <h1 className={Styles.main}>contact us to get better<br/>information</h1>
                    <p>djsak jdkasj kjdkas jkasjd kdjksajdkasj ksadj ksajd kajdskal jdkasjskajdkl aj ksajd ksa jkdjk djsak jkasjd kasdjkd </p>
                    <div className={Styles.contactData}>
                        <div className={Styles.contactElem}>
                            <FaPhone style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>phone</p>
                                <span>473 4837248</span>
                            </div>

                        </div>
                        <div className={Styles.contactElem}>
                            <MdEmail style={iconStyles}/>
                            <div className={Styles.contactInfo}>
                                <p>Email</p>
                                <span>eurovia-m@hot.ee</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={Styles.right}>
                    <form>
                        <input className={Styles.formField} type="text" name="name" placeholder="Teie nimi"/>
                        <input className={Styles.formField} type="email" name="email" placeholder="Teie email"/>
                        <input className={Styles.formField} type="text" name="topic" placeholder="Teie teema"/>
                        <textarea className={Styles.formField} name="msg" placeholder="Teie sõnum"/>
                        <input className={Styles.submit} type="submit" value="Saada sõnum"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
