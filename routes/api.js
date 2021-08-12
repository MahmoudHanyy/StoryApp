const express = require('express')
const passport = require('passport')
const router = express.Router()


// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })
  
  module.exports = router