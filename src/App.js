import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import LocationInput from "./components/LocationInput";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
    const [weatherData, setWeatherData] = useState();

    return (
        <Container className="p-5" fluid="sm">
            <LocationInput setWeatherData />
            <WeatherDisplay weatherData />
        </Container>
    );
}

export default App;
