import React from 'react'
import Styles from './Service.module.css'
import { TiTick } from "react-icons/ti";
import Image from 'next/image';

function Service({ state, staticData }) {
    const tickIcon = { fontSize: "25px", color: "red" };

    console.log(state)

    // Generate list items dynamically from state
    // const listItems = state.listItems.map((item, index) => (
    //     <div key={index} className={Styles.listItem}>
    //         <span><TiTick style={tickIcon}/></span>
    //         <p>{item}</p>
    //     </div>
    // ));

    return (
        <div className={Styles.serviceContainerWrapper} data-aos="flip-up">
            <div className={Styles.serviceContainer}>
                <div className={Styles.mainImgContainer}>
                    <Image
                        src={staticData.mainImg}
                        alt="Main Service Image"
                        className={Styles.mainImg}
                    />
                </div>
                <div className={Styles.serviceContent}>
                    <h1 className={Styles.heading}>{state.heading}</h1>
                    <p className={Styles.mainText}>{state.mainText}</p>
                    <div className={Styles.featureSection}>
                        <div className={Styles.serviceFeatureData}>
                            <h2 className={Styles.serviceFeature}>Teenuse omadused</h2>
                            <p className={Styles.secondaryText}>{state.secondaryText}</p>
                        </div>
                        {/* Using Image for secondary image */}
                        <div className={Styles.secondaryImgWrapper}>
                            <Image
                                className={Styles.secondaryImg}
                                src={staticData.secondaryImg}
                                alt="Secondary Service Image"
                                width={500}
                                height={300}
                            />
                        </div>
                    </div>
                    <div className={Styles.list}>
                        {/*{listItems}*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
