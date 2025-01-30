import { useState, useEffect } from 'react';
import Styles from './Services.module.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";

const Services = ({ state, staticData }) => {
    const [windowWidth, setWindowWidth] = useState(0);  // State for tracking window width

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth); // Set initial value when on client
            const handleResize = () => setWindowWidth(window.innerWidth); // Update on resize
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: windowWidth < 1024 ? 1 : 3 }, // Adjust based on windowWidth
    };

    const serviceElements = state.map((service, index) => (
        <div className={Styles.serviceWrapper} key={staticData[index].id}>
            <div className={Styles.serviceImage}>
                <Image src={staticData[index].serviceImg} onDragStart={handleDragStart} role="presentation" />
            </div>
            <div className={Styles.serviceText}>
                <span className={Styles.serviceNum}>0{staticData[index].id}</span>
                <h6 className={Styles.serviceHeading}>{service.serviceName}</h6>
                <p className={Styles.serviceDescription}>{service.serviceDescription}</p>
            </div>
        </div>
    ));

    return (
        <AliceCarousel
            mouseTracking
            items={serviceElements}
            responsive={responsive}  // Use responsive prop
            controlsStrategy="alternate"
            autoPlay={false}
            infinite={true}
            ssrSilentMode={true}  // Hide carousel during SSR
        />
    );
};

export default Services;
