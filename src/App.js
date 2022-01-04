import React, { useState } from "react";
import Container from "react-bootstrap/Container";

import LocationSearch from "./components/LocationSearch";
import WeatherCard from "./components/WeatherCard";

function App() {
    const [weatherData, setWeatherData] = useState({});

    return (
        <Container className="p-5" fluid="sm">
            <LocationSearch setWeather={setWeatherData} />
            <WeatherCard data={weatherData} />
        </Container>
    );
}

export default App;
