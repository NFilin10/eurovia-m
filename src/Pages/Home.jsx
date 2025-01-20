import React from 'react'
import Header from "../components/Home/Header/Header";
import Services from "../components/Home/Services/Services";
import Counter from "../components/Home/Counter/Counter";
import ContactFormSection from "../components/Common/ContactForm/ContactForm";

function Home({state}) {


    return (
        <div className="homeWrapper">
            <Header state={state.header}/>
            <Services state={state.services} />
            <Counter state={state.counter}/>
            <ContactFormSection className={"contactFormContainer"} state={state.contactForm}/>
        </div>
    );
}

export default Home;
