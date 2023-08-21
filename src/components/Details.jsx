import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import clearday from "../images/clear.webp";
import clearnight from "../images/clearnight.webp";
import cloudyday from "../images/cloudy.webp";
import cloudynight from "../images/cloudynight.webp";
import lightrain from "../images/lightrain.webp";
import heavyrain from "../images/rain2.webp";
import storm from "../images/evenrain.webp";
import snow from "../images/snow.webp";
import other from "../images/new.webp";

const Details = (props) => {
  const temp = Math.round(props.result.main.temp);
  const weatherid = props.result.weather[0].id;
  const weathericon = props.result.weather[0].icon;

  const clearWeatherIds = [800];
  const cloudyWeatherIds = [801, 802, 803, 804];
  const snowWeatherIds = [
    600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622,
  ];
  const rainlightWeatherIds = [
    500, 501, 300, 301, 302, 310, 311, 312, 313, 314, 321,
  ];
  const rainheavyWeatherIds = [502, 503, 504, 511, 520, 521, 522, 531];
  const stormWeatherIds = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];

  let weatherImageSrc;
  if (clearWeatherIds.includes(weatherid)) {
    if (weathericon === "01d") {
      weatherImageSrc = clearday;
    } else {
      weatherImageSrc = clearnight;
    }
  } else if (cloudyWeatherIds.includes(weatherid)) {
    if (
      weathericon === "04n" ||
      weathericon === "03n" ||
      weathericon === "02n"
    ) {
      weatherImageSrc = cloudynight;
    } else {
      weatherImageSrc = cloudyday;
    }
  } else if (stormWeatherIds.includes(weatherid)) {
    weatherImageSrc = storm;
  } else if (rainlightWeatherIds.includes(weatherid)) {
    weatherImageSrc = lightrain;
  } else if (rainheavyWeatherIds.includes(weatherid)) {
    weatherImageSrc = heavyrain;
  } else if (snowWeatherIds.includes(weatherid)) {
    weatherImageSrc = snow;
  } else {
    weatherImageSrc = other;
  }

  return (
    <Container className="detailsbox">
      <Row>
        <Col md="4" style={{ textAlign: "center" }}>
          <h1 className="weatherinfo">{props.result.weather[0].main}</h1>
          <h3 className="otherinfo">{props.result.weather[0].description}</h3>
          <h4>
            <i className="bx bx-wind"> {props.result.wind.speed}m/s </i>
          </h4>
        </Col>
        <Col md="4" className="img-holder">
          <img src={weatherImageSrc} className="imgg" alt="Weather" />
        </Col>

        <Col md="4" style={{ textAlign: "center" }}>
          <h1 className="weatherinfo">{props.result.sys.country}</h1>
          <h4>
            <i className="bx bx-current-location">
              {" "}
              {props.result.coord.lat}° {props.result.coord.lon}°{" "}
            </i>
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="degreesinfo">{temp}°C</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
