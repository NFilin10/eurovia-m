import React from 'react'
import MainSection from "../components/About/MainSection/MainSection";
import Services from "../components/About/Services/Services";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import state from "@/state";
import {useTranslation} from "next-i18next";
import Head from "next/head";

function About(props) {

    const { t } = useTranslation('common')


    return (
        <div>
            <Head>
                <meta name="description" content={t('aboutSeo.description', {returnObjects:true})}/>
                <meta name="keywords" content={t('aboutSeo.keywords', {returnObjects:true})}/>
                <title>{t('aboutSeo.title', {returnObjects:true})}</title>
            </Head>
            <MainSection staticData={props.state.about} state={t('about', {returnObjects: true})}/>
            <Services staticData={props.state.about.serviceCarousel} state={t('about.serviceCarousel', {returnObjects: true})}/>
        </div>
    );
}

export default About;

export const getStaticProps = async ({ locale }) => {

    return {

        props: {

            ...(await serverSideTranslations(locale, ["common"])),
            state

        },

    };

};