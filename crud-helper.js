// anime-moods[main*] % node
// Welcome to Node.js v15.2.0.
// Type ".help" for more information.
// > .load crud-helper.js
// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
// const User = require('./models/user');
// const Anime = require('./models/anime');
// const Genre = require('./models/genre');
// const List = require('./models/list');

// Local variables will come in handy for holding retrieved documents
let user, anime, genre, list;
let users, animes, genres, lists;