import React from 'react'
import Styles from './Service.module.css'
import { TiTick } from "react-icons/ti";


function Service({state}) {
    let tickIcon = {fontSize: "25px", color: "red"}


    let listItems = state.listItems.map(item =>
        <div className={Styles.listItem}>
            <span><TiTick style={tickIcon}/></span>
            <p>{item}</p>
        </div>
    )

    return (
        <div className={Styles.serviceContainerWrapper}>
            <div className={Styles.serviceContainer}>
                <div className={Styles.mainImgContainer}>
                    <img src={state.mainImg} className={Styles.mainImg} alt=""/>
                </div>
                <div className={Styles.serviceContent}>
                    <h1 className={Styles.heading}>{state.heading}</h1>
                    <p className={Styles.mainText}>{state.mainText}</p>
                    <div className={Styles.featureSection}>
                        <div className={Styles.serviceFeatureData}>
                            <h2 className={Styles.serviceFeature}>Teenuse omadused</h2>
                            <p className={Styles.secondaryText}>{state.secondaryText}</p>
                        </div>
                        <img className={Styles.secondaryImg} src={state.secondaryImg} alt=""/>
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