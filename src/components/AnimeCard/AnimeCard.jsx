import AddAnimeButton from '../AddAnimeButton/AddAnimeButton';
import './AnimeCard.css';
import * as animeAPI from '../../utilities/anime-api';

export default function AnimeCard (anime) {
  async function handleAddAnime(anime){
    const res = await animeAPI.watchlistAdd(anime)
  }

 return (
  <div className='column is-one-quarter'>
  <div className="card is-small">
  <div className="card-image border">
    <figure className="image is-4by3 animeCard">
      <img className="rounded" src={anime.image} alt="Anime"/>
    </figure>
    <AddAnimeButton handleAddAnime={handleAddAnime} anime={anime} >+</AddAnimeButton>
  </div>
</div>
</div>
)}


export function createCard(anime) {

  return (
    <AnimeCard 
    key={anime._id}
    title={anime.title}
    image={anime.image}
    synopsis={anime.synopsis}
    status={anime.status}
    />
  )
 }
