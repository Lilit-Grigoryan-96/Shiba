import React from "react";

import Heading from "./components/Heading/Heading";
import FeaturesSection from "./components/AboutUs/FeaturesSection";
import Guests from "./components/Guests/Guests";
import Roadmap from "./components/Roadmap/Roadmap";
import Faq from "./components/Faq/Faq";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <FeaturesSection />
      <Guests />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
