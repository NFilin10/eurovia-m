import React from 'react'
import MainSection from "../components/About/MainSection/MainSection";
import Services from "../components/About/Services/Services";

function About() {

    return (
        <div className="aboutWrapper">
            <MainSection/>
            <Services/>
        </div>
    );
}

export default About;