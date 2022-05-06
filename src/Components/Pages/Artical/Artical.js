import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import aimg1 from "../../../Images/Artical/1.jpg";
import aimg2 from "../../../Images/Artical/2.jpg";
import aimg3 from "../../../Images/Artical/3.jpg";
import "./Artical.css";

const Artical = () => {
  return (
    <div className="mt-4">
      <div className="">
        <div className="button-85 w-50 text-center d-block mx-auto mb-4">
          <h1
            className="   mx-auto d-block  fw-bolder text-center "
            style={{ fontSize: "1.3em" }}
          >
            Artical
          </h1>
        </div>
      </div>

      <CardGroup className="art-img">
        <Card className="m-3  ">
          <div className="img-hover-zoom">
            <Card.Img variant="top" src={aimg1} />
          </div>

          <Card.Body>
            <Card.Title className="border border-bottom-0 border-end-0 border-start-0 border-danger">
              Electric Cars Aren’t Pollution-Free; They Have To Get Their Energy
              From ..
            </Card.Title>
          </Card.Body>
        </Card>
        <Card className="m-3">
          <div className="img-hover-zoom">
            <Card.Img variant="top" src={aimg2} />
          </div>
          <Card.Body>
            <Card.Title className="border border-bottom-0 border-end-0 border-start-0 border-danger">
              You Can Know Or Not Know How A Car Runs And Still Enjoy Riding In
              A Car
            </Card.Title>
          </Card.Body>
        </Card>
        <Card className="m-3">
          <div className="img-hover-zoom">
            <Card.Img variant="top" src={aimg3} />
          </div>
          <Card.Body>
            <Card.Title className="border border-bottom-0 border-end-0 border-start-0 border-danger">
              Race Cars, No Matter What Size Or Shape They Are, They Do The Same
              Thing..
            </Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Artical;
