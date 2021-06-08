const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');

router.get('/', (req, res) => {
  res.render('login-page')
});

router.get('/dashboard', (req, res) => {
  Post.findAll({})
  .then(results => {
    const posts = results.map(post => post.get({ plain: true }))
    res.render('dashboard', { 
      loggedIn: req.session.loggedIn,
      posts
    })
  })
  .catch(err => {
    if(err) {
      console.log(err);
      res.status(500).json(err)
    }
  })
});

router.get('/updatePost/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'content',
      'user_id'
    ],
    include: [
      {
        model: User,
        attributes: [
          'username'
        ]
      }
    ]
  })
  .then(result => {
    if(!result) {
      res.status(400).json({ message: 'Error' });
      return;
    }
    const post = result.get({ plain: true })
    res.render('update', {
      loggedIn: req.session.loggedIn,
      post
    })
  })
})

router.get('/createPost', (req, res) => {
  res.render('create-post', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.render('login-page')
  })
})

module.exports = router;