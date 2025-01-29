import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import {FaPhone} from "react-icons/fa6";
import {MdEmail, MdOutlineEmail} from "react-icons/md";
import {IoLocationOutline, IoLocationSharp} from "react-icons/io5";

import logo from '../public/assets/logo-modified.png'

console.log(logo)
import service1Image from "../public/assets/service1.jpg";
import service2Image from "../public/assets/service4.jpg";
import service3Image from "../public/assets/service2.jpg";
import service4Image from "../public/assets/service3.jpg";
import service5Image from "../public/assets/service5.jpg";
import history from '../public/assets/history.jpg'
import vision from '../public/assets/vision.jpg'
import mission from '../public/assets/mission.jpg'


import React from "react";
import {FiPhone} from "react-icons/fi";
import {LuBookCheck} from "react-icons/lu";
import service1_1 from "../public/assets/servicePage1_1.jpg";
import service1_2 from "../public/assets/servicePage1_2.jpg";
import service2_1 from "../public/assets/servicePage2_1.jpg";
import service2_2 from "../public/assets/servicePage2_2.avif";
import service3_1 from '../public/assets/servicePage3_1.jpg'
import service3_2 from '../public/assets/servicePage3_2.jpg'
import service4_1 from "../public/assets/servicePage4_1_dark.jpg";
import service4_2 from "../public/assets/servicePage4_2.jpg";
import service5_1 from "../public/assets/servicePage5_1.jpg";
import service5_2 from "../public/assets/servicePage5_2.jpg";

let iconStylesHome = {fontSize: "3.5em", color: "red"};
let iconStylesFooter = {fontSize: "30px", color:"red"};
let iconStylesContact = {padding: "15px", fontSize:"50px", color:"red", border: "2px solid red", borderRadius: "50%"};




const state = {
    navbar: {
      logo: logo,
      menuItems: [
          {
              to: "/",
              subMenu: [
                  {
                      to: "/sõiduauto-rehvi-vahetus",
                  },
                  {
                      to: "/veoauto-rehvi-vahetus",
                  },
                  {
                      to: "/protekteerimine",
                  },
                  {
                      to: "/remont",
                  },
                  {
                      to: "/hotell",
                  }
              ]
          },
          {
              to: "/hinnakiri"
          },
          {
              to: "/meist"
          },
          {
              to: "/kontakt"
          }
      ]
  },
    services: {
        promises:[
            {
                icon: "icon1"
            },
            {
                icon: "icon2"
            },
            {
                icon: "icon3"
            },
        ],
        serviceCards: [

            {
                imageUrl: service1Image,
                imageUrlRaw: "/assets/service1.jpg",
                link: "/sõiduauto-rehvi-vahetus"
            },
            {
                imageUrl: service2Image,
                imageUrlRaw: "./assets/service2.jpg",
                link: "/veoauto-rehvi-vahetus"
            },
            {
                imageUrl: service3Image,
                imageUrlRaw: "./assets/service3.jpg",
                link: "/protekteerimine"
            },
            {
                imageUrl: service4Image,
                imageUrlRaw: "./assets/service4.jpg",
                link: "/remont"
            },
            {
                imageUrl: service5Image,
                imageUrlRaw: "./assets/service5.jpg",
                link: "/hotell",
            }
        ],
    },
    counter: [
        {
            number: "20"
        },
        {
            number: "7"
        },
        {
            number: "3500"
        },
        {
            number: "3000"
        }
    ],
    contactForm: {
        textSection: {
            phone: "telefon",
            mail: "email"
        },
    },
    footer: {
        logo: logo,
        footerItems: [
            {
                icon: "icon1",
                value: "372 384724775"
            },
            {
                icon: "icon2",
                value: "euroviam@hot.ee"
            },
            {
                icon: "icon3",
                value: "suur manniku 8",
            }
        ]
    },
    about: {
        section1: {
            image: history
        },
        section2: {
            image: mission
        },
        section3: {
            image: vision
        },
        serviceCarousel: [
            {
                id: 1,
                serviceImg: service1Image,
            },
            {
                id: 2,
                serviceImg: service2Image,
            },
            {
                id: 3,
                serviceImg: service3Image,
            },
            {
                id: 4,
                serviceImg: service4Image,
            },
            {
                id: 5,
                serviceImg: service5Image,
            }
        ]
    },
    contact: {
        contactElements: [
            {
                icon: "icon1",
                text: "suur manniku 8",
            },
            {
                icon: "icon2",
                text: "euroviam@hot.ee",
            },
            {
                icon: "icon3",
                text: "442 4732832",
            },
            {
                icon: "icon4",
                text: "book time",
            }
        ]
    },
    servicePages:[
        {
            mainImg: service1_1,
            secondaryImg: service1_2,
            path: "/sõiduauto-rehvi-vahetus"
        },
        {
            mainImg: service2_1,
            secondaryImg: service2_2,
            path: "/veoauto-rehvi-vahetus"
        },
        {
            mainImg: service3_1,
            secondaryImg: service3_2,
            path: "/protekteerimine"
        },
        {
            mainImg: service4_1,
            secondaryImg: service4_2,
            path: "/remont"
        },
        {
            mainImg: service5_1,
            secondaryImg: service5_2,
            path: "/hotell"
        }
    ],




}

export default state




