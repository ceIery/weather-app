import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeeklyWeather from "./WeeklyWeather";
import "./CurrentWeather.css";

function CurrentWeather({ weather }) {
    return (
        <Container fluid>
            <Row>
                <Col className="current-temp-data">
                    <img
                        src={`http://openweathermap.org/img/wn/10d@2x.png`}
                        alt="Light rain"
                    />
                    <Container className="current-temp-data">
                        <Row>
                            <h1>10°</h1>
                        </Row>
                        <Row>
                            <h6>Min: 10°</h6>
                        </Row>
                        <Row>
                            <h6>Max: 10°</h6>
                        </Row>
                    </Container>
                </Col>
                <Col className="location-description" xs={10}>
                    <Row>
                    <h1>Toronto</h1>
                    </Row>
                    <Row>
                    <h5>Light rain</h5>
                    </Row>
                    <Row className="misc-weather-data">
                        <Col>
                            <h6>Wind: 10km/h</h6>
                        </Col>
                        <Col>
                            <h6>Precipitation: 10%</h6>
                        </Col>
                        <Col>
                            <h6>Humidity: 10%</h6>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <WeeklyWeather data={weather}/>
            </Row>
        </Container>
    );
}

export default CurrentWeather;
