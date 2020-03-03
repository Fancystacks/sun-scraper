require("dotenv").config();
const axios = require('axios');
const express = require('express');
const route = express.Router();


// const apiKEY = 'eGIlC8tW1H15GAxgbQ77P6R7EKDtt6j3b8v07IJB';
// var systemCapacity = 200;
// var address = '1 eaton way pueblo Colorado';
// const URL = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKEY}&system_capacity=${systemCapacity}&module_type=0&losses=5&array_type=1&tilt=38&azimuth=180&address=${address}`

// axios.get(URL).then(res => {
//     console.log(res.data);
// });


route.post('/pvWatts', (req, res) => {
    console.log('data from input page', req.body)
    console.log(req.body.system_capacity)
    console.log(req.body.address)
    const apiKEY = process.env.API_KEY;
    const systemCapacity = req.body.system_capacity;
    const address = req.body.address;
    const URL = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${apiKEY}&system_capacity=${systemCapacity}&module_type=0&losses=5&array_type=1&tilt=38&azimuth=180&address=${address}`

    axios.get(URL).then(res => {
    console.log(res.data);
    });

    res.json(console.log('response from pvWatts.js route.post'))
});


module.exports = route;


//ask sarah why the input data hasnt made it to this point.
