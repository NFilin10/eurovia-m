import React, { useState } from 'react';
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
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import state from './state';
import useAuth from "./hooks/useAuth";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Lifted state

    return (
        <Router>
            <MainApp isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </Router>
    );
}

function MainApp({ isAuthenticated, setIsAuthenticated }) {

    return (
        <div>
            <Navbar state={state.navbar} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
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
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            </Routes>
            <Footer state={state.footer} />
        </div>
    );
}

export default App;
