import React, { useState, useRef } from "react";
import Courses from "../../Home/Content/Courses";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css"; // import css

const Content = () => {
  let { id } = useParams();
  const courses = useSelector((state) => state.Yanfaa.courses);
  const filtered = courses && courses.filter((course) => course.id === id);
  const videoSelected =
    filtered && filtered.map((course) => course.data.courseList[0].video);

  const player = useRef();
  const [selected, setSelected] = useState(videoSelected.toString());

  const handleClick = (video) => {
    document.getElementById("videoCourse").setAttribute("src", video);
    setSelected(video);
    player.current.load();
  };

  const renderCourses = () => {
    return courses.map((course) => <Courses key={course.id} course={course} />);
  };

  const renderContent = () => {
    return (
      <div className="contentSingle">
        <section className="coverCourse">
          <div className="imageCover"></div>
        </section>

        <section className="course">
          <div className="container">
            <div className="row">
              <div className="left">
                <p>
                  جنيه 35
                  <span>ابدأ الأن</span>
                </p>
              </div>
              <div className="right">
                <p>
                  {courses &&
                    courses
                      .filter((course) => course.id === id)
                      .map((course) => course.data.name)}
                </p>
              </div>
            </div>

            <div className="row_Content">
              <div className="videoList">
                {courses &&
                  courses
                    .filter((course) => course.id === id)
                    .map((course) => (
                      <>
                        {course.data.courseList.map((video) => (
                          <ul
                            onClick={() => handleClick(video.video)}
                            key={video.id}
                            className={
                              video.video === selected
                                ? "videoListItem selected"
                                : "videoListItem"
                            }
                          >
                            <li className="videoListItem___left">
                              {video.name}
                            </li>
                            <li className="videoListItem___right">
                              {video.time}
                            </li>
                          </ul>
                        ))}
                      </>
                    ))}
              </div>
              <div className="video">
                <Player
                  id={"videoPlayer"}
                  ref={player}
                  poster={filtered.map((course) => course.data.imageCourse)}
                >
                  <source id="videoCourse" src={videoSelected} />
                  <ControlBar />
                </Player>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="famousCourses">
            <div className="row">{renderCourses()}</div>
          </div>
        </section>
      </div>
    );
  };
  return <>{renderContent()}</>;
};

export default Content;
