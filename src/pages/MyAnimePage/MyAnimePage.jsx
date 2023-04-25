import React, { useEffect, useState } from 'react';
import { createCard } from "../../components/AnimeCard/AnimeCard.jsx";
import * as listAPI from "../../utilities/list-api"

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
    <div>
      <h1>My Anime List</h1>
      <ul>
        {animeList?.map(createCard)}
      </ul>
    </div>
  );
}

