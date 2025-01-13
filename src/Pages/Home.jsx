import React from 'react'
import Header from "../components/Home/Header/Header";
import Services from "../components/Home/Services/Services";
import Counter from "../components/Home/Counter/Counter";
import ContactForm from "../components/Home/ContactForm/ContactForm";

function Home() {


    return (
        <div className="homeWrapper">
            <Header/>
            <Services/>
            <Counter/>
            <ContactForm/>
        </div>
    );
}

export default Home;
