import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Artical = () => {
  return (
    <div>
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
      </CardGroup>
    </div>
  );
};

export default Artical;
