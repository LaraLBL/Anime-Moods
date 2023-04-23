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
},
release: {
 type: Date,
},
whereToWatch: {
 type: String,
}
},{
    timestamps: true
});

module.exports = mongoose.model("Anime",animeSchema);