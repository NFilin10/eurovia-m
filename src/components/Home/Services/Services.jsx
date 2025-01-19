
import React from 'react';
import Styles from './Services.module.css'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";

import service1Image from '../../../assets/service1.jpg';
import service2Image from '../../../assets/service4.jpg';
import service3Image from '../../../assets/service2.jpg';
import service4Image from '../../../assets/service3.jpg';
import service5Image from '../../../assets/service5.jpg';
import {GiCarWheel} from "react-icons/gi";
import {NavLink} from "react-router-dom";



const Services = () => {
    let wheelIcon = {fontSize: "25px", color: "red"}
    let arrow = {color: "red"}
    let wheelIcon2 = {fontSize: "18px", color: "red"}
    let iconStyles = {fontSize: "3.5em", color: "red"};
    let tickStyles = {fontSize: "2em", color: "red"};
    let promiseData = [
        {
            promiseHeading: "Taskukohane hind",
            promiseText: "Pakume alati parima hinna ja kvaliteedi suhtega teenuseid",
            icon: <TbCircleNumber1 style={iconStyles}/>
        },
        {
            promiseHeading: "Hea teenindus",
            promiseText: "Professionaalne ja sõbralik lähenemine igale kliendile",
            icon: <TbCircleNumber2 style={iconStyles}/>
        },
        {
            promiseHeading: "Kõrge kvaliteet",
            promiseText: "Kasutame ainult usaldusväärseid meetodeid ja materjale, et tagada teie rahulolu",
            icon: <TbCircleNumber3 style={iconStyles}/>
        },
    ]

    let serviceData = [
        {
            serviceName: "Sõiduautode rehivde vahetus",
            serviceDescription: "Kiire ja täpne rehvide vahetus, et teie sõiduk oleks valmis igaks teekonnaks.",
            imageUrl: service1Image,
            link: "/sõiduauto-rehvvi-vahetus"
        },
        {
            serviceName: "Veoautode rehivde vahetus",
            serviceDescription: "Professionaalne teenus, mis tagab veoautode rehvide turvalisuse ja töökindluse.",
            imageUrl: service2Image,
            link: "/veoauto-rehvvi-vahetus"
        },
        {
            serviceName: "Protekteerimine",
            serviceDescription: "Pikendame rehvide eluiga kvaliteetse protekteerimise abil, et säästa teie raha ja keskkonda.",
            imageUrl: service3Image,
            link: "/protekteerimine"
        },
        {
            serviceName: "Rehvide remont",
            serviceDescription: "Parandame teie rehvid kiiresti ja usaldusväärselt, et saaksite muretult edasi liikuda.",
            imageUrl: service4Image,
            link: "/remont"
        },
        {
            serviceName: "Rehvide hotell",
            serviceDescription: "Hoidke oma hooajavälised rehvid turvaliselt ja mugavalt meie rehvide hotellis.",
            imageUrl: service5Image,
            link: "/hotell",
        }
    ]

    let aimData = [
        {
            aim: "Täpsus ja kiirus igas teenuses"
        },
        {
            aim: "Kvaliteetsed materjalid ja lahendused"
        },
        {
            aim: "Meeskond, kes hoolib teie auto vajadustest"
        },
        {
            aim: "Kaasaegsed seadmed ja meetodid"
        }
    ]

    let promiseElements = promiseData.map(promise =>
        <div className={Styles.promise}>
            <div>{promise.icon}</div>
            <div className={Styles.promiseText}>
                <p>{promise.promiseHeading}</p>
                <p>{promise.promiseText}</p>
            </div>
        </div>
    )

    let ServicElements = serviceData.map(service =>
        <div className={Styles.Service} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${service.imageUrl})` }}>
            <h1>{service.serviceName}</h1>
            <p>{service.serviceDescription}</p>
            <NavLink
                to={service.link}>
                <div className={Styles.arrow}>
                    <div className={Styles.arrow}>
                        <p>Loe lähemalt</p>
                        <FaArrowRight style={arrow}/>
                    </div>
                </div>
            </NavLink>


        </div>
)

let aimElements = aimData.map(aim =>
        <div className={Styles.listElem}>
            <div><TiTick style={tickStyles}/></div>
            <p className={Styles.mainAim}>{aim.aim}</p>
        </div>
    )


    return (
        <div className={Styles.ServicesWrapper}>
            <div className={Styles.textArea}>
                <div className={Styles.iconBlock}>
                    <GiCarWheel className={Styles.wheel} style={wheelIcon}/>
                    <h1 className={Styles.heading}>Tere tulemast Eurovia-m-i</h1>
                </div>
                <h2>Kõik mida Te vajate <span className={Styles.red}>ühes kohas</span></h2>
                <p className={Styles.main}>Pakume kõike alates rehvide vahetusest ja remondist kuni protekteerimise ja turvalise rehvi hoiustamiseni. Eurovia-m-is on teie turvalisus ja rahulolu alati esikohal!</p>
            </div>
            <div className={Styles.PromisesServicesWrapper}>
                <div className={Styles.Promises}>
                    <h1>MEIE LUBADUSED</h1>
                    {promiseElements}

                    <div className={Styles.textSection}>
                        <div className={Styles.iconBlock1}>
                            <GiCarWheel className={Styles.wheel} style={wheelIcon}/>
                            <p>Kõrgtehnoloogia</p>
                        </div>
                        <h1>KÕIK, MIDA TEIE AUTO VAJAB</h1>
                        <p>Kasutame kaasaegseid tööriistu ja tehnoloogiaid, et tagada teie auto rehvide hoolduse ja
                            remondi parim kvaliteet. Usaldage meid, et saaksite nautida turvalist ja sujuvat sõitu.</p>
                        <div className={Styles.bulletList}>
                            {aimElements}
                        </div>
                    </div>
                </div>
                <div className={Styles.Services}>
                    <h1>MEIE TEENUSED</h1>
                    <div className={Styles.ServiceElemWrapper}>
                        {ServicElements}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Services
