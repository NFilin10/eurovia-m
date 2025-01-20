import React from 'react'
import Styles from './ContactSection.module.css'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { LuBookCheck } from "react-icons/lu";


function ContactSection() {

    let iconStyles = {padding: "15px", fontSize:"50px", color:"white", border: "2px solid white", borderRadius: "50%"};

    return (
        <div className={Styles.contactSectionWrapper}>
            <div className={Styles.heading}>
                <h1>Contact us</h1>
                <h2>jdfslk jfkds jfkdlsj fkf</h2>
            </div>

            <div className={Styles.mainSection}>
                <div className={Styles.contactIcons}>
                        <div className={Styles.iconElement}>
                            <IoLocationOutline style={iconStyles}/>
                            <h1>address</h1>
                            <p>djsak jkdsjak jdkasjdk jsa k</p>
                        </div>
                        <div className={Styles.iconElement}>
                            <MdOutlineEmail style={iconStyles}/>
                            <h1>email</h1>
                            <p>djsak jkdsjak jdkasjdk jsa k</p>
                        </div>
                        <div className={Styles.iconElement}>
                            <FiPhone style={iconStyles}/>
                            <h1>call us</h1>
                            <p>847 5894357843</p>
                        </div>
                        <div className={Styles.iconElement}>
                            <LuBookCheck style={iconStyles}/>
                            <h1>book time online</h1>
                            <p>djsak jkdsjak jdkasjdk jsa k</p>
                        </div>
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