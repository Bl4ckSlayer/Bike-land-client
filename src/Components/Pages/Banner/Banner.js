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
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h2 className="fw-bolder text-warning">I Am TAJBID </h2>
          <p className="fw-bolder  fs-4">
            A tutor who will guide you to the success
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h2 className="fw-bolder text-primary">Leave All to Me</h2>
          <p className="fw-bolder text-dark  fs-4">
            Sit back and relax i got all the thing.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h2 className="fw-bolder text-primary">Study Hard</h2>
          <p className="fw-bolder text-white fs-4">
            Work hard try hard success will be yours
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
