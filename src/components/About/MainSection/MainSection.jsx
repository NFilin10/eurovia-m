import React from 'react'
import Styles from './MainSection.module.css'
import {GiCarWheel} from "react-icons/gi";
import Image from "next/image";


function MainSection({state}) {

    let wheelIcon = {fontSize: "25px", color: "red"}


    return (
        <div className={Styles.mainSectionWrapper}>
            <div className={Styles.history}>
                <Image className={Styles.image} src={state.section1.image} alt="" data-aos="fade-right"/>

                <div className={Styles.textPart} data-aos="fade-left">
                    <h1 className={Styles.heading}>{state.section1.heading[0]}<span
                        className={Styles.whiteWord}>{state.section1.heading[1]}</span>{state.section1.heading[2]}</h1>
                    <p className={Styles.mainText}>{state.section1.text}</p>
                </div>
            </div>

            <div className={Styles.vision}>
                <div className={Styles.textPart} data-aos="fade-right">
                    <h1 className={Styles.heading}>{state.section2.heading[0]}<span className={Styles.whiteWord}>{state.section2.heading[1]}</span>{state.section2.heading[2]}</h1>
                    <p className={Styles.mainText}>{state.section2.text}</p>
                </div>
                <Image className={Styles.image} src={state.section2.image} alt="" data-aos="fade-left"/>
            </div>

            <div className={Styles.mission}>
                <Image className={Styles.image} src={state.section3.image} alt="" data-aos="fade-right"/>
                <div className={Styles.textPart} data-aos="fade-left">
                    <h1 className={Styles.heading}><span className={Styles.whiteWord}>{state.section3.heading[0]}</span>{state.section3.heading[1]}</h1>
                    <p className={Styles.mainText}>
                        {state.section3.text}
                    </p>
                </div>
            </div>
            <div className={Styles.textArea}>
                <div className={Styles.iconBlock}>
                    <GiCarWheel className={Styles.wheel} style={wheelIcon}/>
                    <h1 className={Styles.headingSecond}>{state.headings.secondaryHeading}</h1>
                </div>
                <h2 className={Styles.secondaryHeading}>{state.headings.mainHeading[0]} <span className={Styles.red}>{state.headings.mainHeading[1]}</span></h2>
            </div>
        </div>


    );
}

export default MainSection;