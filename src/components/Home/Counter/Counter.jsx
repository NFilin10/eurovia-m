import React from 'react';
import Styles from './Counter.module.css'



const Counter = ({state}) => {

    const counterElem = state.map(elem =>
        <div className={Styles.counterElem}>
            <p>{elem.number}<span>+</span></p>
            <p>{elem.heading}</p>
        </div>
    )

    return (
        <div className={Styles.counterWrapper}>
            <div className={Styles.counterContainer}>
                {counterElem}
            </div>
        </div>
    )
}

export default Counter
