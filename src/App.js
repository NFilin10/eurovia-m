import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";
import Service from "./components/Services/Service";
import Admin from "./Pages/Admin";
import Prices from "./Pages/Prices";
import Login from "./Pages/Login";
import AOS from 'aos';
import 'aos/dist/aos.css';
import state from './state';
import useAuth from "./hooks/useAuth";

function App() {
    AOS.init({});

    const {isAuthenticated, setIsAuthenticated} = useAuth();
    console.log(isAuthenticated);

    return (
        <Router>
            <div>
                <Navbar state={state.navbar} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
                <Routes>
                    <Route path="/" element={<Home state={state} />} />
                    <Route path="/meist" element={<About state={state.about} />} />
                    <Route path="/kontakt" element={<Contact state={state} />} />
                    {state.servicePages.map(service => (
                        <Route key={service.path} path={service.path} element={<Service state={service} />} />
                    ))}
                    <Route
                        path="/admin"
                        element={isAuthenticated ? <Admin /> : <Navigate to="/login" />}
                    />
                    <Route path="/hinnakiri" element={<Prices state={state} />} />
                    <Route path="/login" element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/admin" />} />
                </Routes>
                <Footer state={state.footer} />
            </div>
        </Router>
    );
}

export default App;
