import React from "react";
import { CgPhone } from "react-icons/cg";
import { MdArrowForward, MdOutlineMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import {
  TiLocation,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "rgba(36, 36, 36, 0.95)" }}>
      <div className="container d-grid mt-5">
        <div className="row my-3 text-white">
          <div className="col-md-3 col-sm-12 my-3">
            <h4 className="text-center fw-bold text-white">About</h4>
            <p>
              We are a locally owned and operated and have been serving the
              Woodlands since 1998. Our goal is to help promote the sport of
              biking within the community.
            </p>
            <p>
              Bikeland's staff is made up of friendly and experienced people who
              love to ride bikes.
            </p>
          </div>
          <div className="col-md-3 col-sm-12 my-3">
            <h4 className="text-center fw-bold text-white">Quick Link</h4>
            <div className="d-flex justify-content-center flex-column align-items-center lh-lg">
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Home
              </Link>
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                My Products
              </Link>
              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Inventory
              </Link>
              <Link to="/about" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                About
              </Link>

              <Link to="/" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Reviews
              </Link>
              <Link to="/blogs" className="text-decoration-none text-white ">
                <MdArrowForward className="text-info me-2" />
                Blogs
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 my-3">
            <h4 className="text-center fw-bold text-white">Contact Info</h4>
            <div>
              <p>
                <TiLocation className="fs-5 me-2" />
                House-36, Road-2, ChonponPura, Chottogram, Bangladesh
              </p>
              <p>
                <CgPhone className="fs-5 me-2" />
                +(880) 1778-120603
              </p>
              <p>
                <MdOutlineMail className="fs-5 me-2" />
                amirulislamtajbid@gmail.com
              </p>
              <div className="text-center">
                <span>
                  <TiSocialFacebook
                    className="fs-2 me-2 social-fb"
                    style={{ cursor: "pointer" }}
                  />
                  <RiInstagramFill
                    className="fs-2 me-2 social-in"
                    style={{ cursor: "pointer" }}
                  />
                  <TiSocialTwitter
                    className="fs-2 me-2 social-twi"
                    style={{ cursor: "pointer" }}
                  />
                  <TiSocialYoutube
                    className="fs-2 me-2 social-yt"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 my-3">
            <h4 className="text-center text-white fw-bold">Subscribe</h4>
            <p>Sign Up To Our Newsletter And Get The Latest Offers.</p>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-100 mx-auto border-0 p-2 rounded-3"
            />
            <button
              className="button-33
              my-3 w-50 mx-auto d-block"
              variant="info"
            >
              Get Notified
            </button>
          </div>
        </div>
        <div className="row text-center text-white">
          <p>
            &copy; {new Date().getFullYear()}
            <span className="text-danger"> Bike Land</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
