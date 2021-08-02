const postRoute = require('express').Router();
const {
  singlePost,
  updatePost
} = require('./postController');

postRoute.get('/', (req, res) => {
  // query string
  console.log(req.query);
  // const { catagory, page } = req.query;

  res.send('All posts');
});

postRoute.post('/:postId', singlePost);

postRoute.put('/', updatePost);

postRoute.delete('/', (req, res) => {
  res.send('delete a new post');
})

module.exports = postRoute;