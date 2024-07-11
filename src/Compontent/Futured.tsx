import React, { useEffect } from "react";
import Style from "./Futured.module.scss";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchfutured } from "../Redux/Slice";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Futured = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.Api);
  useEffect(() => {
    dispatch(fetchfutured());
  }, [dispatch]);
  return (
    <div className={Style.futured}>
      <div className={Style.wrapper}>
        {details.futured &&
          details.futured.map((item) => {
            return (
              <>
                <div className={Style.futuredtitle}>
                  <h2>{item.title}</h2>
                </div>

                <div className={Style.futuredpage}>
                  <div className={Style.futuredArticle}>
                    <h2>{item.dence}</h2>
                    <h3>{item.dence1}</h3>
                    <p>{item.pragraph}</p>
                    <div className={Style.futuredInfo}>
                      <a href="/">{item.get}</a>
                    </div>
                  </div>
                  <div className={Style.futuredImage}>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      autoplay
                      dots={false}
                      items={1}
                    >
                      <div className={Style.futuredEquation}>
                        <img src={item.img} alt="" />
                      </div>
                      <div className={Style.futuredEquation}>
                        <img src={item.img2} alt="" />
                      </div>
                    </OwlCarousel>
                    <div className={Style.futuredImagetext}>
                      <div className={Style.futuredArticle}>
                        <h2>{item.roof}</h2>
                        <h3>{item.pool}</h3>
                      </div>
                      <div className={Style.futuredArticle}>
                        <h2>{item.gym}</h2>
                        <h3>{item.health}</h3>
                      </div>
                      <div className={Style.futuredArticle}>
                        <h2>{item.play}</h2>
                        <h3>{item.child}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Futured;
