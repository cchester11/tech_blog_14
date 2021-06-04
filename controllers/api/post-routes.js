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

// router.put('/:id', (req, res) => {
//   Post.update(req.body, {
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(results => res.json(results))
//   .catch(err => {
//     res.status(400).json({ message: "no user data", err })
//   })
// })

// router.post('/update', (req, res) => {
//   Post.update({
//     where: {
//       id: req.params.id
//     }
//   })
// });

module.exports = router;