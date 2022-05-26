import React, { Fragment } from "react";
import logo from "../../../images/Main/yanfaa.png";
import Navbar from "./Navbar";
import Content from "./Content";

const Header = () => {
  const renderHeader = () => {
    return (
      <Fragment>
        <Navbar />
        <Content logo={logo} />
      </Fragment>
    );
  };
  return renderHeader();
};

export default Header;
