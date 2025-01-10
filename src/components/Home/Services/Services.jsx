
import React from 'react';
import Styles from './Services.module.css'
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import { TiTick } from "react-icons/ti";

import service1Image from '../../../assets/service1.jpg';
import service2Image from '../../../assets/service4.jpg';
import service3Image from '../../../assets/service2.jpg';
import service4Image from '../../../assets/service3.jpg';
import service5Image from '../../../assets/service5.jpg';



const Services = () => {
    let iconStyles = {fontSize: "3.5em", color: "red"};
    let tickStyles = {fontSize: "2em", color: "red"};
    let promiseData = [
        {
            promiseHeading: "Affordable price",
            promiseText: "fjdsk kfdjs kjf ksd fds",
            icon: <TbCircleNumber1 style={iconStyles}/>
        },
        {
            promiseHeading: "Good service",
            promiseText: "fiosdju ifj sifj dsi",
            icon: <TbCircleNumber2 style={iconStyles}/>
        },
        {
            promiseHeading: "High quality",
            promiseText: "fdlsj kkldfj ksdfj ksf",
            icon: <TbCircleNumber3 style={iconStyles}/>
        },
    ]

    let serviceData = [
        {
            serviceName: "Sõiduautode rehivde vahetus",
            serviceDescription: "dska jkdjsa kd jskadjask jdskajdksajdksa jska jksajd kdj askdjsakd jkld jsakdjas klasjd kadjklas",
            imageUrl: service1Image
        },
        {
            serviceName: "Veoautode rehivde vahetus",
            serviceDescription: "dska jkdjsa kd jskadjask jdskajdksajdksa jska jksajd kdj askdjsakd jkld jsakdjas klasjd kadjklas",
            imageUrl: service2Image
        },
        {
            serviceName: "Protekteerimine",
            serviceDescription: "dska jkdjsa kd jskadjask jdskajdksajdksa jska jksajd kdj askdjsakd jkld jsakdjas klasjd kadjklas",
            imageUrl: service3Image
        },
        {
            serviceName: "Rehvide remont",
            serviceDescription: "dska jkdjsa kd jskadjask jdskajdksajdksa jska jksajd kdj askdjsakd jkld jsakdjas klasjd kadjklas",
            imageUrl: service4Image
        },
        {
            serviceName: "Rehvide hotell",
            serviceDescription: "dska jkdjsa kd jskadjask jdskajdksajdksa jska jksajd kdj askdjsakd jkld jsakdjas klasjd kadjklas",
            imageUrl: service5Image
        }
    ]

    let aimData = [
        {
            aim: "djkpsaj l;d kal;dksal kdsla"
        },
        {
            aim: "djkpsaj l;d kal;dksal kdsla"
        },
        {
            aim: "djkpsaj l;d kal;dksal kdsla"
        },
        {
            aim: "djkpsaj l;d kal;dksal kdsla"
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
            <p>Read more</p>
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
                <h1 className={Styles.heading}>
                    Welcome to Eurovia-m
                </h1>
                <h2>All you need in <span className={Styles.red}>one place</span></h2>
                <p className={Styles.main}>kdfl kfdsl; fjdskjf ksdfjkdsjfks jdks jdskfj ksdjfksdjf kfjkdsfj dksfj ks
                    jkdsfsdkf fhjusdi h</p>
            </div>
            <div className={Styles.PromisesServicesWrapper}>
                <div className={Styles.Promises}>
                    <h1>OUR PROMISES</h1>
                    {promiseElements}

                    <div className={Styles.textSection}>
                        <p>High Technology</p>
                        <h1>GET ALL YOUR CAR NEEDS</h1>
                        <p>kfjsd klfjdksj fksdfj ksdjfkdsj kldsfj ksdfjdsklfjdskl fjsdkl jdf kldsjfksdjfks jsd kjfkdsjf  kdsjfkdsjf  f s fksj ks jksdjfksdskfj kls jfdksjf ksdfjdsk </p>
                        <div className={Styles.bulletList}>
                            {aimElements}
                        </div>
                    </div>
                </div>
                <div className={Styles.Services}>
                    <h1>OUR SERVICES</h1>
                    <div className={Styles.ServiceElemWrapper}>
                        {ServicElements}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Services
