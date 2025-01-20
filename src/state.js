import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import {FaPhone} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import logo from './assets/logo-modified.png';
import service1Image from "./assets/service1.jpg";
import service2Image from "./assets/service4.jpg";
import service3Image from "./assets/service2.jpg";
import service4Image from "./assets/service3.jpg";
import service5Image from "./assets/service5.jpg";
import React from "react";

let iconStylesHome = {fontSize: "3.5em", color: "red"};
let iconStylesFooter = {fontSize: "30px", color:"red"};



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
    }



}

export default state




