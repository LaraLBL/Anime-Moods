import AddAnimeButton from '../AddAnimeButton/AddAnimeButton';
import './AnimeCard.css';
import * as animeAPI from '../../utilities/anime-api';

export function AnimeCard (anime) {
  async function handleAddAnime(anime){
    const res = await animeAPI.watchlistAdd(anime)
  }

 return (
  <div className='column is-one-quarter'>
  <div className="card zoom is-small has-background-black border">
  <div className="card-image">
    <figure className="image is-4by5 animeCard">
      <img className="rounded" src={anime.image} alt="Anime"/>
    </figure>
    <p className="title is-4 name">{anime.title}</p>
    <AddAnimeButton handleAddAnime={handleAddAnime} anime={anime} className="hidden bottom">+</AddAnimeButton>
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

 export function ListCard(anime) {
  return (
    <div className='column is-one-quarter'>
    <div className="card zoom is-small has-background-black border">
    <div className="card-image">
      <figure className="image is-4by5 animeCard">
        <img className="rounded" src={anime.image} alt="Anime"/>
      </figure>
    </div>
    <div className='card-content name'>
        <p className="title is-4">{anime.title}</p>
      </div>
  </div>
  </div>
  )
 }

 export function createListCard(anime) {

  return (
    <ListCard 
    key={anime._id}
    title={anime.title}
    image={anime.image}
    synopsis={anime.synopsis}
    status={anime.status}
    />
  )
 }