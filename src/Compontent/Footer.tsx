import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchfooter } from "../Redux/Slice";
import Style from "./Footer.module.scss";

const Footer = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.Api);
  useEffect(() => {
    dispatch(fetchfooter());
  }, [dispatch]);
  const handlesubmit = (e: any) => {
    e.preventDefault();

    if (email == "") {
      setError("Please enter email");
    } else {
      setError("");
    }
  };
  return (
    <div className={Style.footer}>
      <div className={Style.wrapper}>
        {details.footer &&
          details.footer.map((item) => {
            return (
              <>
                <div className={Style.Footerflex}>
                  <div className={Style.footertext}>
                    <h1>
                      {item.connent}
                      <br></br>
                      <span></span>
                    </h1>

                    <h2>{item.credo}</h2>
                    <p>{item.pragraph}</p>
                    <h3>{item.number}</h3>
                    <h4>{item.email}</h4>
                  </div>
                  <div className={Style.footerlatest}>
                    <h2>
                      {item.latest}
                      <br></br>
                      <span></span>
                    </h2>
                    <div className={Style.footernumber}>
                      <div className={Style.footerdisk}>
                        <h3>{item.aprail}</h3>
                      </div>
                      <div className={Style.footernav}>
                        <p>{item.pragraph1}</p>
                      </div>
                    </div>
                    <div className={Style.footernumber}>
                      <div className={Style.footerdisk}>
                        <h3>{item.aprail}</h3>
                      </div>
                      <div className={Style.footernav}>
                        <p>{item.pragraph1}</p>
                      </div>
                    </div>
                    <div className={Style.footernumber}>
                      <div className={Style.footerdisk}>
                        <h3>{item.aprail}</h3>
                      </div>
                      <div className={Style.footernav}>
                        <p>{item.pragraph1}</p>
                      </div>
                    </div>
                  </div>
                  <div className={Style.footerSign}>
                    <h2>
                      {item.sigh}
                      <span></span>
                    </h2>

                    <p>{item.praghraph3}</p>
                    <div className={Style.form}>
                      <form onSubmit={handlesubmit} action="https://google.com">
                        <div className={Style.formname}>
                          <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            name="email"
                            onChange={(e) => setEmail(e.currentTarget.value)}
                          />
                          <span className={Style.error}>{error}</span>
                        </div>

                        <button type="submit">Send</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className={Style.FooterAbout}>
                  <div className={Style.footerport}>
                    <h2>
                      About Us | Contact Us | Career | Privacy Policy | Terms &
                      Conditions | Cookie Policy Copyright 2022 © CREDO
                      INVESTMENTS FZE
                    </h2>
                  </div>
                  <div className={Style.FooterIcondisk}>
                    <h2>Follow Us</h2>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-solid fa-p"></i>
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Footer;
