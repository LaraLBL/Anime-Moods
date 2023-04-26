import React, { useState, useEffect } from 'react';
import { createCard } from "../../components/AnimeCard/AnimeCard.jsx";
import MoodButton, { moods } from '../../components/MoodButton/MoodButton.jsx';
import AddAnimeButton from '../../components/AddAnimeButton/AddAnimeButton.jsx';
import { set } from 'mongoose';
import './MoodPage.css'

function MoodPage() {
  const [data, setData] = useState([]);
  const [currentMood, setCurrentMood] = useState(null)

  useEffect(() => {
    let newUrl = '';
    let backgroundMood = {
      backgroundImage: ""
    }

    if (currentMood === "Happy") {
      newUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=100&genres=Comedy%2CAction%2CAdventure&sortBy=ranking&sortOrder=asc';
      backgroundMood.backgroundImage = 'linear-gradient(to bottom right,  rgb(243, 233, 159),rgb(247, 208, 96))'
    } else if (currentMood === "Tear-Jerker") {
      newUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=100&genres=Drama%2C%20Suspense%2C%20Horror&sortBy=ranking&sortOrder=asc';
      backgroundMood.backgroundImage = 'linear-gradient(to bottom right,  rgba(93,224,230,1),rgba(0,74,173,1))'
    } else if (currentMood === "Chillin") {
      newUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=100&genres=Slice%20of%20Life%2C%20Mystery%2C%20Gourmet%2C%20Sci-fi&sortBy=ranking&sortOrder=asc';
      backgroundMood.backgroundImage = 'linear-gradient(to bottom right, rgb(181, 241, 204) ,rgb(20, 195, 142))'
    } else if (currentMood === "Heart Eyes") {
      newUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=100&genres=Romance%2C%20Boys%20Love%2C%20Girls%20Love&sortBy=ranking&sortOrder=asc';
      backgroundMood.backgroundImage = 'linear-gradient(to bottom right, rgb(250, 152, 132) ,rgb(231, 70, 70))'
    } else if (currentMood === "I Believe") {
      newUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=100&genres=Supernatural%2C%20Sports%2C%20Fantasy&sortBy=ranking&sortOrder=asc';
      backgroundMood.backgroundImage = 'linear-gradient(to bottom right, rgba(0,74,173,1),rgb(227, 132, 255))'
    } else {
      newUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=100&genres=Award%20Winning&sortBy=ranking&sortOrder=asc';
      backgroundMood.backgroundImage = 'linear-gradient(to bottom right,#FF914D, #AB003E, #070A52)'
    }

    document.body.style.backgroundImage = backgroundMood.backgroundImage;
    document.body.style.height ="100%";
    document.body.style.width ="100%";
   

    console.log(currentMood, backgroundMood.backgroundImage)

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3c8a17f6eemshb6c02b77ea8c1cdp1d6981jsnf0b66f21b11c',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };

    fetch(newUrl, options)
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
 }, [currentMood]);

  return (
    <main className='sidemargin'>
      <div className="columns is-multiline">
      <MoodButton
        mood={moods[0]}
        setCurrentMood={setCurrentMood}
      />
      <MoodButton
        mood={moods[1]}
        setCurrentMood={setCurrentMood}
      />
      <MoodButton
        mood={moods[2]}
        setCurrentMood={setCurrentMood}
      />
      <MoodButton
        mood={moods[3]}
        setCurrentMood={setCurrentMood}
      />
      <MoodButton
        mood={moods[4]}
        setCurrentMood={setCurrentMood}
      />
      </div>
      <div className="columns is-multiline topSpace">
      {data.map(createCard)}
      </div>
    </main>
  );
}

export default MoodPage;