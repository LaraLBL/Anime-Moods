const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema ({
 anime: [{
  type: mongoose.Schema.Types.ObjectId,
 ref: 'Anime'
}],
 user: { 
  type: Schema.Types.ObjectId,
  ref: 'User'
 },
},{
 timestamps: true
})

module.exports = mongoose.model('List', listSchema);