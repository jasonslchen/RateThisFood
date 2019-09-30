const mongoose = require('mongoose');
const moment = require('moment');

mongoose.connect('mongodb://localhost/RateThisFood', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Mango Connected');
});

const foodSchema = new mongoose.Schema({
  Food: String,
  Pictures: [
    {
      Picture: String,
      Restaurant: String,
      Reviewer: String,
      Date: String,
    },
  ],
  Reviews: [
    {
      Reviewer: String,
      Rating: Number,
      Cost: Number,
      Date: String,
      Restaurant: String,
    },
  ],
});


const matcha = ['https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/matcha1.jpg', ' https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/matcha2.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/matcha-soft-serve/Matcha3.jpg'];
const blackSesame = ['https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/black-sesame-soft-serve/blacksesam1.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/black-sesame-soft-serve/blacksesameujitime.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/black-sesame-soft-serve/somismoi+black+sesame+.jpg'];
const vanilla = ['https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/vanilla-soft-serve/costcovanillasoftserve.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/vanilla-soft-serve/fosterfreezevanillasoftserve.jpg', 'https://rate-this-food.s3-us-west-1.amazonaws.com/desserts/vanilla-soft-serve/yogurtpark+vanilla+soft+server.jpg'];

const Dessert = mongoose.model('desserts', foodSchema);

const matchaEntry = new Dessert({
  Food: 'matcha-soft-serve',
  Pictures: [
    {
      Picture: matcha[0],
      Restaurant: 'Tea Master Matcha Cafe & Green Tea Shop',
      Reviewer: 'Jimmy Li',
      Date: moment('2018-09-30', 'YYYY-MM-DD').utc(),
    },
    {
      Picture: matcha[1],
      Restaurant: 'Nana\'s Green Tea',
      Reviewer: 'Roma Seo',
      Date: moment('2019-06-17', 'YYYY-MM-DD').utc(),
    },
    {
      Picture: matcha[2],
      Restaurant: 'Amausaan Uji Matcha',
      Reviewer: 'Jason Chen',
      Date: moment('2019-09-29', 'YYYY-MM-DD').utc(),
    },
  ],
  Reviews: [
    {
      Reviewer: 'Jimmy Li',
      Rating: 4,
      Cost: 5,
      Date: moment('2018-09-30', 'YYYY-MM-DD').utc(),
      Restaurant: 'Tea Master Matcha Cafe & Green Tea Shop',
      Review: 'Much yum, Cheap',
    },
    {
      Reviewer: 'Roma Seo',
      Rating: 5,
      Cost: 9,
      Date: moment('2019-06-17', 'YYYY-MM-DD').utc(),
      Restaurant: 'Nana\'s Green Tea',
      Review: 'This was a great place for a first date! 10/10 would recommend!',
    },
    {
      Reviewer: 'Jason Chen',
      Rating: 1,
      Cost: 1,
      Date: moment('2019-09-29', 'YYYY-MM-DD').utc(),
      Restaurant: 'Amausaan Uji Matcha',
      Review: 'Yums Yums in my Tums Tums',
    },
  ],
});

const blackSesameEntry = new Dessert({
  Food: 'black-sesame-soft-serve',
  Pictures: [
    {
      Picture: blackSesame[0],
      Restaurant: 'unknown',
      Reviewer: 'Bob Builder',
      Date: moment('2017-01-01', 'YYYY-MM-DD').utc(),
    },
    {
      Picture: blackSesame[1],
      Restaurant: 'Uji Time Dessert',
      Reviewer: 'Holly Paul',
      Date: moment('2014-03-28', 'YYYY-MM-DD').utc(),
    },
    {
      Picture: blackSesame[2],
      Restaurant: 'Somi Somi',
      Reviewer: 'Adrienne Lau',
      Date: moment('2019-07-29', 'YYYY-MM-DD').utc(),
    },
  ],
  Reviews: [
    {
      Reviewer: 'Bob Builder',
      Rating: 0,
      Cost: 0,
      Date: moment('2017-01-01', 'YYYY-MM-DD').utc(),
      Restaurant: 'unknown',
      Review: 'You can\'t build anything out of this?!?!?!',
    },
    {
      Reviewer: 'Holly Paul',
      Rating: 5,
      Cost: 15.5,
      Date: moment('2014-03-28', 'YYYY-MM-DD').utc(),
      Restaurant: 'Uji Time Dessert',
      Review: 'This was totally a good place, I would totally come back here again.',
    },
    {
      Reviewer: 'Adrienne Lau',
      Rating: 5,
      Cost: 30,
      Date: moment('2019-07-29', 'YYYY-MM-DD').utc(),
      Restaurant: 'Somi Somi',
      Review: 'Not as lit as Arena, but definitely pretty lit.',
    },
  ],
});
const vanillaEntry = new Dessert({
  Food: 'vanilla-soft-serve',
  Pictures: [
    {
      Picture: vanilla[0],
      Restaurant: 'Costco',
      Reviewer: 'Regina Tran',
      Date: moment('2018-12-20', 'YYYY-MM-DD').utc(),
    },
    {
      Picture: vanilla[1],
      Restaurant: 'Fosters Freeze',
      Reviewer: 'Rebecca Cheung',
      Date: moment('2015-12-27', 'YYYY-MM-DD').utc(),
    },
    {
      Picture: vanilla[2],
      Restaurant: 'Yogurt Park',
      Reviewer: 'Daniel Lin',
      Date: moment('2019-07-29', 'YYYY-MM-DD').utc(),
    },
  ],
  Reviews: [
    {
      Reviewer: 'Regina Tran',
      Rating: 3,
      Cost: 6,
      Date: moment('2018-09-31', 'YYYY-MM-DD').utc(),
      Restaurant: 'Costco',
      Review: 'Omg the servers here were so nice!',
    },
    {
      Reviewer: 'Rebecca Cheung',
      Rating: 4,
      Cost: 2,
      Date: moment('2015-12-27', 'YYYY-MM-DD').utc(),
      Restaurant: 'Fosters Freeze',
      Review: 'I took some pretty nice photos here, the ice cream aight too.',
    },
    {
      Reviewer: 'Daniel Lin',
      Rating: 4.5,
      Cost: 50,
      Date: moment('2019-07-29', 'YYYY-MM-DD').utc(),
      Restaurant: 'Yogurt Park',
      Review: 'Bro, the ice cream here was soooo good.',
    },
  ],
});

// matchaEntry.save();
// blackSesameEntry.save();
// vanillaEntry.save();

Dessert.insertMany([matchaEntry, blackSesameEntry, vanillaEntry])
  .then(() => {
    console.log('entrees entered');
  });
