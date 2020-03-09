const express = require('express');
const router = express.Router();

const { pvWatts } = require('../../models');

router.post('/uploads', (req, res) => {
    pvWatts.create(req.body)
    .then(user => {
      res.json(req.body)
    })
    .catch(err => {
      res.send('error: ' + err);
    })
})
