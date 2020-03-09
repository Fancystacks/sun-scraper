require("dotenv").config();
const axios = require('axios');
const express = require('express');
const router = express.Router();
// const User = require('../../models')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const { User } = require('../../models');



router.post('/data', (req, res) => {
    console.log('data from input page...!...', req.body)



    // User.update('/User',
    //     {
    //         street_address: req.body.street_address,
    //         city: req.body.city,
    //         home_state: req.body.home_state,
    //         zip_code: req.body.zip_code,
    //         system_capacity: req.body.system_capacity,
    //         array_type: req.body.array_type
    //     },
    //     {
    //         where: {
    //             email: req.body.email
    //         }
    //     }  

    // ).then(user => {
    //     res.json(data)
    // }).catch( (err) => {
    //     console.log(err)
    // })


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

    axios.get(URL).then(response => {
        res.json(response.data)
    });


    // User.update(
    //     {
    //         street_address: req.body.street_address,
    //         city: req.body.city,
    //         home_state: req.body.home_state,
    //         zip_code: req.body.zip_code,
    //         system_capacity: req.body.system_capacity,
    //         array_type: req.body.array_type
    //     },
    //     {
    //         where: {
    //             email: req.body.email
    //         }
    //     }  

    // ).then(user => {
    //     res.json(user)
    // }).catch( (err) => {
    //     console.log(err)
    // })

});

module.exports = router;