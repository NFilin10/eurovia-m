
import React from 'react';
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";

const MainLayout = ({ children, state, setIsAuthenticated, isAuthenticated }) => {
    console.log("Layout", isAuthenticated);
    return (
        <>
            <Navbar state={state.navbar} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
            {children}
            <Footer state={state.footer}/>
        </>
    );
};

export default MainLayout
