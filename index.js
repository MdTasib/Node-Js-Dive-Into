const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'EJS is an Awesome' });
});

app.listen(4000, () => {
  console.log('4000 port server running');
});