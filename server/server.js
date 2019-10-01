const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const moment = require('moment');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3000;
const query = require('../database/mongoControllers.js');

// const upload = multer({ storage: '../storedImages' });
const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '../storedImages'),
  filename(req, file, cb) {
    cb(null, `IMAGE-${moment().local().format()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
}).single('Image');


app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/images', express.static(path.resolve(__dirname, '../storedImages')));
// get when you're in a category get food information
app.get('/api/rateFood/:category/:foodId', (req, res) => {
  query.getFood(req.params.category, req.params.foodId)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
});

// upload image

app.post('/api/rateFood/:category/:foodId/image', (req, res) => {
  upload(req, res, (err) => {
    console.log('body', req.body);
    console.log('Request file ---', req.file);
    const imageData = {
      Image: req.file.filename,
      Restaurant: req.body.Restaurant,
      Reviewer: req.body.Reviewer,
      Date: req.body.Date,
    };
    query.addPicture(req.params.category, req.params.foodId, imageData)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        res.status(500).send({ error });
      });
  });
});

// get category page with food infos from selecting from a dropdown with courses

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
