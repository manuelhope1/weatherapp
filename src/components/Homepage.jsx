import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import homeimg2 from "../images/home2.webp";
import logo from "../images/logo.avif";

const Homepage = () => {
  return (
    <Container>
      <Row className="home">
        <Col className="homedir">
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {" "}
            <h1 className="headd">WEATHER APP</h1>
            <img src={logo} className="logo" alt="img" />
          </div>
          <div className="imgfolder">
            {" "}
            <img src={homeimg2} className="homee img-fluid" alt="img" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Col md="6">
              <h6 className="copyinfo">
                RealTime Weather is your go-to real-time weather app, providing
                instant updates and detailed forecasts.
              </h6>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
