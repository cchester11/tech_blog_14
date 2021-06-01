const router = require('express').Router();
const { User, Post, Vote, Comment } = require('../../models');

router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url,
    user_id: req.session.user_id
  })
    .then(results => res.json(results))
    .catch(err => {
      if (err) {
        console.log(err);
        res.status(500).json(err)
      }
    })
});

router.post('/update', (req, res) => {
  Post.update({
    where: {
      id: req.params.id
    }
  })
})

module.exports = router;