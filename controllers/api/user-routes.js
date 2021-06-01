const router = require('express').Router();
const { User, Post, Vote, Comment } = require('../../models');


router.get('/', (req, res) => {
  User.findAll({})
  .then(results => res.json(results))
});

router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(results => res.json(results))
  .catch(err => {
    if(err) {
      console.log(err)
      res.status(500).json(err)
    }
  })
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.loginEmail
    }
  })
  .then(results => {
    if (!results) {
      res.status(400).json({ message: 'No user with that email address!' })
      return
    }

    // const validatePassword = results.checkPassword(req.body.password);

    // if (!validatePassword) {
    //   res.status(400).json({ message: 'Incorrect password' })
    //   return
    // }

    req.session.save(() => {
      req.session.user_id = results.id;
      req.session.username = results.username;
      req.session.loggedIn = true;

      res.json({ 
        user: results, message: 'You are now logged in!',
        loggedIn: req.session.loggedIn
      })
    })
  })
});

module.exports = router;