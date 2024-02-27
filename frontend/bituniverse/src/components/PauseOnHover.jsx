import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slide.css"

function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ color: "white" }} className="cards">
          <div style={{ color: "white" }}>
            <h1 style={{ color: "white" }}>Initial Design and Development</h1>
            <h3>Q4 2023</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada Pellentesque habitant morbi tristique senectus et netus
              et malesuada
            </p>
          </div>
        </div>
        <div style={{ color: "white" }} className="cards">
          <div style={{ color: "white" }}>
            <h1 style={{ color: "white" }}>Initial Design and Development</h1>
            <h3>Q4 2023</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada Pellentesque habitant morbi tristique senectus et netus
              et malesuada
            </p>
          </div>
        </div>
        <div style={{ color: "white" }} className="cards">
          <div style={{ color: "white" }}>
            <h1 style={{ color: "white" }}>Initial Design and Development</h1>
            <h3>Q4 2023</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada Pellentesque habitant morbi tristique senectus et netus
              et malesuada
            </p>
          </div>
        </div>
        <div style={{ color: "white" }} className="cards">
          <div style={{ color: "white" }}>
            <h1 style={{ color: "white" }}>Initial Design and Development</h1>
            <h3>Q4 2023</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada Pellentesque habitant morbi tristique senectus et netus
              et malesuada
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default PauseOnHover;
