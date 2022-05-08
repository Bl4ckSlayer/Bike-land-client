import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/banner/banner1.jpg";
import banner2 from "../../../Images/banner/banner2.jpg";
import banner3 from "../../../Images/banner/banner3.jpg";

import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container-fluid ">
      <div className="">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <h2
                className="button-85  mx-auto d-block w-50 "
                style={{ fontSize: "1em" }}
              >
                Speed Monster{" "}
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />

            <Carousel.Caption>
              <h2
                className="button-85  mx-auto d-block w-50 "
                style={{ fontSize: "0.85em" }}
              >
                Beauty With Power
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />

            <Carousel.Caption>
              <h4
                className="button-85  mx-auto d-block w-50 "
                style={{ fontSize: "0.9em" }}
              >
                Simple But Gorgeous
              </h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
