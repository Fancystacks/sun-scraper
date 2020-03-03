require("dotenv").config();
// const axios = require('axios');
const express = require('express');
const route = express.Router();


const apiKEY = 'eGIlC8tW1H15GAxgbQ77P6R7EKDtt6j3b8v07IJB';
const systemCapacity = 200;
const address = '1 eaton way pueblo Colorado';
const URL = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKEY}&system_capacity=${systemCapacity}&module_type=0&losses=5&array_type=1&tilt=38&azimuth=180&address=${address}`

// axios.get(URL).then(res => {
//     console.log(res.data);
// });


route.get('/pvWatts', (req, res) => {
    console.log(req.body)

});


module.exports = route;


//ask sarah why the input data hasnt made it to this point.
