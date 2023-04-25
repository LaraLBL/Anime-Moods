const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
 title: {
  type: String,
 },
synopsis: {
 type: String,
},
likes: {
 type: Number,
 default: 0,
},
image :{
    type: String
},
status: {
    type: String,
},
},{
    timestamps: true
});

module.exports = mongoose.model('Anime',animeSchema);