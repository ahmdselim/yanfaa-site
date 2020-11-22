import React, { useState, Fragment } from "react";

const Content = (props) => {
  const { logo } = props;
  const [X, setX] = useState("");
  const [Y, setY] = useState("");
  // const [style , setStyle] = useState({translate('+X+'px, '+Y+'px)});

  const mouseMove = (e) => {
    const xWidth = (window.innerWidth - e.pageX * 8) / 100;
    const yWidth = (window.innerWidth - e.pageY * 8) / 100;
    setX(xWidth);
    setY(yWidth);
  };

  const renderContentHeader = () => {
    return (
      <section className="nav">
        <div className="row">
          <div className="left">
            <img
              onMouseMove={mouseMove}
              style={{
                transform: `translateX(${X}px) translateY(${Y}px)`,
                transition: `all 1.2s linear`,
              }}
              src={logo}
              alt="imageYanfaa"
            />
          </div>
          <div className="right">
            <h1>...علشان كلنا نستحق تعليم أفضل</h1>
            <p>
              ابدأ اتعلم دلوقتي باسعار تبدأ من ١٠ جنيه مصري شهريًا للكورس، او
              اشترك بشكل شامل في كل كورسات المنصة ب ١٠٠ جنيه شهريًا.
            </p>
            <div className="buttons">
              <button className="courses">تصفح الكورسات</button>
              <button className="logSub">قم بالتسجيل للاشتراك</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return <Fragment>{renderContentHeader()}</Fragment>;
};

export default Content;
