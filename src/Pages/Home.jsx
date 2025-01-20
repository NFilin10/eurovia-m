import React from 'react'
import Header from "../components/Home/Header/Header";
import Services from "../components/Home/Services/Services";
import Counter from "../components/Home/Counter/Counter";
import ContactFormSection from "../components/Common/ContactForm/ContactForm";

function Home() {


    return (
        <div className="homeWrapper">
            <Header/>
            <Services/>
            <Counter/>
            <ContactFormSection className={"contactFormContainer"}/>
        </div>
    );
}

export default Home;
