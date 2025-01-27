import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MainLayout from "@/layouts/MainLayout";
import state from "@/state";
import { useAuth } from "@/hooks/useAuth";
import "@/global.css";

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({});
    }, []);

    const { isAuthenticated, isLoading, setIsAuthenticated } = useAuth();  // Include isLoading

    return (
        <MainLayout state={state} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} >
            <Component
                {...pageProps}
                state={state}
                isAuthenticated={isAuthenticated}
                isLoading={isLoading} // Pass isLoading to components
                setIsAuthenticated={setIsAuthenticated}
            />
        </MainLayout>
    );
}
