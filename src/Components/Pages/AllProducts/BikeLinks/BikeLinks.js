import React from "react";

import img1 from "../../../../Images/BrandLogo/1.png";
import img2 from "../../../../Images/BrandLogo/2.png";
import img3 from "../../../../Images/BrandLogo/3.png";
import img4 from "../../../../Images/BrandLogo/4.png";
import img7 from "../../../../Images/BrandLogo/7.png";
import img6 from "../../../../Images/BrandLogo/6.png";

import img9 from "../../../../Images/BrandLogo/9.png";
import img10 from "../../../../Images/BrandLogo/10.png";
import "./BikeLinks.css";
import Image from "react-bootstrap/Image";

const BikeLinks = () => {
  return (
    <div className="mt-5 container-fluid">
      <div className="">
        <div className="button-85 w-50 text-center d-block mx-auto mb-4">
          <h1
            className="   mx-auto d-block text-center "
            style={{ fontSize: "1.3em" }}
          >
            Our Brand Partner
          </h1>
        </div>

        <div style={{ height: "2px" }} className="bg-warning"></div>

        <div className="brandlogo  ">
          <div className="container  mt-4 ">
            <div className="row gy-4">
              <div className="col col-lg-3 col-4 ">
                <a href="https://www.bmw.com" target="_blank">
                  <Image src={img1}></Image>
                </a>
              </div>
              <div className="col col-lg-3 col-4">
                <a href="https://can-am.brp.com/" target="_blank">
                  <Image src={img2}></Image>
                </a>
              </div>
              <div className="col col-lg-3 col-4 ">
                <a href="https://www.ducati.com/ww/en/home" target="_blank">
                  <Image src={img3}></Image>
                </a>
              </div>
              <div className="col col-lg-3 col-4">
                <a href="https://www.honda.com/" target="_blank">
                  <Image src={img4}></Image>
                </a>
              </div>
              <div className="col col-lg-3 col-4">
                <a href="https://www.ridekayo.com/ditbikes" target="_blank">
                  <Image src={img7}></Image>
                </a>
              </div>
              <div className="col col-lg-3 col-4">
                <a href="https://www.kawasaki.com/en-us/" target="_blank">
                  <Image src={img6}></Image>
                </a>
              </div>
              <div className="col col-lg-3 col-4">
                <a href="https://www.suzuki.com.bd/" target="_blank">
                  <Image src={img9}></Image>
                </a>
              </div>
              <div className="col col-lg-3 col-4">
                <a href="https://yamaha-motor.com/" target="_blank">
                  <Image src={img10}></Image>
                </a>
              </div>
            </div>
          </div>
          <div className="container align-items-center justify-content-center mt-4 mb-4">
            <div className="row"></div>
          </div>
        </div>

        <div style={{ height: "2px" }} className="bg-warning "></div>
      </div>
    </div>
  );
};

export default BikeLinks;
