import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

import style from "./style";

const BookResult = ({ nombre, peso, ruta }) => {
  return (
    <Card className="my-2">
      <Row container>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>
                <a href={ruta}>
                  <h3>{nombre}</h3>
                </a>
              </Card.Title>
              <h4>{peso}</h4>
              <a href={ruta}>Ver más</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default BookResult;
