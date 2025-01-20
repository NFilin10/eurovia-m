import React from 'react'
import MainSection from "../components/About/MainSection/MainSection";
import Services from "../components/About/Services/Services";

function About({state}) {

    return (
        <div className="aboutWrapper">
            <MainSection state={state}/>
            <Services state={state.serviceCarousel} />
        </div>
    );
}

export default About;