const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const api = require('./routes/index');
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('something is happening.....');
  next();
});

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/api', api);

app.listen(PORT, () => {
  console.log('express running on port ', PORT);
});
