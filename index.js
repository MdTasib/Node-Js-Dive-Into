const express = require('express');

const contactRoutes = require('./contactRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/contacts', contactRoutes);

app.get('*', (req, res) => {
  res.send('<h1>Please Use The Correct Routes</h1>');
});

app.listen(4000, () => {
  console.log('4000 port server running');
});