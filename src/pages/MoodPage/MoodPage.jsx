import React, { useState, useEffect } from 'react';
import { createCard } from "../../components/AnimeCard/AnimeCard.jsx";
import {createMoodButton, moods} from '../../components/MoodButton/MoodButton.jsx';
import AddAnimeButton from '../../components/AddAnimeButton/AddAnimeButton.jsx';

// if mood.mood == "whatever" then url will be ___H1 will be ___and background will be ___

const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=80&genres=Action%2C%20Comedy%2C%20Adventure&sortBy=ranking&sortOrder=asc';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

function MoodPage() {
  const [data, setData] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
       if (Array.isArray(data.data)) {
         setData(data.data.filter((anime) => !anime.title.toLowerCase().includes("gintama")))
         console.log(data.data)
       } else {
         console.error('Data is not an array:', data)
       }
     })
     .catch(error => console.error(error));
 }, []);

 function handleAddToList(anime) {
  setWatchlist([...watchlist, anime]);
}

  return (
    <main className='sidemargin'>
      <div className="columns is-multiline">
        {moods.map(createMoodButton)}
      </div>
    <div className="columns is-multiline">
    {data.map(createCard)}
    </div>
    </main>
  );
}

export default MoodPage;
