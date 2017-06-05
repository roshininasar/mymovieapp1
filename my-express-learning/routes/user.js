const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('reached GET /api/user')
  })
  .post()
  .put()
  .delete()

module.exports = router;
