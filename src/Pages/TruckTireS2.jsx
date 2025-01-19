import React from 'react';
import Service from "../components/Services/Service";

import service2_1 from '../assets/servicePage2_1.jpg'
import service2_2 from '../assets/servicePage2_2.avif'


function TruckTiresS2() {

    const data = {
        heading: "Veoautode rehvide vahetus",
        mainImg: service2_1,
        mainText: "Veoautode rehvide vahetus on kriitilise tähtsusega igale transpordiettevõttele. Veoauto rehvid on pidevalt kõrge koormuse ja pikaajalisel kasutamisel tekkiva kulumise all, mistõttu on nende õigeaegne vahetamine võtmetähtsusega, et tagada tööprotsesside sujuvus ja ohutus.Veoautode rehvide vahetus on kriitilise tähtsusega igale transpordiettevõttele. Veoauto rehvid on pidevalt kõrge koormuse ja pikaajalisel kasutamisel tekkiva kulumise all, mistõttu on nende õigeaegne vahetamine võtmetähtsusega, et tagada tööprotsesside sujuvus ja ohutus.",
        secondaryText: "Meie meeskond on spetsialiseerunud veoautode rehvide vahetusele, pakkudes kõrge kvaliteediga teenust ja professionaalset nõu.",
        secondaryImg: service2_2,
        listItems: ["Erivarustus suurte rehvide jaoks – teostame rehvide vahetuse kiiresti ja tõhusalt, sõltumata nende suurusest või tüübist.", "Tasakaalustamine ja kütusesääst – õigesti tasakaalustatud rehvid vähendavad vibratsiooni, kütusekulu ja rehvide ebaühtlast kulumist.", "Personaalne nõustamine – aitame valida teie vajadustele vastavad rehvid, arvestades veoauto töökoormust ja liikumispiirkondi."]
    }


    return (
        <Service props={data}/>
    )
}

export default TruckTiresS2;