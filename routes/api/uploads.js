const express = require('express');
const router = express.Router();

const { pvData } = require('../../models');

router.post('/', (req, res) => {
  console.log('req.body...', req.body)
  pvData.create(req.body)
    .then(user => {
      console.log(user)
      res.json(user)
    })
    .catch(error => {
      console.log(error)
      res.send('error: ' + error);
    })
})

module.exports = router;
