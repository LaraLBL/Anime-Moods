const mongoose = require('mongoose');
require('./genre');
const animeSchema = require('./animeSchema');

module.exports = mongoose.model('Anime', animeSchema)