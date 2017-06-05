const express = require('express');
const router = express.Router();

const fs = require('fs');
const db = require('../db.json');

router.use(function(req, res, next) {
    
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "PUT,DELETE,POST,GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.route('/')
  .get((req, res) => {
    fs.readFile('db.json', 'utf-8', (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
  })
  .post((req, res) => {
    db.push(req.body);
    fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
      if (err) throw err;
      res.send('Bear added!');
    });
  });

router.route('/:id')
  .put((req, res) => {
    const newBear = req.body;
    db.forEach((bear, index) => {
      if (bear.id == req.params.id) {
        db.splice(index, 1, newBear);
      }
    });
    fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
      if (err) throw err;
      res.send('Bear modified!');
    });
  })
  .delete((req, res) => {
    db.forEach((bear, index) => {
      if (bear.id == req.params.id) {
        db.splice(index, 1);
      }
    });
    fs.writeFile('db.json', JSON.stringify(db), (err, data) => {
        fs.readFile('db.json', 'utf-8', (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    });
      
  });
  });

module.exports = router;
