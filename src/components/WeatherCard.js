import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeeklyWeather from "./WeeklyWeather";
import "./WeatherCard.css";

function WeatherCard({ data }) {
    // Check if data is loaded
    if (Object.keys(data).length === 0) {
        return (
            <Card className="weather-card text-center">
                <Card.Body>Enter a location above to get started</Card.Body>
            </Card>
        );
    }

    // Capitalize first letter of a string
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <Card className="weather-card">
            <Container fluid>
                <Row className="weather-info">
                    <Col className="current-temp-data">
                        <img
                            src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
                            alt={data.current.weather[0].description}
                        />
                        <Container className="current-temp-data">
                            <Row>
                                <h1>{`${Math.round(data.current.temp)}°`}</h1>
                            </Row>
                            <Row>
                                <h6>{`Min: ${Math.round(
                                    data.daily[0].temp.min
                                )}°`}</h6>
                            </Row>
                            <Row>
                                <h6>{`Max: ${Math.round(
                                    data.daily[0].temp.max
                                )}°`}</h6>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="weather-info" xs={10}>
                        <Row>
                            <h1>{data.city}</h1>
                        </Row>
                        <Row>
                            <h5>
                                {capitalize(
                                    data.current.weather[0].description
                                )}
                            </h5>
                        </Row>
                        <Row className="weather-info">
                            <h6>{`Wind: ${data.current.wind_speed} m/s`}</h6>
                            <h6>{`Precipitation: ${
                                data.daily[0].pop * 100
                            }%`}</h6>
                            <h6>{`Humidity: ${data.current.humidity}%`}</h6>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <WeeklyWeather data={data} />
                </Row>
            </Container>
        </Card>
    );
}

export default WeatherCard;
