import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { RoadItem } from "./RoadItem";

export const RoadTextSideImage = ({ Items, image }) => {
  return (
    <Container>
      <Row>
        <h1 className="road-container text-center p-x-4">
          Comprometidos con la excelencia
        </h1>
        <Col md={6}>
          <div className="roadmap">
            {Items.map(({ caption, description }, i) => (
              <RoadItem
                key={i}
                number={i + 1}
                caption={caption}
                description={description}
              />
            ))}
          </div>
        </Col>
        <Col md={6}>
          <div className="roadmap-right h-100 p-5">
            <img
              className="img-fluid"
              src="./assets/Photos/camera-01.jpg"
              alt="Imagen"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
