import React from 'react';

import PriceTable from "../components/Prices/PriceTable/PriceTable";
import Contacts from "../components/Prices/Contacts/Contacts";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import state from "@/state";
import {useTranslation} from "next-i18next";

function Prices(props) {

    const { t } = useTranslation('common')


    return (
        <div>
            <PriceTable/>
            <Contacts state={t('contactForm', {returnObjects: true})} staticData={props.state.contactForm}/>
        </div>
    )
}

export default Prices;

export const getStaticProps = async ({ locale }) => {

    return {

        props: {

            ...(await serverSideTranslations(locale, ["common"])),
            state

        },

    };

};