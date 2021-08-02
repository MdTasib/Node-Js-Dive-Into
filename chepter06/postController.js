// Create Separate File for Controllers
exports.singlePost = (req, res) => {
  res.send('Create a new post - PostId: ' + req.params.postId);
};

exports.updatePost = (req, res) => {
  res.send('update a new post');
};