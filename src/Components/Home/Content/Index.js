import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Courses from "./Courses";
import SwiperCourse from "./SwiperCourse";
// import { Link } from "react-router-dom";

const Content = () => {
  const courses = useSelector((state) => state.Yanfaa.courses);

  const renderCourses = () => {
    return courses.map((course) => <Courses key={course.id} course={course} />);
  };

  const renderContent = () => {
    return (
      <section className="content">
        <div className="row">
          <div className="right">
            <FontAwesomeIcon className="arrowLeft" icon={faArrowLeft} />
            <FontAwesomeIcon className="arrowRight" icon={faArrowRight} />
          </div>
          <div className="left">
            <p>تصفح جميع الاقسام</p>
          </div>
        </div>
        <div className="row">
          <SwiperCourse />
        </div>
        <div className="famousCourses">
          <h2>أشهر الكورسات</h2>
          <div className="row">{renderCourses()}</div>
        </div>
      </section>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

export default Content;
