import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import Navbar from "./components/Common/Navbar/Navbar";
import Footer from "./components/Common/Footer/Footer";

function App() {
    return (
        <div>
            <Router basename="/">
                {/* Add Menu Component */}
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
