import React, { useEffect, useState } from 'react';
import { createListCard } from "../../components/AnimeCard/AnimeCard.jsx";
import * as listAPI from "../../utilities/list-api"
import './MyAnimePage.css'

export default function MyAnimePage() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    async function fetchAnimeList() {
      console.log("Hello")
      const list = await listAPI.getAnimeList()

      setAnimeList(list);
    }

    fetchAnimeList();
  }, []);

  return (
    <main className='sidemargin'>
      <h1 className='title'>My Anime List</h1>
      <div className="columns is-multiline">
        {animeList?.map(createListCard)}
      </div>
    </main>
  );
}

