import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Jumbotron,
} from "react-bootstrap";
import BookResult from "../../Components/BookResult";

export default () => {
  const [searchText, setSearchText] = useState("");
  const [quantityDocs, setQuantityDocs] = useState("");
  const [bookResult, setBookResult] = useState([]);

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleQuantityDocsChange = (event) => {
    setQuantityDocs(event.target.value);
  };

  const handleCleanTextClick = (event) => {
    setSearchText("");
    setQuantityDocs("");
  };

  const handleSearchTextClick = (event) => {
    fetch(
      `http://localhost:8080/ModeloVectorial/api/buscador?q=${searchText}&r=${quantityDocs}`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setBookResult(myJson);
      });
  };

  return (
    <Container>
      <Jumbotron fluid>
        <Container>
          <Row container>
            <Col>
              <h1>DLC - Motor de busqueda de archivos</h1>
            </Col>
          </Row>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  value={searchText}
                  placeholder="Buscar..."
                  onChange={handleSearchTextChange}
                />
              </Col>
              <Col>
                <Form.Control
                  value={quantityDocs}
                  placeholder="Cantidad de documentos"
                  onChange={handleQuantityDocsChange}
                />
              </Col>
              <Col>
                <Button
                  variant="primary"
                  color="primary"
                  size="md"
                  onClick={handleSearchTextClick}
                >
                  Buscar
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      {bookResult.map((book) => (
        <BookResult nombre={book.nombre} peso={book.peso} ruta={book.ruta} />
      ))}
    </Container>
  );
};
