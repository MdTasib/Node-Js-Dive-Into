const postRoute = require('express').Router();

postRoute.get('/', (req, res) => {
  res.send('All posts');
});

postRoute.post('/', (req, res) => {
  res.send('Create a new post');
})

postRoute.put('/', (req, res) => {
  res.send('update a new post');
})

postRoute.delete('/', (req, res) => {
  res.send('delete a new post');
})

module.exports = postRoute;