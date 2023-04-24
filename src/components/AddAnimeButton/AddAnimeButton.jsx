import React from 'react';
function AddAnimeButton({ anime, handleAddAnime }) {
  return (
    <div>
      <button onClick={() => handleAddAnime(anime)}><i class="fa fa-plus" aria-hidden="true"></i></button>
      <button><i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
      <button><i class="fa fa-thumbs-down" aria-hidden="true"></i></button>
      <button><i class="fa fa-comment" aria-hidden="true"></i></button>
    </div>
  );
}

export default AddAnimeButton;