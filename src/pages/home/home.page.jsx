import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ContactUs />
      <Projects />
    </div>
  );
}
