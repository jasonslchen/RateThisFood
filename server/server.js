const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();
const port = 3000;
const query = require('../database/mongoControllers.js');


app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', express.static(path.resolve(__dirname, '../public')));

// get when you're in a category get food information
app.get('/api/rateFood/:category/:foodId', (req, res) => {

});

// // get category page with food infos from selecting from a dropdown with courses
app.get('/api/rateFood/:course/:category', (req, res) => {

});

app.post('/api/rateFood/:category/:foodId', (req, res) => {
  query.addReview(req.params.category, req.params.foodId, req.body)
    .then(() => {
      res.send(200);
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
});


// serves up index html for every endpoint that comes in
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => { console.log(`Yums, pasta served to these tables ${port}`); });
