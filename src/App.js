
import './App.css';
import { Container } from 'react-bootstrap';
import Box from './components/Box';
import { useState } from 'react';



function App() {
  const api = {
    key: "2279166b6962965ec5641bab321e22b4",
    base: "https://api.openweathermap.org/data/2.5/",

  }
  const [location, setLocation] = useState("");
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };
  const [result, setResult] = useState({});
  const [colour, setColor] = useState(`linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)`);
  const sunIds = ["01d", "02d", "03d"];

  const getLocation = (newLocation) => {
    fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setResult(result);
        if (result.cod === 200) {
          const weathericon = result.weather[0].icon;
          console.log(weathericon);
          if (sunIds.includes(weathericon)) {
            setColor(` linear-gradient(147deg, #ffe53b 0%, #ff2525 74%)`)
          }
          else if (weathericon === "04d") {
            setColor(` linear-gradient(147deg, #313125 0%, #FF2525 54%, #0e0505 100%)`)
          }
          else { setColor(`linear-gradient(19deg, #191c7d 0%, #0c0c0c 100%)`) }
        }
        else {
          setColor(`linear-gradient(132deg, #F4D03F 0%, #16A085 100%)`)
        }

        setLocation("");
      });

  };






  return (

    < Container className='body' style={{ backgroundImage: colour }
    }>
      <Box onLocationChange={handleLocationChange} getLocation={getLocation} result={result} location={location} />
    </Container >
  );
}

export default App;
