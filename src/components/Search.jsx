import React from "react";
import { Col, Row } from "react-bootstrap";

const Search = (props) => {
  const handleInputChange = (event) => {
    const newLocation = event.target.value;
    props.onLocationChange(newLocation);
  };

  const searchClick = () => {
    props.getLocation();
  };

  return (
    <Row className="searchbox">
      <Col md="3">
        {" "}
        <div className="sss">
          <input
            type="email"
            placeholder="Location"
            onChange={handleInputChange}
            className="sea"
            value={props.location}></input>

          <button className="butt" onClick={searchClick}>
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <h3 className="datei">{props.result.name}</h3>
        </div>{" "}
      </Col>
    </Row>
  );
};

export default Search;
