const mongoose = require('mongoose');

mongoose.connect('http://localhost/RateThisFood', { useNewUrlParser: true });

const db = db.connection;

db.once('open', () => {
  console.log('Mango Connected');
});

const FoodSchema = new mongoose.Schema({

});


const addFood = () => {

};

const addReview = () => {

};
