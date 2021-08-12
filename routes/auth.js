const express = require('express')
const passport = require('passport')
const router = express.Router()
const { ensureGuest } = require('../middleware/auth')
const User = require('../models/User')

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard')
  }
)

// @desc    auth with first and last name
// @route   post /auth/login
router.post('/login',
  passport.authenticate('local', { successRedirect: '/dashboard',failureRedirect: '/', failureFlash: true })
);

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
