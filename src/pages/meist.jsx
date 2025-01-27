import React from 'react'
import MainSection from "../components/About/MainSection/MainSection";
import Services from "../components/About/Services/Services";

function About({state}) {

    return (
        <div>
            <MainSection state={state.about} />
            <Services state={state.about.serviceCarousel} />
        </div>
    );
}

export default About;