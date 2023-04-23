import './Anime.css';

export default function AnimeCard () {
 return (
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Anime"/>
    </figure>
  </div>
  <div class="card-content">
  <div class="media-content">
        <p class="title is-4">Anime Title</p>
        <p class="subtitle is-6">Where to watch</p>
      </div>
    <div class="content">
      Here is where the description would go, if only we had a description. Alas there is none for now.
      <a>@bulmaio</a>.
      <a href="">#css</a> <a href="">#responsive</a>
      <br/>
      <p class="subtitle is-6">Release Date: </p>
    </div>
  </div>
</div>
)}