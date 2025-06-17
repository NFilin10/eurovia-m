import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3} from "react-icons/tb";
import {FaPhone} from "react-icons/fa6";
import {MdEmail, MdOutlineEmail} from "react-icons/md";
import {IoLocationOutline, IoLocationSharp} from "react-icons/io5";

import logo from '../public/assets/logo-modified.png'

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
import service3_1 from '../public/assets/ret.webp'
import service3_2 from '../public/assets/ret.jpg'
import service4_1 from "../public/assets/fix.jpg";
import service4_2 from "../public/assets/fix1.jpg";
import service5_1 from "../public/assets/servicePage5_1.jpg";
import service5_2 from "../public/assets/servicePage5_2.jpg";
import service6_1 from "../public/assets/service6_1.jpg"
import service6_2 from "../public/assets/service6_2.png"


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
                      to: "/tööstuslike-rataste-paigaldus",
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
                imageUrl: service3_2,
                imageUrlRaw: "./assets/service3.jpg",
                link: "/tööstuslike-rataste-paigaldus"
            },
            {
                imageUrl: service3Image,
                imageUrlRaw: "./assets/service4.jpg",
                link: "/protekteerimine"
            },
            {
                imageUrl: service4Image,
                imageUrlRaw: "./assets/service5.jpg",
                link: "/remont"
            },
            {
                imageUrl: service5Image,
                imageUrlRaw: "./assets/service6.jpg",
                link: "/hotell",
            }
        ],
    },
    counter: [
        {
            number: "25"
        },
        {
            number: "7"
        },
        {
            number: "35000"
        },
        {
            number: "10000"
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
                value: "+372 5202967, +372 5153722"
            },
            {
                icon: "icon2",
                value: "s.gorlanov@eurovia-m.ee, j.suurkuusk@eurovia-m.ee"
            },
            {
                icon: "icon3",
                value: "Suur männiku 8",
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
                serviceImg: service3_1,
            },
            {
                id: 4,
                serviceImg: service3Image,
            },
            {
                id: 5,
                serviceImg: service4Image,
            },
            {
                id: 6,
                serviceImg: service5Image,
            }
        ]
    },
    contact: {
        contactElements: [
            {
                icon: "icon1",
                text: "Suur männiku 8",
            },
            {
                icon: "icon2",
                text1: "s.gorlanov@eurovia-m.ee",
                text2: "j.suurkuusk@eurovia-m.ee"
            },
            {
                icon: "icon3",
                text1: "+372 5202967",
                text2: "+372 5153722"
            },
            {
                icon: "icon4",
            }
        ]
    },
    servicePages:[
        {
            mainImg: service1_1,
            secondaryImg: service1_2,
            path: "sõiduauto-rehvi-vahetus"
        },
        {
            mainImg: service2_1,
            secondaryImg: service2_2,
            path: "veoauto-rehvi-vahetus"
        },
        {
            mainImg: service6_1,
            secondaryImg: service6_2,
            path: "tööstuslike-rataste-paigaldus"
        },
        {
            mainImg: service3_1,
            secondaryImg: service3_2,
            path: "protekteerimine"
        },
        {
            mainImg: service4_1,
            secondaryImg: service4_2,
            path: "remont"
        },
        {
            mainImg: service5_1,
            secondaryImg: service5_2,
            path: "hotell"
        }
    ],




}

export default state




