import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../Images/banner/banner1.jpg";
import banner2 from "../../../Images/banner/banner2.jpg";
import banner3 from "../../../Images/banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect} className="w-50">
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <h2 className="fw-bolder text-warning">I Am TAJBID </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />

            <Carousel.Caption>
              <h2 className="fw-bolder text-primary">Leave All to Me</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />

            <Carousel.Caption>
              <h2 className="fw-bolder text-primary">Study Hard</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
