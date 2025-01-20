
import logo from './assets/logo-modified.png';


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
  }
}

export default state




