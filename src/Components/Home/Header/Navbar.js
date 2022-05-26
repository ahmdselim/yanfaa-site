import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const renderLogin = () => {
    return (
      <li className={sideBar ? "log activeSideBarLi" : "log"}>
        <span className={sideBar ? "login activeSideBarLiLogin" : "login"}>
          تسجيل دخول
        </span>
        <span
          className={
            sideBar ? "subscribe activeSideBarLiSubscribe" : "subscribe"
          }
        >
          اشترك الان
        </span>
      </li>
    );
  };
  const renderNavbarHeader = () => {
    return (
      <div className="row">
        <ul className={sideBar ? "activeSideBarUl" : ""}>
          <li
            className={sideBar ? "times timesActive" : "times"}
            onClick={() => setSideBar(!sideBar)}
            style={sideBar ? { display: "block" } : { display: "none" }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </li>
          <li className="bars">
            <FontAwesomeIcon
              onClick={() => setSideBar(!sideBar)}
              style={sideBar ? { display: "none" } : { display: "block" }}
              icon={faBars}
            />
          </li>
          {renderLogin()}
          <li
            onClick={() => setSideBar(!sideBar)}
            style={sideBar ? { display: "none" } : { display: "block" }}
          >
            <Link to="/">
              <span className="logo">ينفع </span> <span>تجريبي</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  return <Fragment>{renderNavbarHeader()}</Fragment>;
};

export default Navbar;
