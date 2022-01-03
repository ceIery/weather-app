import React, { Fragment, useState } from "react";
import axios from "axios";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

function LocationSearch({ setWeather }) {
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState([]);
    const [selected, setSelected] = useState("");

    // For converting ISO-3166 alpha-2 to country names
    const countries = require("i18n-iso-countries");
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

    // Search location from OpenWeatherMap using Geocoding API
    const searchLocation = (query) => {
        axios
            .get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
            )
            .then((response) => {
                const results = response.data.map((location, index) => {
                    // Parse location data
                    var [city, state, country] = [
                        location.name,
                        location.state,
                        countries.getName(location.country, "en"),
                    ];
                    var [lat, lon] = [location.lat, location.lon];

                    if (country) {
                        // Conditional display name depending on if the country uses states
                        var displayName = state
                            ? `${city}, ${state}, ${country}`
                            : `${city}, ${country}`;
                    } else {
                        // There is a single edge case where country will be undefined for some reason (e.g. Vatican City)
                        var displayName = city;
                    }

                    return {
                        id: index.toString(),
                        name: displayName,
                        lat: lat,
                        lon: lon,
                    };
                });
                setLocations(results);
                setIsLoading(false);
            });
    };

    // Fetch weather from OpenWeatherMap
    const fetchWeather = (loc) => {
        if (loc.length > 0) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${loc[0].lat}&lon=${loc[0].lon}&exclude=minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`
                )
                .then((response) => setWeather(response.data));
        }
    };

    return (
        <AsyncTypeahead
            id="search-location"
            isLoading={isLoading}
            labelKey="name"
            minLength={3}
            onChange={fetchWeather}
            onSearch={searchLocation}
            options={locations}
            placeholder="Search for a location (e.g. Toronto)"
        />
    );
}

export default LocationSearch;
