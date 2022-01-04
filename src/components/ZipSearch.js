import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ZipSearch({ setWeather }) {
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("ca");
    const [error, setError] = useState("");

    // Override form submit on enter
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setError("");
            searchZip(zip);
        }
    };

    // Search for given zip code
    const searchZip = (query) => {
        axios
            .get(
                `http://api.openweathermap.org/geo/1.0/zip?zip=${query},${country}&appid=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                const location = response.data;
                fetchWeather(location.lat, location.lon, location.name);
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 404) {
                        setError("Postal code not found");
                    } else {
                        setError(`Error: ${error.response.data.message}`);
                    }
                } else {
                    setError("Couldn't fetch weather data");
                }
            });
    };

    // Fetch weather data for given coordinates
    const fetchWeather = (lat, lon, name) => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                var res = response.data;
                res["city"] = name;
                setWeather(response.data);
            });
    };

    return (
        <Form>
            <Form.Group controlId="formBasicZip">
                <Form.Select onChange={(e) => setCountry(e.target.value)}>
                    <option value="ca">Canada</option>
                    <option value="us">United States</option>
                </Form.Select>
                <Form.Control
                    style={{ marginTop: "10px", marginBottom: "5px" }}
                    type="input"
                    placeholder="Enter a postal code"
                    onChange={(e) => setZip(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                {error ? (
                    <Form.Label style={{ color: "red" }}>{error}</Form.Label>
                ) : (
                    <Form.Label>Press Enter to search</Form.Label>
                )}
            </Form.Group>
        </Form>
    );
}

export default ZipSearch;
