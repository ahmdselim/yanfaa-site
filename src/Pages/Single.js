import React, { Fragment, useEffect } from "react";
import HeaderPage from "../Components/Single/Header/Header";
import ContentPage from "../Components/Single/Content/Content";
import FooterPage from "../Components/Single/Footer/Footer";
import { getCourses } from "../store/Actions/action-creator";
import { useDispatch } from "react-redux";

const Single = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCourses(dispatch);
  }, [dispatch]);
  return (
    <Fragment>
      <HeaderPage />
      <ContentPage />
      <FooterPage />
    </Fragment>
  );
};

export default Single;
