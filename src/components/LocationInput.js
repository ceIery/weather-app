import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function LocationInput(props) {
    const [location, setLocation] = useState("");

    // Check if enter is pressed
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // Override form submit on enter
            e.preventDefault();
            fetchWeather();
        }
    };

    // Fetch weather from OpenWeatherMap
    const fetchWeather = () => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}`
        )
            .then((response) => response.json())
            .then((data) => props.setWeatherData(data));
    };

    return (
        <Form>
            <Form.Group className="search-form" controlId="formLocation">
                <Form.Control
                    className="search-bar"
                    size="lg"
                    type="input"
                    placeholder="e.g. Toronto"
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </Form.Group>
        </Form>
    );
}

export default LocationInput;
