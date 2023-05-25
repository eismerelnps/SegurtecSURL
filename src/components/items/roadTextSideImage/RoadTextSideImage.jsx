import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export const RoadTextSideImage = ({ imagen }) => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h2>Título</h2>
          <div className="roadmap">
            <div className="elemento-roadmap">
              <div className="numero">1</div>
              <div className="contenido">
                <h3>Título 1</h3>
                <p>Descripción 1</p>
              </div>
            </div>
            <div className="elemento-roadmap">
              <div className="numero">2</div>
              <div className="contenido">
                <h3>Título 2</h3>
                <p>Descripción 2</p>
              </div>
            </div>
            <div className="elemento-roadmap">
              <div className="numero">3</div>
              <div className="contenido">
                <h3>Título 3</h3>
                <p>Descripción 3</p>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <img src={imagen} alt="Imagen" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};


