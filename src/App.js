import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import SearchCard from "./components/SearchCard";
import CitySearch from "./components/CitySearch";
import WeatherCard from "./components/WeatherCard";

function App() {
    const [weatherData, setWeatherData] = useState({});

    return (
        <Container className="p-5" fluid="sm">
            <SearchCard setWeather={setWeatherData} />
            <WeatherCard data={weatherData} />
        </Container>
    );
}

export default App;
