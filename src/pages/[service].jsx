import { useRouter } from 'next/router';
import React from 'react';
import Service from '../components/Services/Service'; // Import your Service component

const ServicePage = ({state}) => {
    const router = useRouter();
    const { service } = router.query;

    const serviceData = state.servicePages.find((item) => item.path === `/${service}`);

    return <Service state={serviceData} />;
};

export default ServicePage;
