import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "@/layouts/MainLayout";
import state from "@/state";
import "@/global.css";
import {appWithTranslation, useTranslation} from 'next-i18next'




function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({});
    }, []);




    return (
        <MainLayout >
            <Component
                {...pageProps}

            />
        </MainLayout>
    );
}

export default appWithTranslation(MyApp)



