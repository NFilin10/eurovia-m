import React from 'react'
import Styles from './Service.module.css'
import { TiTick } from "react-icons/ti";


function Service({props}) {

    let tickIcon = {fontSize: "25px", color: "red"}


    let listItems = props.listItems.map(item =>
        <div className={Styles.listItem}>
            <span><TiTick style={tickIcon}/></span>
            <p>{item}</p>
        </div>
    )

    return (
        <div className={Styles.serviceContainerWrapper}>
            <div className={Styles.serviceContainer}>
                <div className={Styles.mainImgContainer}>
                    <img src={props.mainImg} className={Styles.mainImg} alt=""/>
                </div>
                <div className={Styles.serviceContent}>
                    <h1 className={Styles.heading}>{props.heading}</h1>
                    <p className={Styles.mainText}>{props.mainText}</p>
                    <div className={Styles.featureSection}>
                        <div className={Styles.serviceFeatureData}>
                            <h2 className={Styles.serviceFeature}>Teenuse omadused</h2>
                            <p className={Styles.secondaryText}>{props.secondaryText}</p>
                        </div>
                        <img className={Styles.secondaryImg} src={props.secondaryImg} alt=""/>
                    </div>
                    <div className={Styles.list}>
                        {listItems}
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Service