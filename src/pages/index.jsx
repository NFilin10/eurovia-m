import React from 'react'
import Header from "../components/Home/Header/Header";
import Services from "../components/Home/Services/Services";
import Counter from "../components/Home/Counter/Counter";
import ContactFormSection from "@/components/Common/ContactForm/ContactForm";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from 'next-i18next'
import state from "@/state";
import Head from "next/head";

function Index(props) {

    const { t } = useTranslation('common')



    return (
        <div>
            <Head>
                <meta name="description" content={t('homeSeo.description', {returnObjects:true})}/>
                <meta name="keywords" content={t('homeSeo.keywords', {returnObjects:true})}/>
                <title>{t('homeSeo.title', {returnObjects:true})}</title>
            </Head>
            <Header state={t('header', {returnObjects: true})}/>
            <Services state={t('services', {returnObjects: true})} staticData={props.state.services} />
            <Counter state={t('counter', {returnObjects: true})} staticData={props.state.counter}/>
            <ContactFormSection state={t('contactForm', {returnObjects: true})} className={"contactFormContainer"} staticData={props.state.contactForm}/>

        </div>
    );
}

export default Index;

export const getStaticProps = async ({ locale }) => {

    return {

        props: {

            ...(await serverSideTranslations(locale, ["common"])),
            state

        },

    };

};

