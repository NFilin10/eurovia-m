
import React from 'react';
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import state from "@/state";


const MainLayout = ({ children, setIsAuthenticated, isAuthenticated }) => {
    return (
        <>
            <Navbar staticData={state.navbar} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
            {children}
            <Footer staticData={state.footer}/>
        </>
    );
};

export default MainLayout
