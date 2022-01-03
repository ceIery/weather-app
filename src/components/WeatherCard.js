import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const WeatherCard = ({ weather }) => {
    console.log(weather);

    return (
        <Card className="text-center">
            <Card.Body>Enter a location above to get started</Card.Body>
        </Card>
    );
};

export default WeatherCard;
