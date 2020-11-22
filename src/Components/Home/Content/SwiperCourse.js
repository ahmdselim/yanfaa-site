import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faVideo,
  faTerminal,
  faLightbulb,
  faTextWidth,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.css";
const SwiperCourse = () => {
  SwiperCore.use([Autoplay, Navigation, Scrollbar, A11y]);
  const renderSwiper = () => {
    return (
      <>
        <Swiper
          spaceBetween={15}
          slidesPerView={3}
          autoplay={{ delay: 2500 }}
        >
          <SwiperSlide>
            <div className="category">
              <div className="categoryIcon">
                <FontAwesomeIcon
                  className="icon"
                  icon={faTerminal}
                  style={{ background: "#ff3c68" }}
                />
              </div>
              <div className="categoryText">
                <h3 style={{ color: "#ff3c68" }}>البرمجة</h3>
                <p>
                  كورسات تعليم انشاء وتطوير المواقع، تطبيقات الهاتف المحمول
                  وغيرها
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="category">
              <div className="categoryIcon">
                <FontAwesomeIcon
                  className="icon"
                  icon={faBullhorn}
                  style={{ background: "#00b863" }}
                />
              </div>
              <div className="categoryText">
                <h3 style={{ color: "#00b863" }}>التسويق</h3>
                <p>كورسات تعليم التسويق، والتسويق الالكتروني</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="category">
              <div className="categoryIcon">
                <FontAwesomeIcon
                  className="icon"
                  icon={faTextWidth}
                  style={{ background: "#ff8053" }}
                />
              </div>
              <div className="categoryText">
                <h3 style={{ color: "#ff8053" }}>التصميم</h3>
                <p>كورسات تعليم التصميم والتحريك وتعديل الفيديوهات وغيرها</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="category">
              <div className="categoryIcon">
                <FontAwesomeIcon
                  className="icon"
                  icon={faVideo}
                  style={{ background: "#00aeb7" }}
                />
              </div>
              <div className="categoryText">
                <h3 style={{ color: "#00aeb7" }}>التصوير </h3>
                <p>
                  كورسات تعليم التصوير بانواعه كالتصوير الدعائي، تصوير المنتجات
                  وغيرها
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category">
              <div className="categoryIcon">
                <FontAwesomeIcon
                  className="icon"
                  icon={faLightbulb}
                  style={{ background: "#3682e0" }}
                />
              </div>
              <div className="categoryText">
                <h3 style={{ color: "#3682e0" }}>المحتوى</h3>
                <p>كورسات تعليم الكتابة وتطوير المحتوى المرئي بانواعه وغيرها</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="category">
              <div className="categoryIcon">
                <FontAwesomeIcon className="icon" icon={faBriefcase} />
              </div>
              <div className="categoryText">
                <h3>الاعمال</h3>
                <p>
                  كورسات الاعمال والتأهيل لسوق العمل مثل المبيعات والموارد
                  البشرية وادارة المشروعات وغيرها
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  };
  return <>{renderSwiper()}</>;
};

export default SwiperCourse;
