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
      posts
      // loggedIn: true
    })
  })
  .catch(err => {
    if(err) {
      console.log(err);
      res.status(500).json(err)
    }
  })
});

router.get('/createPost', (req, res) => {
  res.render('create-post');
});

module.exports = router;