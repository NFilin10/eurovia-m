import React from 'react';
import Service from "../components/Services/Service";

import service4_1 from '../assets/servicePage4_1_dark.jpg'
import service4_2 from '../assets/servicePage4_2.jpg'

function TireFixS4() {

    const data = {
        heading: "Rehvide remont",
        mainImg: service4_1,
        mainText: "Rehvide remont on sageli säästlik ja kiire lahendus kahjustatud rehvide taastamiseks. Väikesed kahjustused, nagu torked või lõiked, võivad põhjustada suurt peavalu, kuid õigel ajal tehtud remont aitab vältida suuremaid probleeme ja pikendada rehvide eluiga.",
        secondaryText: "EUROVIA-M pakub kvaliteetseid ja kiireid rehvide remonditeenuseid, et tagada teie sõiduki ohutus ja rehvide usaldusväärsus.",
        secondaryImg: service4_2,
        listItems: ["Torke- ja lõikekahjustuste parandamine – kasutame kvaliteetseid materjale, et tagada rehvi vastupidavus pärast remonti.", "Ventiiilide ja rehvirõhu kontroll – kõrvaldamine võimalikke lekkeid ja tagame rehvirõhu korrektsuse.", "Turvanõuetele vastav kvaliteet – iga remonditud rehv läbib põhjaliku kontrolli, et tagada sõiduki ohutus."]
    }


    return (
        <Service props={data}/>
    )
}

export default TireFixS4;