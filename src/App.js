import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";
import Service from "./components/Services/Service"
import Admin from "./Pages/Admin";
import Prices from "./Pages/Prices";

import state from './state'

function App() {
    return (
        <Router basename="/">
            <div>
                <Navbar state={state.navbar} />

                <Routes>
                    <Route path="/" element={<Home state={state} />} />
                    <Route path="/meist" element={<About state={state.about} />} />
                    <Route path="/kontakt" element={<Contact state={state}/>} />
                    {state.servicePages.map(service => (

                        <Route key={service.path} path={service.path} element={<Service state={service} />} />
                    ))}
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/hinnakiri" element={<Prices state={state} />} />
                </Routes>

                <Footer state={state.footer} />
            </div>
        </Router>
    );
}


export default App;
