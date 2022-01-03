import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const WeatherDisplay = ({ onChange }) => {
    return (
        <Card className="text-center">
            <Card.Body>Enter a location above to get started</Card.Body>
        </Card>
    );
};

export default WeatherDisplay;
