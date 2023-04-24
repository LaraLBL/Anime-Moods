import AddAnimeButton from '../AddAnimeButton/AddAnimeButton';
import './AnimeCard.css';

export default function AnimeCard (props) {
 return (
  <div className='column is-one-quarter'>
  <div className="card is-small">
  <div className="card-image border">
    <figure className="image is-4by3 animeCard">
      <img className="rounded" src={props.image} alt="Anime"/>
    </figure>
    <AddAnimeButton>+</AddAnimeButton>
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
