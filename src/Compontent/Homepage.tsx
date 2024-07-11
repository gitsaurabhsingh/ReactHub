import React from "react";
import Banner from "./Banner";
import Futured from "./Futured";
import Content from "./Content";
import Gym from "./Gym";
import Building from "./Building";
import Prism from "./Prism";

import Imagebox from "./Imagebox";
import From from "./From";

const Homepage = () => {
  return (
    <div>
      {/* <About /> */}
      <Imagebox />
      <Banner />
      <Futured />
      <Content />
      <Gym />
      <Building />
      <Prism />
    </div>
  );
};

export default Homepage;
