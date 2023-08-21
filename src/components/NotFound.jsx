import React from "react";
import { Container, Row } from "react-bootstrap";
import notfound from "../images/notfound.webp";

const NotFound = () => {
  return (
    <Container>
      <Row className="home">
        <div className="notfound">
          <img src={notfound} alt="img" />
        </div>
        <h3 className="oops">Ooops!!!!! Location Not Found</h3>
        <h2 className="oops">Try Again 🔁</h2>
      </Row>
    </Container>
  );
};

export default NotFound;
