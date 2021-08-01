const express = require('express');

const app = express();

app.get('/about', (req, res) => {
  res.send('<h1>This is about page</h1>');
});

app.get('/', (req, res) => {
  res.send('<h1>I am listening.</h1>');
});

app.get('*', (req, res) => {
  res.send('<h1>404 Page not found</h1>');
});

app.listen(4000, () => {
  console.log('4000 port server running');
});