const mongoose = require('mongoose')

const UserStorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  story: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Story'
  }
})

module.exports = mongoose.model('UserStory', UserStorySchema)
