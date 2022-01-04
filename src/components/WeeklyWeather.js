import React, { useState } from "react";
import Table from "react-bootstrap/Table";

function WeeklyWeather({ data }) {
    // Weekly data includes the current day, so we need to remove it
    const nextWeek = data.daily.slice(1);

    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Date</th>
                    <th></th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Wind speed</th>
                    <th>Precipitation</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                {nextWeek.map((day) => {
                    // Get the day of the week
                    const date = new Date(day.dt * 1000);
                    const dayOfWeek = date.toLocaleString("en-us", {
                        weekday: "long",
                    });
                    return (
                        <tr>
                            <td>{dayOfWeek}</td>
                            <td>
                                <img
                                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                    alt={day.weather[0].description}
                                    style={{
                                        objectFit: "contain",
                                        width: "50px",
                                    }}
                                />
                            </td>
                            <td>{`${Math.round(day.temp.min)}°`}</td>
                            <td>{`${Math.round(day.temp.max)}°`}</td>
                            <td>{`${day.wind_speed} m/s`}</td>
                            <td>{`${Math.round(day.pop * 100)}%`}</td>
                            <td>{`${day.humidity}%`}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default WeeklyWeather;
