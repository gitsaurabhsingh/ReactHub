import React, { useEffect } from "react";
import Style from "./Banner.module.scss";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchbanner } from "../Redux/Slice";

const Banner = () => {
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.Api);
  useEffect(() => {
    dispatch(fetchbanner());
  }, [dispatch]);
  return (
    <div className={Style.banner}>
      <div className={Style.wrapper}>
        <div className={Style.bannerText}>
          <>
            {details.banner &&
              details.banner.map((item) => {
                return (
                  <>
                    <h3>{item.title}</h3>
                    <h4>{item.pragraph}</h4>
                    <div className={Style.Disk}>
                      <a href="/about">
                        {item.button}{" "}
                        <i className="fa-solid fa-angle-right"></i>
                      </a>
                    </div>
                  </>
                );
              })}
          </>
        </div>
      </div>
    </div>
  );
};

export default Banner;
