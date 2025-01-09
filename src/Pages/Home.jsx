import React from 'react'
import Header from "../components/Home/Header/Header";
import Services from "../components/Home/Services/Services";
import Counter from "../components/Home/Counter/Counter";

function Home() {

    return (
        <div className="homeWrapper">
            <Header/>
            <Services/>
            <Counter/>
        </div>
    );
}

export default Home;
