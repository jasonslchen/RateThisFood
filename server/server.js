const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

app.use('/', express.static(path.resolve(__dirname, '../public')));


// get when you're in a category get food information
app.get('/api/rateFood/:category/:foodId', (req, res) => {

});

// get category page with food infos from selecting from a dropdown with courses
app.get('/api/rateFood/:course/:category', (req, res) => {

});

app.listen(port, () => { console.log(`Yums, pasta served to these tables ${port}`); });
