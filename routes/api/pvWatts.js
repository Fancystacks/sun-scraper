require("dotenv").config();
const axios = require('axios');
const express = require('express');
const route = express.Router();

route.post('/pvWatts', (req, res) => {
    console.log('data from input page', req.body)
    console.log(req.body.system_capacity)
    console.log(`${req.body.street_address}  ${req.body.city}  ${req.body.home_state}  ${req.body.zip_code}`)
    const apiKEY = process.env.API_KEY;
    const systemCapacity = req.body.system_capacity;
    let arrayType;
    switch (req.body.array_type) {
        case "Fixed - Open Rack":
            arrayType = 0
            break;
        case "Fixed - Roof Mounted":
            arrayType = 1
            break;
        case "Single Axis":
            arrayType = 2
            break;
        case "Single Axis - Backtracking":
            arrayType = 3
            break;
        case "Dual Axis":
            arrayType = 4
            break;
        default:
            arrayType = 1
    }
    const address = (`${req.body.street_address} ${req.body.city} ${req.body.home_state} ${req.body.zip_code}`);
    const URL = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKEY}&system_capacity=${systemCapacity}&module_type=0&losses=5&array_type=${arrayType}&tilt=38&azimuth=180&address=${address}`

    axios.get(URL).then(res => {
    console.log(res.data);
    });

    res.json(console.log('response from pvWatts.js route.post'))
});

module.exports = route;

