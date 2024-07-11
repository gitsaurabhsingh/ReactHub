import React, { useEffect } from "react";

import Style from "./About.module.scss";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchAbout } from "../Redux/Slice";
import beauty from "../img/beautiful.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const About = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.Api);
  useEffect(() => {
    dispatch(fetchAbout());
  }, [dispatch]);
  return (
    <>
      <div className={Style.About}>
        <h1>About Us</h1>
      </div>
      <div className={Style.wrapper}>
        {details.About &&
          details.About.map((item) => {
            return (
              <>
                <div className={Style.AboutFlex}>
                  <div className={Style.AboutImage}>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      autoplay
                      dots={false}
                      items={1}
                    >
                      <img src={item.img} alt="" />
                    </OwlCarousel>
                  </div>

                  <div className={Style.Aboutpragraph}>
                    <h2>{item.credo}</h2>
                    <p>{item.pragraph}</p>
                    <p>{item.pragraph1}</p>
                    <p>{item.pragraph2}</p>
                    <p>{item.pragraph3}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className={Style.project}>
        <div className={Style.wrapper}>
          {details.About &&
            details.About.map((item) => {
              return (
                <div className={Style.projectText}>
                  <div className={Style.projectNav}>
                    <h2>{item.About}</h2>
                    <div className={Style.projectForm}>
                      <ul>
                        <li>
                          <a href="#/">{item.Majestique}</a>
                        </li>
                        <li>
                          <a href="#/">{item.mon}</a>
                        </li>
                        <li>
                          <a href="#/">{item.Le}</a>
                        </li>
                        <li>
                          <a href="#/">{item.lp}</a>
                        </li>
                        <li>
                          <a href="#/">{item.prism}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={Style.projectMen}>
                    <div className={Style.projectImage}>
                      <img src={item.img1} alt="" />
                      <h2>{item.team}</h2>
                      <p>{item.teampragraph}</p>
                    </div>
                    <div className={Style.projectCare}>
                      <img src={item.img2} alt="" />
                      <h2>{item.care}</h2>
                      <p>{item.carepragraph}</p>{" "}
                    </div>
                    <div className={Style.projectWide}>
                      <img src={item.img3} alt="" />
                      <h2>{item.wide}</h2>
                      <p>{item.widepragraph}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={Style.Client}>
        <div className={Style.wrapper}>
          {details.About &&
            details.About.map((item) => {
              return (
                <div className={Style.Clientdisk}>
                  <div className={Style.Clienttext}>
                    <h2>WHAT OUR CLIENT SAY ABOUT US</h2>
                  </div>
                  <div className={Style.CLientImage}>
                    <div className={Style.wrapper}>
                      <OwlCarousel
                        className="owl-theme"
                        loop
                        autoplay
                        dots={false}
                        items={1}
                      >
                        <div className={Style.Clientflex2}>
                          <div className={Style.ClientForm}>
                            <img src={item.imgmen} alt="" />
                          </div>

                          <div className={Style.ClientArticle}>
                            <p>{item.menpragraph}</p>
                            <h2>{item.james}</h2>
                          </div>
                        </div>
                        <div className={Style.Clientflex2}>
                          <div className={Style.ClientForm}>
                            <img src={beauty} alt="" />
                          </div>

                          <div className={Style.ClientArticle}>
                            <p>{item.menpragraph}</p>
                            <h2>{item.james}</h2>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                  <div className={Style.ClientEquaction}></div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default About;
