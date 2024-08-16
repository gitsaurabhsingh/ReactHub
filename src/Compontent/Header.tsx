import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { fetchhead, fetchSearch } from "../Redux/Slice";
import Style from "./Header.module.scss";
import logo from "../img/logo.png";
import Form from "./From";
import StickyBox from "react-sticky-box";

const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.Api);
  useEffect(() => {
    dispatch(fetchhead());
    dispatch(fetchSearch());
  }, [dispatch]);

  const [search, setSerch] = useState("");
  const [query, setQuery] = useState(false);

  const handleChange = (e: any) => {
    setSerch(e.target.value);
    setQuery(true);
  };

  const handledata = (title: any) => {
    setSerch(title);
  };

  const filterdata = details.Search.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filterdata, "hello");
  const handleShow = () => {
    setShow(true);
  };

  const toggleData = () => {
    setShow(false);
  };

  const handleSide = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.style.width = "300px";
      document.body.style.overflow = "hidden";
    }
  };

  const handlenav = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.style.width = "0px";
    }
  };

  return (
    <>
      {/* <StickyBox style={{ zIndex: "999" }}> */}
      <div className={Style.header}>
        {show && (
          <div className={Style.overlay}>
            <Form Toggle={toggleData} />
          </div>
        )}
        <div className={Style.wrapper}>
          <div className={Style.headermain}>
            <div className={Style.logo}>
              <img src={logo} alt="" />
            </div>
            <div className={Style.headscroll} onClick={handleSide}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={Style.Headslidbar} id="sidebar">
              <div className={Style.HeadBox}>
                <input type="text" placeholder="Search" />
              </div>
              <div className={Style.headNavbar}>
                <ul>
                  {details.Search &&
                    details.Search.map((item) => {
                      return (
                        <li>
                          <a href="#/">{item.title}</a>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className={Style.HeadIconbar}>
                <a href="#/" className={Style.whatsapp}>
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </div>
              <div className={Style.HeadIconbar1}>
                <a href="#/">
                  <i className="fa-regular fa-message"></i> INQUIRE NOW
                </a>
              </div>
              <div className={Style.Headnav} onClick={handlenav}>
                <h2>X</h2>
              </div>
            </div>
            <div className={Style.headernav}>
              <ul>
                {details.data &&
                  details.data.map((item) => {
                    return (
                      <li>
                        <a href={item.url}>{item.title}</a>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className={Style.Icon}>
              <a
                href="https://api.whatsapp.com/send?phone=971565343585&text=I%20am%20interested%20in%20a%20Your%20project"
                className={Style.whatsapp}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#/" className={Style.inquiry} onClick={handleShow}>
                <i className="fa-regular fa-message"></i> INQUIRE NOW
              </a>
              <div className={Style.form}>
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={handleChange}
                />
                <div className={Style.apidata}>
                  {query && (
                    <ul>
                      {filterdata &&
                        filterdata.map((item) => (
                          <li
                            key={item.id}
                            onClick={() => handledata(item.title)}
                          >
                            <a href={`${item.id}`}>{item.title}</a>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
                {/* <i className="fa-solid fa-magnifying-glass"></i> */}
              </div>
            </div>
            {/* <div className={Style.Headerlogo}>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <div className={Style.headerindex}>
            <a href="#/"> INQUIRE NOW</a>
            <div className={Style.email}>
              <i className="fa-regular fa-message"></i>
            </div>
          </div>
          <div className={Style.headerform}>
            <input type=" text" placeholder="search" />
            <div className={Style.search}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      {/* </StickyBox> */}
    </>
  );
};

export default Header;
