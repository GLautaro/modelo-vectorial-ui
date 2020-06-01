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
                <a href={"http://127.0.0.1:8887/"+nombre}>
                  <h3>{nombre}</h3>
                </a>
              </Card.Title>
              <h4>Peso: {peso}</h4>              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default BookResult;
