const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Signup route
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ username, password: hashedPassword });
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/signup');
    }
});

// Signin route
router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            req.flash('success_msg', 'You are now logged in');
            res.redirect('/');
        } else {
            req.flash('error_msg', 'Invalid username or password');
            res.redirect('/signin');
        }
    } else {
        req.flash('error_msg', 'Invalid username or password');
        res.redirect('/signin');
    }
});

module.exports = router;
