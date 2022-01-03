import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

function WeeklyWeather({weather}) {
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
                <tr>
                <td>Jan 1</td>
                <td><img
                        src={`http://openweathermap.org/img/wn/10d@2x.png`}
                        alt="Light rain"
                        style={{objectFit: "contain", width: "50px"}}
                    /></td>
                <td>3°C</td>
                <td>10°C</td>
                <td>3.5 m/s</td>
                <td>0.1 mm</td>
                <td>50%</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default WeeklyWeather