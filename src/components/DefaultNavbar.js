import { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
// import NavLink from "@material-tailwind/react/NavLink";
import image from "assets/img/logo.png";
import Logo from "../assets/img/logo2.png";
import { Link } from "react-router-dom";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer className="header">
        <NavbarWrapper>
          <Link to="/">
            <NavbarBrand>
              <img
                src={image}
                alt=""
                className="w-28 lg:w-auto hidden md:block"
              />
              <img src={Logo} alt="" className="w-28 lg:w-auto md:hidden" />
            </NavbarBrand>
          </Link>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>
        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <Link to="/mint" className="py-2 px-4 text-white">
                Mint
              </Link>
              <a href="#about" className="py-2 px-4 text-white">
                About us
              </a>
              <a href="#road" className="py-2 px-4 text-white">
                RoadMap
              </a>
              <a href="#team" className="py-2 px-4 text-white">
                Team
              </a>
              <a href="#faq" className="py-2 px-4 text-white">
                FAQ
              </a>
              
              <a
                href="https://discord.gg/MtudMRc4zd"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-4 text-white"
              >
                Discord
              </a>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
