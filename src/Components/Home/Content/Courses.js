import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Time from "./Time";
import { Link } from "react-router-dom";

const Courses = (props) => {
  const { course } = props;
  const date = new Date(course.data.date);

  const renderCourses = () => {
    return (
      <div key={course.id} className="famousCourseBox">
        <Link to={`/single/${course.id}`}>
          <div className="imageCourseBox">
            <img src={course.data.imageCourse} alt="ImageCourse" />
          </div>
          <div className="textCourseBox">
            <p>{course.data.name}</p>

            <div className="textCourseBoxRow">
              <div className="time">
                <p>{<Time date={date} />}</p>
                <FontAwesomeIcon className="clock" icon={faClock} />
                <div className="clear"></div>
              </div>
              <div className="instructor">
                <p>{course.data.constructor}</p>
                <img src={course.data.imageConstructor} alt="" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  return <>{renderCourses()}</>;
};

export default Courses;
