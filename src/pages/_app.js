import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "@/layouts/MainLayout";
import state from "@/state";
import { useAuth } from "@/hooks/useAuth";
import "@/global.css";
import {appWithTranslation, useTranslation} from 'next-i18next'




function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({});
    }, []);




    const { isAuthenticated, isLoading, setIsAuthenticated } = useAuth();  // Include isLoading

    return (
        <MainLayout setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} >
            <Component
                {...pageProps}
                isAuthenticated={isAuthenticated}
                isLoading={isLoading} // Pass isLoading to components
                setIsAuthenticated={setIsAuthenticated}
            />
        </MainLayout>
    );
}

export default appWithTranslation(MyApp)



