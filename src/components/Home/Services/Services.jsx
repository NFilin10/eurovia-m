
import React from 'react';
import Styles from './Services.module.css'
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import {GiCarWheel} from "react-icons/gi";
import Link from "next/link";
import {TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import Image from "next/image";

let iconStylesHome = {fontSize: "3.5em", color: "red"};

const iconMap = {
    icon1: <TbCircleNumber1 style={iconStylesHome} />,
    icon2: <TbCircleNumber2 style={iconStylesHome} />,
    icon3: <TbCircleNumber3 style={iconStylesHome} />
};

const Services = ({state, staticData}) => {
    let wheelIcon = {fontSize: "25px", color: "red"}
    let arrow = {color: "red"}
    let tickStyles = {fontSize: "2em", color: "red"};


    let promiseElements = state.promises.map((promise, index) =>
        <div className={Styles.promise}>
            <div>{iconMap[staticData.promises[index].icon]}</div>
            <div className={Styles.promiseText}>
                <p>{promise.promiseHeading}</p>
                <p>{promise.promiseText}</p>
            </div>
        </div>
    )

    let ServiceElements = state.serviceCards.map((service, index) => (
        <div className={Styles.Service}>
            <Image
                src={`/assets/service${index + 1}.jpg`} // Ensure your images are inside the `public/assets` folder
                alt={service.serviceName}
                className={Styles.serviceImage}
                width={480}
                height={400}
            />
            <div className={Styles.serviceContent}>
                <h1 className={Styles.serviceHeading}>{service.serviceName}</h1>
                <p>{service.serviceDescription}</p>
                <Link href={staticData.serviceCards[index].link}>
                    <div className={Styles.arrow}>
                        <p>Loe lähemalt</p>
                        <FaArrowRight style={arrow} />
                    </div>
                </Link>
            </div>
        </div>
    ));



    let aimElements = state.aims.map(aim =>
        <div className={Styles.listElem}>
            <div><TiTick style={tickStyles}/></div>
            <p className={Styles.mainAim}>{aim.aim}</p>
        </div>
    )


    return (
        <div className={Styles.ServicesWrapper} data-aos="fade-up">
            <div className={Styles.textArea}>
                <div className={Styles.iconBlock}>
                    <GiCarWheel className={Styles.wheel} style={wheelIcon}/>
                    <h1 className={Styles.heading}>{state.welcomeSection.secondaryHeading}</h1>
                </div>
                <h2 className={Styles.secondaryHeading}>{state.welcomeSection.mainHeading[0]} <span className={Styles.red}>{state.welcomeSection.mainHeading[1]}</span></h2>
                <p className={Styles.main}>{state.welcomeSection.text}</p>
            </div>
            <div className={Styles.PromisesServicesWrapper}>
                <div className={Styles.Promises}>
                    <h1>{state.headings.promises}</h1>
                    {promiseElements}

                    <div className={Styles.textSection} data-aos="fade-up-right">
                        <div className={Styles.iconBlock1}>
                            <GiCarWheel className={Styles.wheel} style={wheelIcon}/>
                            <p>{state.headings.tech}</p>
                        </div>
                        <h1>{state.headings.mainHeading}</h1>
                        <p>{state.headings.text}</p>
                        <div className={Styles.bulletList}>
                            {aimElements}
                        </div>
                    </div>
                </div>
                <div className={Styles.Services}>
                    <h1>{state.headings.services}</h1>
                    <div className={Styles.ServiceElemWrapper}>
                        {ServiceElements}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Services
