import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { RoadItem } from "./RoadItem";

export const RoadTextSideImage = ({ Items, image }) => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Comprometidos con la excelencia</h2>
          <div className="roadmap">


            {Items.map(({ caption, description }, i) => (
              <RoadItem number={i+1} caption={caption} description={description} />
            ))}
          </div>

          
        </Col>
        <Col md={6}>
          <img src="./assets/logo01.png" alt="Imagen" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};
