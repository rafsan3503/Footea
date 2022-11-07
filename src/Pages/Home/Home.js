import React from "react";
import Banner from "./Banner";
import Gallery from "./Gallery";
import ServicesBanner from "./ServicesBanner";
import Stats from "./Stats";

const Home = () => {
  return (
    <div>
      <Banner />
      <ServicesBanner />
      <Stats />
      <Gallery />
    </div>
  );
};

export default Home;
