import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import CarTiresS1 from './Pages/CarTiresS1';
import TruckTireS2 from "./Pages/TruckTireS2";
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";
import ContactForm from "./components/Home/ContactForm/ContactForm";
import ProtectionS3 from "./Pages/ProtectionS3";
import TireFixS4 from "./Pages/TireFixS4";
import HotellS5 from "./Pages/HotellS5";

function App() {

    return (
        <div>
            <Router basename="/">
                {/* Add Menu Component */}
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/meist" element={<About />} />
                    <Route path="/kontakt" element={<Contact />} />
                    <Route path="/sõiduauto-rehvvi-vahetus" element={<CarTiresS1 />} />
                    <Route path="/veoauto-rehvvi-vahetus" element={<TruckTireS2 />} />
                    <Route path="/protekteerimine" element={<ProtectionS3 />} />
                    <Route path="/remont" element={<TireFixS4 />} />
                    <Route path="/hotell" element={<HotellS5 />} />



                </Routes>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
