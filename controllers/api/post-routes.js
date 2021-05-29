const router = require('express').Router();
const { User, Post, Vote, Comment } = require('../../models');

router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url
  })
  .then(results => res.json(results))
  .catch(err => {
    if(err) {
      console.log(err);
      res.status(500).json(err)
    }
  })
});

module.exports = router;