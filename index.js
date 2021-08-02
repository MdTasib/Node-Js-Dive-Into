const express = require('express');
const userRouter = require('./route');

const app = express();

app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('<h1>I am listening.</h1>');
});

app.listen(4000, () => {
  console.log('4000 port server running');
});