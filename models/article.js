const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  keyword: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, 'Please enter a valid URL']
  },
  image: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, 'Please enter a valid URL']
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    select: false
  }
});

module.exports = mongoose.model('Article', articleSchema);
