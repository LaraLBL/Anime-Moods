import React from 'react';
function AddAnimeButton({ anime, handleAddAnime }) {
  return (
    <button onClick={() => handleAddAnime(anime)}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
  );
}

export default AddAnimeButton;