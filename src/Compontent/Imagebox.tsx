import React from "react";
import Style from "./imagebox.module.scss";
import Dubai from "../img/dubai.jpg";

const Imagebox = () => {
  return (
    <div className={Style.imagebox}>
      <span>
        <img src={Dubai} alt="" />
        <div className={Style.headment}>
          <h1>CREDO INVESTMENTS FZE</h1>
          <h2>Your search for the luxury home in Dubai ends here.</h2>
          <div className={Style.headhome}>
            <a href="/about">KNOW MORE</a>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Imagebox;
