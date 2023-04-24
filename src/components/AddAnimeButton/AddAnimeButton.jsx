import React from 'react';
function AddAnimeButton({ anime, handleAddToList }) {
  return (
    <button onClick={() => handleAddToList(anime)}>Add to Watchlist</button>
  );
}
export default AddAnimeButton;