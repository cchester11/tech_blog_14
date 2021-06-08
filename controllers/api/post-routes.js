const router = require('express').Router();
const { User, Post, Vote, Comment } = require('../../models');

router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
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

router.put('/:id', (req, res) => {
  console.log(req.body, req.params)
  Post.update({
    title: req.body.title,
    content: req.body.content
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(results => res.json(results))
  .catch(err => {
    res.status(400).json({ message: "no user data", err })
  })
});

router.delete('/deletePost/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(200).end())
  .catch(err => res.json(err))
});

module.exports = router;