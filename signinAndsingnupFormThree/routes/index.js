var express = require('express');
var router = express.Router();
const User = require("./users")

/* GET home page. */
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  try {
      const { username, password } = req.body;
      const user = new User({ username, password });
      await user.save();
      res.redirect('/signin');
  } catch (error) {
      console.error(error);
      res.status(500).send('Error in signup');
  }
});

// Signin route
router.get('/signin', (req, res) => {
  res.render('signin');
});

router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
      // Successful signin, handle session, redirect to dashboard, etc.
      res.send('Successfully signed in!');
  } else {
      res.send('Invalid username or password');
  }
});

module.exports = router;
