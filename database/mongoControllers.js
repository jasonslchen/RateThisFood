const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/RateThisFood', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', () => {
  console.log('Mango Connected');
});

const foodSchema = new mongoose.Schema({
  Food: String,
  Images: [
    {
      Image: String,
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
      Review: String,
    },
  ],
});

const getFood = (category, food) => {
  const thisFood = mongoose.model(`${category}`, foodSchema);
  return thisFood.find({ Food: food });
};


const addFood = (category, details) => {
  const NewFood = mongoose.model(`${category}`, foodSchema);
  const thisFood = new NewFood({ details });
  return thisFood.save();
};

const addReview = (category, food, details) => {
  const thisFood = mongoose.model(`${category}`, foodSchema);
  return thisFood.update({ Food: food }, { $push: { Reviews: details } });
};

module.exports.getFood = getFood;
module.exports.addFood = addFood;
module.exports.addReview = addReview;
