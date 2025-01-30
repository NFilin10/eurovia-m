import { useRouter } from 'next/router';
import React from 'react';
import Service from '../../components/Services/Service'; // Import your Service component
import state from "../../state";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const ServicePage = (props) => {
    const router = useRouter();
    const { service } = router.query;

    let id = 0
    for (const object of props.state.servicePages) {
        if (object.path === service) {
            break
        }
        id++
    }

    const { t } = useTranslation('common');


    return <Service state={t(`servicePages.${id}`, {returnObjects: true})} staticData={props.state.servicePages[id]} />;
};

export default ServicePage;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
            state
        },
    }
}


export async function getStaticPaths() {
    const locales = ['en', 'et', 'ru']; // List of supported locales

    // Generate paths for each locale and dynamic page
    const paths = locales.flatMap((locale) =>
        state.servicePages.map((service) => ({
            params: {service: service.path},
            locale, // Add the locale to the path object
        }))
    );
    console.log(paths)

    return {paths, fallback: false};
}
