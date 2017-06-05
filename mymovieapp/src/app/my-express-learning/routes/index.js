const express = require('express');
const router = express.Router();

const favourite = require('./favoutire');
const user = require('./user');

router.use((req, res, next) => {
  console.log('reached main index for routes');
  next();
});

router.use('/favourite', favourite)
router.use('/user', user)

module.exports = router;
