import Styles from './Services.module.css';
import './ServicesCarousel.css';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import service1Image from '../../../assets/service1.jpg';
import service2Image from '../../../assets/service4.jpg';
import service3Image from '../../../assets/service2.jpg';
import service4Image from '../../../assets/service3.jpg';
import service5Image from '../../../assets/service5.jpg';

const Services = () => {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 3 },
    };

    const services = [
        {
            id: 1,
            serviceImg: service1Image,
            serviceName: "Sõiduautode rehvide vahetus",
            serviceDescription: "Kiire ja täpne rehvide vahetus, et teie sõiduk oleks valmis igaks teekonnaks."
        },
        {
            id: 2,
            serviceImg: service2Image,
            serviceName: "Veoautode rehvide vahetus",
            serviceDescription: "Professionaalne teenus, mis tagab veoautode rehvide turvalisuse ja töökindluse."
        },
        {
            id: 3,
            serviceImg: service3Image,
            serviceName: "Protekteerimine",
            serviceDescription: "Kasutame kaasaegseid seadmeid ja külm-vulkaniseerimise meetodit, mis pikendab rehvide eluiga ja säästab kulusid."
        },
        {
            id: 4,
            serviceImg: service4Image,
            serviceName: "Rehvide remont",
            serviceDescription: "Professionaalsed teenused, mis tagavad teie rehvide maksimaalse töökindluse."
        },
        {
            id: 5,
            serviceImg: service5Image,
            serviceName: "Rehvide hotell",
            serviceDescription: "Hoidke oma hooajavälised rehvid turvaliselt ja mugavalt meie rehvide hotellis."
        },
    ];

    let serviceElements = services.map(service => (
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
