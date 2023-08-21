import React from "react";
import { Container } from "react-bootstrap";
import Details from "./Details";
import Homepage from "./Homepage";
import NotFound from "./NotFound";
import Search from "./Search";

const Box = (props) => {
  const MainDetails = Details;
  const result = props.result;
  let mainContent;

  if (result.cod === "404") {
    mainContent = <NotFound />;
  } else if (result.cod === 200) {
    mainContent = <MainDetails result={props.result} />;
  } else {
    mainContent = <Homepage />;
  }

  return (
    <Container className="boxx">
      <Search
        onLocationChange={props.onLocationChange}
        getLocation={props.getLocation}
        result={result}
        location={props.location}
      />
      {mainContent}
    </Container>
  );
};

export default Box;
