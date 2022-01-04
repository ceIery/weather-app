import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CitySearch from "./CitySearch";
import ZipSearch from "./ZipSearch";

function SearchCard({ setWeather }) {
    return (
        <Tabs defaultActiveKey="city" id="search-tab" className="mb-3">
            <Tab eventKey="city" title="Search by city">
                <CitySearch setWeather={setWeather} />
            </Tab>
            <Tab eventKey="zip" title="Search by postal code">
                <ZipSearch setWeather={setWeather} />
            </Tab>
        </Tabs>
    );
}

export default SearchCard;
