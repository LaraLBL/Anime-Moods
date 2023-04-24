import './AnimeCard.css';

export default function AnimeCard (props) {
 return (
  <div className='column is-one-quarter'>
  <div class="card is-small">
  <div class="card-image">
    <figure class="image is-4by3 animeCard">
      <img src={props.image} alt="Anime"/>
    </figure>
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
