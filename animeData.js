const fetch = require('node-fetch');

const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3c8a17f6eemshb6c02b77ea8c1cdp1d6981jsnf0b66f21b11c',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));