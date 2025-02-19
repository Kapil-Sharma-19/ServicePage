import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Homepage;