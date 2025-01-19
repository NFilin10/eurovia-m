import React from 'react';
import Service from "../components/Services/Service";

import header1 from '../assets/header1.jpg'

function CarTiresS1() {

    const data = {
        heading: "Sõiduautode rehvide vahetus",
        mainImg: header1,
        mainText: "Sõiduautode rehvide vahetamine on iga autojuhi jaoks oluline ülesanne, mis tagab nii sõiduki ohutuse kui ka optimaalse sõidumugavuse. Hooajaline rehvide vahetamine pole pelgalt seadusega ette nähtud, vaid ka praktiline viis kohandada sõidukit ilmastikuoludega, pakkudes paremat pidamist ja vähendades õnnetuste riski.",
        secondaryText: "Meie teenus tagab kiire, mugava ja kvaliteetse rehvide vahetamise igat tüüpi sõiduautodele. Lisaks on meil lai valik lisateenuseid, mis teevad sõiduki hoolduse lihtsaks ja usaldusväärseks.",
        secondaryImg: header1,
        listItems: ["Professionaalne vahetusprotsess – kasutame kaasaegseid seadmeid, et vältida rehvide või velgede kahjustamist.Professionaalne vahetusprotsess – kasutame kaasaegseid seadmeid, et vältida rehvide või velgede kahjustamist.", "Tasakaalustamine – pärast iga vahetust tasakaalustame rehvid, et vältida vibratsiooni ja pikendada rehvide eluiga.", "Rehvide seisukorra hindamine – kontrollime mustri sügavust ja rehvide üldist seisukorda, andes vajadusel soovitusi uute rehvide ostmiseks."]
    }


    return (
        <Service props={data}/>
    )
}

export default CarTiresS1;