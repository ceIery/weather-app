import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CurrentWeather from "./CurrentWeather";

function WeatherCard({ weather }) {
    console.log(weather);

    return (
        <Card className="text-center">
            <Card.Body>Enter a location above to get started</Card.Body>
            <CurrentWeather weather={weather} />
        </Card>
    );
}

export default WeatherCard;
