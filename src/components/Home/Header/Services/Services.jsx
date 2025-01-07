
import React from 'react';
import Styles from './Services.module.css'


const Services = () => {

    return (
        <div className={Styles.ServicesWrapper}>
            <div className={Styles.textArea}>
                <p className={Styles.heading}>
                    Welcome to Eurovia-m
                </p>
                <h2>All you need in <span className={Styles.red}>one place</span></h2>
                <p className={Styles.main}>kdfl kfdsl; fjdskjf ksdfjkdsjfks jdks jdskfj ksdjfksdjf kfjkdsfj dksfj ks jkdsfsdkf fhjusdi h</p>
            </div>
            <div className={Styles.PromisesServicesWrapper}>
                <div className={Styles.Promises}>
                    <h2>OUR PROMISES</h2>
                    <div className={Styles.promise}>
                        <p>ICON</p>
                        <div className={Styles.promiseText}>
                            <p>price</p>
                            <p>cheap</p>
                        </div>
                    </div>
                    <div className={Styles.promise}>
                        <p>ICON</p>
                        <div className={Styles.promiseText}>
                            <p>price</p>
                            <p>cheap</p>
                        </div>
                    </div>
                    <div className={Styles.promise}>
                        <p>ICON</p>
                        <div className={Styles.promiseText}>
                            <p>price</p>
                            <p>cheap</p>
                        </div>
                    </div>
                </div>
                <div className={Styles.Services}>
                    <h2>OUR SERVICES</h2>
                    <div className={Styles.Service}>
                        SERVICE
                    </div>
                    <div className={Styles.Service}>
                        SERVICE
                    </div>
                    <div className={Styles.Service}>
                        SERVICE
                    </div>
                    <div className={Styles.Service}>
                        SERVICE
                    </div>
                    <div className={Styles.Service}>
                        SERVICE
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
