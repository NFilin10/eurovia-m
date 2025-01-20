import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import {FaPhone} from "react-icons/fa6";
import {MdEmail, MdOutlineEmail} from "react-icons/md";
import {IoLocationOutline, IoLocationSharp} from "react-icons/io5";

import logo from './assets/logo-modified.png';
import service1Image from "./assets/service1.jpg";
import service2Image from "./assets/service4.jpg";
import service3Image from "./assets/service2.jpg";
import service4Image from "./assets/service3.jpg";
import service5Image from "./assets/service5.jpg";
import history from './assets/history.jpg'
import vision from './assets/vision.jpg'
import mission from './assets/mission.jpg'


import React from "react";
import {FiPhone} from "react-icons/fi";
import {LuBookCheck} from "react-icons/lu";

let iconStylesHome = {fontSize: "3.5em", color: "red"};
let iconStylesFooter = {fontSize: "30px", color:"red"};
let iconStylesContact = {padding: "15px", fontSize:"50px", color:"white", border: "2px solid white", borderRadius: "50%"};




const state = {
    navbar: {
      logo: logo,
      menuItems: [
          {
              text: "Teenused",
              to: "#",
              subMenu: [
                  {
                      text: "Sõiduautode rehvide vahetus",
                      to: "/sõiduauto-rehvvi-vahetus",
                  },
                  {
                      text: "Veoautode rehvide vahetus",
                      to: "/veoauto-rehvvi-vahetus",
                  },
                  {
                      text: "Protekteerimine",
                      to: "/protekteerimine",
                  },
                  {
                      text: "Rehvide remont",
                      to: "/remont",
                  },
                  {
                      text: "Rehvide hotell",
                      to: "/hotell",
                  }
              ]
          },
          {
              text: "Hinnakiri",
              to: "/"
          },
          {
              text: "Meist",
              to: "/meist"
          },
          {
              text: "Kontakt",
              to: "/kontakt"
          }
      ]
  },
    header: {
        secondaryHeading: "Me oleme Eurovia-m",
        mainHeading: "Eurovia-m – täpsus ja usaldusväärsus teie rehvide hoolduses",
        text: "Pakume kiiret rehvide vahetust, professionaalset remonti, protekteerimist ja mugavat rehvi hotelli. Meie eesmärk on tagada, et teie auto rehvid oleks alati valmis igaks sõiduks – turvaliselt ja usaldusväärselt. Eurovia-m, teie partner igal teel!",
        buttonReadMore: "Uuri rohkem",
        buttonContact: "Võta ühendust"
    },
    services: {
        welcomeSection: {
            secondaryHeading: "Tere tulemast Eurovia-m-i",
            mainHeading:["Kõik mida Te vajate", "ühes kohas"],
            text: "Pakume kõike alates rehvide vahetusest ja remondist kuni protekteerimise ja turvalise rehvi hoiustamiseni. Eurovia-m-is on teie turvalisus ja rahulolu alati esikohal!"
        },
        headings: {
            promises: "MEIE LUBADUSED",
            services: "MEIE TEENUSED",
            tech: "Kõrgtehnoloogia",
            mainHeading: "KÕIK, MIDA TEIE AUTO VAJAB",
            text: "Kasutame kaasaegseid tööriistu ja tehnoloogiaid, et tagada teie auto rehvide hoolduse ja remondi parim kvaliteet. Usaldage meid, et saaksite nautida turvalist ja sujuvat sõitu."
        },
        promises:[
            {
                promiseHeading: "Taskukohane hind",
                promiseText: "Pakume alati parima hinna ja kvaliteedi suhtega teenuseid",
                icon: <TbCircleNumber1 style={iconStylesHome}/>
            },
            {
                promiseHeading: "Hea teenindus",
                promiseText: "Professionaalne ja sõbralik lähenemine igale kliendile",
                icon: <TbCircleNumber2 style={iconStylesHome}/>
            },
            {
                promiseHeading: "Kõrge kvaliteet",
                promiseText: "Kasutame ainult usaldusväärseid meetodeid ja materjale, et tagada teie rahulolu",
                icon: <TbCircleNumber3 style={iconStylesHome}/>
            },
        ],
        serviceCards: [
            {
                serviceName: "Sõiduautode rehivde vahetus",
                serviceDescription: "Kiire ja täpne rehvide vahetus, et teie sõiduk oleks valmis igaks teekonnaks.",
                imageUrl: service1Image,
                link: "/sõiduauto-rehvvi-vahetus"
            },
            {
                serviceName: "Veoautode rehivde vahetus",
                serviceDescription: "Professionaalne teenus, mis tagab veoautode rehvide turvalisuse ja töökindluse.",
                imageUrl: service2Image,
                link: "/veoauto-rehvvi-vahetus"
            },
            {
                serviceName: "Protekteerimine",
                serviceDescription: "Pikendame rehvide eluiga kvaliteetse protekteerimise abil, et säästa teie raha ja keskkonda.",
                imageUrl: service3Image,
                link: "/protekteerimine"
            },
            {
                serviceName: "Rehvide remont",
                serviceDescription: "Parandame teie rehvid kiiresti ja usaldusväärselt, et saaksite muretult edasi liikuda.",
                imageUrl: service4Image,
                link: "/remont"
            },
            {
                serviceName: "Rehvide hotell",
                serviceDescription: "Hoidke oma hooajavälised rehvid turvaliselt ja mugavalt meie rehvide hotellis.",
                imageUrl: service5Image,
                link: "/hotell",
            }
        ],
        aims: [
            {
                aim: "Täpsus ja kiirus igas teenuses"
            },
            {
                aim: "Kvaliteetsed materjalid ja lahendused"
            },
            {
                aim: "Meeskond, kes hoolib teie auto vajadustest"
            },
            {
                aim: "Kaasaegsed seadmed ja meetodid"
            }
        ]
    },
    counter: [
        {
            heading: "Aastat kogemust",
            number: "20"
        },
        {
            heading: "Tehnikut",
            number: "7"
        },
        {
            heading: "Autod tehtud",
            number: "3500"
        },
        {
            heading: "Rahulolevad kliendid",
            number: "3000"
        }
    ],
    contactForm: {
        textSection: {
            secondaryHeading: "Võtke meiega ühendust",
            mainHeading: ["Saame koos parima", "lahenduseni!"],
            text: "Kui teil on küsimusi või vajate rohkem teavet, võtke meiega julgelt ühendust. Oleme siin, et aidata!",
            phone: "telefon",
            mail: "email"
        },
        formFields: {
            name: "Teie nimi",
            mail: " Teie email",
            subject: "Teie teema",
            message: "Teie sõnum",
            submit: "Saada  sõnum"
        }
    },
    footer: {
        logo: logo,
        footerItems: [
            {
                heading: "Soovite helistada meile?",
                contactChoice: "telefon",
                icon: <FaPhone style={iconStylesFooter}/>
            },
            {
                heading: "Sooite kirjutada meile?",
                contactChoice: "email",
                icon: <MdEmail style={iconStylesFooter}/>
            },
            {
                heading: "Soovite külastada meid?",
                contactChoice: "asukoht",
                icon: <IoLocationSharp style={iconStylesFooter}/>
            }
        ]
    },
    about: {
        section1: {
            heading: ["Meie teekond alates ", "1995. ", "aastast"],
            text: "EUROVIA-M alustas tegevust Eesti turul 1995. aastal, pakkudes laia valikut autorehvidega seotud teenuseid. Ettevõtte pikaajaline kogemus veoautorehvide protekteerimise valdkonnas on võimaldanud luua usaldusväärseid koostöösuhteid kohalike ja rahvusvaheliste klientidega. Alates 2002. aastast omame rahvusvahelist kvaliteedisertifikaati ISO 9001, mis kinnitab meie töötajate kõrget kvalifikatsiooni, tehnoloogilisi võimalusi ning vastutustundlikku garantiisüsteemi. Oleme jätkuvalt pühendunud kvaliteedile ja innovatsioonile.",
            image: history
        },
        section2: {
            heading: ["Meie ", "missioon", "– kvaliteet ja keskkonnasäästlikkus"],
            text: "EUROVIA-M eesmärk on pakkuda autotranspordiettevõtetele kvaliteetseid, keskkonnasõbralikke ja kulutõhusaid rehvilahendusi. Meie töö aitab pikendada rehvide eluiga, vähendada jäätmete teket ja edendada vastutustundlikku ettevõtlust transpordisektoris.EUROVIA-M eesmärk on pakkuda autotranspordiettevõtetele kvaliteetseid, keskkonnasõbralikke ja kulutõhusaid rehvilahendusi. Meie töö aitab pikendada rehvide eluiga, vähendada jäätmete teket ja edendada vastutustundlikku ettevõtlust transpordisektoris.",
            image: mission
        },
        section3: {
            heading: ["Visioon ", "– olla rehvilahenduste juhtiv tegija"],
            text: "Meie visiooniks on saada regiooni juhtivaks autorehvide taastamise ja hooldusteenuste pakkujaks, pakkudes innovatiivseid lahendusi, mis toetavad nii meie klientide kui ka keskkonna heaolu. EUROVIA-M seab eesmärgiks tehnoloogia pideva arendamise ning klientide usalduse säilitamise läbi laitmatu teeninduse ja kvaliteedi.",
            image: vision
        },
        headings: {
            secondaryHeading: "EUROVIA-M teenused – kõik autorehvidele",
            mainHeading: ["Pakume laia valikut autorehvidega", "seotud teenuseid"]
        },
        serviceCarousel: [
            {
                id: 1,
                serviceImg: service1Image,
                serviceName: "Sõiduautode rehvide vahetus",
                serviceDescription: "Kiire ja täpne rehvide vahetus, et teie sõiduk oleks valmis igaks teekonnaks."
            },
            {
                id: 2,
                serviceImg: service2Image,
                serviceName: "Veoautode rehvide vahetus",
                serviceDescription: "Professionaalne teenus, mis tagab veoautode rehvide turvalisuse ja töökindluse."
            },
            {
                id: 3,
                serviceImg: service3Image,
                serviceName: "Protekteerimine",
                serviceDescription: "Kasutame kaasaegseid seadmeid ja külm-vulkaniseerimise meetodit, mis pikendab rehvide eluiga ja säästab kulusid."
            },
            {
                id: 4,
                serviceImg: service4Image,
                serviceName: "Rehvide remont",
                serviceDescription: "Professionaalsed teenused, mis tagavad teie rehvide maksimaalse töökindluse."
            },
            {
                id: 5,
                serviceImg: service5Image,
                serviceName: "Rehvide hotell",
                serviceDescription: "Hoidke oma hooajavälised rehvid turvaliselt ja mugavalt meie rehvide hotellis."
            }
        ]
    },
    contact: {
        mainHeading: "Võtke  meeiega  ühhendust",
        secondaryHeading: "ldkf ls;dfk lsdkf",
        contactElements: [
            {
                icon: <IoLocationOutline style={iconStylesContact}/>,
                heading: "address",
                text: "suur manniku 8",
            },
            {
                icon: <MdOutlineEmail style={iconStylesContact}/>,
                heading: "email",
                text: "euroviam@hot.ee",
            },
            {
                icon: <FiPhone style={iconStylesContact}/>,
                heading: "call us",
                text: "442 4732832",
            },
            {
                icon: <LuBookCheck style={iconStylesContact}/>,
                heading: "book time online",
                text: "djsak jkdsjak jdkasjdk jsa",
            }
        ]
    }



}

export default state




