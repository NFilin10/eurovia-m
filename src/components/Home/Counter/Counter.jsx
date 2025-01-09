import React from 'react';
import Styles from './Counter.module.css'
import CountUp from 'react-countup';



const Counter = () => {

    return (
        <div className={Styles.counterWrapper}>
            <div className={Styles.counterContent}>
                <div className={Styles.counterElem}>
                    <p>20<span>+</span></p>
                    <p>Years of experience</p>
                </div>
                <div className={Styles.counterElem}>
                    <p>7<span>+</span></p>
                    <p>Technican</p>
                </div>
                <div className={Styles.counterElem}>
                    <p>3500<span>+</span></p>
                    <p>Car made</p>
                </div>
                <div className={Styles.counterElem}>
                    <p>3000<span>+</span></p>
                    <p>Happy clients</p>
                </div>
            </div>
        </div>
    )
}

export default Counter
