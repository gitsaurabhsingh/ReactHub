import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchhead } from "../Redux/Slice";
import Style from "./Drop.module.scss";

const Drop = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.Api);
  useEffect(() => {
    dispatch(fetchhead());
  }, [dispatch]);

  return (
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
  );
};

export default Drop;
