import React from "react";

import Landing from "../components/Landing";
import Services from "../components/Services";
import Design from "../components/Design";
import Portfolio from "../components/Portfolio";
import Video from "../components/Video";
import About from "../components/About";
import Statistics from "../components/Statistics";
import Skills from "../components/Skills";
import Quote from "../components/Quote";
import Pricing from "../components/Pricing";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";

const HomeScreen = () => {
  return (
    <main>
      <Landing />
      <Services />
      <Design />
      <Portfolio />
      <Video />
      <About />
      <Statistics />
      <Skills />
      <Quote />
      <Pricing />
      <Subscribe />
      <Contact />
    </main>
  );
};

export default HomeScreen;
