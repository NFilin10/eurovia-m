import React from 'react';
import Styles from './Counter.module.css'
import CountUp from 'react-countup';



const Counter = () => {

    return (
        <div className={Styles.counterWrapper}>
            <div className={Styles.counterContainer}>
                <div className={Styles.counterElem}>
                    <p>20<span>+</span></p>
                    <p>Aastat kogemust</p>
                </div>
                <div className={Styles.counterElem}>
                    <p>7<span>+</span></p>
                    <p>Tehnikut</p>
                </div>
                <div className={Styles.counterElem}>
                    <p>3500<span>+</span></p>
                    <p>Autod tehtud</p>
                </div>
                <div className={Styles.counterElem}>
                    <p>3000<span>+</span></p>
                    <p>Rahulolevad kliendid</p>
                </div>
            </div>
        </div>
    )
}

export default Counter
