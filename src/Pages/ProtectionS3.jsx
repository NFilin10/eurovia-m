import React from 'react';
import Service from "../components/Services/Service";

import header1 from '../assets/header1.jpg'

function ProtectionS3 () {

    const data = {
        heading: "Protekteerimine",
        mainImg: header1,
        mainText: "Protekteerimine on majanduslikult ja keskkonnasõbralik viis rehvide kasutusiga pikendada. EUROVIA-M on tegutsenud Eestis alates 1995. aastast ja on spetsialiseerunud protekteerimisele, pakkudes kõrgeima kvaliteediga teenuseid, mida toetavad kaasaegne tehnoloogia ja pikaajaline kogemus.\n" +
            "Protekteerimine tähendab rehvi kulunud mustrilindi asendamist uuega, mis taastab selle algse funktsionaalsuse ja välimuse. See protsess on oluliselt odavam kui uue rehvi ostmine ja aitab säästa väärtuslikke ressursse. Lisaks pikendab see rehvide eluiga, vähendades samal ajal jäätmete hulka ja toetades keskkonnasäästlikkust.",
        secondaryText: "EUROVIA-M pakub täielikku rehvide protekteerimise teenust, mis hõlmab uuenduslikke tehnoloogiaid ja rangeid kvaliteedikontrolli protseduure. Protekteerimine on eriti kasulik transpordiettevõtetele, kes soovivad vähendada kulusid, säilitades samal ajal sõidukite ja rehvide ohutuse. Meie pikaajaline kogemus selles valdkonnas teeb EUROVIA-Mist usaldusväärse partneri.",
        secondaryImg: header1,
        listItems: ["Kaasaegne külm-vulkaniseerimine – kasutame külm-vulkaniseerimise meetodit, mis tagab taastatud rehvide kõrge kvaliteedi ja pika kasutusea.",  "100% kontroll – iga rehv läbib põhjaliku kvaliteedikontrolli spetsiaalse kõrgsurve seadmega, et välistada võimalikud defektid.", "Garantii ja usaldusväärsus – igale protekteeritud rehvile väljastatakse garantii pass ja ühe-aastane mustrilindi garantii.", "Transport ja logistika – pakume uksest-ukseni transporti, toimetades rehvid kohale ja tagasi. Meie koostööpartnerid koguvad rehve üle Eesti, et tagada teenuse kiirus ja mugavus.", "ISO 9001 sertifikaat – meie teenuste kvaliteeti tõendab rahvusvaheline sertifikaat, mis kinnitab kõrgeid standardeid ja professionaalsust."]
    }


    return (
        <Service props={data}/>
    )
}

export default ProtectionS3;