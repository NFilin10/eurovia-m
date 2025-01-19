import React from 'react';
import Service from "../components/Services/Service";

import header1 from '../assets/header1.jpg'
import service5_1 from '../assets/servicePage5_1.jpg'
import service5_2 from '../assets/servicePage5_2.jpg'


function HotellS5() {

    const data = {
        heading: "Rehvide hotell",
        mainImg: service5_1,
        mainText: "Rehvide hotell on mugav ja praktiline lahendus, mis aitab säästa ruumi ja hoiab teie rehvid ideaalses korras hooajavälisel ajal. EUROVIA-M rehvide hotell on loodud pakkuma maksimaalset mugavust ja kindlustunnet, et teie rehvid on alati parimates võimalikes tingimustes.",
        secondaryText: "Pakume terviklikku rehvide hoiustamisteenust, mis hõlmab nii ladustamist kui ka hooldust",
        secondaryImg: service5_2,
        listItems: ["Ideaalsed hoiutingimused – kaitseme rehve niiskuse, temperatuuri kõikumiste ja päikesevalguse eest, et säilitada nende kvaliteet.", "Rehvide seisukorra kontroll – enne ja pärast hoiustamist kontrollime rehvide seisukorda ning vajadusel teostame hooldustöid.", "Paigaldamiseks valmis rehvid – valmistame rehvid ette ja hoiame need valmis järgmiseks hooajaks."]
    }


    return (
        <Service props={data}/>
    )
}

export default HotellS5;