import React from 'react'
import Header from "../components/Home/Header/Header";
import Services from "../components/Home/Services/Services";

function Home() {

    return (
        <div className="homeWrapper">
            <Header/>
            <Services/>
        </div>
    );
}

export default Home;
