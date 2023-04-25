const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
 title: {
  type: String,
 },
genre: {
 type: String,
},
likes: {
 type: Number,
}
},{
    timestamps: true
});

module.exports = mongoose.model('Anime',animeSchema);