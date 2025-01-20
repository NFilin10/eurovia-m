import Styles from './Services.module.css';
import './ServicesCarousel.css';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import service1Image from '../../../assets/service1.jpg';
import service2Image from '../../../assets/service4.jpg';
import service3Image from '../../../assets/service2.jpg';
import service4Image from '../../../assets/service3.jpg';
import service5Image from '../../../assets/service5.jpg';

const Services = ({state}) => {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 3 },
    };



    let serviceElements = state.map(service => (
        <div className={Styles.serviceWrapper} key={service.id}>
            <div className={Styles.serviceImage}>
                <img src={service.serviceImg} onDragStart={handleDragStart} role="presentation" alt={service.serviceName} />
            </div>
            <div className={Styles.serviceText}>
                <span className={Styles.serviceNum}>0{service.id}</span>
                <h6 className={Styles.serviceHeading}>{service.serviceName}</h6>
                <p className={Styles.serviceDescription}>{service.serviceDescription}</p>
            </div>
        </div>
    ));

    return (
        <AliceCarousel
            mouseTracking
            items={serviceElements}
            responsive={responsive}
            controlsStrategy="alternate"
            autoPlay={true}
            infinite={true}

        />
    );
};

export default Services;
