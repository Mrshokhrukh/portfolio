import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import foodOrdering from "../../img/Food ordering app -Home - Google Chrome_2.jpg";
import process from "../../img/Settings-gear-icon-Graphics-14824857-5-580x386.jpg";
import myshop from "../../img/CheapDeals. - Google Chrome.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://lively-myfoodorderingapp.netlify.app/"
            target="_blank"
          >
            <img src={foodOrdering} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://marvelous-swan-bae5a8.netlify.app" target="_blank">
            <img src={myshop} alt="404" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={process} alt="" height={180} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={process} alt="" height={180} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
