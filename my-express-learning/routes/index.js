const express = require('express');
const router = express.Router();

const bear = require('./bear');
const user = require('./user');

router.use((req, res, next) => {
  console.log('reached main index for routes');
  next();
});

router.use('/bear', bear)
router.use('/user', user)

module.exports = router;
