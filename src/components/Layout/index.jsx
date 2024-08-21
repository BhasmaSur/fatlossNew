"use client";
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Home from "../Pages/Home";

export default function Layout() {
  const aboutSection = useRef(null);
  const menuSection = useRef(null);
  const teamSection = useRef(null);
  const testimonialSection = useRef(null);
  const contactSection = useRef(null);
  const scrollToSection = (num) => {
    switch (num) {
      case 1:
        window.scrollTo({
          top: menuSection.current.offsetTop,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scrollTo({
          top: aboutSection.current.offsetTop - 120,
          behavior: "smooth",
        });
        break;
      case 3:
        window.scrollTo({
          top: teamSection.current.offsetTop - 120,
          behavior: "smooth",
        });
        break;
      case 4:
        window.scrollTo({
          top: testimonialSection.current.offsetTop - 120,
          behavior: "smooth",
        });
        break;
      case 5:
        window.scrollTo({
          top: contactSection.current.offsetTop - 120,
          behavior: "smooth",
        });
        break;
    }
  };
  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        logoSrc="/images/logo.svg"
        variant="cs_heading_color"
      />
      <Home
        testimonialSection={testimonialSection}
        aboutSection={aboutSection}
        menuSection={menuSection}
        contactSection={contactSection}
        teamSection={teamSection}
      />
      <Footer
        scrollToSection={scrollToSection}
        contactSection={contactSection}
      />
    </>
  );
}
