import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import mimg1 from "../../../Images/service/bike-6.png";
import mimg2 from "../../../Images/service/boot-shoe-1.jpg";
import mimg3 from "../../../Images/service/gloves-2.jpg";
import mimg4 from "../../../Images/service/helmet-6.jpg";
import mimg5 from "../../../Images/service/jacket-4.jpg";
import mimg6 from "../../../Images/service/part-1.jpg";

const MyCard = () => {
  return (
    <div className="bg-danger p-4 ">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={mimg1} />
          <Card.Body>
            <Card.Title className="border border-bottom-0 border-end-0 border-start-0 border-danger">
              ATV
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={mimg2} />
          <Card.Body>
            <Card.Title className="border border-bottom-0 border-end-0 border-start-0 border-danger">
              Boots
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={mimg3} />
          <Card.Body>
            <Card.Title className="border border-bottom-0 border-end-0 border-start-0 border-danger">
              Gloves
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={mimg4} />
          <Card.Body>
            <Card.Title className="border border-bottom-0 border-end-0 border-start-0 border-danger">
              Helmet
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={mimg5} />
          <Card.Body>
            <Card.Title className="border border-bottom-0 border-end-0 border-start-0 border-danger">
              Jacket
            </Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={mimg6} />
          <Card.Body>
            <Card.Title className="border border-bottom-0 border-end-0 border-start-0 border-danger">
              Accessories
            </Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default MyCard;
