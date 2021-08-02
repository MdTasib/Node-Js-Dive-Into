const express = require('express');

const userRouter = require('./route');
const postRouter = require('./post');

const app = express();

app.use('/user', userRouter);
app.use('/posts', postRouter);

// dynamic route
app.get('/product/:productId/reviews/:reviewId', (req, res) => {
  const id = req.params;
  res.send(`Product id - ${id.productId} || Product reviews id - ${id.reviewId}`);
});

app.get('/', (req, res) => {
  res.send('<h1>I am listening.</h1>');
});

app.listen(4000, () => {
  console.log('4000 port server running');
});