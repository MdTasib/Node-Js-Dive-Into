const postRoute = require('express').Router();

postRoute.get('/', (req, res) => {
  // query string
  console.log(req.query);
  const { catagory, page } = req.query;

  res.send('All posts');
});

postRoute.post('/:postId', (req, res) => {
  res.send('Create a new post - PostId: ' + req.params.postId);
})

postRoute.put('/', (req, res) => {
  res.send('update a new post');
})

postRoute.delete('/', (req, res) => {
  res.send('delete a new post');
})

module.exports = postRoute;