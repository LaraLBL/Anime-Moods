const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
 title: { 
  type: String,
  required: true 
 },
 body: {
  type: String, 
  minLength: 1,
  maxLength: 300,
 },
 user: { 
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User'
 },
  anime: {
   type: mongoose.Schema.Types.ObjectId,
  ref: 'Anime'
  },
  rating: {
   type: Boolean,
  }
},{
 timestamps: true
})

module.exports = mongoose.model('Rating', ratingSchema);