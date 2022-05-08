import React from "react";
import about from "../../../Images/about.jpg";
import mission from "../../../Images/mission.jpg";

const About = () => {
  return (
    <div className="container align-items-center justify-content-center">
      <div className="bg-dark p-4 rounded-3">
        <img className="img-fluid bg-dark" src={about} alt="" />
      </div>
      <h1 className=" text-center m-4 bg-dark text-warning p-4 rounded-3">
        See the Magnificent Bike
      </h1>
      <div className=" text-center d-lg-flex align-items-center justify-content-center container ">
        <iframe
          className="  w-75 m-3 rounded-3"
          width="900"
          height="500"
          src="https://www.youtube.com/embed/KcfFyo1Wg9E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="fs-5 bg-dark text-white  rounded-3 ">
          <h2 className=" text-center   text-warning   rounded-3 ">
            We are ready to role
          </h2>

          <p className="p-3">
            We currently have a good selection of new and used bikes and indoor
            trainers for your inspection in our showroom. Repairs are currently
            being completed within 3-4 weeks unless parts are not available.
            Contact us for an appointment or just bring it to our service
            department.
          </p>
        </div>
      </div>
      <h1 className=" text-center m-4 bg-dark text-warning p-4 rounded-3">
        Mission
      </h1>

      <div className=" text-center d-lg-flex align-items-center justify-content-center fs-4 container ">
        <img className="img-fluid w-50 bg-dark" src={mission} alt="" />
        <div className="bg-dark rounded-3 text-white">
          <p className="p-3">
            Our mission is simple: we will provide the best service possible so
            that your experience on a bike and in our bicycle stores is nothing
            less than excellent.
          </p>
          <p className="p-3">
            Our approach is even simpler, treat everyone with respect and teach
            them as much as we can regarding their purchase so they are
            confident and empowered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
