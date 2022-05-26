import React, { useEffect } from "react";
import HomeHeader from "../Components/Home/Header/Header";
import HomeContent from "../Components/Home/Content/Index";
import HomeFooter from "../Components/Home/Footer/Footer";
import { getCourses } from "../store/Actions/action-creator";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCourses(dispatch);
  }, [dispatch]);
  return (
    <>
      <div className="header">
        <HomeHeader />
      </div>
      <HomeContent />
      <HomeFooter />
    </>
  );
};

export default Home;
